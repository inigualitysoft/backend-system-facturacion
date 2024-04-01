import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Buy } from 'src/buys/entities/buy.entity';
import { Customer } from 'src/customers/entities/customer.entity';
import { Invoice } from 'src/invoices/entities/invoice.entity';
import { InvoiceToProduct } from 'src/invoices/entities/invoiceToProduct.entity';
import { Between, Repository } from 'typeorm';

@Injectable()
export class DashboardService {
  constructor(
    @InjectRepository( Customer )
    private readonly customerRepository: Repository<Customer>,
    @InjectRepository( Invoice )
    private readonly invoiceRepository: Repository<Invoice>,
    @InjectRepository( Buy )
    private readonly buyRepository: Repository<Buy>,
    @InjectRepository( InvoiceToProduct )
    private readonly InvoiceToProductRepository: Repository<InvoiceToProduct>,
  ){}

  async dataDashboard( company_id: string, modo: string, mes: string, sucursal_id: string ){
    try {
      let inicio, fin;
      if( modo == 'mes' ){
        inicio = new Date( mes.split(' - ')[0] );
        fin = new Date( mes.split(' - ')[1] );
        fin.setHours(23, 59, 59, 999);
      }

      const productosMasVendidos = await this.InvoiceToProductRepository
                            .createQueryBuilder('pivot')
                            .leftJoinAndSelect('pivot.product_id', 'product')
                            .leftJoinAndSelect('pivot.invoice_id', 'invoice')
                            .select('SUM(pivot.cantidad) as cantidad, product.nombre')
                            .groupBy('product.id')
                            .orderBy('cantidad', 'DESC')
                            .limit(5)
                            .where('pivot.created_at >= :inicio AND pivot.created_at <= :fin', { inicio, fin })
                            .andWhere('invoice.sucursal_id = :sucursal_id', { sucursal_id })
                            .getRawMany();

      const hoy = new Date();
      const aniooActual = hoy.getFullYear();

      const ventasPorMes = await this.invoiceRepository
                                  .createQueryBuilder("invoice")
                                  .select("CASE EXTRACT('MONTH' FROM created_at) " +
                                      "WHEN 1 THEN 'Enero' " +
                                      "WHEN 2 THEN 'Febrero' " +
                                      "WHEN 3 THEN 'Marzo' " +
                                      "WHEN 4 THEN 'Abril' " +
                                      "WHEN 5 THEN 'Mayo' " +
                                      "WHEN 6 THEN 'Junio' " +
                                      "WHEN 7 THEN 'Julio' " +
                                      "WHEN 8 THEN 'Agosto' " +
                                      "WHEN 9 THEN 'Septiembre' " +
                                      "WHEN 10 THEN 'Octubre' " +
                                      "WHEN 11 THEN 'Noviembre' " +
                                      "WHEN 12 THEN 'Diciembre' " +
                                      "END", "mes")
                                  .addSelect("SUM(total)", "total_ventas")
                                  .groupBy("EXTRACT('MONTH' FROM created_at)")
                                  .orderBy("EXTRACT('MONTH' FROM created_at)")
                                  .where("sucursal_id = :sucursal_id", { sucursal_id })
                                  .andWhere("invoice.estadoSRI = :estado", { estado: 'AUTORIZADO' })
                                  .andWhere("EXTRACT('YEAR' FROM created_at) = :anio", { anio: aniooActual })
                                  .getRawMany();

      const totalClientes = await this.customerRepository.count({
        where: { company_id: { id: company_id } }
      });

      const invoices = await this.invoiceRepository.find({
        select: { total: true, estadoSRI: true },
        where: [
          {
            estadoSRI: 'AUTORIZADO',
            sucursal_id: { id: sucursal_id },
            created_at: ( modo == 'mes' ) ? Between( inicio, fin ) : null
          },
          {
            estadoSRI: 'ANULADO',
            sucursal_id: { id: sucursal_id },
            created_at: ( modo == 'mes' ) ? Between( inicio, fin ) : null
          }
        ]
      });

      const compras = await this.buyRepository.find({
        select: { total: true },
        where: {
          sucursal_id: { id: sucursal_id },
          isActive: true,
          created_at: ( modo == 'mes' ) ? Between( inicio, fin ) : null
        }
      })

      const totalFacturado = invoices.reduce((acumulador, invoice) =>
                              acumulador + (invoice.estadoSRI == 'AUTORIZADO' ? parseFloat(invoice.total.toString()) : 0), 0);

      const facturasAnuladas = invoices.reduce((acumulador, invoice) =>
                              acumulador + (invoice.estadoSRI == 'ANULADO' ? parseFloat(invoice.total.toString()) : 0), 0);

      const totalCompras = compras.reduce((acumulador, buy) => acumulador + parseFloat(buy.total.toString()), 0);

      return {
        totalClientes,
        totalFacturado,
        facturasAnuladas,
        totalCompras,
        productosMasVendidos,
        ventasPorMes
      }
    } catch (error) {
      console.log( error );
      throw new BadRequestException("fallo al cargar datos del Dashboard");
    }

  }

}

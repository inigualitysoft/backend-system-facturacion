import { Controller, Get, Post, Body, Patch, Param, Delete, DefaultValuePipe, ParseBoolPipe, ParseUUIDPipe, Headers, Put, Res } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CreateServicioDto } from './dto/create-servicio.dto';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateServicioDto } from './dto/update-servicio.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Company } from 'src/companies/entities/company.entity';
import { Router } from 'src/router/entities/router.entity';
import { Response } from 'express';

@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @Post()
  create(
    @Headers('company_id') company_id: Company,
    @Body() createCustomerDto: CreateServicioDto
  ) {
    return this.customersService.create(createCustomerDto, company_id);
  }

  @Post('/download-clients-excel/')
  async downloadClientsToExcel(
    @Headers('company_id') company_id: Company,
    @Res() res: Response  
  ){
    const file = await this.customersService.downloadClientsToExcel( company_id );
    res.setHeader('Content-Disposition', 'attachment; filename=ejemplo.xlsx');
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
  
    res.send( file );
  }

  @Post('/create')
  createCustomer(
    @Headers('company_id') company_id: Company,
    @Body() createCustomerDto: CreateCustomerDto
  ) {
    return this.customersService.createCustomer(createCustomerDto, company_id);
  }

  @Get(':estado?')
  findAll(
    @Headers('company_id') company_id: Company,
    @Param('estado', new DefaultValuePipe( false ), ParseBoolPipe) estado: boolean 
  ) {
    return this.customersService.findAll( estado, company_id );
  }

  @Get('/find/:term')
  findOne(@Param('term') term: string) {
    return this.customersService.findOne( term );
  }

  @Get('/get-ips/:router_id')
  getIpsUtilizadas(@Param('router_id') router_id: Router) {
    return this.customersService.getIpsUtilizadas( router_id );
  }

  @Patch(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string, 
    @Body() updateCustomerDto: UpdateCustomerDto
  ) {
    return this.customersService.update(id, updateCustomerDto);
  }

  @Put('/actualizarDatosFactura/:id')
  actualizarDatosFactura(
    @Param('id', ParseUUIDPipe) id: string, 
    @Body() datosFacturacion: any
  ){
    return this.customersService.actualizarDatosFactura(id, datosFacturacion);
  }

  @Put('/actualizarDatosPersonales/:id')
  actualizarDatosPersonales(
    @Param('id', ParseUUIDPipe) id: string, 
    @Body() datosFactura: any
  ){
    return this.customersService.actualizarDatosPersonales(id, datosFactura);
  }

  @Put('/actualizarDatosServicio/:id')
  actualizarDatosServicio(
    @Param('id', ParseUUIDPipe) id: string, 
    @Body() datosServicio: any
  ){
    return this.customersService.actualizarDatosServicio(id, datosServicio);
  }

  @Put('/activeOrSuspendService/:id')
  activeOrSuspendService(
    @Param('id', ParseUUIDPipe) id: string, 
    @Body() datosServicio: any
  ){
    return this.customersService.activeOrSuspendService(id, datosServicio);
  }

  @Patch(':id/:estado')
  setEstado(
    @Param('id', ParseUUIDPipe) id: string, 
    @Param('estado', ParseBoolPipe) estado: boolean, 
    ) {
    return this.customersService.setEstado(id, estado);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.customersService.remove( id );
  }
}

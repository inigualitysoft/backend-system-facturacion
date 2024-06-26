import { Module,forwardRef } from '@nestjs/common';
import { FacturasService } from './facturas.service';
import { FacturasController } from './facturas.controller';
import { SucursalModule } from 'src/sucursal/sucursal.module';
import { CustomersModule } from 'src/customers/customers.module';
import { InvoicesModule } from 'src/invoices/invoices.module';
import { EmailModule } from 'src/email/email.module';
import { MessagesWsModule } from '../../messages-ws/messages-ws.module';
import { RetencionesModule } from '../retenciones/retenciones.module';

@Module({
  controllers: [FacturasController],
  providers: [FacturasService],
  imports: [
    SucursalModule,
    CustomersModule,
    EmailModule,
    MessagesWsModule,
    forwardRef(() => InvoicesModule),
    forwardRef(() => RetencionesModule)
  ],
  exports: [ FacturasService ]
})
export class FacturasModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonModule } from './common/common.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AuthModule } from './auth/auth.module';
import { MessagesWsModule } from './messages-ws/messages-ws.module';
import { ProductsModule } from './products/products.module';
import { PresentationsModule } from './presentations/presentations.module';
import { CategoriesModule } from './categories/categories.module';
import { LaboratoriesModule } from './laboratories/laboratories.module';
import { CompaniesModule } from './companies/companies.module';
import { ProvidersModule } from './providers/providers.module';
import { CustomersModule } from './customers/customers.module';
import { InvoiceElectronicsModule } from './invoice-electronics/invoice-electronics.module';
import { BuysModule } from './buys/buys.module';
import { InvoicesModule } from './invoices/invoices.module';
import { FacturasModule } from './comprobantes-electronicos/facturas/facturas.module';
import { SucursalModule } from './sucursal/sucursal.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      database: process.env.DB_NAME,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      autoLoadEntities: true,
      synchronize: true
    }),

    ServeStaticModule.forRoot({
      rootPath: join(__dirname,'..','public'),
    }),

    CommonModule,
    AuthModule,
    MessagesWsModule,
    ProductsModule,
    PresentationsModule,
    CategoriesModule,
    LaboratoriesModule,
    CompaniesModule,
    ProvidersModule,
    CustomersModule,
    InvoiceElectronicsModule,
    BuysModule,
    InvoicesModule,
    FacturasModule,
    SucursalModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

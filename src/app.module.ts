import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MuseumsModule } from './museums/museums.module';
import { BeachesModule } from './beaches/beaches.module';
import { TaxiPricesModule } from './taxi-prices/taxi-prices.module';
import { TouristProductsModule } from './tourist-products/tourist-products.module';
import { RidesModule } from './rides/rides.module';
import { RoutesModule } from './routes/routes.module';
import { FoodsModule } from './foods/foods.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { CustomerFeedbackModule } from './customer-feedback/customer-feedback.module';

@Module({
  imports: [
    MuseumsModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(`mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@cluster0.namgh.mongodb.net/toursupp-db?retryWrites=true&w=majority`),
    BeachesModule,
    TaxiPricesModule,
    TouristProductsModule,
    RidesModule,
    RoutesModule,
    FoodsModule,
    CustomerFeedbackModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

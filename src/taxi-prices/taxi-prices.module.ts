import { Module } from '@nestjs/common';
import { TaxiPricesService } from './taxi-prices.service';
import { TaxiPricesController } from './taxi-prices.controller';

@Module({
  controllers: [TaxiPricesController],
  providers: [TaxiPricesService]
})
export class TaxiPricesModule {}

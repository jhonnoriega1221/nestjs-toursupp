import { Test, TestingModule } from '@nestjs/testing';
import { TaxiPricesController } from './taxi-prices.controller';
import { TaxiPricesService } from './taxi-prices.service';

describe('TaxiPricesController', () => {
  let controller: TaxiPricesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TaxiPricesController],
      providers: [TaxiPricesService],
    }).compile();

    controller = module.get<TaxiPricesController>(TaxiPricesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

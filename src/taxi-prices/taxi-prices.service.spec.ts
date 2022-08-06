import { Test, TestingModule } from '@nestjs/testing';
import { TaxiPricesService } from './taxi-prices.service';

describe('TaxiPricesService', () => {
  let service: TaxiPricesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TaxiPricesService],
    }).compile();

    service = module.get<TaxiPricesService>(TaxiPricesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

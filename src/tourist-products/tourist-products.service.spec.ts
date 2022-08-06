import { Test, TestingModule } from '@nestjs/testing';
import { TouristProductsService } from './tourist-products.service';

describe('TouristProductsService', () => {
  let service: TouristProductsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TouristProductsService],
    }).compile();

    service = module.get<TouristProductsService>(TouristProductsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

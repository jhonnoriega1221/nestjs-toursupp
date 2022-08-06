import { Test, TestingModule } from '@nestjs/testing';
import { TouristProductsController } from './tourist-products.controller';
import { TouristProductsService } from './tourist-products.service';

describe('TouristProductsController', () => {
  let controller: TouristProductsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TouristProductsController],
      providers: [TouristProductsService],
    }).compile();

    controller = module.get<TouristProductsController>(TouristProductsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

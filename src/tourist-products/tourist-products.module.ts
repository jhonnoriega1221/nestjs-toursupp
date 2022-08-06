import { Module } from '@nestjs/common';
import { TouristProductsService } from './tourist-products.service';
import { TouristProductsController } from './tourist-products.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TouristProduct, TouristProductSchema } from './schema/tourist-products.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: TouristProduct.name,
        schema: TouristProductSchema
      }
    ])
  ],
  controllers: [TouristProductsController],
  providers: [TouristProductsService]
})
export class TouristProductsModule {}

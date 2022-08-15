import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateTouristProductDto } from './dto/create-tourist-product.dto';
import { UpdateTouristProductDto } from './dto/update-tourist-product.dto';
import { TouristProductsModule } from './tourist-products.module';
import { TouristProduct, TouristProductDocument } from './schema/tourist-products.schema';
import { Model } from 'mongoose';

@Injectable()
export class TouristProductsService {
  constructor(@InjectModel(TouristProduct.name) private touristProductsModule:Model<TouristProductDocument> ){}

  async create(createTouristProductDto: CreateTouristProductDto): Promise<TouristProduct> {
    const touristProductCreated = await this.touristProductsModule.create(createTouristProductDto);
    return touristProductCreated;
  }

  async findAll() {
    return this.touristProductsModule.find();
  }

  async findOne(id: string) {
    const product = await this.touristProductsModule.findById(id);
    if(!product) {
      throw new NotFoundException(`Product ${id} not found`);
    }
    return product;
  }

  update(id: number, updateTouristProductDto: UpdateTouristProductDto) {
    return `This action updates a #${id} touristProduct`;
  }

  remove(id: number) {
    return `This action removes a #${id} touristProduct`;
  }
}

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateFoodDto } from './dto/create-food.dto';
import { UpdateFoodDto } from './dto/update-food.dto';
import { FoodsModule } from './foods.module';
import { Food, FoodDocument } from './schema/foods.schema';
import { Model } from 'mongoose';

@Injectable()
export class FoodsService {
  constructor(@InjectModel(Food.name) private foodsModule:Model<FoodDocument> ){}

  async create(createFoodDto: CreateFoodDto): Promise<Food>  {
    const foodCreated = await this.foodsModule.create(createFoodDto);
    return foodCreated;
  }

  async findAll() {
    return this.foodsModule.find();
  }

  async findOne(id: string) {
    const food = await this.foodsModule.findById(id);
    if(!food) { 
      throw new NotFoundException(`Food ${id} not found`);
    }
    return food;
  }

  update(id: number, updateFoodDto: UpdateFoodDto) {
    return `This action updates a #${id} food`;
  }

  remove(id: number) {
    return `This action removes a #${id} food`;
  }
}

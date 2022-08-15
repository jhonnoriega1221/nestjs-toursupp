import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TouristProductsService } from './tourist-products.service';
import { CreateTouristProductDto } from './dto/create-tourist-product.dto';
import { UpdateTouristProductDto } from './dto/update-tourist-product.dto';

@Controller('tourist-products')
export class TouristProductsController {
  constructor(private readonly touristProductsService: TouristProductsService) {}

  @Post()
  create(@Body() createTouristProductDto: CreateTouristProductDto) {
    return this.touristProductsService.create(createTouristProductDto);
  }

  @Get()
  findAll() {
    return this.touristProductsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.touristProductsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTouristProductDto: UpdateTouristProductDto) {
    return this.touristProductsService.update(+id, updateTouristProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.touristProductsService.remove(+id);
  }
}

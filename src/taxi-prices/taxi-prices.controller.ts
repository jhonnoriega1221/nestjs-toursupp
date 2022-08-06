import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TaxiPricesService } from './taxi-prices.service';
import { CreateTaxiPriceDto } from './dto/create-taxi-price.dto';
import { UpdateTaxiPriceDto } from './dto/update-taxi-price.dto';

@Controller('taxi-prices')
export class TaxiPricesController {
  constructor(private readonly taxiPricesService: TaxiPricesService) {}

  @Post()
  create(@Body() createTaxiPriceDto: CreateTaxiPriceDto) {
    return this.taxiPricesService.create(createTaxiPriceDto);
  }

  @Get()
  findAll() {
    return this.taxiPricesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.taxiPricesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTaxiPriceDto: UpdateTaxiPriceDto) {
    return this.taxiPricesService.update(+id, updateTaxiPriceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.taxiPricesService.remove(+id);
  }
}

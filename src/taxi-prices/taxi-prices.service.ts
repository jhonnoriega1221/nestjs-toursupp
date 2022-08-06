import { Injectable } from '@nestjs/common';
import { CreateTaxiPriceDto } from './dto/create-taxi-price.dto';
import { UpdateTaxiPriceDto } from './dto/update-taxi-price.dto';

@Injectable()
export class TaxiPricesService {
  create(createTaxiPriceDto: CreateTaxiPriceDto) {
    return 'This action adds a new taxiPrice';
  }

  findAll() {
    return `This action returns all taxiPrices`;
  }

  findOne(id: number) {
    return `This action returns a #${id} taxiPrice`;
  }

  update(id: number, updateTaxiPriceDto: UpdateTaxiPriceDto) {
    return `This action updates a #${id} taxiPrice`;
  }

  remove(id: number) {
    return `This action removes a #${id} taxiPrice`;
  }
}

import { PartialType } from '@nestjs/mapped-types';
import { CreateTaxiPriceDto } from './create-taxi-price.dto';

export class UpdateTaxiPriceDto extends PartialType(CreateTaxiPriceDto) {}

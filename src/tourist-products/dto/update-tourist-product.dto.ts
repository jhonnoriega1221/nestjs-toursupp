import { PartialType } from '@nestjs/mapped-types';
import { CreateTouristProductDto } from './create-tourist-product.dto';

export class UpdateTouristProductDto extends PartialType(CreateTouristProductDto) {}

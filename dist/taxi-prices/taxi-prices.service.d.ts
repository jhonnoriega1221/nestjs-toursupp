import { CreateTaxiPriceDto } from './dto/create-taxi-price.dto';
import { UpdateTaxiPriceDto } from './dto/update-taxi-price.dto';
export declare class TaxiPricesService {
    create(createTaxiPriceDto: CreateTaxiPriceDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateTaxiPriceDto: UpdateTaxiPriceDto): string;
    remove(id: number): string;
}

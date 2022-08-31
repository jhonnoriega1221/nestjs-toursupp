import { TaxiPricesService } from './taxi-prices.service';
import { CreateTaxiPriceDto } from './dto/create-taxi-price.dto';
import { UpdateTaxiPriceDto } from './dto/update-taxi-price.dto';
export declare class TaxiPricesController {
    private readonly taxiPricesService;
    constructor(taxiPricesService: TaxiPricesService);
    create(createTaxiPriceDto: CreateTaxiPriceDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateTaxiPriceDto: UpdateTaxiPriceDto): string;
    remove(id: string): string;
}

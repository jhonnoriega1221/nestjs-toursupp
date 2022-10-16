import { CustomerFeedbackService } from './customer-feedback.service';
import { CreateCustomerFeedbackDto } from './dto/create-customer-feedback.dto';
import { UpdateCustomerFeedbackDto } from './dto/update-customer-feedback.dto';
export declare class CustomerFeedbackController {
    private readonly customerFeedbackService;
    constructor(customerFeedbackService: CustomerFeedbackService);
    create(createCustomerFeedbackDto: CreateCustomerFeedbackDto): Promise<import("./schema/customer-feedback.schema").CustomerFeedback>;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateCustomerFeedbackDto: UpdateCustomerFeedbackDto): string;
    remove(id: string): string;
}

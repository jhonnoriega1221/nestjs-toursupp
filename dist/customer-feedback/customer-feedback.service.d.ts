import { CreateCustomerFeedbackDto } from './dto/create-customer-feedback.dto';
import { UpdateCustomerFeedbackDto } from './dto/update-customer-feedback.dto';
import { CustomerFeedback, CustomerFeedbackDocument } from './schema/customer-feedback.schema';
import { Model } from 'mongoose';
export declare class CustomerFeedbackService {
    private customerFeedbackModule;
    constructor(customerFeedbackModule: Model<CustomerFeedbackDocument>);
    create(createCustomerFeedbackDto: CreateCustomerFeedbackDto): Promise<CustomerFeedback>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateCustomerFeedbackDto: UpdateCustomerFeedbackDto): string;
    remove(id: number): string;
}

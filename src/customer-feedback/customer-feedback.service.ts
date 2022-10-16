import { Injectable } from '@nestjs/common';
import { CreateCustomerFeedbackDto } from './dto/create-customer-feedback.dto';
import { UpdateCustomerFeedbackDto } from './dto/update-customer-feedback.dto';
import { InjectModel } from '@nestjs/mongoose';
import { CustomerFeedback, CustomerFeedbackDocument } from './schema/customer-feedback.schema';
import { Model } from 'mongoose';

@Injectable()
export class CustomerFeedbackService {

  constructor(@InjectModel(CustomerFeedback.name) private customerFeedbackModule:Model<CustomerFeedbackDocument>){}

  async create(createCustomerFeedbackDto: CreateCustomerFeedbackDto):Promise<CustomerFeedback> {
    const customerFeedbackCreated = await this.customerFeedbackModule.create(createCustomerFeedbackDto);
    return customerFeedbackCreated;
  }

  findAll() {
    return `This action returns all customerFeedback`;
  }

  findOne(id: number) {
    return `This action returns a #${id} customerFeedback`;
  }

  update(id: number, updateCustomerFeedbackDto: UpdateCustomerFeedbackDto) {
    return `This action updates a #${id} customerFeedback`;
  }

  remove(id: number) {
    return `This action removes a #${id} customerFeedback`;
  }
}

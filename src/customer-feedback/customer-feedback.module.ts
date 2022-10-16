import { Module } from '@nestjs/common';
import { CustomerFeedbackService } from './customer-feedback.service';
import { CustomerFeedbackController } from './customer-feedback.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomerFeedback, CustomerFeedbackSchema } from './schema/customer-feedback.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: CustomerFeedback.name,
        schema: CustomerFeedbackSchema
      }
    ])
  ],
  controllers: [ CustomerFeedbackController ],
  providers: [ CustomerFeedbackService ]
})
export class CustomerFeedbackModule {}

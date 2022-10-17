import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CustomerFeedbackDocument = CustomerFeedback & Document;

class Location {
    @Prop()
    lat:string;

    @Prop()
    lon:string;
}

@Schema()
export class CustomerFeedback {
    @Prop()
    answer1: string;

    @Prop()
    answer2: string;

    @Prop()
    answer3: string;

    @Prop()
    answer4: string;

    @Prop()
    answer5: string;

    @Prop()
    textarea: string;

    @Prop()
    location: Location;

    @Prop()
    submitDate: Date;
}

export const CustomerFeedbackSchema = SchemaFactory.createForClass(CustomerFeedback);
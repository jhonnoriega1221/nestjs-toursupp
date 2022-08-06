import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TouristProductDocument = TouristProduct & Document;

export class Price {
    @Prop()
    name: string;

    @Prop()
    price: number;
}

@Schema()
export class TouristProduct {

    @Prop()
    name: string;

    @Prop()
    imageURL: string;

    @Prop()
    prices: Price[];
}





export const TouristProductSchema = SchemaFactory.createForClass(TouristProduct);
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type FoodDocument = Food & Document;

export class Price {
  @Prop()
  name: string;

  @Prop()
  amount: number;
}

@Schema()
export class Food {

  @Prop()
  name: string;

  @Prop()
  imgURL: string;

  @Prop()
  description: string;

  @Prop()
  prices: Price[];
}



export const FoodSchema = SchemaFactory.createForClass(Food);
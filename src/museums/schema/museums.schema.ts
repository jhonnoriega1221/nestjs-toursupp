import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MuseumDocument = Museum & Document;

export class Location {
  @Prop()
  lat: string;

  @Prop()
  lon: string;
}

export class Price {
  @Prop()
  people: string;

  @Prop()
  amount: number;
}

export class Schedule {
  @Prop()
  day: string;

  @Prop()
  closed: boolean;

  @Prop()
  time_from: string;

  @Prop()
  time_to: string;
}

@Schema()
export class Museum {

  @Prop()
  name: string;

  @Prop()
  imgURL: string;

  @Prop()
  description: string;

  @Prop()
  prices: Price[];

  @Prop()
  schedule: Schedule[];

  @Prop()
  location: Location[];
}



export const MuseumSchema = SchemaFactory.createForClass(Museum);
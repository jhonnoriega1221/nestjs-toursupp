import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MuseumDocument = Museum & Document;

@Schema()
export class Museum {
  @Prop()
  name: string;
}

export const MuseumSchema = SchemaFactory.createForClass(Museum);
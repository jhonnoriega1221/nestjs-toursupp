import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BeachDocument = Beach & Document;

export class Location {
    @Prop()
    lat: string;
    @Prop()
    lon: string;
}

export class Schedule {
    @Prop()
    open_hour: string;
    @Prop()
    close_hour: string;
}

export class Service {
    @Prop()
    name: string;

    @Prop()
    price: number;

    @Prop()
    desc: string;
}

@Schema()
export class Beach {

    @Prop()
    name: string;

    @Prop()
    imgURL: string;

    @Prop()
    schedule: Schedule[];

    @Prop()
    services: Service[];

    @Prop()
    location: Location[];
}





export const BeachSchema = SchemaFactory.createForClass(Beach);
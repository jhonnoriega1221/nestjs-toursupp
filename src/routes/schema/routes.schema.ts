import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type RouteDocument = Route & Document;


export class Properties {
    @Prop()
    stroke: string;

    @Prop()
    "stroke-width": number;

    @Prop()
    "stroke-opacity": number;
}

export class Coordinate {
    @Prop()
    $numberDouble: string;
}

export class Geometry {
    @Prop()
    type: string;

    @Prop()
    coordinates: Array<Coordinate[]>;
}

export class Feature {
    @Prop()
    type: string;

    @Prop()
    properties: Properties;

    @Prop()
    geometry: Geometry;
}

@Schema()
export class Route {

    @Prop()
    type: string;

    @Prop()
    features: Feature[];
}

export const RouteSchema = SchemaFactory.createForClass(Route);
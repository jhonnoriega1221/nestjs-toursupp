import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type RideDocument = Ride & Document;
class RouteID {
    @Prop()
    $oid: string;
}
class Duration {
    @Prop()
    start: number;

    @Prop()
    finish: number;

    @Prop()
    time: string;
}

class Location {
    @Prop()
    lat: string;

    @Prop()
    lon: string;
}

class Place {
    @Prop()
    name: string;

    @Prop()
    imageURL: string;

    @Prop()
    location: Location;
}

@Schema()
export class Ride {
    @Prop()
    name: string;

    @Prop()
    type: string;

    @Prop()
    description: string;

    @Prop()
    price: number;

    @Prop()
    duration: Duration;

    @Prop()
    places: Place[];

    @Prop()
    route_id: RouteID;
}

export const RideSchema = SchemaFactory.createForClass(Ride);
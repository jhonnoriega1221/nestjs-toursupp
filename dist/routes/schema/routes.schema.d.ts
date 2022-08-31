/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Document } from 'mongoose';
export declare type RouteDocument = Route & Document;
export declare class Properties {
    stroke: string;
    "stroke-width": number;
    "stroke-opacity": number;
}
export declare class Coordinate {
    $numberDouble: string;
}
export declare class Geometry {
    type: string;
    coordinates: Array<Coordinate[]>;
}
export declare class Feature {
    type: string;
    properties: Properties;
    geometry: Geometry;
}
export declare class Route {
    type: string;
    features: Feature[];
}
export declare const RouteSchema: import("mongoose").Schema<Route, import("mongoose").Model<Route, any, any, any, any>, {}, {}, {}, {}, "type", Route>;

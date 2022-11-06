import { CreateRideDto } from './dto/create-ride.dto';
import { UpdateRideDto } from './dto/update-ride.dto';
import { Ride, RideDocument } from './schema/rides.schema';
import { Model } from 'mongoose';
export declare class RidesService {
    private ridesModule;
    constructor(ridesModule: Model<RideDocument>);
    create(createRideDto: CreateRideDto): Promise<Ride>;
    findAll(): Promise<(Ride & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findOne(id: string): Promise<Ride & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    update(id: number, updateRideDto: UpdateRideDto): string;
    remove(id: number): string;
}

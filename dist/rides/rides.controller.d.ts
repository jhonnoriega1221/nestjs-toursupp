import { RidesService } from './rides.service';
import { CreateRideDto } from './dto/create-ride.dto';
import { UpdateRideDto } from './dto/update-ride.dto';
export declare class RidesController {
    private readonly ridesService;
    constructor(ridesService: RidesService);
    create(createRideDto: CreateRideDto): Promise<import("./schema/rides.schema").Ride>;
    findAll(): Promise<(import("./schema/rides.schema").Ride & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findOne(id: string): Promise<import("./schema/rides.schema").Ride & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    update(id: string, updateRideDto: UpdateRideDto): string;
    remove(id: string): string;
}

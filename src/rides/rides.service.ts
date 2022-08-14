import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRideDto } from './dto/create-ride.dto';
import { UpdateRideDto } from './dto/update-ride.dto';
import { InjectModel } from '@nestjs/mongoose';
import { RidesModule } from './rides.module';
import { Ride, RideDocument } from './schema/rides.schema';
import { Model } from 'mongoose';

@Injectable()
export class RidesService {
  constructor(@InjectModel(Ride.name) private ridesModule:Model<RideDocument> ){}

  async create(createRideDto: CreateRideDto): Promise<Ride> {
    const rideCreated = await this.ridesModule.create(createRideDto);
    return rideCreated;
  }

  async findAll() {
    return this.ridesModule.find();
  }

  async findOne(id: string) {
    const ride = await this.ridesModule.findById(id);
    if(!ride) {
      throw new NotFoundException(`Ride ${id} not found`);
    }
    return ride;
  }

  update(id: number, updateRideDto: UpdateRideDto) {
    return `This action updates a #${id} ride`;
  }

  remove(id: number) {
    return `This action removes a #${id} ride`;
  }
}

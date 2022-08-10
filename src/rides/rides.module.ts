import { Module } from '@nestjs/common';
import { RidesService } from './rides.service';
import { RidesController } from './rides.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Ride, RideSchema } from './schema/rides.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Ride.name,
        schema: RideSchema
      }
    ])
  ],
  controllers: [RidesController],
  providers: [RidesService]
})
export class RidesModule {}

import { Module } from '@nestjs/common';
import { BeachesService } from './beaches.service';
import { BeachesController } from './beaches.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Beach, BeachSchema } from './schema/beaches.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Beach.name,
        schema: BeachSchema
      }
    ])
  ],
  controllers: [BeachesController],
  providers: [BeachesService]
})
export class BeachesModule {}

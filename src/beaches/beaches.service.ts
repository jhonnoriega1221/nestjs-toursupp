import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { BeachesModule } from './beaches.module';
import { CreateBeachDto } from './dto/create-beach.dto';
import { UpdateBeachDto } from './dto/update-beach.dto';
import { Beach, BeachDocument } from './schema/beaches.schema';
import { Model } from 'mongoose';

@Injectable()
export class BeachesService {
  constructor(@InjectModel(Beach.name) private beachesModule:Model<BeachDocument> ){}

  async create(createBeachDto: CreateBeachDto): Promise<Beach> {
    const beachCreated = await this.beachesModule.create(createBeachDto);
    return beachCreated;
  }

  findAll() {
    return this.beachesModule.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} beach`;
  }

  update(id: number, updateBeachDto: UpdateBeachDto) {
    return `This action updates a #${id} beach`;
  }

  remove(id: number) {
    return `This action removes a #${id} beach`;
  }
}

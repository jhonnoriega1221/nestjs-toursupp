import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateMuseumDto } from './dto/create-museum.dto';
import { UpdateMuseumDto } from './dto/update-museum.dto';
import { MuseumsModule } from './museums.module';
import { Museum, MuseumDocument } from './schema/museums.schema';
import { Model } from 'mongoose';

@Injectable()
export class MuseumsService {

  constructor(@InjectModel(Museum.name) private museumsModule:Model<MuseumDocument> ){}

  async create(createMuseumDto: CreateMuseumDto) {
    const museumCreated = await this.museumsModule.create(createMuseumDto);
    return museumCreated;
  }

  findAll() {
    return `This action returns all museums`;
  }

  findOne(id: number) {
    return `This action returns a #${id} museum`;
  }

  update(id: number, updateMuseumDto: UpdateMuseumDto) {
    return `This action updates a #${id} museum`;
  }

  remove(id: number) {
    return `This action removes a #${id} museum`;
  }
}

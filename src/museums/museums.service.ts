import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateMuseumDto } from './dto/create-museum.dto';
import { UpdateMuseumDto } from './dto/update-museum.dto';
import { MuseumsModule } from './museums.module';
import { Museum, MuseumDocument } from './schema/museums.schema';
import { Model } from 'mongoose';

@Injectable()
export class MuseumsService {
  constructor(@InjectModel(Museum.name) private museumsModule:Model<MuseumDocument> ){}

  async create(createMuseumDto: CreateMuseumDto): Promise<Museum> {
    const museumCreated = await this.museumsModule.create(createMuseumDto);
    return museumCreated;
  }

  async findAll() {
    return this.museumsModule.find();
  }

  async findOne(id: string) {
    const museum = await this.museumsModule.findById(id);
    if(!museum) { 
      throw new NotFoundException(`Museum ${id} not found`);
    }
    return museum;
  }

  update(id: number, updateMuseumDto: UpdateMuseumDto) {
    return `This action updates a #${id} museum`;
  }

  remove(id: number) {
    return `This action removes a #${id} museum`;
  }
}

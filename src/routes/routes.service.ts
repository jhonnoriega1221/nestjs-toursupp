import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateRouteDto } from './dto/create-route.dto';
import { UpdateRouteDto } from './dto/update-route.dto';
import { RoutesModule } from './routes.module';
import { Route, RouteDocument } from './schema/routes.schema';
import { Model } from 'mongoose';

@Injectable()
export class RoutesService {
  constructor(@InjectModel(Route.name) private routesModule:Model<RouteDocument> ){}
  create(createRouteDto: CreateRouteDto) {
    return 'This action adds a new route';
  }

  async findAll() {
    return this.routesModule.find();
  }

  async findOne(id: string) {
    const route = await this.routesModule.findById(id);
    if(!route) {
      throw new NotFoundException(`Route ${id} not found`);
    }
    return route;
  }

  update(id: number, updateRouteDto: UpdateRouteDto) {
    return `This action updates a #${id} route`;
  }

  remove(id: number) {
    return `This action removes a #${id} route`;
  }
}

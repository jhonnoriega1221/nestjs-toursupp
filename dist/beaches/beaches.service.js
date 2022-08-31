"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BeachesService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const beaches_schema_1 = require("./schema/beaches.schema");
const mongoose_2 = require("mongoose");
let BeachesService = class BeachesService {
    constructor(beachesModule) {
        this.beachesModule = beachesModule;
    }
    async create(createBeachDto) {
        const beachCreated = await this.beachesModule.create(createBeachDto);
        return beachCreated;
    }
    async findAll() {
        return this.beachesModule.find();
    }
    async findOne(id) {
        const beach = await this.beachesModule.findById(id);
        if (!beach) {
            throw new common_1.NotFoundException(`Student ${id} not found`);
        }
        return beach;
    }
    update(id, updateBeachDto) {
        return `This action updates a #${id} beach`;
    }
    remove(id) {
        return `This action removes a #${id} beach`;
    }
};
BeachesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(beaches_schema_1.Beach.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], BeachesService);
exports.BeachesService = BeachesService;
//# sourceMappingURL=beaches.service.js.map
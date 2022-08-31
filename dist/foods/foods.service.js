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
exports.FoodsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const foods_schema_1 = require("./schema/foods.schema");
const mongoose_2 = require("mongoose");
let FoodsService = class FoodsService {
    constructor(foodsModule) {
        this.foodsModule = foodsModule;
    }
    async create(createFoodDto) {
        const foodCreated = await this.foodsModule.create(createFoodDto);
        return foodCreated;
    }
    async findAll() {
        return this.foodsModule.find();
    }
    async findOne(id) {
        const food = await this.foodsModule.findById(id);
        if (!food) {
            throw new common_1.NotFoundException(`Food ${id} not found`);
        }
        return food;
    }
    update(id, updateFoodDto) {
        return `This action updates a #${id} food`;
    }
    remove(id) {
        return `This action removes a #${id} food`;
    }
};
FoodsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(foods_schema_1.Food.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], FoodsService);
exports.FoodsService = FoodsService;
//# sourceMappingURL=foods.service.js.map
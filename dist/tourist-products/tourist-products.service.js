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
exports.TouristProductsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const tourist_products_schema_1 = require("./schema/tourist-products.schema");
const mongoose_2 = require("mongoose");
let TouristProductsService = class TouristProductsService {
    constructor(touristProductsModule) {
        this.touristProductsModule = touristProductsModule;
    }
    async create(createTouristProductDto) {
        const touristProductCreated = await this.touristProductsModule.create(createTouristProductDto);
        return touristProductCreated;
    }
    async findAll() {
        return this.touristProductsModule.find();
    }
    async findOne(id) {
        const product = await this.touristProductsModule.findById(id);
        if (!product) {
            throw new common_1.NotFoundException(`Product ${id} not found`);
        }
        return product;
    }
    update(id, updateTouristProductDto) {
        return `This action updates a #${id} touristProduct`;
    }
    remove(id) {
        return `This action removes a #${id} touristProduct`;
    }
};
TouristProductsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(tourist_products_schema_1.TouristProduct.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], TouristProductsService);
exports.TouristProductsService = TouristProductsService;
//# sourceMappingURL=tourist-products.service.js.map
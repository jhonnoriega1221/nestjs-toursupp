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
exports.TouristProductsController = void 0;
const common_1 = require("@nestjs/common");
const tourist_products_service_1 = require("./tourist-products.service");
const create_tourist_product_dto_1 = require("./dto/create-tourist-product.dto");
const update_tourist_product_dto_1 = require("./dto/update-tourist-product.dto");
let TouristProductsController = class TouristProductsController {
    constructor(touristProductsService) {
        this.touristProductsService = touristProductsService;
    }
    create(createTouristProductDto) {
        return this.touristProductsService.create(createTouristProductDto);
    }
    findAll() {
        return this.touristProductsService.findAll();
    }
    findOne(id) {
        return this.touristProductsService.findOne(id);
    }
    update(id, updateTouristProductDto) {
        return this.touristProductsService.update(+id, updateTouristProductDto);
    }
    remove(id) {
        return this.touristProductsService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_tourist_product_dto_1.CreateTouristProductDto]),
    __metadata("design:returntype", void 0)
], TouristProductsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TouristProductsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TouristProductsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_tourist_product_dto_1.UpdateTouristProductDto]),
    __metadata("design:returntype", void 0)
], TouristProductsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TouristProductsController.prototype, "remove", null);
TouristProductsController = __decorate([
    (0, common_1.Controller)('tourist-products'),
    __metadata("design:paramtypes", [tourist_products_service_1.TouristProductsService])
], TouristProductsController);
exports.TouristProductsController = TouristProductsController;
//# sourceMappingURL=tourist-products.controller.js.map
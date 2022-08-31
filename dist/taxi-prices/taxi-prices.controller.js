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
exports.TaxiPricesController = void 0;
const common_1 = require("@nestjs/common");
const taxi_prices_service_1 = require("./taxi-prices.service");
const create_taxi_price_dto_1 = require("./dto/create-taxi-price.dto");
const update_taxi_price_dto_1 = require("./dto/update-taxi-price.dto");
let TaxiPricesController = class TaxiPricesController {
    constructor(taxiPricesService) {
        this.taxiPricesService = taxiPricesService;
    }
    create(createTaxiPriceDto) {
        return this.taxiPricesService.create(createTaxiPriceDto);
    }
    findAll() {
        return this.taxiPricesService.findAll();
    }
    findOne(id) {
        return this.taxiPricesService.findOne(+id);
    }
    update(id, updateTaxiPriceDto) {
        return this.taxiPricesService.update(+id, updateTaxiPriceDto);
    }
    remove(id) {
        return this.taxiPricesService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_taxi_price_dto_1.CreateTaxiPriceDto]),
    __metadata("design:returntype", void 0)
], TaxiPricesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TaxiPricesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TaxiPricesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_taxi_price_dto_1.UpdateTaxiPriceDto]),
    __metadata("design:returntype", void 0)
], TaxiPricesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TaxiPricesController.prototype, "remove", null);
TaxiPricesController = __decorate([
    (0, common_1.Controller)('taxi-prices'),
    __metadata("design:paramtypes", [taxi_prices_service_1.TaxiPricesService])
], TaxiPricesController);
exports.TaxiPricesController = TaxiPricesController;
//# sourceMappingURL=taxi-prices.controller.js.map
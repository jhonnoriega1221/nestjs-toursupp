"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TouristProductsModule = void 0;
const common_1 = require("@nestjs/common");
const tourist_products_service_1 = require("./tourist-products.service");
const tourist_products_controller_1 = require("./tourist-products.controller");
const mongoose_1 = require("@nestjs/mongoose");
const tourist_products_schema_1 = require("./schema/tourist-products.schema");
let TouristProductsModule = class TouristProductsModule {
};
TouristProductsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: tourist_products_schema_1.TouristProduct.name,
                    schema: tourist_products_schema_1.TouristProductSchema
                }
            ])
        ],
        controllers: [tourist_products_controller_1.TouristProductsController],
        providers: [tourist_products_service_1.TouristProductsService]
    })
], TouristProductsModule);
exports.TouristProductsModule = TouristProductsModule;
//# sourceMappingURL=tourist-products.module.js.map
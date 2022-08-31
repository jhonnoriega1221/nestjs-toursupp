"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const mongoose_1 = require("@nestjs/mongoose");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const museums_module_1 = require("./museums/museums.module");
const beaches_module_1 = require("./beaches/beaches.module");
const taxi_prices_module_1 = require("./taxi-prices/taxi-prices.module");
const tourist_products_module_1 = require("./tourist-products/tourist-products.module");
const rides_module_1 = require("./rides/rides.module");
const routes_module_1 = require("./routes/routes.module");
const foods_module_1 = require("./foods/foods.module");
const serve_static_1 = require("@nestjs/serve-static");
const path_1 = require("path");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            museums_module_1.MuseumsModule,
            config_1.ConfigModule.forRoot(),
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: (0, path_1.join)(__dirname, '..', 'front')
            }),
            mongoose_1.MongooseModule.forRoot(`mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@cluster0.namgh.mongodb.net/toursupp-db?retryWrites=true&w=majority`),
            beaches_module_1.BeachesModule,
            taxi_prices_module_1.TaxiPricesModule,
            tourist_products_module_1.TouristProductsModule,
            rides_module_1.RidesModule,
            routes_module_1.RoutesModule,
            foods_module_1.FoodsModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
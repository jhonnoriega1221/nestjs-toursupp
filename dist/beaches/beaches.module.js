"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BeachesModule = void 0;
const common_1 = require("@nestjs/common");
const beaches_service_1 = require("./beaches.service");
const beaches_controller_1 = require("./beaches.controller");
const mongoose_1 = require("@nestjs/mongoose");
const beaches_schema_1 = require("./schema/beaches.schema");
let BeachesModule = class BeachesModule {
};
BeachesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: beaches_schema_1.Beach.name,
                    schema: beaches_schema_1.BeachSchema
                }
            ])
        ],
        controllers: [beaches_controller_1.BeachesController],
        providers: [beaches_service_1.BeachesService]
    })
], BeachesModule);
exports.BeachesModule = BeachesModule;
//# sourceMappingURL=beaches.module.js.map
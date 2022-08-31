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
exports.BeachesController = void 0;
const common_1 = require("@nestjs/common");
const beaches_service_1 = require("./beaches.service");
const create_beach_dto_1 = require("./dto/create-beach.dto");
const update_beach_dto_1 = require("./dto/update-beach.dto");
let BeachesController = class BeachesController {
    constructor(beachesService) {
        this.beachesService = beachesService;
    }
    create(createBeachDto) {
    }
    findAll() {
        return this.beachesService.findAll();
    }
    findOne(id) {
        return this.beachesService.findOne(id);
    }
    update(id, updateBeachDto) {
        return this.beachesService.update(+id, updateBeachDto);
    }
    remove(id) {
        return this.beachesService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_beach_dto_1.CreateBeachDto]),
    __metadata("design:returntype", void 0)
], BeachesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BeachesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BeachesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_beach_dto_1.UpdateBeachDto]),
    __metadata("design:returntype", void 0)
], BeachesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BeachesController.prototype, "remove", null);
BeachesController = __decorate([
    (0, common_1.Controller)('beaches'),
    __metadata("design:paramtypes", [beaches_service_1.BeachesService])
], BeachesController);
exports.BeachesController = BeachesController;
//# sourceMappingURL=beaches.controller.js.map
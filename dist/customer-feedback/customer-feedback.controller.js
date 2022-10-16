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
exports.CustomerFeedbackController = void 0;
const common_1 = require("@nestjs/common");
const customer_feedback_service_1 = require("./customer-feedback.service");
const create_customer_feedback_dto_1 = require("./dto/create-customer-feedback.dto");
const update_customer_feedback_dto_1 = require("./dto/update-customer-feedback.dto");
let CustomerFeedbackController = class CustomerFeedbackController {
    constructor(customerFeedbackService) {
        this.customerFeedbackService = customerFeedbackService;
    }
    create(createCustomerFeedbackDto) {
        return this.customerFeedbackService.create(createCustomerFeedbackDto);
    }
    findAll() {
        return this.customerFeedbackService.findAll();
    }
    findOne(id) {
        return this.customerFeedbackService.findOne(+id);
    }
    update(id, updateCustomerFeedbackDto) {
        return this.customerFeedbackService.update(+id, updateCustomerFeedbackDto);
    }
    remove(id) {
        return this.customerFeedbackService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_customer_feedback_dto_1.CreateCustomerFeedbackDto]),
    __metadata("design:returntype", void 0)
], CustomerFeedbackController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CustomerFeedbackController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CustomerFeedbackController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_customer_feedback_dto_1.UpdateCustomerFeedbackDto]),
    __metadata("design:returntype", void 0)
], CustomerFeedbackController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CustomerFeedbackController.prototype, "remove", null);
CustomerFeedbackController = __decorate([
    (0, common_1.Controller)('customer-feedback'),
    __metadata("design:paramtypes", [customer_feedback_service_1.CustomerFeedbackService])
], CustomerFeedbackController);
exports.CustomerFeedbackController = CustomerFeedbackController;
//# sourceMappingURL=customer-feedback.controller.js.map
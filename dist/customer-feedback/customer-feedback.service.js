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
exports.CustomerFeedbackService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const customer_feedback_schema_1 = require("./schema/customer-feedback.schema");
const mongoose_2 = require("mongoose");
let CustomerFeedbackService = class CustomerFeedbackService {
    constructor(customerFeedbackModule) {
        this.customerFeedbackModule = customerFeedbackModule;
    }
    async create(createCustomerFeedbackDto) {
        const customerFeedbackCreated = await this.customerFeedbackModule.create(createCustomerFeedbackDto);
        return customerFeedbackCreated;
    }
    findAll() {
        return `This action returns all customerFeedback`;
    }
    findOne(id) {
        return `This action returns a #${id} customerFeedback`;
    }
    update(id, updateCustomerFeedbackDto) {
        return `This action updates a #${id} customerFeedback`;
    }
    remove(id) {
        return `This action removes a #${id} customerFeedback`;
    }
};
CustomerFeedbackService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(customer_feedback_schema_1.CustomerFeedback.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], CustomerFeedbackService);
exports.CustomerFeedbackService = CustomerFeedbackService;
//# sourceMappingURL=customer-feedback.service.js.map
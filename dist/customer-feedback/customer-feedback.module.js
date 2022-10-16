"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerFeedbackModule = void 0;
const common_1 = require("@nestjs/common");
const customer_feedback_service_1 = require("./customer-feedback.service");
const customer_feedback_controller_1 = require("./customer-feedback.controller");
const mongoose_1 = require("@nestjs/mongoose");
const customer_feedback_schema_1 = require("./schema/customer-feedback.schema");
let CustomerFeedbackModule = class CustomerFeedbackModule {
};
CustomerFeedbackModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: customer_feedback_schema_1.CustomerFeedback.name,
                    schema: customer_feedback_schema_1.CustomerFeedbackSchema
                }
            ])
        ],
        controllers: [customer_feedback_controller_1.CustomerFeedbackController],
        providers: [customer_feedback_service_1.CustomerFeedbackService]
    })
], CustomerFeedbackModule);
exports.CustomerFeedbackModule = CustomerFeedbackModule;
//# sourceMappingURL=customer-feedback.module.js.map
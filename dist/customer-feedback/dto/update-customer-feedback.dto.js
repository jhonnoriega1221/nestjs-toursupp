"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCustomerFeedbackDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_customer_feedback_dto_1 = require("./create-customer-feedback.dto");
class UpdateCustomerFeedbackDto extends (0, mapped_types_1.PartialType)(create_customer_feedback_dto_1.CreateCustomerFeedbackDto) {
}
exports.UpdateCustomerFeedbackDto = UpdateCustomerFeedbackDto;
//# sourceMappingURL=update-customer-feedback.dto.js.map
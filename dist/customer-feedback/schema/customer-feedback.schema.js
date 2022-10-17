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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerFeedbackSchema = exports.CustomerFeedback = void 0;
const mongoose_1 = require("@nestjs/mongoose");
class Location {
}
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Location.prototype, "lat", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Location.prototype, "lon", void 0);
let CustomerFeedback = class CustomerFeedback {
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], CustomerFeedback.prototype, "answer1", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], CustomerFeedback.prototype, "answer2", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], CustomerFeedback.prototype, "answer3", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], CustomerFeedback.prototype, "answer4", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], CustomerFeedback.prototype, "answer5", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], CustomerFeedback.prototype, "textarea", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Location)
], CustomerFeedback.prototype, "location", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], CustomerFeedback.prototype, "submitDate", void 0);
CustomerFeedback = __decorate([
    (0, mongoose_1.Schema)()
], CustomerFeedback);
exports.CustomerFeedback = CustomerFeedback;
exports.CustomerFeedbackSchema = mongoose_1.SchemaFactory.createForClass(CustomerFeedback);
//# sourceMappingURL=customer-feedback.schema.js.map
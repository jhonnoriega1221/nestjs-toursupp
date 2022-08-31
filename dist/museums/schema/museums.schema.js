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
exports.MuseumSchema = exports.Museum = exports.Schedule = exports.Price = exports.Location = void 0;
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
exports.Location = Location;
class Price {
}
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Price.prototype, "people", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Price.prototype, "amount", void 0);
exports.Price = Price;
class Schedule {
}
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Schedule.prototype, "day", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Boolean)
], Schedule.prototype, "closed", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Schedule.prototype, "time_from", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Schedule.prototype, "time_to", void 0);
exports.Schedule = Schedule;
let Museum = class Museum {
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Museum.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Museum.prototype, "imgURL", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Museum.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Array)
], Museum.prototype, "prices", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Array)
], Museum.prototype, "schedule", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Array)
], Museum.prototype, "location", void 0);
Museum = __decorate([
    (0, mongoose_1.Schema)()
], Museum);
exports.Museum = Museum;
exports.MuseumSchema = mongoose_1.SchemaFactory.createForClass(Museum);
//# sourceMappingURL=museums.schema.js.map
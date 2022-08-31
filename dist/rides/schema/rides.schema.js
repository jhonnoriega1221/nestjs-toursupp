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
exports.RideSchema = exports.Ride = void 0;
const mongoose_1 = require("@nestjs/mongoose");
class RouteID {
}
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], RouteID.prototype, "$oid", void 0);
class Duration {
}
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Duration.prototype, "start", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Duration.prototype, "finish", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Duration.prototype, "time", void 0);
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
class Place {
}
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Place.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Place.prototype, "imageURL", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Location)
], Place.prototype, "location", void 0);
let Ride = class Ride {
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Ride.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Ride.prototype, "type", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Ride.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Ride.prototype, "price", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Duration)
], Ride.prototype, "duration", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Array)
], Ride.prototype, "places", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", RouteID)
], Ride.prototype, "route_id", void 0);
Ride = __decorate([
    (0, mongoose_1.Schema)()
], Ride);
exports.Ride = Ride;
exports.RideSchema = mongoose_1.SchemaFactory.createForClass(Ride);
//# sourceMappingURL=rides.schema.js.map
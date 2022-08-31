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
exports.RouteSchema = exports.Route = exports.Feature = exports.Geometry = exports.Coordinate = exports.Properties = void 0;
const mongoose_1 = require("@nestjs/mongoose");
class Properties {
}
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Properties.prototype, "stroke", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Properties.prototype, "stroke-width", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Properties.prototype, "stroke-opacity", void 0);
exports.Properties = Properties;
class Coordinate {
}
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Coordinate.prototype, "$numberDouble", void 0);
exports.Coordinate = Coordinate;
class Geometry {
}
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Geometry.prototype, "type", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Array)
], Geometry.prototype, "coordinates", void 0);
exports.Geometry = Geometry;
class Feature {
}
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Feature.prototype, "type", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Properties)
], Feature.prototype, "properties", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Geometry)
], Feature.prototype, "geometry", void 0);
exports.Feature = Feature;
let Route = class Route {
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Route.prototype, "type", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Array)
], Route.prototype, "features", void 0);
Route = __decorate([
    (0, mongoose_1.Schema)()
], Route);
exports.Route = Route;
exports.RouteSchema = mongoose_1.SchemaFactory.createForClass(Route);
//# sourceMappingURL=routes.schema.js.map
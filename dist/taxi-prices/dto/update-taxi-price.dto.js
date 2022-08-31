"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTaxiPriceDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_taxi_price_dto_1 = require("./create-taxi-price.dto");
class UpdateTaxiPriceDto extends (0, mapped_types_1.PartialType)(create_taxi_price_dto_1.CreateTaxiPriceDto) {
}
exports.UpdateTaxiPriceDto = UpdateTaxiPriceDto;
//# sourceMappingURL=update-taxi-price.dto.js.map
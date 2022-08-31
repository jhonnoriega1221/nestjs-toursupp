"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTouristProductDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_tourist_product_dto_1 = require("./create-tourist-product.dto");
class UpdateTouristProductDto extends (0, mapped_types_1.PartialType)(create_tourist_product_dto_1.CreateTouristProductDto) {
}
exports.UpdateTouristProductDto = UpdateTouristProductDto;
//# sourceMappingURL=update-tourist-product.dto.js.map
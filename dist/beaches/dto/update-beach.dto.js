"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBeachDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_beach_dto_1 = require("./create-beach.dto");
class UpdateBeachDto extends (0, mapped_types_1.PartialType)(create_beach_dto_1.CreateBeachDto) {
}
exports.UpdateBeachDto = UpdateBeachDto;
//# sourceMappingURL=update-beach.dto.js.map
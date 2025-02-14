"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTimerDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_timer_dto_1 = require("./create-timer.dto");
class UpdateTimerDto extends (0, swagger_1.PartialType)(create_timer_dto_1.CreateTimerDto) {
}
exports.UpdateTimerDto = UpdateTimerDto;
//# sourceMappingURL=update-timer.dto.js.map
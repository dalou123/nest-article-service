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
exports.CreateAuthDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateAuthDto {
}
exports.CreateAuthDto = CreateAuthDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: '姓名' }),
    (0, class_validator_1.IsNotEmpty)({ message: '姓名必填' }),
    (0, class_validator_1.IsString)({ message: '姓名必须是字符串' }),
    __metadata("design:type", String)
], CreateAuthDto.prototype, "username", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '密码' }),
    (0, class_validator_1.IsNotEmpty)({ message: '密码必填' }),
    __metadata("design:type", String)
], CreateAuthDto.prototype, "password", void 0);
//# sourceMappingURL=create-auth.dto.js.map
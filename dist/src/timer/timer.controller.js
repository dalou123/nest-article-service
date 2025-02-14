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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimerController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const timer_service_1 = require("./timer.service");
const public_decorator_1 = require("../common/public.decorator");
const create_timer_dto_1 = require("./dto/create-timer.dto");
let TimerController = class TimerController {
    constructor(timerService) {
        this.timerService = timerService;
    }
    async create(post) {
        return this.timerService.addCronJob(post.name, '*/5 * * * * *', () => {
            console.log('定时任务已启动，每五秒执行一次');
        });
    }
    async stopTimer(name) {
        return this.timerService.stopCronJob(name);
    }
};
exports.TimerController = TimerController;
__decorate([
    (0, public_decorator_1.Public)(),
    (0, swagger_1.ApiOperation)({ summary: '开启定时任务' }),
    (0, common_1.Post)('/start-timer'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_timer_dto_1.CreateTimerDto]),
    __metadata("design:returntype", Promise)
], TimerController.prototype, "create", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, swagger_1.ApiOperation)({ summary: '手动停止 Cron 定时任务' }),
    (0, common_1.Get)('/stop-timer/:name'),
    __param(0, (0, common_1.Param)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TimerController.prototype, "stopTimer", null);
exports.TimerController = TimerController = __decorate([
    (0, swagger_1.ApiTags)('定时器'),
    (0, common_1.Controller)('timer'),
    __metadata("design:paramtypes", [timer_service_1.TimerService])
], TimerController);
//# sourceMappingURL=timer.controller.js.map
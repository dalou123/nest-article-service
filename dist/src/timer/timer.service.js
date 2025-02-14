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
exports.TimerService = void 0;
const common_1 = require("@nestjs/common");
const schedule_1 = require("@nestjs/schedule");
const cron_1 = require("cron");
let TimerService = class TimerService {
    constructor(schedulerRegistry) {
        this.schedulerRegistry = schedulerRegistry;
    }
    addCronJob(name, cronExpression, callback) {
        const job = new cron_1.CronJob(cronExpression, callback);
        this.schedulerRegistry.addCronJob(name, job);
        job.start();
        return `定时任务 ${name} 已启动`;
    }
    stopCronJob(name) {
        try {
            const job = this.schedulerRegistry.getCronJob(name);
            job.stop();
            return '定时任务已停止';
        }
        catch (error) {
            console.log(error);
            return '找不到该定时任务，或者已被停止';
        }
    }
    addTimeout(name, delay, callback) {
        const timeout = setTimeout(callback, delay);
        this.schedulerRegistry.addTimeout(name, timeout);
        return '`延时任务 ${name} 已启动`';
    }
    stopTimeout(name) {
        try {
            const timeout = this.schedulerRegistry.getTimeout(name);
            if (timeout) {
                clearTimeout(timeout);
                return `延时任务 ${name} 已停止`;
            }
            else {
                return `延时任务 ${name} 不存在`;
            }
        }
        catch (error) {
            console.log(error);
            return '找不到该延时任务，或者已被停止';
        }
    }
    addInterval(name, interval, callback) {
        const intervalId = setInterval(callback, interval);
        this.schedulerRegistry.addInterval(name, intervalId);
        return `间隔任务 ${name} 已启动`;
    }
    stopInterval(name) {
        try {
            const intervalId = this.schedulerRegistry.getInterval(name);
            if (intervalId) {
                clearInterval(intervalId);
                return `间隔任务 ${name} 已停止`;
            }
            else {
                return `间隔任务 ${name} 不存在`;
            }
        }
        catch (error) {
            console.log(error);
            return '找不到该间隔任务，或者已被停止';
        }
    }
};
exports.TimerService = TimerService;
exports.TimerService = TimerService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [schedule_1.SchedulerRegistry])
], TimerService);
//# sourceMappingURL=timer.service.js.map
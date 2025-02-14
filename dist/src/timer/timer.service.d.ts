import { SchedulerRegistry } from '@nestjs/schedule';
export declare class TimerService {
    private schedulerRegistry;
    constructor(schedulerRegistry: SchedulerRegistry);
    addCronJob(name: string, cronExpression: string, callback: () => void): string;
    stopCronJob(name: string): "定时任务已停止" | "找不到该定时任务，或者已被停止";
    addTimeout(name: string, delay: number, callback: () => void): string;
    stopTimeout(name: string): string;
    addInterval(name: string, interval: number, callback: () => void): string;
    stopInterval(name: string): string;
}

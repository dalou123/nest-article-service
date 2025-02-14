import { TimerService } from './timer.service';
import { CreateTimerDto } from './dto/create-timer.dto';
export declare class TimerController {
    private readonly timerService;
    constructor(timerService: TimerService);
    create(post: CreateTimerDto): Promise<string>;
    stopTimer(name: string): Promise<"定时任务已停止" | "找不到该定时任务，或者已被停止">;
}

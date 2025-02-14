/*
 * @Description:
 * @Author: longlou
 * @Date: 2024-12-25 10:34:50
 * @LastEditTime: 2024-12-25 10:42:25
 * @LastEditors: longlou
 * @Reference:
 */
import { Module } from '@nestjs/common';
import { TimerService } from './timer.service';
import { TimerController } from './timer.controller';
import { ScheduleModule } from '@nestjs/schedule'; // 导入调度模块

@Module({
  imports: [ScheduleModule.forRoot()],
  controllers: [TimerController],
  providers: [TimerService],
})
export class TimerModule {}

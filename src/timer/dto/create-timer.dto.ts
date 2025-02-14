/*
 * @Description:
 * @Author: longlou
 * @Date: 2024-12-25 10:34:50
 * @LastEditTime: 2024-12-25 10:39:35
 * @LastEditors: longlou
 * @Reference:
 */
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateTimerDto {
  @ApiProperty({ description: '定时器名称' })
  @IsNotEmpty({ message: '定时器名称必填' })
  name: string;
}

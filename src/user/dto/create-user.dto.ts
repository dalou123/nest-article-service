/*
 * @Description:
 * @Author: longlou
 * @Date: 2024-12-24 10:26:00
 * @LastEditTime: 2024-12-24 11:05:35
 * @LastEditors: longlou
 * @Reference:
 */
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ description: '姓名' })
  @IsNotEmpty({ message: '姓名必填' })
  @IsString({ message: '姓名必须是字符串' })
  readonly username: string;

  @ApiProperty({ description: '密码' })
  @IsNotEmpty({ message: '密码必填' })
  @IsString({ message: '密码必须是字符串' })
  readonly password: string;

  @ApiProperty({ description: '用户角色' })
  role: string;
}

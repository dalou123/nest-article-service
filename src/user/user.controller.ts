/*
 * @Description: 用户控制器
 * @Author: longlou
 * @Date: 2024-12-24 10:26:00
 * @LastEditTime: 2024-12-25 11:25:43
 * @LastEditors: longlou
 */
import {
  Controller,
  Post,
  Body,
  UseInterceptors,
  ClassSerializerInterceptor,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Public } from 'src/common/public.decorator';

@ApiTags('用户')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Public() // 绕过 token检测
  @UseInterceptors(ClassSerializerInterceptor)
  @ApiOperation({ summary: '注册用户' })
  @Post('register')
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.register(createUserDto);
  }
}

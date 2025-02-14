import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { Public } from 'src/common/public.decorator';

@ApiTags('认证')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  /**
   * 登录
   * @param name 姓名
   * @param password 密码
   */
  @Public() // 绕过 token检测
  @ApiOperation({ summary: '登录' })
  @Post('/login')
  login(@Body() loginData: CreateAuthDto) {
    return this.authService.login(loginData);
  }
}

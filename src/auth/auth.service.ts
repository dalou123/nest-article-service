import { Injectable, BadRequestException, HttpException } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { User } from 'src/user/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import * as bcryptjs from 'bcryptjs';
//import { RedisService } from '../redis/redis.service';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private readonly auth: Repository<User>,
    private readonly JwtService: JwtService,
    //private readonly redisService: RedisService, // 注册redis控制器
  ) {}
  // 登录
  async login(loginData: CreateAuthDto) {
    const findUser = await this.auth.findOne({
      where: { username: loginData.username },
    });
    // 没有找到
    if (!findUser) {
      throw new HttpException('用户不存在', 401);
      // return new BadRequestException('用户不存在');
    }

    // 找到了对比密码
    const compareRes: boolean = bcryptjs.compareSync(
      loginData.password,
      findUser.password,
    );
    // 密码不正确
    if (!compareRes) {
      throw new HttpException('密码不正确', 401);
      // return new BadRequestException('密码不正确');
    }
    const payload = { username: findUser.username };

    return {
      access_token: this.JwtService.sign(payload),
    };
  }
}

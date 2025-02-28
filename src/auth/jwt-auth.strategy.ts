/*
 * @Description: 验证策略
 * @Author: longlou
 * @Date: 2024-12-24 13:42:13
 * @LastEditTime: 2024-12-24 13:42:48
 * @LastEditors: longlou
 * @Reference:
 */
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { jwtConstants } from '../common/constants';

export interface JwtPayload {
  username: string;
}

@Injectable()
// 验证请求头中的token
export default class JwtAuthStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
  }

  async validate(payload: JwtPayload) {
    console.log(payload.username);
    const { username } = payload;
    return {
      username,
    };
  }
}

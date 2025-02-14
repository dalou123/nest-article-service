/*
 * @Description: 全局成功的拦截器
 * @Author: longlou
 * @Date: 2024-12-23 16:45:34
 * @LastEditTime: 2024-12-25 10:02:23
 * @LastEditors: longlou
 */
import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { map, Observable, tap } from 'rxjs';
import { LoggerService } from '../../logger/logger.service';

@Injectable()
export class TransformInterceptor implements NestInterceptor {
  constructor(private readonly logger: LoggerService) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const now = Date.now();
    const request = context.switchToHttp().getRequest();
    const { method, url, headers, body, query, params } = request;

    // 记录请求的基本信息
    this.logger.log('请求信息:', {
      url,
      method,
      headers,
      body,
      query,
      params,
      message: '请求信息',
    });

    return next.handle().pipe(
      tap((data) => {
        // 记录响应时间
        const responseTime = Date.now() - now;

        // 记录请求的响应时间和状态
        this.logger.log('响应信息:', {
          url,
          method,
          responseTime: `${responseTime}ms`,
          statusCode: data?.statusCode || 200, // 默认 200 状态码
          code: 0,
          message: 'success',
        });
      }),

      map((data) => {
        return {
          code: 0,
          message: 'success',
          data,
        };
      }),
    );
  }
}

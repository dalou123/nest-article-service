/*
 * @Description: 模块
 * @Author: longlou
 * @Date: 2024-12-20 17:51:47
 * @LastEditTime: 2024-12-23 14:35:51
 * @LastEditors: longlou
 */
import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { PostsEntity } from './entities/post.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([PostsEntity])],
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule {}

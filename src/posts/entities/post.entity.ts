/*
 * @Description: posts实体
 * @Author: longlou
 * @Date: 2024-12-20 17:51:47
 * @LastEditTime: 2024-12-23 17:40:57
 * @LastEditors: longlou
 */
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('posts')
export class PostsEntity {
  @PrimaryGeneratedColumn() // 标记为主列，值自动生成
  id: number;

  @Column({ length: 50, default: null })
  title: string;

  @Column({ length: 20, default: null })
  author: string;

  @Column('text')
  content: string;

  @Column({ default: '' })
  thumb_url: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  create_time: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  update_time: Date;
}

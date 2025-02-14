import { Exclude } from 'class-transformer';
import {
  BeforeInsert,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import * as bcrypt from 'bcryptjs';

@Entity('user')
export class User {
  @ApiProperty({ description: '用户id' })
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ length: 50, unique: true })
  username: string;

  @Exclude()
  @Column({ length: 100, nullable: true })
  password: string;

  @Column({ length: 50, unique: true, default: null })
  email: string;

  @Column('enum', { enum: ['author', 'root', 'visitor'], default: 'visitor' })
  role: string;

  @Column({ default: 0 })
  status: number;

  @Exclude()
  @Column({
    name: 'update_time',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updateTime: Date;

  @Column({
    name: 'create_time',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createTime: Date;

  @BeforeInsert()
  async encryptPwd() {
    if (!this.password) return;
    // 密码加密后存入数据库
    this.password = await bcrypt.hashSync(this.password, 10);
  }
}

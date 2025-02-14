import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateAuthDto {
  @ApiProperty({ description: '姓名' })
  @IsNotEmpty({ message: '姓名必填' })
  @IsString({ message: '姓名必须是字符串' })
  readonly username: string;

  @ApiProperty({ description: '密码' })
  @IsNotEmpty({ message: '密码必填' })
  readonly password: string;
}

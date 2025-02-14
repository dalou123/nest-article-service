import { CreateAuthDto } from './dto/create-auth.dto';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly auth;
    private readonly JwtService;
    constructor(auth: Repository<User>, JwtService: JwtService);
    login(loginData: CreateAuthDto): Promise<{
        access_token: string;
    }>;
}

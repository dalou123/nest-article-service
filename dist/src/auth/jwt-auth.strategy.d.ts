import { Strategy } from 'passport-jwt';
export interface JwtPayload {
    username: string;
}
declare const JwtAuthStrategy_base: new (...args: any[]) => Strategy;
export default class JwtAuthStrategy extends JwtAuthStrategy_base {
    constructor();
    validate(payload: JwtPayload): Promise<{
        username: string;
    }>;
}
export {};

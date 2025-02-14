export declare class User {
    id: number;
    username: string;
    password: string;
    email: string;
    role: string;
    status: number;
    updateTime: Date;
    createTime: Date;
    encryptPwd(): Promise<void>;
}

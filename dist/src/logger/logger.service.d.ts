import 'winston-daily-rotate-file';
export declare class LoggerService {
    private logger;
    constructor();
    log(message: string, params?: object): void;
    error(message: string, params?: object, trace?: string): void;
    warn(message: string, params?: object): void;
    debug(message: string, params?: object): void;
    info(message: string, params?: object): void;
}

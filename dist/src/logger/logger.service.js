"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggerService = void 0;
const common_1 = require("@nestjs/common");
const winston_1 = require("winston");
require("winston-daily-rotate-file");
let LoggerService = class LoggerService {
    constructor() {
        this.logger = (0, winston_1.createLogger)({
            level: 'info',
            format: winston_1.format.combine(winston_1.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), winston_1.format.printf(({ timestamp, level, message, ...metadata }) => {
                let logMessage = `${timestamp} [${level}] : ${message}`;
                if (Object.keys(metadata).length > 0) {
                    if (metadata.message !== 'message') {
                        logMessage += ` | ${JSON.stringify(metadata, null, 2)}`;
                    }
                }
                return logMessage;
            })),
            transports: [
                new winston_1.transports.Console({
                    format: winston_1.format.combine(winston_1.format.colorize(), winston_1.format.simple()),
                }),
                new winston_1.transports.DailyRotateFile({
                    filename: 'logs/%DATE%.log',
                    datePattern: 'YYYY-MM-DD',
                    maxFiles: '7d',
                    level: 'info',
                    format: winston_1.format.combine(winston_1.format.timestamp({
                        format: 'YYYY-MM-DD HH:mm:ss',
                    }), winston_1.format.printf((info) => {
                        const paramsInfo = JSON.parse(JSON.stringify(info));
                        delete paramsInfo.message;
                        return `${info.timestamp} [${info.level}] : ${info.message} ${Object.keys(info).length
                            ? JSON.stringify(paramsInfo, null, 2)
                            : ''}`;
                    })),
                }),
            ],
        });
    }
    log(message, params = {}) {
        if (typeof params === 'object' && Object.keys(params).length > 0) {
            const logMessage = {
                message,
                ...params,
                level: 'info',
            };
            this.logger.info(logMessage);
        }
        else {
            this.logger.info(message);
        }
    }
    error(message, params = {}, trace = '') {
        if (typeof params === 'object' && Object.keys(params).length > 0) {
            const logMessage = {
                message,
                ...params,
                level: 'error',
                trace,
            };
            this.logger.error(logMessage);
        }
        else {
            this.logger.error(message);
        }
    }
    warn(message, params = {}) {
        if (typeof params === 'object' && Object.keys(params).length > 0) {
            const logMessage = {
                message,
                ...params,
                level: 'warn',
            };
            this.logger.warn(logMessage);
        }
        else {
            this.logger.warn(message);
        }
    }
    debug(message, params = {}) {
        if (typeof params === 'object' && Object.keys(params).length > 0) {
            const logMessage = {
                message,
                ...params,
                level: 'debug',
            };
            this.logger.debug(logMessage);
        }
        else {
            this.logger.debug(message);
        }
    }
    info(message, params = {}) {
        if (typeof params === 'object' && Object.keys(params).length > 0) {
            const logMessage = {
                message,
                ...params,
                level: 'info',
            };
            this.logger.info(logMessage);
        }
        else {
            this.logger.info(message);
        }
    }
};
exports.LoggerService = LoggerService;
exports.LoggerService = LoggerService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], LoggerService);
//# sourceMappingURL=logger.service.js.map
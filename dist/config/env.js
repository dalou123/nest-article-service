"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
const isProd = process.env.NODE_ENV !== 'test';
function parseEnv() {
    const localEnv = path.resolve('.env');
    const prodEnv = path.resolve('.env.prod');
    if (!fs.existsSync(localEnv) && !fs.existsSync(prodEnv)) {
        throw new Error('缺少环境配置文件');
    }
    const filePath = isProd && fs.existsSync(prodEnv) ? prodEnv : localEnv;
    return { path: filePath };
}
exports.default = parseEnv();
//# sourceMappingURL=env.js.map
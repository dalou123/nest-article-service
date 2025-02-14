/*
 * @Description: 
 * @Author: longlou
 * @Date: 2024-12-20 17:40:13
 * @LastEditTime: 2024-12-20 17:48:16
 * @LastEditors: longlou
 * @Reference: 
 */
import * as fs from 'fs';
import * as path from 'path';

// 我发现打包到 docker 后是没有NODE_ENV这个变量的，可能需要自己增加，这边先反着判断
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
export default parseEnv();
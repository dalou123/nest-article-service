/*
 * @Description:
 * @Author: longlou
 * @Date: 2024-12-24 13:38:56
 * @LastEditTime: 2024-12-24 13:39:07
 * @LastEditors: longlou
 * @Reference:
 */
import { SetMetadata } from '@nestjs/common';

export const IS_PUBLIC_KEY = 'isPublic';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);

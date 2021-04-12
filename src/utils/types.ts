import { App } from 'vue'
/**
 * type 为类型别名  T & { install(app: App): void; } 为交叉类型
 */
export type SFCWithInstall<T> = T & { install(app: App): void; }
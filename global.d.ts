import { Config } from 'winston';
import 'little-state-machine';
import { AppState } from './containers/AppState';
interface ProxyTargetDetailed {
    host: string;
    port: number;
}
type ProxyTargetUrl = string | Partial<url.Url>;
type ProxyTarget = ProxyTargetUrl | ProxyTargetDetailed;
type BooleanString = 'true' | 'false' | undefined;
type StringOrUndefined = string | undefined;
declare namespace NodeJS {
    export interface ProcessEnv {
        // api server
        API_SERVER_PORT: string;
    }
}

declare module '*.svg';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.bmp';
declare module '*.tiff';

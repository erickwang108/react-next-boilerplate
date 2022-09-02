import { IncomingMessage, ServerResponse } from 'http';

declare module 'axios' {
    export interface AxiosRequestConfig {
        incomingMessage?: IncomingMessage;
        serverResponse?: ServerResponse;
    }
}

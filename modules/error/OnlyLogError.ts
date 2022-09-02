import { MyError } from './myError';

export class OnlyLogError extends MyError {
    readonly name: string = 'OnlyLogError';
    readonly body: string = '';
    readonly cause: Error | null = null;
    constructor(message: string, body: string, cause: Error) {
        super(message || 'only log error', body);
        this.cause = cause;
        Object.setPrototypeOf(this, OnlyLogError.prototype);
    }
}

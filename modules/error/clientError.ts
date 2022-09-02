import { MyError } from './myError';

export class ClientError extends MyError {
    readonly name: string = 'ClientError';
    constructor(message: string) {
        super(message || 'unknown client error');
        Object.setPrototypeOf(this, ClientError.prototype);
    }
}

import { MyError } from './myError';

export const UNAUTHORIZED_ERROR = 'UnauthorizedError';
export class UnauthorizedError extends MyError {
    readonly name: string = UNAUTHORIZED_ERROR;
    constructor(message: string) {
        super(message || UNAUTHORIZED_ERROR);
        Object.setPrototypeOf(this, UnauthorizedError.prototype);
    }
}

import { HttpStatus } from 'modules/http-status';
import { MyError } from './myError';

export class HttpError extends MyError {
    readonly name: string = 'HttpError';
    constructor(readonly statusCode: HttpStatus, message?: string, body?: string) {
        super(message || 'Http Error', body);
        Object.setPrototypeOf(this, HttpError.prototype);
    }
}

export class RedirectError extends HttpError {
    readonly name = 'RedirectError';
    constructor(statusCode?: HttpStatus.MoveTemporarily | HttpStatus.MovedPermanently) {
        super(statusCode || HttpStatus.MoveTemporarily);
        Object.setPrototypeOf(this, RedirectError.prototype);
    }
}

export class NotFoundError extends HttpError {
    readonly name = 'NotFoundError';
    readonly statusCode = HttpStatus.NotFound;
    constructor(message?: string) {
        super(HttpStatus.MoveTemporarily, message || 'Not Found');
        Object.setPrototypeOf(this, NotFoundError.prototype);
    }
}

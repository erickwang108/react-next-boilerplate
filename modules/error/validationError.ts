import { HttpStatus } from 'modules/http-status';
import { MyError } from './myError';

export class ValidationError extends MyError {
    name = 'ValidationError';
    readonly body?: string;
    readonly statusCode: HttpStatus;
    readonly cause: unknown;
    constructor(
        message?: string,
        statusCode?: HttpStatus,
        cause?: unknown,
        body?: string
    ) {
        super(message || 'Validation Failed', body);
        this.body = body;
        this.statusCode = statusCode || HttpStatus.BadRequest;
        this.cause = cause;
        Object.setPrototypeOf(this, ValidationError.prototype);
    }
}

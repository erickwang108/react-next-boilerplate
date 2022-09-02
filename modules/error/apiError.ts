import { HttpStatus } from 'modules/http-status';
import { MyError } from './myError';

export class ApiError extends MyError {
    readonly name: string = 'ApiError';
    body: string | undefined = '';
    readonly statusCode: HttpStatus;
    readonly errors: MyError[] | undefined = undefined;
    constructor(
        message: string,
        statusCode: HttpStatus,
        body?: string,
        errors?: MyError[]
    ) {
        super(message || 'uncaught error', body);
        this.body = body;
        this.statusCode = statusCode || HttpStatus.InternalServerError;
        this.errors = errors;
        Object.setPrototypeOf(this, ApiError.prototype);
    }
}

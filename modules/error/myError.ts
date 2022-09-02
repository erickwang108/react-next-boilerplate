export class MyError extends Error {
    readonly name: string = 'MyError';
    readonly body?: string;
    readonly code?: string;
    constructor(readonly message: string = '', body?: string, code?: string) {
        super(message);
        this.body = body || '';
        this.code = code || '';
        Object.setPrototypeOf(this, MyError.prototype);
    }
}

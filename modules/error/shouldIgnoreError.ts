import { RedirectError, NotFoundError } from './httpError';

export const shouldIgnoreError = (err?: Error): boolean =>
    err instanceof RedirectError || err instanceof NotFoundError;

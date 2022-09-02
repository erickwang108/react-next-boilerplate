import { AxiosRequestConfig } from 'axios';
import { IncomingMessage, ServerResponse } from 'http';
import { ApiError } from 'modules/error';

export type AxiosOptions = Omit<AxiosRequestConfig, 'url' | 'method' | 'withCredentials'>;

export interface HttpRequestContext {
  incomingMessage: IncomingMessage;
  serverResponse: ServerResponse;
}

export enum HttpResponseCode {
  Ok,
  Error,
}

export enum HttpAction {
  Create = 'post',
  Delete = 'delete',
  Update = 'post',
  Select = 'get',
}

export interface OkResult<T> {
  code: HttpResponseCode.Ok;
  data: T;
  errors: never[];
}
export const OkResult = <T>(data: T): OkResult<T> => {
  return {
    code: HttpResponseCode.Ok,
    data,
    errors: [],
  };
};
export interface ErrorResult {
  code: HttpResponseCode.Error;
  errors: ApiError[];
  data: undefined;
}
export const ErrorResult = (...errors: ApiError[]): ErrorResult => {
  return {
    code: HttpResponseCode.Error,
    data: undefined,
    errors,
  };
};

export type HttpResponseResult<T> = T | undefined | null;

export interface Fetch {
  <Model>(resource: string, action: HttpAction, options?: AxiosOptions): Promise<Model>;
}

export interface Upload {
  <Model>(resource: string, formData: FormData): Promise<Model>;
}

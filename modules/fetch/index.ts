import { IncomingMessage, ServerResponse } from 'http';
import { AxiosResponse, AxiosRequestConfig } from 'axios';
import { HttpAction } from 'modules/http';
import { getAccessToken, parseCookie } from 'utils/cookie';
import { apiAxios } from './utils/apiAxios';
import { isServer } from 'utils/isServer';

export type AxiosOptions = Omit<AxiosRequestConfig, 'url' | 'withCredentials'>;

const getToken = (options?: AxiosOptions) => {
  if (isServer()) {
    const { headers } = options?.incomingMessage || {};
    return parseCookie(headers?.cookie)?.accessToken || '';
  }
  return getAccessToken();
};

const fetchCreator =
  (action: HttpAction) =>
  <Model>(resource: string, options?: AxiosOptions) =>
    apiAxios({
      ...options,
      url: resource,
      method: action,
      headers: {
        ...options?.headers,
        Authorization: `Bearer ${getToken(options)}`,
      },
    }).then((axiosResponse: AxiosResponse<Model>) => {
      return axiosResponse?.data;
    });

export const create = fetchCreator(HttpAction.Create);
export const remove = fetchCreator(HttpAction.Delete);
export const update = fetchCreator(HttpAction.Update);
export const select = fetchCreator(HttpAction.Select);

export const fetchData = <T>(
  url: string,
  options?: AxiosOptions,
  incomingMessage?: IncomingMessage,
  serverResponse?: ServerResponse
): Promise<T> => {
  const { method = 'GET' } = options || {};
  const fetchCallback = method.toUpperCase() === 'GET' ? select : create;
  return fetchCallback<T>(url, {
    incomingMessage,
    serverResponse,
    ...options,
  });
};

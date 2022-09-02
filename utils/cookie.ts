import Cookies from 'js-cookie';

const ACCESS_TOKEN_KEY = 'accessToken';
const LOGIN_USERNAME = 'loginUsername';

export const getLoginUsername = () => Cookies.get(LOGIN_USERNAME) || '';
export const setLoginUsername = (username: string) => Cookies.set(LOGIN_USERNAME, username);

export const setAccessToken = (token: string) => Cookies.set(ACCESS_TOKEN_KEY, token);
export const getAccessToken = (): string => Cookies.get(ACCESS_TOKEN_KEY) || '';

export const parseCookie = (str = '') =>
  str
    .split(';')
    .map((v) => v.split('='))
    .reduce((acc, v) => {
      if (v.length > 1) {
        const [key, value] = v;
        acc[decodeURIComponent(key.trim())] = decodeURIComponent(value.trim());
      }
      return acc;
    }, {} as Record<string, string>);

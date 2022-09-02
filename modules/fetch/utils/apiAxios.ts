import axios from 'axios';
import { xsrfCookieName, xsrfHeaderName, maxRedirects } from '../constants';
import { applyBaseUrl } from '../middlewares/applyBaseURl';
import { applyCheckStatus } from '../middlewares/applyCheckStatus';

const apiAxios = axios.create({
  timeout: 5000,
  maxRedirects,
  xsrfCookieName,
  xsrfHeaderName,
  withCredentials: false,
});

applyBaseUrl(apiAxios);
applyCheckStatus(apiAxios);

export { apiAxios };

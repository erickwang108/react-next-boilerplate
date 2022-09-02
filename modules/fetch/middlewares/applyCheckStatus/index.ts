import { AxiosInstance } from 'axios';
import { HttpStatus } from 'modules/http-status';
import { redirectTo } from './redirectTo';

export function applyCheckStatus(axios: AxiosInstance): void {
  axios.interceptors.response.use(
    (response) => {
      const { status } = response;
      if (status >= HttpStatus.OK && status < HttpStatus.MultipleChoices) {
        return response;
      }
    },
    (error) => {
      if (error?.isAxiosError) {
        if (error?.response?.status === HttpStatus.Unauthorized) {
          redirectTo('/user/login');
          return null;
        }
      }
      return Promise.reject(error);
    }
  );
}

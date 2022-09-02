import { AxiosInstance } from 'axios';

export function applyBaseUrl(axios: AxiosInstance): void {
  axios.interceptors.request.use(
    (options) => {
      // if server side
      if (options.incomingMessage) {
        return {
          ...options,
          baseURL: process.env.API_SERVER,
        };
      }
      return options;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
}

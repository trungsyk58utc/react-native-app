import axios, {AxiosRequestConfig, AxiosResponse} from 'axios';

const axiosCustom = axios.create({
  headers: {
    'Content-type': 'application/json',
  },
  baseURL: 'http://localhost:4000/api',
});

// Add a request interceptor
axiosCustom.interceptors.request.use(
  function (config: AxiosRequestConfig) {
    // check token
    // Do something before request is sent
    config.headers = {
      Accept: 'application/json',
    };
    return config;
  },
  function (error: any) {
    // Do something with request error
    return Promise.reject(error);
  },
);

// Add a response interceptor
axiosCustom.interceptors.response.use(
  function (response: AxiosResponse) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  function (error: any) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  },
);

export default axiosCustom;

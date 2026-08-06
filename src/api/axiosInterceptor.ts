import axios from 'axios';
import { API_BASE_URL } from '../config/url';
import Config from 'react-native-config';

const NEWS_API_KEY = Config.NEWS_API_KEY;
console.log('API KEY =>', NEWS_API_KEY);
const axiosInterceptor = axios.create({
  baseURL: API_BASE_URL,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInterceptor.interceptors.request.use(
  config => {
    config.params = {
      ...(config.params || {}),
      apiKey: NEWS_API_KEY,
    };

    console.log(
      'REQUEST =>',
      config.method?.toUpperCase(),
      `${config.baseURL ?? ''}${config.url ?? ''}`,
      config.params,
    );

    return config;
  },
  error => Promise.reject(error),
);

axiosInterceptor.interceptors.response.use(
  response => {
    console.log('RESPONSE =>', response.data);
    return response;
  },
  error => {
    console.log('API ERROR =>', error?.response?.data ?? error.message);

    return Promise.reject(error);
  },
);

export default axiosInterceptor;

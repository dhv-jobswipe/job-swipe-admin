import { IErrorResponse } from '@/types/IErrorResponse';
import Constants from '@/utils/Constants';
import { getAppCookie } from '@/utils/Cookies';
import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';
import { toast } from 'sonner';

function onRequest(config: InternalAxiosRequestConfig) {
  const accessToken = getAppCookie(Constants.COOKIES.ACCESS_TOKEN, true);
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
}

function onResponse(response: AxiosResponse) {
  return response.data;
}

function onResponseError(error: AxiosError) {
  if (error.code === 'ERR_NETWORK') {
    toast.error('Network error!');
  }

  if (error.response && error.response.data) {
    const err = error.response.data as IErrorResponse;
    toast.error(err.error.message);
  } else toast('Something went wrong! Please try again.');

  return Promise.reject(error);
}

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  responseType: 'json',
  timeout: 10000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(onRequest);
api.interceptors.response.use(onResponse, onResponseError);

export default api;

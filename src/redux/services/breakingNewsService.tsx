import { AxiosResponse } from 'axios';
import axiosInterceptor from '../../api/axiosInterceptor';
import { METHODS, SERVICE_ROUTES } from '../constants';
import { GetNewsParams } from '../../types';

export const breakingNewsService = async (
  params: GetNewsParams,
): Promise<AxiosResponse> => {
  try {
    const response = await axiosInterceptor({
      url: SERVICE_ROUTES.BREAKING_NEWS,
      method: METHODS.GET,
      params,
    });
    console.log({
      url: SERVICE_ROUTES.BREAKING_NEWS,
      params,
    });
    console.log(response.data, '======= GET NEWS RESPONSE =======');

    return response;
  } catch (error: any) {
    console.log(error?.response?.data, '======= GET NEWS ERROR =======');
    throw error;
  }
};

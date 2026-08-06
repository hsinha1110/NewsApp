import { AxiosResponse } from 'axios';
import axiosInterceptor from '../../api/axiosInterceptor';
import { METHODS, SERVICE_ROUTES } from '../constants';
import { GetNewsParams } from '../../types';

export const getNewsService = async (
  params: GetNewsParams,
): Promise<AxiosResponse> => {
  try {
    const response = await axiosInterceptor({
      url: SERVICE_ROUTES.GET_NEWS,
      method: METHODS.GET,
      params,
    });

    console.log(response.data, '======= GET NEWS RESPONSE =======');

    return response;
  } catch (error: any) {
    console.log(error?.response?.data, '======= GET NEWS ERROR =======');
    throw error;
  }
};

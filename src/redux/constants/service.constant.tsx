import { API_BASE_URL } from '../../config/url';

//================== SERVICE ROUTES =======================

export const SERVICE_ROUTES = {
  GET_NEWS: '/everything',
  BREAKING_NEWS: '/top-headlines',
} as const;

//=================== METHODS ==============================

export const METHODS = {
  GET: 'GET',
  POST: 'POST',
  DELETE: 'DELETE',
  PUT: 'PUT',
  PATCH: 'PATCH',
} as const;

export type MethodsType = (typeof METHODS)[keyof typeof METHODS];
export type ServiceRoutesType =
  (typeof SERVICE_ROUTES)[keyof typeof SERVICE_ROUTES];

export { API_BASE_URL };

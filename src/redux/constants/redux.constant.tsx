//============ Async Routes ============================

export const ASYNC_ROUTES = {
  GET_NEWS: 'getNews',
  BREAKING_NEWS: 'breadkingNews',
} as const;

//==================== Thunk Status =====================

export const THUNK_STATUS = {
  LOADING: 'loading',
  SUCCESS: 'success',
  FAILED: 'failed',
} as const;

//==================== Types =====================

export type AsyncRoutesType = (typeof ASYNC_ROUTES)[keyof typeof ASYNC_ROUTES];

export type ThunkStatusType = (typeof THUNK_STATUS)[keyof typeof THUNK_STATUS];

export const API_BASE_URL = 'https://newsapi.org/v2/';
export const getApiUrl = (endpoint: string) => API_BASE_URL + endpoint;

export const HOME = getApiUrl('/character');

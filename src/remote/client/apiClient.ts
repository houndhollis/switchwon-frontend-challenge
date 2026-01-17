import { baseApiClient } from './baseClient';
import type { BaseResponseType } from '../types';
import type { Options } from 'ky';

export const client = {
  get: async <T>(url: string, options?: Options) =>
    baseApiClient.get(url, options).json<BaseResponseType<T>>(),

  post: async <T>(url: string, options?: Options) =>
    baseApiClient.post(url, options).json<BaseResponseType<T>>(),

  put: async <T>(url: string, options?: Options) =>
    baseApiClient.put(url, options).json<BaseResponseType<T>>(),

  patch: async <T>(url: string, options?: Options) =>
    baseApiClient.patch(url, options).json<BaseResponseType<T>>(),

  delete: async <T>(url: string, options?: Options) =>
    baseApiClient.delete(url, options).json<BaseResponseType<T>>(),
};

import { IAPI, IApiOptions } from '@/types/api';
import axios, { AxiosResponse } from 'axios';

const ax = axios.create({
  baseURL: (function () {
    if (process.browser) {
      return process.env.NEXT_PUBLIC_BASE_URL;
    }

    return process.env.BASE_URL;
  })(),
  timeout: 1000,
});

export const axFetch = function (
  api: IAPI,
  options: IApiOptions = {}
): Promise<AxiosResponse> {
  const res = ax.request({
    ...api,
    [api.method === 'get' ? 'params' : 'data']: options,
  });
  return res;
};

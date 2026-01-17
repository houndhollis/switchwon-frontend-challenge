import ky from 'ky';
import Cookies from 'js-cookie';
import { FAILURE_CODES, type BaseResponseType } from '../types';
import { removeToken } from '@/shared/utils/auth';

export const baseApiClient = ky.create({
  prefixUrl: '/api',
  hooks: {
    beforeRequest: [
      (request) => {
        const token = Cookies.get('accessToken');

        if (token) {
          request.headers.set('Authorization', `Bearer ${token}`);
        }
      },
    ],
    afterResponse: [
      async (_request, _options, response) => {
        if (response.ok) {
          return;
        }

        const res = (await response.json()) as BaseResponseType<{}>;
        // 인증이 끊길 경우 토큰 삭제 후 -> 로그인 페이지로 이동
        if (res.code === FAILURE_CODES.UNAUTHORIZED) {
          return removeToken();
        }

        const errorResponse = {
          code: res.code,
          data: res.data,
          message: res.message,
        };

        throw errorResponse;
      },
    ],
  },
});

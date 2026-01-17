import ky from 'ky';
import Cookies from 'js-cookie';

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
  },
});

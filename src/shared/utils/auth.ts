import Cookies from 'js-cookie';

export const getToken = (): string | undefined => {
  return Cookies.get('accessToken');
};

export const setToken = (token: string) => {
  Cookies.set('accessToken', token, {
    path: '/',
    secure: true,
    sameSite: 'Lax',
  });
};

export const removeToken = () => {
  Cookies.remove('accessToken', { path: '/' });
};

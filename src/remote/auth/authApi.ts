import { client } from '../client/apiClient';
import type { AuthLoginResponse } from './types';

// ------------------ 로그인 API -----------------------
export const loginWithEmail = async (email: string) => {
  const res = await client.post<AuthLoginResponse>('auth/login', {
    searchParams: {
      email,
    },
  });

  return res;
};

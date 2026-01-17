import { useNavigate } from 'react-router-dom';

import { useMutation } from '@tanstack/react-query';

import { RESPONSE_CODE } from '@/remote/types';
import { loginWithEmail } from '@/remote/auth/authApi';
import { setToken } from '@/shared/utils/auth';

export function useLogin() {
  const navigate = useNavigate();

  const { mutate: login, isPending: isLoading } = useMutation({
    mutationFn: loginWithEmail,
    onSuccess: (res) => {
      if (res.code === RESPONSE_CODE.OK && res.data?.token) {
        const token = res.data.token;
        setToken(token);
      }
      navigate('/exchange');
    },
  });
  return {
    login,
    isLoading,
  };
}

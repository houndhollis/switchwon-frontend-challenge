import { useCallback, useState } from 'react';
import { useLogin } from '../hooks/useLogin';
import { validateEmail } from '../utils/validation';

import { Button } from '@/shared/components/Button';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const { login, isLoading } = useLogin();

  const handleSubmit = useCallback(
    (e?: React.FormEvent) => {
      e?.preventDefault();

      if (!validateEmail(email)) {
        setError('유효한 이메일을 입력해주세요.');
        return;
      }

      setError('');
      login(email);
    },
    [email, login],
  );

  return (
    <div className="min-h-full flex items-center justify-center">
      <div className="max-w-140 px-4 w-full flex flex-col items-center justify-between">
        <h1 className="text-[42px] text-[#374553] font-bold">반갑습니다.</h1>
        <p className="text-[26px] text-[#646F7C]">로그인 정보를 입력해주세요.</p>
        <form
          onSubmit={handleSubmit}
          className="w-full py-4 px-6 mt-10 bg-[#F7F8F9] border border-[#D0D6DB] rounded-[20px] flex flex-col"
        >
          <label className="block text-[14px] text-[#646F7C] mb-2">
            이메일 주소를 입력해주세요.
          </label>
          <input
            type="email"
            placeholder="이메일을 입력해주세요."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mb-8 p-6 border border-[#374553] rounded-xl text-[14px] focus:outline-none focus:none"
          />
          <Button
            type="submit"
            disabled={isLoading}
            color="black"
            active
            className="w-full py-6 text-[16px]"
          >
            로그인 하기
          </Button>
          {error && <p className="mt-1 text-red-500">{error}</p>}
        </form>
      </div>
    </div>
  );
};

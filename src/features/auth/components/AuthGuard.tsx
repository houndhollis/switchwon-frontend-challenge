import { getToken } from '@/shared/utils/auth';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

interface Props {
  redirectIfAuthenticated?: string;
}

export const AuthGuard = ({ redirectIfAuthenticated = 'exchange' }: Props = {}) => {
  const token = getToken();
  const location = useLocation();

  // 로그인 상태에서 로그인 페이지 접근 했을 경우, redirectIfAuthenticated 로 이동
  if (token && location.pathname === '/' && redirectIfAuthenticated) {
    return <Navigate to={redirectIfAuthenticated} replace />;
  }

  if (!token && location.pathname !== '/') {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

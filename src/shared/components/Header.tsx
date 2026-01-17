import { useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from './Button';
import { removeToken } from '../utils/auth';
import clsx from 'clsx';

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = useCallback(() => {
    removeToken();
    navigate('/');
  }, [navigate]);

  const moveToHome = useCallback(() => {
    navigate('/exchange');
  }, [navigate]);

  const isExchange = location.pathname === '/exchange';

  return (
    <div className="py-4 px-10 flex items-center justify-between border-b border-[#D0D6DB] max-sm:justify-end max-sm:px-4">
      <p
        onClick={moveToHome}
        className="text-[24px] font-bold text-black max-sm:hidden cursor-pointer"
      >
        Exchage app
      </p>
      <div className="flex items-center gap-2">
        <p
          className={clsx(
            'py-2 px-3 cursor-pointer',
            isExchange ? 'text-[#36414C] font-semibold' : 'text-[#8899AA]',
          )}
          onClick={() => navigate('/exchange')}
        >
          환전 하기
        </p>
        <p
          className={clsx(
            'py-2 px-3 mr-8 cursor-pointer',
            isExchange ? 'text-[#8899AA]' : 'text-[#36414C] font-semibold',
          )}
          onClick={() => navigate('/exchange/orders')}
        >
          환전 내역
        </p>
        <Button className="font-semibold" color="blue" onClick={handleLogout}>
          Log out
        </Button>
      </div>
    </div>
  );
};

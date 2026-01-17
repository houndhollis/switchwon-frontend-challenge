import { Header } from '@/shared/components/Header';
import { Outlet } from 'react-router-dom';

export const ExchangeLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Outlet />
    </div>
  );
};

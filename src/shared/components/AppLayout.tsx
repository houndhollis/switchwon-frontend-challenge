import { Outlet } from 'react-router-dom';

export const AppLayout = () => {
  return (
    <div className="min-h-screen flex justify-center bg-gray-50">
      <div className="w-full max-w-360">
        <Outlet />
      </div>
    </div>
  );
};

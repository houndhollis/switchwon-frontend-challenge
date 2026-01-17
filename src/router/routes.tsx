import { AuthGuard } from '@/features/auth/components/AuthGuard';
import { AuthPage } from '@/features/auth/page';
import { AppLayout } from '@/shared/components/AppLayout';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        element: <AuthGuard redirectIfAuthenticated="/exchange" />, // AuthGuard 적용
        children: [
          {
            index: true,
            element: <AuthPage />,
          },
          {
            path: 'exchange',
            children: [
              {
                index: true,
                element: <h1>환전</h1>,
              },
              {
                path: 'orders',
                element: <h1>내역</h1>,
              },
            ],
          },
        ],
      },
    ],
  },
]);

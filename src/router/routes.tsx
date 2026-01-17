import { AuthGuard } from '@/features/auth/components/AuthGuard';
import { AuthPage } from '@/features/auth/page';
import { OrdersPage } from '@/features/exchange/orders/page';
import { ExchangeLayout } from '@/features/exchange/components/ExchangeLayout';
import { ExchangePage } from '@/features/exchange/page';
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
            element: <ExchangeLayout />,
            children: [
              {
                path: 'exchange',
                children: [
                  {
                    index: true,
                    element: <ExchangePage />,
                  },
                  {
                    path: 'orders',
                    element: <OrdersPage />,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
]);

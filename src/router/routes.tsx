import { AuthPage } from '@/features/auth';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthPage />,
  },
  {
    path: '/exchange',
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
]);

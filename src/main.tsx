import '@/style/index.css';
import { Suspense } from 'react';

import { QueryClientProvider } from '@tanstack/react-query';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import { router } from '@/router/routes.tsx';
import { AppInitLoader } from '@/shared/components/AppInitLoader.tsx';
import { GlobalErrorBoundary } from '@/shared/error/globalErrorBoundary.tsx';
import { queryClient } from '@/shared/query/queryClinet.ts';

createRoot(document.getElementById('root')!).render(
  <GlobalErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<AppInitLoader />}>
        <RouterProvider router={router} />
      </Suspense>
    </QueryClientProvider>
  </GlobalErrorBoundary>,
);

import { useQuery } from '@tanstack/react-query';

import { CURRENCY_META } from '../constants';
import { getExchangeRate } from '@/remote/exchange/exchangeApi';

export const useExchangeRate = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: EXCAHNGE_RATE_KEY,
    queryFn: getExchangeRate,
    staleTime: 1000 * 10,
    refetchInterval: 1000 * 10,
    select: (response) => {
      return [...response.data].sort(
        (a, b) => CURRENCY_META[a.currency].order - CURRENCY_META[b.currency].order,
      );
    },
  });

  return {
    data,
    isLoading,
    error,
  };
};

export const EXCAHNGE_RATE_KEY = ['exchageRateOverview'];

import { useQuery } from '@tanstack/react-query';

import { getMyWallet } from '@/remote/exchange/exchangeApi';

export const useExChangeMyWallet = () => {
  const { data, isLoading } = useQuery({
    queryKey: EXCHANGE_MY_WALLET_KEY,
    queryFn: getMyWallet,
    staleTime: 1000 * 60,
    refetchInterval: 1000 * 60,
    select: (response) => response.data,
  });

  return {
    data,
    isLoading,
  };
};

export const EXCHANGE_MY_WALLET_KEY = ['myWallet'];

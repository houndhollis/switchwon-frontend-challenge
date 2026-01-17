import { getOrders } from '@/remote/exchange/exchangeApi';

import { useMutation } from '@tanstack/react-query';
import { EXCHANGE_MY_WALLET_KEY } from './useExchangeMyWallet';
import { EXCAHNGE_RATE_KEY } from './useExchangeRate';
import { queryClient } from '@/shared/query/queryClinet';

interface Props {
  exchangeRateId: number | undefined;
  fromCurrency: string | undefined;
  toCurrency: string | undefined;
  forexAmount: number;
}

export const useOrders = () => {
  const { isPending, mutate, error } = useMutation({
    mutationKey: ['orders'],
    mutationFn: async ({ exchangeRateId, fromCurrency, toCurrency, forexAmount }: Props) => {
      const res = await getOrders(exchangeRateId, fromCurrency, toCurrency, forexAmount);

      if (res.code !== 'OK') {
        throw new Error(res.message ?? '환율 오류');
      }
    },
    onSuccess: () => {
      [EXCHANGE_MY_WALLET_KEY, EXCAHNGE_RATE_KEY].forEach((key) =>
        queryClient.invalidateQueries({
          queryKey: key,
        }),
      );
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return { isPending, mutate, error };
};

import { getOrders } from '@/remote/exchange/exchangeApi';

import { useMutation } from '@tanstack/react-query';
import { EXCHANGE_MY_WALLET_KEY } from './useExchangeMyWallet';
import { EXCAHNGE_RATE_KEY } from './useExchangeRate';
import { queryClient } from '@/shared/query/queryClinet';

import { FAILURE_CODES, type BaseResponseType } from '@/remote/types';
import { useToast } from '@/shared/hooks/useToast';
import type { ExchangeRateResponseType } from '@/remote/exchange/types';

interface Props {
  exchangeRateId: number | undefined;
  fromCurrency: string | undefined;
  toCurrency: string | undefined;
  forexAmount: number;
}

export const useOrders = () => {
  const { showToast } = useToast();

  const { isPending, mutate, error } = useMutation({
    mutationKey: ['orders'],
    mutationFn: async ({ exchangeRateId, fromCurrency, toCurrency, forexAmount }: Props) => {
      const res = await getOrders(exchangeRateId, fromCurrency, toCurrency, forexAmount);

      return res;
    },
    onSuccess: () => {
      [EXCHANGE_MY_WALLET_KEY, EXCAHNGE_RATE_KEY].forEach((key) =>
        queryClient.invalidateQueries({
          queryKey: key,
        }),
      );
    },
    onError: async (error: BaseResponseType<unknown>, variables) => {
      if (error.code === FAILURE_CODES.EXCHANGE_RATE_MISMATCH) {
        await Promise.all(
          [EXCHANGE_MY_WALLET_KEY, EXCAHNGE_RATE_KEY].map((key) =>
            queryClient.invalidateQueries({ queryKey: key }),
          ),
        );

        const latestRates = queryClient.getQueryData<ExchangeRateResponseType[]>(EXCAHNGE_RATE_KEY);
        if (!latestRates) {
          return;
        }

        const matchedRate = latestRates.find(
          (rate) =>
            rate.currency ===
            (variables.fromCurrency === 'KRW' ? variables.toCurrency : variables.fromCurrency),
        );

        if (!matchedRate) {
          return;
        }

        mutate({
          ...variables,
          exchangeRateId: matchedRate.exchangeRateId,
        });

        return;
      }

      showToast({
        title: error.message,
        type: 'error',
      });
    },
  });

  return { isPending, mutate, error };
};

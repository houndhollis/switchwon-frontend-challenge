import { getOrderQuote } from '@/remote/exchange/exchangeApi';
import { useMutation, type UseMutationOptions } from '@tanstack/react-query';
import type { CurrencyType } from '../types';
import type { OrdersQuoteResponseType } from '@/remote/exchange/types';

type Option = UseMutationOptions<
  OrdersQuoteResponseType,
  unknown,
  { currency: CurrencyType; amount: number },
  unknown
>;

export const useOrdersQuote = ({ options }: { options?: Option } = {}) => {
  return useMutation<
    OrdersQuoteResponseType,
    unknown,
    { currency: CurrencyType; amount: number },
    unknown
  >({
    mutationKey: ['orderQuote'],
    mutationFn: async ({ currency, amount }) => {
      const res = await getOrderQuote(currency, amount);
      return res.data;
    },
    ...options,
  });
};

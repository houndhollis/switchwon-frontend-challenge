import { getExchangeOrdersHistory } from '@/remote/orders/ordersApi';
import { useQuery } from '@tanstack/react-query';

export const useExchangeHistory = () => {
  const { data } = useQuery({
    queryKey: EXCHANGE_HISTORY_KEY,
    queryFn: getExchangeOrdersHistory,
    select: (response) => response.data,
  });

  return {
    data,
  };
};

export const EXCHANGE_HISTORY_KEY = ['exchangeHistory'];

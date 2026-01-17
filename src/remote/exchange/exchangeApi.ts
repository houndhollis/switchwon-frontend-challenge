import type { CurrencyType } from '@/features/exchange/types';
import { client } from '../client/apiClient';
import type {
  ExchangeRateResponseType,
  MyWalletResponseType,
  OrdersQuoteResponseType,
} from './types';

// ----------------- 환율 정보 API ------------------------

export const getExchangeRate = async () => {
  const res = await client.get<ExchangeRateResponseType[]>('exchange-rates/latest');

  return res;
};

// ----------------- 내 지갑 조회 API -------------------------
export const getMyWallet = async () => {
  const res = await client.get<MyWalletResponseType>('wallets');

  return res;
};

// ----------------- 환전 견적 조회 --------------------------
export const getOrderQuote = async (currency: CurrencyType, amount: number) => {
  const res = await client.get<OrdersQuoteResponseType>('orders/quote', {
    searchParams: {
      fromCurrency: 'KRW',
      toCurrency: currency,
      forexAmount: amount,
    },
  });

  return res;
};

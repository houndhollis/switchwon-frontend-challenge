import { client } from '../client/apiClient';
import type { ExchangeRateResponseType, MyWalletResponseType } from './types';

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

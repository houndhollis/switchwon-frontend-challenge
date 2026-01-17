import { client } from '../client/apiClient';
import type { ExchangeOrdersHistoryResponseType } from './types';

// ----------------------- 환전 주문 내역 조회 API ---------------------------
export const getExchangeOrdersHistory = async () => {
  const res = await client.get<ExchangeOrdersHistoryResponseType[]>('orders');

  return res;
};

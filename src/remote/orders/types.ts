import type { CurrencyType } from '@/features/exchange/types';

// -------------------- 환율 정보 응답 타입 -----------------------
export interface ExchangeOrdersHistoryResponseType {
  /** 주문 ID */
  orderId: number;

  /** 매수 통화 */
  fromCurrency: CurrencyType;

  /** 매수 금액 */
  fromAmount: number;

  /** 매도 통화 */
  toCurrency: CurrencyType;

  /** 매도 금액 */
  toAmount: number;

  /** 적용된 환율 */
  appliedRate: number;

  /** 주문 생성일 (ISO Date String) */
  orderedAt: string;
}

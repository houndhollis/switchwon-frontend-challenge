import { DEFAULT_EXCHANGE_PARAMS } from './constants';
import { isCurrency, isTradeType, type CurrencyType, type TradeType } from './types';

/**
 * ## URL 쿼리 파라미터를 도메인 규칙에 맞게 정규화하는 함수
 *
 * - currency: 'USD' | 'JPY' | 'KRW' 중 하나로 보장
 * - tradeType: 'buy' | 'sell' 중 하나로 보장
 *
 * 만약 URL에 올바르지 않은 값이 들어오거나 존재하지 않으면,
 * DEFAULT_EXCHANGE_PARAMS의 기본값으로 대체합니다.
 */

export const normalizeExchangeParams = (
  params: URLSearchParams,
): { currency: CurrencyType; tradeType: TradeType } => {
  const currency = params.get('currency');
  const tradeType = params.get('tradeType');

  return {
    currency: isCurrency(currency) ? currency : DEFAULT_EXCHANGE_PARAMS.currency,
    tradeType: isTradeType(tradeType) ? tradeType : DEFAULT_EXCHANGE_PARAMS.tradeType,
  };
};

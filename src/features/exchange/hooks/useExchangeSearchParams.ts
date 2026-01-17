import { useCallback, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { normalizeExchangeParams } from '../utils';
import type { CurrencyType, TradeType } from '../types';

/**
 * ### 환전 도메인에서 사용하는 URL 파라미터 관리 훅
 */
export const useExchangeSearchParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const normalized = useMemo(() => normalizeExchangeParams(searchParams), [searchParams]);

  useEffect(() => {
    if (
      searchParams.get('currency') === normalized.currency &&
      searchParams.get('tradeType') === normalized.tradeType
    ) {
      return;
    }

    setSearchParams(normalized, { replace: true });
  }, [normalized, searchParams, setSearchParams]);

  const setTradeType = useCallback(
    (tradeType: TradeType) => {
      setSearchParams((prev) => {
        const next = new URLSearchParams(prev);
        next.set('tradeType', tradeType);
        return next;
      });
    },
    [setSearchParams],
  );

  const setCurrency = useCallback(
    (currency: CurrencyType) => {
      setSearchParams((prev) => {
        const next = new URLSearchParams(prev);
        next.set('currency', currency);
        return next;
      });
    },
    [setSearchParams],
  );

  const { currency, tradeType } = normalized;

  return {
    currency,
    tradeType,
    setCurrency,
    setTradeType,
  };
};

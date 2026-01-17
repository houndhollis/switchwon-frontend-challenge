import type { CurrencyType, TradeType } from './types';

// -------------------- 재화 분류 -------------------
export const CURRENCY_META = {
  USD: {
    label: '미국 달러',
    order: 0,
    symbol: '$',
    krSymbol: '달러',
    unit: 1,
  },
  JPY: {
    label: '일본 엔화',
    order: 1,
    symbol: '¥',
    krSymbol: '엔화',
    unit: 100,
  },
  KRW: {
    label: '한국 원화',
    order: 2,
    symbol: '₩',
    krSymbol: '원화',
    unit: 1000,
  },
} as const;

export const TRADE_TYPES = {
  buy: { text: '살래요' },
  sell: { text: '팔래요' },
} as const;

// -------------- 초기 URL params 값 대응 -------------------
export const DEFAULT_EXCHANGE_PARAMS = {
  currency: 'USD' as CurrencyType,
  tradeType: 'buy' as TradeType,
};

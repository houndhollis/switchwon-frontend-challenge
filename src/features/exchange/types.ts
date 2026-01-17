import type { ValueOf } from '@/shared/types';
import { CURRENCY_META, TRADE_TYPES } from './constants';

// ----------------- 환전 객체 정보의 키를 나타냅니다 -----------------
export type CurrencyType = keyof typeof CURRENCY_META;
export type ExchangeCurrencyType = Exclude<CurrencyType, 'KRW'>;

// ----------------  CURRENCY_META 객체의 값 타입 -----------------
export type CurrencyMetaType = ValueOf<typeof CURRENCY_META>;


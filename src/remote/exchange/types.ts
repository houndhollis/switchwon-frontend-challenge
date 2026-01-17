import type { CurrencyType } from '@/features/exchange/types';

// -------------------- 환율 정보 응답 타입 -----------------------
export interface ExchangeRateResponseType {
  applyDateTime: string;
  changePercentage: number;
  currency: CurrencyType;
  exchangeRateId: number;
  rate: number;
}

// -------------------- 내 지갑 응답 타입 ----------------------
export interface WalletType {
  walletId: number;
  currency: CurrencyType;
  balance: number;
}

export interface MyWalletResponseType {
  totalKrwBalance: number;
  wallets: WalletType[];
}

// ------------------- 환전 주문 견적 응답 타입 -------------------------
export interface OrdersQuoteResponseType {
  krwAmount: number;
  appliedRate: number;
}

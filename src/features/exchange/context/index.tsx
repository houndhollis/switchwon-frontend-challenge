/* eslint-disable react-refresh/only-export-components */
import type { ExchangeRateResponseType, MyWalletResponseType } from '@/remote/exchange/types';
import { createContext, useContext, useMemo, type PropsWithChildren } from 'react';
import type { CurrencyType, SelectedChangeCurrency, TradeType } from '../types';
import { CURRENCY_META } from '../constants';
import { useExchangeQueries } from '../hooks/useExchangeQueris';
import { useExchangeSearchParams } from '../hooks/useExchangeSearchParams';

interface ExchangeContextType {
  myWallet?: MyWalletResponseType;
  exchangeRates?: ExchangeRateResponseType[];
  walletIsLoading: boolean;
  exchangeIsLoading: boolean;
  currency: CurrencyType;
  tradeType: TradeType;
  selectedChangeCurrency: SelectedChangeCurrency;
  setCurrency: (currency: CurrencyType) => void;
  setTradeType: (tradeType: TradeType) => void;
}

export const ExchangeContext = createContext<ExchangeContextType | null>(null);

export const useExchangeContext = () => {
  const context = useContext(ExchangeContext);
  if (!context) {
    throw new Error('ExchangeContext가 Provider 안에 사용해 주세요.');
  }
  return context;
};

/**
 * ### 환전 하기 페이지
 * @description 환전 도메인 상태 관리하는 context
 */
export const ExchangeProvider = ({ children }: PropsWithChildren) => {
  const { myWallet, exchangeRates, walletIsLoading, exchangeIsLoading } = useExchangeQueries();
  const { currency, tradeType, setTradeType, setCurrency } = useExchangeSearchParams();

  const selectedRate = exchangeRates?.find((r) => r.currency === currency);
  const selectedChangeCurrency = useMemo(
    () => ({
      ...CURRENCY_META[selectedRate?.currency ?? currency],
      ...selectedRate,
      rate: selectedRate?.rate ?? 0,
      currency: selectedRate?.currency ?? currency,
    }),
    [selectedRate, currency],
  );

  const exchangeValue = useMemo(
    () => ({
      exchangeRates,
      myWallet,
      exchangeIsLoading,
      walletIsLoading,
      currency,
      tradeType,
      selectedChangeCurrency,
      setCurrency,
      setTradeType,
    }),
    [
      currency,
      exchangeIsLoading,
      exchangeRates,
      myWallet,
      selectedChangeCurrency,
      setCurrency,
      setTradeType,
      tradeType,
      walletIsLoading,
    ],
  );

  return <ExchangeContext.Provider value={exchangeValue}>{children}</ExchangeContext.Provider>;
};

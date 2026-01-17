/* eslint-disable react-refresh/only-export-components */
import type { ExchangeRateResponseType, MyWalletResponseType } from '@/remote/exchange/types';
import { createContext, useContext, useMemo, type PropsWithChildren } from 'react';
import { useExchangeQueries } from '../hooks/useExchangeQueris';

interface ExchangeContextType {
  myWallet?: MyWalletResponseType;
  exchangeRates?: ExchangeRateResponseType[];
  walletIsLoading: boolean;
  exchangeIsLoading: boolean;
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

  const exchangeValue = useMemo(
    () => ({
      exchangeRates,
      myWallet,
      exchangeIsLoading,
      walletIsLoading,
    }),
    [exchangeIsLoading, exchangeRates, myWallet, walletIsLoading],
  );

  return <ExchangeContext.Provider value={exchangeValue}>{children}</ExchangeContext.Provider>;
};

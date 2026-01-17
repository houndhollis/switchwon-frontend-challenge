import { useExChangeMyWallet } from './useExchangeMyWallet';
import { useExchangeRate } from './useExchangeRate';

/**
 * ### 환전 도메인에서 사용하는 API 데이터 관리 훅
 */
export const useExchangeQueries = () => {
  const walletQuery = useExChangeMyWallet();
  const exchangeRateQuery = useExchangeRate();

  return {
    myWallet: walletQuery.data,
    exchangeRates: exchangeRateQuery.data,
    walletIsLoading: walletQuery.isLoading,
    exchangeIsLoading: exchangeRateQuery.isLoading,
  };
};

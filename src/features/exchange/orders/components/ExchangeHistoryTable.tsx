import { useExchangeHistory } from '../hooks/useExchangeHistory';
import { ExchangeHistoryList } from './ExchangeHistoryList';

export const ExchangeHistoryTable = () => {
  const { data } = useExchangeHistory();

  if (data) {
    return <ExchangeHistoryList list={data} />;
  }
};

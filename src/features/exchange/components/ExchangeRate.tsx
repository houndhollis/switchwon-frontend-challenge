import { useExchangeContext } from '../context';
import { ExchangeRateItem } from './ExchangeRateItem';

export const ExchangeRate = () => {
  const { exchangeRates } = useExchangeContext();

  return (
    <div className="flex justify-between gap-4">
      {exchangeRates?.map((currencyItem) => (
        <ExchangeRateItem key={currencyItem.currency} {...currencyItem} />
      ))}
    </div>
  );
};

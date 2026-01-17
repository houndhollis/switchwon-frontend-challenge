import { useExchangeContext } from '../context';

import { Button } from '@/shared/components/Button';
import type { CurrencyType } from '../types';
import { CURRENCY_META, TRADE_TYPES } from '../constants';

interface Props {
  handleReset: () => void;
}

export const ExchangeOptions = ({ handleReset }: Props) => {
  const { currency, tradeType, setCurrency, setTradeType } = useExchangeContext();

  const currencyOption = Object.keys(CURRENCY_META).filter((currency) => currency !== 'KRW');

  return (
    <div className="flex flex-col gap-4">
      <select
        className="text-[18px] font-bold"
        onChange={(e) => {
          setCurrency(e.target.value as CurrencyType);
          handleReset();
        }}
        value={currency}
      >
        {currencyOption.map((currency) => (
          <option key={currency} value={currency}>
            {`${currency} 환전하기`}
          </option>
        ))}
      </select>
      <div className="flex gap-3 p-3 bg-white rounded-2xl border border-[#D0D6DB]">
        {(Object.keys(TRADE_TYPES) as Array<keyof typeof TRADE_TYPES>).map((type) => (
          <Button
            key={type}
            color={type === 'buy' ? 'red' : 'blue'}
            active={tradeType === type}
            className="w-full py-4"
            onClick={() => setTradeType(type)}
          >
            {TRADE_TYPES[type].text}
          </Button>
        ))}
      </div>
    </div>
  );
};

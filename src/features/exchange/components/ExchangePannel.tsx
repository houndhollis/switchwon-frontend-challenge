import { useCallback, useState } from 'react';

import { ExchangeOptions } from './ExchangeOptions';
import { useExchangeContext } from '../context';
import { ExchangeInputPanel } from './ExchangeInputPanel';
import { useOrdersQuote } from '../hooks/useOrdersQuote';

export const ExchangePannel = () => {
  const [purchaseAmount, setPurchaseAmount] = useState(0);
  const [calculatedAmount, setCalculatedAmount] = useState(0);
  const { currency, tradeType } = useExchangeContext();

  const handleReset = useCallback(() => {
    setPurchaseAmount(0);
    setCalculatedAmount(0);
  }, []);

  const mutation = useOrdersQuote({
    options: {
      onSuccess: (data) => {
        setCalculatedAmount(data.krwAmount);
      },
    },
  });

  return (
    <div className="flex-1 flex flex-col py-6 px-8 border bg-[#F7F8F9] border-gray-300 rounded-lg">
      <ExchangeOptions handleReset={handleReset} />

      <div className="flex-1 flex flex-col justify-between mt-8">
        <ExchangeInputPanel
          purchaseAmount={purchaseAmount}
          setPurchaseAmount={setPurchaseAmount}
          handleReset={handleReset}
          calculatedAmount={calculatedAmount}
          currency={currency}
          tradeType={tradeType}
          mutation={mutation}
        />
      </div>
    </div>
  );
};

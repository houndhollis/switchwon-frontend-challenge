import { useCallback, useState } from 'react';

import { ExchangeOptions } from './ExchangeOptions';
import { useExchangeContext } from '../context';

export const ExchangePannel = () => {
  const [purchaseAmount, setPurchaseAmount] = useState(0);
  const [calculatedAmount, setCalculatedAmount] = useState(0);
  const handleReset = useCallback(() => {
    setPurchaseAmount(0);
    setCalculatedAmount(0);
  }, []);
  return (
    <div className="flex-1 flex flex-col py-6 px-8 border bg-[#F7F8F9] border-gray-300 rounded-lg">
      <ExchangeOptions handleReset={handleReset} />
    </div>

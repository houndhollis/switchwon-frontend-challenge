import { Button } from '@/shared/components/Button';
import { useCallback, useMemo } from 'react';
import type { SelectedChangeCurrency, TradeType } from '../types';
import { useOrders } from '../hooks/useOrders';

interface Props {
  selectedChangeCurrency: SelectedChangeCurrency;
  tradeType: TradeType;
  purchaseAmount: number;
}

export const ExchangeButton = ({ tradeType, selectedChangeCurrency, purchaseAmount }: Props) => {
  const { mutate, isPending } = useOrders();

  const isBuy = useMemo(() => tradeType === 'buy', [tradeType]);

  const createPayload = useCallback(
    () => ({
      exchangeRateId: selectedChangeCurrency.exchangeRateId,
      fromCurrency: isBuy ? 'KRW' : selectedChangeCurrency.currency,
      toCurrency: isBuy ? selectedChangeCurrency.currency : 'KRW',
      forexAmount: purchaseAmount,
    }),
    [isBuy, purchaseAmount, selectedChangeCurrency],
  );

  const handleClick = useCallback(() => {
    mutate(createPayload());
  }, [mutate, createPayload]);

  return (
    <Button disabled={isPending} onClick={handleClick} className="w-full mt-8 py-6" color="black">
      환전하기
    </Button>
  );
};

import { useCallback, useMemo } from 'react';
import { CURRENCY_META } from '../constants';
import type { UseMutationResult } from '@tanstack/react-query';
import type { CurrencyType } from '../types';
import { debounce } from '@/shared/utils/debounce';
import type { OrdersQuoteResponseType } from '@/remote/exchange/types';
import { ArrowDown } from 'lucide-react';

interface Props {
  purchaseAmount: number;
  calculatedAmount: number;
  currency: CurrencyType;
  tradeType: 'buy' | 'sell';
  mutation: UseMutationResult<
    OrdersQuoteResponseType,
    unknown,
    { currency: CurrencyType; amount: number },
    unknown
  >;
  setPurchaseAmount: (value: number) => void;
  handleReset: () => void;
}
export const ExchangeInputPanel = ({
  purchaseAmount,
  calculatedAmount,
  currency,
  tradeType,
  mutation,
  setPurchaseAmount,
  handleReset,
}: Props) => {
  const debouncedFetch = useMemo(
    () =>
      debounce((value: number, currency: CurrencyType) => {
        const amount = value;
        if (amount === 0) {
          handleReset();
          return;
        }
        mutation.mutate({
          currency,
          amount,
        });
      }, 500),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value.replace(/\D/g, '');
      const numberValue = Number(value);

      setPurchaseAmount(numberValue);
      debouncedFetch(numberValue, currency);
    },
    [currency, debouncedFetch, setPurchaseAmount],
  );

  const isBuyType = tradeType === 'buy';

  return (
    <div>
      <div>
        <p className="mb-3 text-[#646F7C]">매수금액</p>
        <div className="flex items-center justify-between gap-2.5 bg-white border border-[#374553] rounded-xl p-6">
          <input
            value={purchaseAmount.toLocaleString()}
            inputMode="numeric"
            pattern="[0-9]*"
            onChange={handleChange}
            className="flex-1 text-right appearance-none outline-none focus:outline-none focus:ring-0 text-[#646F7C] font-semibold"
          />
          <span className="text-[#646F7C] pointer-events-none">
            {CURRENCY_META[currency].krSymbol} {isBuyType ? '사기' : '팔기'}
          </span>
        </div>
      </div>

      <p className="flex items-center justify-center py-4.5 text-[#646F7C]">
        <ArrowDown size={24} />
      </p>

      <div>
        <p className="mb-3 text-[#646F7C]">{isBuyType ? '필요 원화' : '받는 원화'}</p>
        <div className="flex items-center justify-between gap-2.5 bg-[#F1F2F4] border border-[#ACB4BB] rounded-xl p-6">
          <input
            readOnly
            value={calculatedAmount.toLocaleString()}
            className="flex-1 text-right appearance-none outline-none focus:outline-none focus:ring-0 text-[#646F7C] font-semibold"
          />
          <span
            className={`pointer-events-none font-bold ${
              isBuyType ? 'text-[#FE5050]' : 'text-[#3479EB]'
            }`}
          >
            {isBuyType ? '원 필요해요' : '원 받을 수 있어요'}
          </span>
        </div>
      </div>
    </div>
  );
};

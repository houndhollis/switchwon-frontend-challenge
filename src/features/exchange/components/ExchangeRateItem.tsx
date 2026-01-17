import type { ExchangeRateResponseType } from '@/remote/exchange/types';
import { CURRENCY_META } from '../constants';
import clsx from 'clsx';
import { Triangle } from 'lucide-react';

type Props = Pick<ExchangeRateResponseType, 'currency' | 'rate' | 'changePercentage'>;

export const ExchangeRateItem = ({ currency, rate, changePercentage }: Props) => {
  const isUp = changePercentage > 0;
  const isDown = changePercentage < 0;

  return (
    <div className="w-full flex flex-col p-5 border border-gray-300 rounded-lg">
      <div className="flex justify-between items-center gap-2">
        <p className="text-[#646F7C] font-semibold text-[14px]">{currency}</p>
        <p className="text-[#646F7C] font-normal text-[14px]">{CURRENCY_META[currency].label}</p>
      </div>
      <p className="mt-2 font-bold">{rate.toLocaleString()} KRW</p>
      <div className="flex items-center gap-1">
        {isUp && <Triangle className="w-4 h-4 text-red-500" />}
        {isDown && <Triangle className="w-4 h-4 text-blue-500 rotate-180" />}
        <span className={clsx(isUp && 'text-red-500', isDown && 'text-blue-500')}>
          {changePercentage}%
        </span>
      </div>
    </div>
  );
};

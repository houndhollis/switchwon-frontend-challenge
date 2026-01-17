import type { WalletType } from '@/remote/exchange/types';
import { CURRENCY_META } from '../constants';

export const ExchangeMyWalletItem = ({ currency, balance }: WalletType) => {
  return (
    <div className="flex items-center justify-between gap-1">
      <p className="text-[#646F7C] font-normal">{currency}</p>
      <p className="text-[#646F7C] font-semibold">
        <span className="mr-1">{CURRENCY_META[currency].symbol}</span>
        <span>{balance.toLocaleString()}</span>
      </p>
    </div>
  );
};

import { useExchangeContext } from '../context';
import { ExchangeMyWalletItem } from './ExchangeMyWalletItem';

export const ExchangeMyWallet = () => {
  const { myWallet } = useExchangeContext();

  return (
    <div className="p-8 flex-1 flex flex-col justify-between bg-[#F7F8F9] border border-[#D0D6DB] rounded-lg">
      <div>
        <p className="mb-8 text-[24px] font-bold">내 지갑</p>
        <div className="flex flex-col gap-3">
          {myWallet?.wallets.map((Wallet) => (
            <ExchangeMyWalletItem key={Wallet.currency} {...Wallet} />
          ))}
        </div>
      </div>
      <div className="flex justify-between items-center pt-5 border-t border-gray-300">
        <p className="text-[#646F7C] font-medium">총 보유 자산</p>
        <p className="text-[#3479EB] font-bold">₩ {myWallet?.totalKrwBalance.toLocaleString()}</p>
      </div>
    </div>
  );
};

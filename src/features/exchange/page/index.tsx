import { ExchangeMyWallet } from '../components/ExchangeMyWallet';
import { ExchangeRate } from '../components/ExchangeRate';
import { ExchangeProvider } from '../context';

export const ExchangePage = () => {
  return (
    <div className="flex-1 flex flex-col px-12 py-10 gap-6">
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl font-bold">환율 정보</h1>
        <p className="text-gray-600">실시간 환율을 확인하고 간편하게 환전하세요.</p>
      </div>
      {/* 환율 정보 */}
      <ExchangeProvider>
        <div className="flex-1 flex flex-col gap-4">
          <ExchangeRate />
          <ExchangeMyWallet />
        </div>
      </ExchangeProvider>
    </div>
  );
};

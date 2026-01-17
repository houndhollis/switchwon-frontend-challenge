import { PageDescription } from '@/shared/components/PageDescription';
import { ExchangeMyWallet } from '../components/ExchangeMyWallet';
import { ExchangePanel } from '../components/ExchangePanel';
import { ExchangeRate } from '../components/ExchangeRate';
import { ExchangeProvider } from '../context';

export const ExchangePage = () => {
  return (
    <div className="flex-1 flex flex-col px-12 py-10 gap-6 max-sm:px-4 max-sm:py-6">
      <PageDescription
        title="환율 정보"
        description="실시간 환율을 확인하고 간편하게 환전하세요."
      />
      {/* 환율 정보 */}
      <ExchangeProvider>
        <div className="flex-1 flex gap-4 max-[1050px]:flex-col">
          <div className="flex-1 flex flex-col gap-4">
            <ExchangeRate />
            <ExchangeMyWallet />
          </div>
          <div className="flex-1 flex flex-col">
            <ExchangePanel />
          </div>
        </div>
      </ExchangeProvider>
    </div>
  );
};

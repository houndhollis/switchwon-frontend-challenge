import { PageDescription } from '@/shared/components/PageDescription';

export const OrdersPage = () => {
  return (
    <div className="flex-1 flex flex-col px-12 py-10 gap-6 max-sm:px-4 max-sm:py-6">
      <PageDescription title="환전 내역" description="환전 내역을 확인하실 수 있어요." />
    </div>
  );
};

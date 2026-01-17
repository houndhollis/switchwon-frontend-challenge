import type { SelectedChangeCurrency } from '../types';

interface Props {
  selectedChangeCurrency: SelectedChangeCurrency;
}

export const ExchangeRateInfo = ({ selectedChangeCurrency }: Props) => {
  return (
    <div className="mt-8">
      <div className="my-8 border-t border-[#C5C8CE]" />
      <div className="flex items-center justify-between">
        <p className="text-[#646F7C]">적용 환율</p>
        <p className="text-[#646F7C] font-semibold">
          {`${selectedChangeCurrency?.unit} ${
            selectedChangeCurrency?.currency
          } = ${selectedChangeCurrency?.rate ?? 0}`.toLocaleString() + '원'}
        </p>
      </div>
    </div>
  );
};

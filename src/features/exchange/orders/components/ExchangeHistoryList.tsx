import type { ExchangeOrdersHistoryResponseType } from '@/remote/orders/types';

interface Props {
  list: ExchangeOrdersHistoryResponseType[];
}

export const ExchangeHistoryList = ({ list }: Props) => {
  return (
    <div className="p-6 w-full overflow-x-auto border border-[#D0D6DB] rounded-3xl">
      <table className="w-full table-fixed border-collapse">
        <colgroup>
          <col className="w-[20%]" />
          <col className="w-[20%]" />
          <col className="w-[20%]" />
          <col className="w-[20%]" />
          <col className="w-[20%]" />
        </colgroup>
        <thead>
          <tr className="text-[16px] text-[#646F7C] border-y border-[#D0D6DB]">
            <th className="text-left py-3 px-2 font-normal text-[14px]">거래 ID</th>
            <th className="text-left py-3 px-2 font-normal text-[14px]">거래 일시</th>
            <th className="text-right py-3 px-2 font-normal text-[14px]">매수 금액</th>
            <th className="text-right py-3 px-2 font-normal text-[14px]">체결 환율</th>
            <th className="text-right py-3 px-2 font-normal text-[14px]">매도 금액</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td colSpan={5} className="h-3"></td>
          </tr>
          {list.length > 0 ? (
            list.map((item) => (
              <tr className="text-[#374553]" key={item.orderId}>
                <td className="py-3 px-2 font-normal text-[14px]">{item.orderId}</td>
                <td className="py-3 px-2 font-normal text-[14px]">
                  {new Date(item.orderedAt).toLocaleString()}
                </td>
                <td className="text-right py-3 px-2 font-normal text-[14px]">
                  {item.fromAmount.toLocaleString()}
                </td>
                <td className="text-right py-3 px-2 font-normal text-[14px]">
                  {item.appliedRate.toLocaleString()}
                </td>
                <td className="text-right py-3 px-2 font-normal text-[14px]">
                  {item.toAmount.toLocaleString()}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td>환전 내역이 없습니다.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

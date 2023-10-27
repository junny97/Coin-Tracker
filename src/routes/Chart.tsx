import { useQuery } from '@tanstack/react-query';
import { fetchCoinHistory } from '../api/api';
import ApexChart from 'react-apexcharts';
import { useRecoilValue } from 'recoil';
import { isDarkAtom } from '../recoil/atoms';
import { IOhlcvData, ICoinId } from '../interface';

export default function Chart({ coinId }: ICoinId) {
  const isDark = useRecoilValue(isDarkAtom);
  const { isLoading, data } = useQuery<IOhlcvData[]>({
    queryKey: ['ohlcv', coinId],
    queryFn: () => fetchCoinHistory(coinId),
    // refetchInterval: 5000,
  });

  return (
    <div>
      {isLoading ? (
        'Loading chart...'
      ) : (
        <ApexChart
          type='candlestick'
          series={[
            {
              data: data?.map((info: IOhlcvData) => {
                return [
                  info.time_open,
                  info.open,
                  info.high,
                  info.low,
                  info.close,
                ];
              }) as any, //type 수정하기
            },
          ]}
          options={{
            theme: { mode: isDark ? 'dark' : 'light' },
            chart: {
              toolbar: { show: false },
              width: 400,
              height: 300,
              background: 'transparent',
            },
            colors: [],
            xaxis: {
              type: 'datetime',
              axisTicks: { show: false },
            },
            yaxis: { show: false },
            tooltip: {
              enabled: false,
              y: {
                formatter: (value) => value.toFixed(2),
              },
            },
            plotOptions: {
              candlestick: {
                colors: {
                  upward: '#E50914',
                  downward: '#6CB0F6',
                },
              },
            },
          }}
        />
      )}
    </div>
  );
}

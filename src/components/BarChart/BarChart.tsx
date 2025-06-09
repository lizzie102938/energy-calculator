import { barChartData } from '../../assets/outputData';

const BarChart = () => {
  const chartColors = {
    day: '#4F46E5',
    week: '#2563EB',
    month: '#7C3AED',
  };

  const maxValue = Math.max(
    ...Object.values(barChartData).map((data) => data.value)
  );
  const maxBarHeight = 200;

  const getBarHeight = (value: number) => {
    return maxValue === 0 ? 0 : (value / maxValue) * maxBarHeight;
  };

  return (
    <div className='mt-8 overflow-x-auto overflow-y-hidden min-w-[300px] max-w-full '>
      <h2 className='text-2xl text-slate-800 font-bold mb-4 text-center '>
        Energy Charged Over Time
      </h2>
      <div className='relative h-fit  rounded-md p-4 bg-gray-100'>
        <div className='flex justify-between items-end'>
          {Object.entries(barChartData).map(([key, data]) => (
            <div key={key} className='flex flex-col items-center w-1/4 bg-'>
              <div
                className='w-16 rounded-md transition-all duration-500 '
                style={{
                  height: `${getBarHeight(data.value)}px`,
                  backgroundColor:
                    chartColors[
                      key.includes('Day')
                        ? 'day'
                        : key.includes('Week')
                        ? 'week'
                        : key.includes('Month')
                        ? 'month'
                        : 'day'
                    ],
                }}
              />
              <p className='text-sm text-slate-600 mt-2 text-center'>
                {data.displayName}
              </p>
              <p className='text-sm font-medium text-center'>
                {data.value} kWh
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BarChart;

import React from 'react';
import { OutputCard } from '../index';

import { cardData } from '../../assets/outputData';
import BarChart from '../BarChart/BarChart';

interface OutputProps {
  handleReturnToInput: () => void;
}

const Output = ({ handleReturnToInput }: OutputProps) => {
  return (
    <div className='flex flex-col'>
      <button
        type='reset'
        className='py-1 px-2 bg-slate-600 text-white text-sm font-medium rounded-md hover:bg-slate-500 w-[160px] mx mt-6'
        onClick={handleReturnToInput}
      >
        Return to Input Form
      </button>
      <h2 className='text-2xl font-bold text-slate-800 text-center'>
        Energy Calculator Results
      </h2>
      <div className='w-[120px]'></div>
      <p className='text-slate-800 text-center mb-4'>
        The values given below are averages.
      </p>
      <div className='p-4 bg-slate-200 rounded-t-lg shadow-md w-[70vw] mx-auto'>
        <div className='grid grid-cols-2 grid-rows-2 gap-2'>
          {Object.values(cardData).map((data) => {
            return (
              <OutputCard
                key={data.displayName}
                outputTitle={data.displayName}
                outputResult={data.value}
              />
            );
          })}
        </div>
        <BarChart />
      </div>
    </div>
  );
};

export default Output;

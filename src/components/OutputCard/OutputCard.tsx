// import { OutputDataType } from '../../types';

interface OutputCardProps {
  outputTitle: string;
  outputResult: number;
}

const OutputCard = ({ outputTitle, outputResult }: OutputCardProps) => {
  return (
    <div className='bg-gray-100 p-4 rounded-md '>
      <h3 className='text-slate-800 font-bold'>{outputTitle}</h3>
      <p className='text-slate-800'>{outputResult}</p>
    </div>
  );
};

export default OutputCard;

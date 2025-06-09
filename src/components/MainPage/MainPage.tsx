import React, { useState } from 'react';
import { Output } from '../index';

interface FormErrors {
  chargingPoints?: string;
  arrivalProbability?: string;
  consumption?: string;
  chargingPower?: string;
}

const MainPage = () => {
  const [formData, setFormData] = useState({
    chargingPoints: 0,
    arrivalProbability: 100,
    consumption: 18,
    chargingPower: 11,
  });
  const [showOutput, setShowOutput] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (formData.chargingPoints < 0 || formData.chargingPoints > 20) {
      newErrors.chargingPoints = 'Charging Points must be between 0 and 20.';
    }
    if (formData.arrivalProbability < 0 || formData.arrivalProbability > 200) {
      newErrors.arrivalProbability =
        'Arrival Probability must be between 0% and 200%.';
    }
    if (formData.consumption < 0 || formData.consumption > 40) {
      newErrors.consumption = 'Consumption must be between 0 and 40 kWh.';
    }
    if (formData.chargingPower < 0 || formData.chargingPower > 20) {
      newErrors.chargingPower = 'Charging Power must be between 0 and 20 kW.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setShowOutput(true);
    }
  };

  return (
    <div>
      {!showOutput && (
        <>
          <h2 className='text-2xl font-bold mb-8 text-center text-slate-800 mt-20'>
            Energy Calculator Form
          </h2>
          <form className='width-xl mx-auto p-6 mt-16 bg-slate-200 rounded-lg shadow-md min-h-[300px] min-w-[500px] max-w-[800px]'>
            <div className='space-y-4'>
              <div>
                <label
                  htmlFor='chargingPoints'
                  className='block text-sm font-medium text-slate-800'
                >
                  Number of Charging Points in Use (
                  <b>{formData.chargingPoints}</b>)
                </label>
                <input
                  type='range'
                  id='chargingPoints'
                  name='chargingPoints'
                  min='0'
                  max='20'
                  value={formData.chargingPoints}
                  onChange={handleChange}
                  className='mt-1 block w-full accent-emerald-700'
                />
                {errors.chargingPoints && (
                  <p className='text-red-600 text-sm mt-1'>
                    {errors.chargingPoints}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor='arrivalProbability'
                  className='block text-sm font-medium text-slate-800'
                >
                  Probability of Arrival (<b>{formData.arrivalProbability}%</b>)
                </label>
                <input
                  type='range'
                  id='arrivalProbability'
                  name='arrivalProbability'
                  min='0'
                  max='200'
                  value={formData.arrivalProbability}
                  onChange={handleChange}
                  className='mt-1 block w-full accent-emerald-700'
                />
                {errors.arrivalProbability && (
                  <p className='text-red-600 text-sm mt-1'>
                    {errors.arrivalProbability}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor='consumption'
                  className='block text-sm font-medium text-slate-800'
                >
                  Consumption per Car (<b>{formData.consumption} kWh</b>)
                </label>
                <input
                  type='range'
                  id='consumption'
                  name='consumption'
                  min='0'
                  max='40'
                  value={formData.consumption}
                  onChange={handleChange}
                  className='mt-1 block w-full accent-emerald-700'
                />
                {errors.consumption && (
                  <p className='text-red-600 text-sm mt-1'>
                    {errors.consumption}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor='chargingPower'
                  className='block text-sm font-medium text-slate-800'
                >
                  Charging Power per Point (<b>{formData.chargingPower} kW</b>)
                </label>
                <input
                  type='range'
                  id='chargingPower'
                  name='chargingPower'
                  min='0'
                  max='20'
                  value={formData.chargingPower}
                  onChange={handleChange}
                  className='mt-1 block w-full accent-emerald-700'
                />
                {errors.chargingPower && (
                  <p className='text-red-600 text-sm mt-1'>
                    {errors.chargingPower}
                  </p>
                )}
              </div>
            </div>
            <div className='mt-6'>
              <button
                onClick={handleSubmit}
                type='submit'
                className='w-full py-2 px-4 bg-slate-600 text-white font-medium rounded-md hover:bg-slate-500'
              >
                Calculate
              </button>
            </div>
          </form>
        </>
      )}
      {showOutput && (
        <Output handleReturnToInput={() => setShowOutput(false)} />
      )}
    </div>
  );
};

export default MainPage;

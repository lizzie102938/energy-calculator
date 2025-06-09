import React from 'react';
import { MainPage, Navbar } from './components';

import './App.css';

function App() {
  return (
    <div className='flex items-center justify-center'>
      <Navbar />
      <div className='mt-16'>
        <MainPage />
      </div>
    </div>
  );
}

export default App;

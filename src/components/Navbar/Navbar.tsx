import React from 'react';
import logo from '../../assets/logo.png';

const Navbar = () => {
  return (
    <nav className='fixed top-0 left-0 w-full bg-gray-100 h-16 shadow-md'>
      <div className='px-4 mx-auto h-full flex items-center'>
        <img src={logo} alt='logo' className='h-8 w-auto fixed-width' />
      </div>
    </nav>
  );
};

export default Navbar;


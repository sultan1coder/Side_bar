import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white text-gray-700 py-4 shadow-md">
      <div className="container mx-auto flex justify-around items-center">
        <img src="https://tiigsi.com/assets/img/brand/logo.png" alt="" className='w-20 text-white' />
        <nav>
          <ul className="flex space-x-4 font-semibold text-lg">
            <li><Link to="/" className="hover:underline-none ">Home</Link></li>
            <li><Link to="/about" className="hover:underline-none">About</Link></li>
            <li><Link to="/contact" className="hover:underline-none">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
  return (
    <header className="py-4 text-gray-700 bg-white shadow-md">
      {/* toggle icon  onClick={props.onSideToggle} most important*/}
      <div className='py-3 ml-5 text-3xl top'>
      <button toggle icon  onClick={props.onSideToggle}><i class="ri-menu-line"></i></button>
      </div>
      {/* toggle icon */}
      <div className="container flex items-center justify-around mx-auto">
        <img src="https://tiigsi.com/assets/img/brand/logo.png" alt="" className='w-20 text-white' />
        <nav>
          <ul className="flex space-x-4 text-lg font-semibold">
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
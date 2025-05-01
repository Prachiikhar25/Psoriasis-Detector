import React from 'react';
import { User } from 'lucide-react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import Login from './Login';
import Logo from './../assets/logo.png'

const Navbar = () => {
  return (
    <nav className="bg-pink-50 shadow-sm border-b border-pink-200">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
       
        <div className="flex items-center h-10 w-10">
          <img src={Logo} alt="Logo" className="" />
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-8 font-semibold text-pink-900">
          {[ 
            { href: '/', label: 'Home', className: 'text-pink-500' },
            { href: '/about', label: 'About' },
            { href: '/consult', label: 'Consultation Plans' },
            { href: '/contact', label: 'Contact' }
          ].map(({ href, label, className = '' }) => (
            <li key={href} className="group relative pb-1">
              <a
                href={href}
                className={`hover:text-pink-700 transition-colors duration-200 ${className}`}
              >
                {label}
                <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Login Button */}
        <Link to="/login"> {/* Link to Login page */}
          <button className="flex items-center text-pink-500 cursor-pointer hover:text-pink-700 transition-colors duration-200">
            <User className="mr-2 h-5 w-5" />
            Log In
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

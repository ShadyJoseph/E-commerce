import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import cart from '../assets/images/Cart.png'; 
import Logo from '../assets/images/Logo.png';
import Alert from './Alert';
import { useTheme } from '../Context';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`bg-${isDarkMode ? 'gray-900' : 'gray-200'} fixed top-0 w-full z-10`}>
      <Alert isDarkMode={isDarkMode}/>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <img className="h-8 w-8" src={Logo} alt="Logo" />
              <span className={`ml-2 text-${isDarkMode ? 'white' : 'gray-900'} text-lg font-semibold`}>The Outlet</span>
            </Link>
          </div>
          <div className="flex items-center">
            <div className="sm:hidden">
              <button
                onClick={toggleMobileMenu}
                className={`text-${isDarkMode ? 'gray-300' : 'gray-900'} hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg`}
              >
                {isMobileMenuOpen ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} />}
              </button>
            </div>
            <div className="hidden sm:flex sm:items-center">
              <Link to="/men" className={`text-${isDarkMode ? 'white' : 'gray-900'} hover:text-gray-700 px-3 py-2 text-lg font-medium`}>Men</Link>
              <Link to="/women" className={`text-${isDarkMode ? 'white' : 'gray-900'} hover:text-gray-700 px-3 py-2 text-lg font-medium`}>Women</Link>
              <Link to="/kids" className={`text-${isDarkMode ? 'white' : 'gray-900'} hover:text-gray-700 px-3 py-2 text-lg font-medium`}>Kids</Link>
            </div>
            <div className="flex items-center">
              <Link to="/cart" className={`text-${isDarkMode ? 'gray-300' : 'gray-900'} hover:text-gray-700 px-3 py-2 text-lg font-medium`}>
                <img src={cart} alt="Cart" className="h-8 w-8" />
              </Link>
              <button
                onClick={toggleTheme}
                className={`text-${isDarkMode ? 'gray-300' : 'gray-900'} hover:text-gray-700 px-3 py-2 text-lg font-medium`}
              >
                <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} className={`text-${isDarkMode ? 'white' : 'gray-900'}`} />
              </button>
            </div>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/men" className={`block text-${isDarkMode ? 'white' : 'gray-900'} hover:text-gray-700 px-4 py-2 text-lg font-medium`}>Men</Link>
            <Link to="/women" className={`block text-${isDarkMode ? 'white' : 'gray-900'} hover:text-gray-700 px-4 py-2 text-lg font-medium`}>Women</Link>
            <Link to="/kids" className={`block text-${isDarkMode ? 'white' : 'gray-900'} hover:text-gray-700 px-4 py-2 text-lg font-medium`}>Kids</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;



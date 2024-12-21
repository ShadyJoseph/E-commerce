import React from 'react';
import CartDetails from '../components/CartDetails';
import { useTheme } from '../Context';

const Cart = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`mt-[110px] mb-6 px-4 sm:px-8 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <CartDetails />
    </div>
  );
};

export default Cart;

import React from "react";
import { useCart, useTheme } from "../Context";
import { Link } from "react-router-dom";

const CartDetails = () => {
  const {
    state: { cart },
    removeFromCart,
  } = useCart();

  const { isDarkMode } = useTheme();

  const handleRemoveFromCart = (itemId) => {
    removeFromCart(itemId);
  };

  return (
    <div className={`flex justify-center items-center mt-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
      <div className="w-full max-w-lg">
        <div className={`bg-${isDarkMode ? 'gray-800' : 'white'} shadow-md rounded-lg overflow-hidden`}>
          <div className="px-6 py-4">
            <h2 className={`text-2xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Shopping Cart</h2>
            {cart.map((item) => (
              <div key={item.id} className="flex items-center mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-md mr-4"
                />
                <div>
                  <h3 className={`font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{item.name}</h3>
                  <p className={`text-gray-600 ${isDarkMode ? 'text-gray-300' : ''}`}>${item.price}</p>
                  <p className={`text-gray-600 ${isDarkMode ? 'text-gray-300' : ''}`}>Size: {item.size}</p>{" "}
                  <p className={`text-gray-600 ${isDarkMode ? 'text-gray-300' : ''}`}>Color: {item.color}</p>{" "}
                </div>
                <button
                  onClick={() => handleRemoveFromCart(item.id)}
                  className={`ml-auto px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 ${isDarkMode ? 'hover:bg-red-400' : ''}`}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div className={`border-t border-gray-200 px-6 py-4 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
            <div className="flex justify-between text-base font-medium">
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-900'}`}>Subtotal</p>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-900'}`}>
                $
                {cart.reduce((total, item) => total + item.price, 0).toFixed(2)}
              </p>
            </div>
            <p className={`mt-0.5 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              Shipping and taxes calculated at checkout.
            </p>
            <div className="mt-6">
              <Link
                to="/checkout"
                className={`block w-full bg-indigo-600 text-white text-center py-3 px-4 rounded-md font-semibold hover:bg-indigo-700 ${isDarkMode ? 'hover:bg-indigo-700' : ''}`}
              >
                Checkout
              </Link>
            </div>
            <div className="mt-4 text-center text-sm">
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-500'}`}>
                or
                <Link
                  to="/"
                  className={`font-medium text-indigo-600 hover:text-indigo-500 ml-1 ${isDarkMode ? 'hover:text-indigo-400' : ''}`}
                >
                  Continue Shopping
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDetails;

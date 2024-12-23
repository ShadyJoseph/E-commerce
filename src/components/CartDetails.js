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

  const calculateSubtotal = () => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <div
      className={`flex justify-center items-center mt-8 min-h-screen ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div className="w-full max-w-4xl px-4 sm:px-6 lg:px-8">
        <div
          className={`shadow-xl rounded-lg overflow-hidden ${
            isDarkMode ? "bg-gray-800" : "bg-white"
          }`}
        >
          <div className="px-6 py-4">
            <h2
              className={`text-3xl font-semibold mb-6 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Shopping Cart
            </h2>

            {cart.length === 0 ? (
              <div className="text-center py-16">
                <p
                  className={`text-xl ${
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Your cart is empty
                </p>
                <Link
                  to="/"
                  className="mt-4 inline-block text-indigo-600 hover:text-indigo-500 font-medium transition-all duration-200"
                >
                  Continue Shopping
                </Link>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={item.id}
                  className={`flex items-center mb-6 p-4 rounded-lg shadow-md transition-all duration-200 ${
                    isDarkMode
                      ? "bg-gray-700 hover:bg-gray-600"
                      : "bg-gray-50 hover:bg-gray-100"
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-md mr-6"
                  />
                  <div className="flex-1">
                    <h3
                      className={`font-bold text-lg ${
                        isDarkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {item.name}
                    </h3>
                    <p
                      className={`text-sm ${
                        isDarkMode ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      ${item.price.toFixed(2)}
                    </p>
                    <p
                      className={`text-sm ${
                        isDarkMode ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      Size: {item.size}
                    </p>
                    <p
                      className={`text-sm ${
                        isDarkMode ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      Color: {item.color}
                    </p>
                  </div>
                  <button
                    onClick={() => handleRemoveFromCart(item.id)}
                    className="ml-auto px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-all duration-200"
                  >
                    Remove
                  </button>
                </div>
              ))
            )}
          </div>

          {cart.length > 0 && (
            <div
              className={`border-t px-6 py-4 ${
                isDarkMode ? "bg-gray-900 border-gray-700" : "bg-white border-gray-200"
              }`}
            >
              <div className="flex justify-between text-lg font-medium">
                <p className={isDarkMode ? "text-gray-300" : "text-gray-900"}>Subtotal</p>
                <p className={isDarkMode ? "text-gray-300" : "text-gray-900"}>${calculateSubtotal()}</p>
              </div>
              <p
                className={`mt-1 text-sm ${
                  isDarkMode ? "text-gray-400" : "text-gray-500"
                }`}
              >
                Shipping and taxes calculated at checkout.
              </p>
              <div className="mt-6">
                <Link
                  to="/checkout"
                  className="block w-full bg-indigo-600 text-white text-center py-3 rounded-md font-semibold hover:bg-indigo-700 transition-all duration-200"
                >
                  Checkout
                </Link>
              </div>
              <div className="mt-4 text-center text-sm">
                <p className={isDarkMode ? "text-gray-300" : "text-gray-500"}>
                  or
                  <Link
                    to="/"
                    className={`font-medium text-indigo-600 hover:text-indigo-500 ml-1 ${
                      isDarkMode ? "hover:text-indigo-400" : ""
                    }`}
                  >
                    Continue Shopping
                  </Link>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartDetails;

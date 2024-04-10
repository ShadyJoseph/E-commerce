import React from 'react';
import { useCart } from '../CartContext';
import { Link } from "react-router-dom";

const CartDetails = () => {
  const { state: { cart } } = useCart();

  return (
    <div className="flex justify-center items-center mt-8">
      <div className="w-full max-w-lg">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="px-6 py-4">
            <h2 className="text-2xl font-bold mb-2">Shopping Cart</h2>
            {cart.map((item) => (
              <div key={item.id} className="flex items-center mb-4">
                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-md mr-4" />
                <div>
                  <h3 className="text-gray-800 font-bold">{item.name}</h3>
                  <p className="text-gray-600">${item.price}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="border-t border-gray-200 px-6 py-4">
            <div className="flex justify-between text-base font-medium text-gray-900">
              <p>Subtotal</p>
              <p>${cart.reduce((total, item) => total + item.price, 0).toFixed(2)}</p>
            </div>
            <p className="mt-0.5 text-sm text-gray-500">
              Shipping and taxes calculated at checkout.
            </p>
            <div className="mt-6">
              <Link
                to="/checkout"
                className="block w-full bg-indigo-600 text-white text-center py-3 px-4 rounded-md font-semibold hover:bg-indigo-700"
              >
                Checkout
              </Link>
            </div>
            <div className="mt-4 text-center text-sm text-gray-500">
              <p>
                or
                <Link
                  to="/"
                  className="font-medium text-indigo-600 hover:text-indigo-500 ml-1"
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

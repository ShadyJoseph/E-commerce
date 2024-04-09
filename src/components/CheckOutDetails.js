import React from 'react';

const CheckOutDetails = () => {
  return (
    <div className="min-h-screen bg-gray-100" style={{marginTop:"62px"}}>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Checkout</h2>
            {/* Shipping Address */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Shipping Address</h3>
              <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-6">
                {/* First Name */}
                <div className="sm:col-span-1">
                  <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">First name</label>
                  <input type="text" name="first_name" id="first_name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>
                {/* Last Name */}
                <div className="sm:col-span-1">
                  <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">Last name</label>
                  <input type="text" name="last_name" id="last_name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>
                {/* Email */}
                <div className="sm:col-span-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
                  <input type="email" name="email" id="email" autoComplete="email" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>
                {/* Address */}
                <div className="sm:col-span-3">
                  <label htmlFor="street_address" className="block text-sm font-medium text-gray-700">Street address</label>
                  <input type="text" name="street_address" id="street_address" autoComplete="street-address" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>
                {/* City */}
                <div className="sm:col-span-2">
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                  <input type="text" name="city" id="city" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>
                {/* State */}
                <div className="sm:col-span-1">
                  <label htmlFor="state" className="block text-sm font-medium text-gray-700">State</label>
                  <input type="text" name="state" id="state" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>
                {/* ZIP */}
                <div className="sm:col-span-1">
                  <label htmlFor="zip" className="block text-sm font-medium text-gray-700">ZIP</label>
                  <input type="text" name="zip" id="zip" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>
              </div>
            </div>
            {/* Payment Information */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Payment Information</h3>
              <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-6">
                {/* Card Number */}
                <div className="sm:col-span-2">
                  <label htmlFor="card_number" className="block text-sm font-medium text-gray-700">Card number</label>
                  <input type="text" name="card_number" id="card_number" autoComplete="cc-number" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>
                {/* Expiry Date */}
                <div className="sm:col-span-1">
                  <label htmlFor="expiry_date" className="block text-sm font-medium text-gray-700">Expiry date</label>
                  <input type="text" name="expiry_date" id="expiry_date" autoComplete="cc-exp" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>
                {/* CVV */}
                <div className="sm:col-span-1">
                  <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">CVV</label>
                  <input type="text" name="cvv" id="cvv" autoComplete="cc-csc" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>
              </div>
            </div>
            {/* Place Order Button */}
            <div className="mt-6">
              <button type="submit" className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOutDetails;

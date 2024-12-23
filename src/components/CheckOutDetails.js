import React from "react";
import { useTheme } from "../Context";

const CheckOutDetails = () => {
  const { 
    isDarkMode, 
    background = "#ffffff", 
    textPrimary = "#000000", 
    textMuted = "#6c757d", 
    primary = "#4f46e5",  
    borderMuted = "#d1d5db", 
    textOnPrimary = "#ffffff" 
  } = useTheme();

  const formFieldStyle = {
    backgroundColor: isDarkMode ? "#374151" : "#ffffff",
    borderColor: isDarkMode ? "#4b5563" : borderMuted,
    color: isDarkMode ? textMuted : textPrimary,
  };

  const labelStyle = {
    color: isDarkMode ? textMuted : textPrimary,
  };

  return (
    <div
      className="min-h-screen mt-[98px] py-12 px-6"
      style={{ backgroundColor: isDarkMode ? "#1f2937" : background, color: textPrimary }}
    >
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8" style={{ backgroundColor: isDarkMode ? "#1e293b" : "#ffffff" }}>
        <h2 className="text-2xl font-bold mb-6" style={{ color: primary }}>
          Checkout
        </h2>
        <form>
          {/* Shipping Address */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4" style={labelStyle}>
              Shipping Address
            </h3>
            <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-6">
              <div className="sm:col-span-1">
                <label htmlFor="first_name" className="block text-sm font-medium mb-1" style={labelStyle}>
                  First Name
                </label>
                <input
                  type="text"
                  id="first_name"
                  className="w-full px-4 py-2 rounded-md focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  style={formFieldStyle}
                />
              </div>
              <div className="sm:col-span-1">
                <label htmlFor="last_name" className="block text-sm font-medium mb-1" style={labelStyle}>
                  Last Name
                </label>
                <input
                  type="text"
                  id="last_name"
                  className="w-full px-4 py-2 rounded-md focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  style={formFieldStyle}
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-medium mb-1" style={labelStyle}>
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-md focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  style={formFieldStyle}
                />
              </div>
              <div className="sm:col-span-3">
                <label htmlFor="street_address" className="block text-sm font-medium mb-1" style={labelStyle}>
                  Street Address
                </label>
                <input
                  type="text"
                  id="street_address"
                  className="w-full px-4 py-2 rounded-md focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  style={formFieldStyle}
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="city" className="block text-sm font-medium mb-1" style={labelStyle}>
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  className="w-full px-4 py-2 rounded-md focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  style={formFieldStyle}
                />
              </div>
              <div className="sm:col-span-1">
                <label htmlFor="state" className="block text-sm font-medium mb-1" style={labelStyle}>
                  State
                </label>
                <input
                  type="text"
                  id="state"
                  className="w-full px-4 py-2 rounded-md focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  style={formFieldStyle}
                />
              </div>
              <div className="sm:col-span-1">
                <label htmlFor="zip" className="block text-sm font-medium mb-1" style={labelStyle}>
                  ZIP Code
                </label>
                <input
                  type="text"
                  id="zip"
                  className="w-full px-4 py-2 rounded-md focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  style={formFieldStyle}
                />
              </div>
            </div>
          </div>

          {/* Payment Information */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4" style={labelStyle}>
              Payment Information
            </h3>
            <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-6">
              <div className="sm:col-span-2">
                <label htmlFor="card_number" className="block text-sm font-medium mb-1" style={labelStyle}>
                  Card Number
                </label>
                <input
                  type="text"
                  id="card_number"
                  className="w-full px-4 py-2 rounded-md focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  style={formFieldStyle}
                />
              </div>
              <div className="sm:col-span-1">
                <label htmlFor="expiry_date" className="block text-sm font-medium mb-1" style={labelStyle}>
                  Expiry Date
                </label>
                <input
                  type="text"
                  id="expiry_date"
                  className="w-full px-4 py-2 rounded-md focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  style={formFieldStyle}
                />
              </div>
              <div className="sm:col-span-1">
                <label htmlFor="cvv" className="block text-sm font-medium mb-1" style={labelStyle}>
                  CVV
                </label>
                <input
                  type="text"
                  id="cvv"
                  className="w-full px-4 py-2 rounded-md focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  style={formFieldStyle}
                />
              </div>
            </div>
          </div>

          {/* Place Order Button */}
          <button
            type="submit"
            className="w-full py-4 text-lg font-semibold rounded-md transition-transform hover:scale-105 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            style={{
              backgroundColor: primary,
              color: textOnPrimary,
            }}
          >
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckOutDetails;

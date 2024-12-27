import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { data } from "../database/Data";
import Loader from "../components/Loader";
import { useCart, useTheme } from "../Context";

const ItemDetails = () => {
  const { itemId } = useParams();
  const [itemDetails, setItemDetails] = useState(null);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const { addToCart } = useCart();
  const { isDarkMode } = useTheme();

  const themeClasses = {
    container: isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900",
    cardHover: isDarkMode ? "hover:bg-gray-600" : "hover:bg-gray-100",
    textPrimary: isDarkMode ? "text-white" : "text-gray-900",
    textMuted: isDarkMode ? "text-gray-400" : "text-gray-600",
    primary: isDarkMode ? "#1e40af" : "#007bff", // Dark and light theme primary colors
    accent: isDarkMode ? "#fbbf24" : "#ffc107", // Dark and light theme accent colors
    borderMuted: isDarkMode ? "#4b5563" : "#dee2e6",
    backgroundSecondary: isDarkMode ? "#374151" : "#f8f9fa",
    disabledBackground: isDarkMode ? "#525252" : "#e9ecef", // Update for light mode
    disabledText: isDarkMode ? "#9ca3af" : "#adb5bd", // Update for light mode
    textOnPrimary: "#ffffff",
    sizeBackground: isDarkMode ? "#2d3748" : "#f3f4f6", // Lighter background for sizes in light mode
    sizeText: isDarkMode ? "#ffffff" : "#2d3748", // Darker text for sizes in light mode
  };

  useEffect(() => {
    const selectedItem = data.clothing.find(
      (item) => item.id === parseInt(itemId)
    );
    setItemDetails(selectedItem || null);
  }, [itemId]);

  if (!itemDetails) {
    return (
      <div
        className={`flex flex-col justify-center items-center h-screen ${themeClasses.container}`}
      >
        <Loader />
        <p className="text-lg mt-4">{`Item not found.`}</p>
      </div>
    );
  }

  const handleAddToCart = () => {
    const itemToAdd = {
      ...itemDetails,
      size: selectedSize,
      color: selectedColor,
    };
    addToCart(itemToAdd);
  };

  const isAddToCartDisabled = !selectedSize || !selectedColor;

  const renderColorOption = (color) => (
    <div
      key={color}
      className={`w-10 h-10 rounded-full cursor-pointer border-2 transition-all transform ${
        selectedColor === color ? "scale-110" : ""
      }`}
      style={{
        backgroundColor: color,
        borderColor: selectedColor === color ? themeClasses.primary : themeClasses.borderMuted,
      }}
      onClick={() => setSelectedColor(color)}
      aria-selected={selectedColor === color}
      role="option"
    />
  );

  const renderSizeOption = (size) => (
    <li
      key={size}
      className={`px-5 py-2 rounded cursor-pointer transition-all transform font-medium text-center ${
        selectedSize === size ? "scale-105" : ""
      }`}
      style={{
        backgroundColor: selectedSize === size ? themeClasses.primary : themeClasses.sizeBackground,
        color: selectedSize === size ? themeClasses.textOnPrimary : themeClasses.sizeText,
      }}
      onClick={() => setSelectedSize(size)}
      aria-selected={selectedSize === size}
      role="option"
    >
      {size}
    </li>
  );

  return (
    <div className={`flex flex-col min-h-screen ${themeClasses.container}`}>
      <div className="container mx-auto px-4 mt-14 max-w-4xl flex-grow">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between">
          {/* Image Section */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <img
              src={itemDetails.image || "/placeholder.jpg"}  // Fallback for missing images
              alt={itemDetails.name}
              className="w-full h-auto rounded-lg shadow-lg transform transition hover:scale-105"
            />
          </div>

          {/* Details Section */}
          <div className="w-full md:w-2/3 md:ml-8">
            <h2
              className="text-3xl font-extrabold mb-6"
              style={{ color: themeClasses.primary }}
            >
              {itemDetails.name}
            </h2>
            <p className="text-xl font-semibold mb-4">
              Price: <span style={{ color: themeClasses.accent }}>${itemDetails.price}</span>
            </p>
            <p className={`text-base mb-6 ${themeClasses.textMuted}`}>{itemDetails.description}</p>

            {/* Colors */}
            <div className="mb-8">
              <p className="text-lg font-semibold mb-3">Choose a Color:</p>
              <div className="flex gap-3" role="listbox">
                {itemDetails.colors.map(renderColorOption)}
              </div>
            </div>

            {/* Sizes */}
            <div className="mb-8">
              <p className="text-lg font-semibold mb-3">Choose a Size:</p>
              <ul className="flex flex-wrap gap-3" role="listbox">
                {itemDetails.sizes.map(renderSizeOption)}
              </ul>
            </div>

            {/* Add to Cart Button */}
            <button
              className={`w-full font-bold py-4 rounded-lg shadow-md transition-all transform ${
                isAddToCartDisabled ? "opacity-50 cursor-not-allowed" : "hover:scale-105"
              }`}
              style={{
                backgroundColor: isAddToCartDisabled
                  ? themeClasses.disabledBackground
                  : themeClasses.primary,
                color: isAddToCartDisabled ? themeClasses.disabledText : themeClasses.textOnPrimary,
              }}
              onClick={handleAddToCart}
              disabled={isAddToCartDisabled}
            >
              {isAddToCartDisabled ? "Select Size and Color" : "Add to Cart"}
            </button>

            {/* Additional Information */}
            <div
              className="mt-8 border-t pt-6"
              style={{ borderColor: themeClasses.borderMuted }}
            >
              <p className={`text-lg font-medium ${themeClasses.textMuted}`}>
                <span className="font-semibold">Material:</span> {itemDetails.material}
              </p>
              <p className={`text-lg font-medium ${themeClasses.textMuted}`}>
                <span className="font-semibold">Brand:</span> {itemDetails.brand}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;

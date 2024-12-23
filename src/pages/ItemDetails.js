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
  const { theme = {} } = useTheme(); // Default to empty object to avoid undefined errors

  // Default theme properties if undefined
  const {
    background = "#ffffff",
    textPrimary = "#000000",
    textMuted = "#6c757d",
    primary = "#007bff",
    accent = "#ffc107",
    borderMuted = "#dee2e6",
    backgroundSecondary = "#f8f9fa",
    disabledBackground = "#e9ecef",
    disabledText = "#adb5bd",
    textOnPrimary = "#ffffff",
  } = theme;

  useEffect(() => {
    const selectedItem = data.clothing.find(
      (item) => item.id === parseInt(itemId)
    );
    setItemDetails(selectedItem || null);
  }, [itemId]);

  if (!itemDetails) {
    return (
      <div
        className="flex flex-col justify-center items-center h-screen"
        style={{ backgroundColor: background, color: textMuted }}
      >
        <Loader />
        <p className="text-lg mt-4">Item not found.</p>
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
        borderColor: selectedColor === color ? primary : borderMuted,
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
        backgroundColor: selectedSize === size ? primary : backgroundSecondary,
        color: selectedSize === size ? textOnPrimary : textPrimary,
      }}
      onClick={() => setSelectedSize(size)}
      aria-selected={selectedSize === size}
      role="option"
    >
      {size}
    </li>
  );

  return (
    <div
      className="flex flex-col min-h-screen"
      style={{ backgroundColor: background, color: textPrimary }}
    >
      <div className="container mx-auto px-4 mt-14 max-w-4xl flex-grow">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between">
          {/* Image Section */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <img
              src={itemDetails.image}
              alt={itemDetails.name}
              className="w-full h-auto rounded-lg shadow-lg transform transition hover:scale-105"
            />
          </div>

          {/* Details Section */}
          <div className="w-full md:w-2/3 md:ml-8">
            <h2
              className="text-3xl font-extrabold mb-6"
              style={{ color: primary }}
            >
              {itemDetails.name}
            </h2>
            <p className="text-xl font-semibold mb-4">
              Price: <span style={{ color: accent }}>${itemDetails.price}</span>
            </p>
            <p className="text-base mb-6">{itemDetails.description}</p>

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
                isAddToCartDisabled ? "opacity-50" : "hover:scale-105"
              }`}
              style={{
                backgroundColor: isAddToCartDisabled
                  ? disabledBackground
                  : primary,
                color: isAddToCartDisabled ? disabledText : textOnPrimary,
              }}
              onClick={handleAddToCart}
              disabled={isAddToCartDisabled}
            >
              {isAddToCartDisabled ? "Select Size and Color" : "Add to Cart"}
            </button>

            {/* Additional Information */}
            <div
              className="mt-8 border-t pt-6"
              style={{ borderColor: borderMuted }}
            >
              <p className="text-lg font-medium">
                <span className="font-semibold">Material:</span>{" "}
                {itemDetails.material}
              </p>
              <p className="text-lg font-medium">
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

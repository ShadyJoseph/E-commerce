import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { data } from "../database/Data";
import Loader from "../components/Loader";
import { useCart } from "../Context";

const ItemDetails = () => {
  const { itemId } = useParams();
  const [itemDetails, setItemDetails] = useState(null);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const { addToCart } = useCart();

  useEffect(() => {
    const selectedItem = data.clothing.find(
      (item) => item.id === parseInt(itemId)
    );
    setItemDetails(selectedItem || null); // Graceful fallback if item not found
  }, [itemId]);

  if (!itemDetails) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader />
        <p className="text-gray-500 text-lg mt-4">Item not found.</p>
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

  return (
    <div className="container mx-auto px-4 mt-[115px] mb-16">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between">
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src={itemDetails.image}
            alt={itemDetails.name}
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Details Section */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0 md:ml-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            {itemDetails.name}
          </h2>
          <p className="text-lg font-semibold text-gray-700 mb-2">
            Price: ${itemDetails.price}
          </p>
          <p className="text-base text-gray-700 mb-4">
            {itemDetails.description}
          </p>

          {/* Colors */}
          <div className="mb-6">
            <p className="text-lg font-semibold text-gray-800 mb-2">
              Available Colors:
            </p>
            <div className="flex gap-2">
              {itemDetails.colors.map((color, index) => (
                <div
                  key={index}
                  className={`w-8 h-8 rounded-full cursor-pointer border-2 transition ${
                    selectedColor === color
                      ? "border-gray-800"
                      : "border-gray-300"
                  }`}
                  style={{ backgroundColor: color }}
                  onClick={() => setSelectedColor(color)}
                  aria-selected={selectedColor === color}
                />
              ))}
            </div>
          </div>

          {/* Sizes */}
          <div className="mb-6">
            <p className="text-lg font-semibold text-gray-800 mb-2">
              Available Sizes:
            </p>
            <ul className="flex flex-wrap gap-2">
              {itemDetails.sizes.map((size) => (
                <li
                  key={size}
                  className={`px-4 py-2 rounded cursor-pointer transition ${
                    selectedSize === size
                      ? "bg-gray-800 text-white"
                      : "bg-gray-200 text-gray-800"
                  }`}
                  onClick={() => setSelectedSize(size)}
                  aria-selected={selectedSize === size}
                >
                  {size}
                </li>
              ))}
            </ul>
          </div>

          {/* Add to Cart Button */}
          <button
            className={`w-full bg-blue-500 text-white font-bold py-3 rounded mt-4 transition ${
              isAddToCartDisabled
                ? "cursor-not-allowed opacity-50"
                : "hover:bg-blue-700 hover:scale-105 transform"
            }`}
            onClick={handleAddToCart}
            disabled={isAddToCartDisabled}
          >
            {isAddToCartDisabled
              ? "Select Size and Color"
              : "Add to Cart"}
          </button>

          {/* Additional Information */}
          <div className="mt-6">
            <p className="text-lg font-semibold text-gray-800">
              Material: {itemDetails.material}
            </p>
            <p className="text-lg font-semibold text-gray-800">
              Brand: {itemDetails.brand}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;

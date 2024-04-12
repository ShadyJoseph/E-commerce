import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { data } from '../database/Data';
import Loader from '../components/Loader';
import { useCart } from '../CartContext'; 

const ItemDetails = () => {
  const { itemId } = useParams();
  const [itemDetails, setItemDetails] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const selectedItem = data.clothing.find(item => item.id === parseInt(itemId));
    setItemDetails(selectedItem);
  }, [itemId]);

  if (!itemDetails) {
    return <Loader />;
  }

  const handleAddToCart = () => {
    addToCart(itemDetails); 
  };

  return (
    <div className="container mx-auto px-4"style={{marginTop:"70px",marginBottom:"50px"}}>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="w-full md:w-1/2">
          <img src={itemDetails.image} alt={itemDetails.name} className="w-full h-auto rounded-lg" />
        </div>
        <div className="w-full md:w-1/2 mt-8 md:mt-0 md:ml-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{itemDetails.name}</h2>
          <p className="text-lg font-semibold text-gray-700 mb-2">Price: ${itemDetails.price}</p>
          <p className="text-base text-gray-700 mb-4">{itemDetails.description}</p>
          <div className="mb-4">
            <p className="text-lg font-semibold text-gray-800 mb-2">Available Colors:</p>
            <div className="flex">
              {itemDetails.colors.map((color, index) => (
                <div key={index} className="w-8 h-8 bg-gray-200 mr-2 rounded-full" style={{ backgroundColor: color }} />
              ))}
            </div>
          </div>
          <div className="mb-4">
            <p className="text-lg font-semibold text-gray-800 mb-2">Available Sizes:</p>
            <ul className="flex flex-wrap">
              {itemDetails.sizes.map(size => (
                <li key={size} className="mr-2 mb-2 px-3 py-1 bg-gray-200 rounded">{size}</li>
              ))}
            </ul>
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105"
            onClick={handleAddToCart} 
          >
            Add to Cart
          </button>
          <p className="text-lg font-semibold text-gray-800">Material: {itemDetails.material}</p>
          <p className="text-lg font-semibold text-gray-800">Brand: {itemDetails.brand}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;

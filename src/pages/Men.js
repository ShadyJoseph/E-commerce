import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link
import { data } from "../database/Data";
import { useCart } from "../CartContext";
import Loader from "../components/Loader"; // Assuming you have a Loader component

const Men = () => {
  const { addToCart } = useCart();
  const [menClothing, setMenClothing] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching data
    setTimeout(() => {
      setMenClothing(data.clothing.filter((item) => item.category === "men"));
      setLoading(false);
    }, 1000); // Adjust the timeout as needed
  }, []);

  const handleAddToCart = (item) => {
    addToCart(item);
  };

  return (
    <div style={{ marginTop: "62px" }}>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Men
          </h2>

          {loading ? (
            <Loader />
          ) : (
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {menClothing.map((item) => (
                <Link to={`/itemDetails/${item.id}`} key={item.id} className="group relative">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full transition-transform duration-300 ease-in-out transform group-hover:scale-110"
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <span
                          aria-hidden="true"
                          className="absolute inset-0"
                        ></span>
                        {item.name}
                      </h3>
                    </div>
                    <p className="text-sm font-medium text-gray-900">
                      ${item.price}
                    </p>
                  </div>
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105"
                    onClick={() => handleAddToCart(item)}
                  >
                    Add to Cart
                  </button>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Men;

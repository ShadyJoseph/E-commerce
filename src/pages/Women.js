import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { data } from "../database/Data";
import Loader from "../components/Loader";
import { useTheme } from '../Context';

const Women = () => {
  const { isDarkMode } = useTheme();
  const [loading, setLoading] = useState(true);
  const [womenClothing, setWomenClothing] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      const filteredData = data.clothing.filter(
        (item) => item.category === "women"
      );
      setWomenClothing(filteredData);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className={`mt-[70px] ${isDarkMode ? 'bg-gray-700' : 'bg-white'}`}>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className={`text-2xl font-bold tracking-tight ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Women
        </h2>

        {loading ? (
          <Loader />
        ) : (
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {womenClothing.map((item) => (
              <Link
                to={`/itemDetails/${item.id}`}
                key={item.id}
                className="group relative"
              >
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full transition-transform duration-300 ease-in-out transform group-hover:scale-110"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      <span
                        aria-hidden="true"
                        className="absolute inset-0"
                      ></span>
                      {item.name}
                    </h3>
                  </div>
                  <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-900'}`}>
                    ${item.price}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Women;

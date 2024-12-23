import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { data } from "../database/Data";
import Loader from "../components/Loader";
import { useTheme } from "../Context";

const Women = () => {
  const { isDarkMode } = useTheme();
  const [loading, setLoading] = useState(true);
  const [womenClothing, setWomenClothing] = useState([]);

  // Define reusable theme-based classes
  const themeClasses = {
     container: isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900",
    cardHover: isDarkMode ? "hover:bg-gray-600" : "hover:bg-gray-100",
    textPrimary: isDarkMode ? "text-white" : "text-gray-700",
    textSecondary: isDarkMode ? "text-gray-400" : "text-gray-600",
    price: isDarkMode ? "text-gray-300" : "text-gray-900",
  };

  useEffect(() => {
    setTimeout(() => {
      const filteredData = data.clothing.filter(
        (item) => item.category === "women"
      );
      setWomenClothing(filteredData);
      setLoading(false);
    }, 0);
  }, []);

  return (
    <div className={` ${themeClasses.container}`}>
      <div className="mx-auto max-w-2xl px-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight">Women</h2>

        {loading ? (
          <div className="flex justify-center items-center h-96">
            <Loader />
          </div>
        ) : (
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {womenClothing.map((item) => (
              <Link
                to={`/itemDetails/${item.id}`}
                key={item.id}
                className={`group relative rounded-lg overflow-hidden shadow-md transition-all duration-300 ${themeClasses.cardHover}`}
              >
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-t-md bg-gray-200 lg:aspect-none group-hover:opacity-90 lg:h-80">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover object-center transition-transform duration-300 transform group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-center">
                    <h3 className={`text-sm font-semibold ${themeClasses.textPrimary}`}>
                      {item.name}
                    </h3>
                    <p className={`text-sm font-medium ${themeClasses.price}`}>
                      ${item.price}
                    </p>
                  </div>
                  <p className={`mt-1 text-xs ${themeClasses.textSecondary}`}>
                    Brand: {item.brand}
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

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { data } from "../database/Data";
import Loader from "../components/Loader";
import { useTheme } from "../Context";

const Kids = () => {
  const { isDarkMode } = useTheme();
  const [kidsClothing, setKidsClothing] = useState([]);
  const [loading, setLoading] = useState(true);

  // Classes for light and dark themes
  const themeClasses = {
    container: isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900",
    cardBg: isDarkMode ? "bg-gray-800 hover:bg-gray-700" : "bg-gray-100 hover:bg-gray-200",
    textPrimary: isDarkMode ? "text-gray-300" : "text-gray-700",
    textSecondary: isDarkMode ? "text-gray-400" : "text-gray-600",
    price: isDarkMode ? "text-gray-300" : "text-gray-900",
  };

  useEffect(() => {
    setTimeout(() => {
      setKidsClothing(data.clothing.filter((item) => item.category === "kids"));
      setLoading(false);
    }, 0);
  }, []);

  return (
    <div className={`${themeClasses.container}`}>
      <div className="mx-auto max-w-2xl px-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight">Kids</h2>

        {loading ? (
          <Loader />
        ) : (
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {kidsClothing.map((item) => (
              <Link
                to={`/itemDetails/${item.id}`}
                key={item.id}
                className={`group relative rounded-lg overflow-hidden shadow-md transition-all duration-300 ${themeClasses.cardBg}`}
              >
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-t-md group-hover:opacity-90 lg:aspect-none lg:h-80">
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
                    <p className={`text-sm font-medium ${themeClasses.price}`}>${item.price}</p>
                  </div>
                  <p className={`mt-1 text-xs ${themeClasses.textSecondary}`}>Brand: {item.brand}</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Kids;

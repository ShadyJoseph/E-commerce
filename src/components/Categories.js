import Man from '../assets/images/man.avif';
import Woman from '../assets/images/woman.avif';
import Kid from '../assets/images/kid.avif';
import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../Context';

const Categories = () => {
  const { isDarkMode } = useTheme();

  const themeClasses = {
    background: isDarkMode ? 'bg-gray-900' : 'bg-gray-50',
    textPrimary: isDarkMode ? 'text-white' : 'text-gray-900',
    textSecondary: isDarkMode ? 'text-gray-400' : 'text-gray-700',
    cardBackground: isDarkMode ? 'bg-gray-800' : 'bg-white',
    buttonGradient: isDarkMode
      ? 'bg-gradient-to-r from-blue-600 to-blue-800'
      : 'bg-gradient-to-r from-blue-400 to-blue-600',
    hoverEffect: 'hover:scale-105 hover:shadow-lg',
  };

  return (
    <div className={`${themeClasses.background} py-16`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:py-16 lg:max-w-none">
          <h2 className={`text-4xl font-extrabold ${themeClasses.textPrimary} mb-12 text-center`}>
            Explore Our Collections
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {[
              { img: Man, title: 'Men', link: '/men', desc: 'Redefine style and confidence.' },
              { img: Woman, title: 'Women', link: '/women', desc: 'Elegance with a modern twist.' },
              { img: Kid, title: 'Kids', link: '/kids', desc: 'Fun and playful fashion.' },
            ].map((category, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-xl shadow-md transition-transform duration-300 ${themeClasses.cardBackground} ${themeClasses.hoverEffect}`}
              >
                <Link to={category.link}>
                  {/* Image Container */}
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={category.img}
                      alt={`${category.title} Collection`}
                      className="h-full w-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  {/* Card Content */}
                  <div className="p-6 text-center">
                    <h3 className={`text-2xl font-semibold ${themeClasses.textPrimary} mb-3`}>
                      {category.title}
                    </h3>
                    <p className={`text-base ${themeClasses.textSecondary} mb-6`}>
                      {category.desc}
                    </p>
                    <button
                      className={`py-3 px-8 text-white rounded-lg font-medium shadow-md transform transition-all duration-300 hover:brightness-125 ${themeClasses.buttonGradient}`}
                    >
                      Shop Now
                    </button>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;

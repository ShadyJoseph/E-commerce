import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import banner1 from "../assets/images/banner1.avif";
import banner2 from "../assets/images/banner4.avif";
import banner3 from "../assets/images/banner3.jpg";

const HeroBanner = () => {
  const banners = [banner1, banner2, banner3];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [banners.length]);

  const handleNext = () => setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
  const handlePrev = () => setCurrentIndex((prevIndex) => (prevIndex - 1 + banners.length) % banners.length);

  const onShopClick = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Slide Container */}
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{
          width: `${banners.length * 100}%`,
          transform: `translateX(-${currentIndex * 100}vw)`,
        }}
      >
        {banners.map((banner, index) => (
          <div
            key={index}
            className="w-screen h-screen flex-shrink-0 bg-center bg-cover"
            style={{ backgroundImage: `url(${banner})` }}
          ></div>
        ))}
      </div>

      {/* Gradient & Call-to-Action */}
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-gray-900 to-transparent py-10 px-6 sm:px-12 lg:px-16 flex flex-col sm:flex-row sm:justify-between items-center">
        <h1 className="text-2xl sm:text-4xl text-white font-bold text-center sm:text-left mb-4 sm:mb-0">
          Discover the Latest Trends
        </h1>
        <button
          onClick={onShopClick}
          className="bg-blue-600 text-white py-3 px-8 rounded-lg shadow-lg hover:bg-blue-700 flex items-center transition-all duration-300 transform hover:scale-105"
        >
          Shop Now
          <FontAwesomeIcon icon={faShoppingCart} className="ml-3" />
        </button>
      </div>

      {/* Navigation Buttons */}
      <button
        className="absolute left-4 sm:left-8 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-60 text-white p-4 rounded-full hover:bg-gray-600 transition-all duration-300"
        onClick={handlePrev}
        aria-label="Previous Slide"
      >
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      <button
        className="absolute right-4 sm:right-8 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-60 text-white p-4 rounded-full hover:bg-gray-600 transition-all duration-300"
        onClick={handleNext}
        aria-label="Next Slide"
      >
        <FontAwesomeIcon icon={faArrowRight} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {banners.map((_, index) => (
          <div
            key={index}
            className={`h-4 w-4 rounded-full transition-all duration-300 ${
              currentIndex === index
                ? "bg-blue-500 scale-125 shadow-lg"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Slide ${index + 1}`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default HeroBanner;

import React from "react";
import banner from "../assets/images/banner.avif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const HeroBanner = () => {
  const onShopClick = () => {
    window.scrollTo({
      top: 750,
      behavior: "smooth",
    });
  };
  return (
    <div className="relative ">
      
      <img src={banner} alt="Hero Banner" className="w-full" />
      <div
        className="absolute inset-x-0 bottom-0 bg-gray-900 bg-opacity-50 py-4 px-6 sm:px-12 flex justify-between items-center"
        onClick={onShopClick}
      >
        <button className="bg-blue-500 text-white py-2 px-4 rounded-md mr-4">
          Shop Now
          <FontAwesomeIcon icon={faShoppingCart} className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default HeroBanner;

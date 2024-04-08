import React from 'react';
import banner from '../assets/images/banner.avif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const HeroBanner = () => {
  return (
    <div className="relative mt-10"> {/* Adding mt-4 class for margin-top */}
      <img src={banner} alt="Hero Banner" className="w-full" />
      <div className="absolute bottom-4 left-4">
        <button className="bg-blue-500 text-white py-2 px-4 rounded-md mr-4">
          Shop Now
          <FontAwesomeIcon icon={faShoppingCart} className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default HeroBanner;

import React from 'react';
import Man from '../assets/images/man.avif';
import Woman from '../assets/images/woman.avif';
import Kid from '../assets/images/kid.avif';

const Categories = () => {
  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Collections</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <div className="group relative">
              <div className="relative h-80 overflow-hidden rounded-lg bg-white">
                <img src={Man} alt="Man Collection" className="h-full w-full object-cover object-center" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Men</h3>
                <p className="text-sm text-gray-600 mb-4">Excel and express yourself when and where you can</p>
                <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">
                  Shop Now
                </button>
              </div>
            </div>
            <div className="group relative">
              <div className="relative h-80 overflow-hidden rounded-lg bg-white">
                <img src={Woman} alt="Woman Collection" className="h-full w-full object-cover object-center" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Women</h3>
                <p className="text-sm text-gray-600 mb-4">Excel and express yourself when and where you can</p>
                <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">
                  Shop Now
                </button>
              </div>
            </div>
            <div className="group relative">
              <div className="relative h-80 overflow-hidden rounded-lg bg-white">
                <img src={Kid} alt="Kid Collection" className="h-full w-full object-cover object-center" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Kids</h3>
                <p className="text-sm text-gray-600 mb-4">Get your kids outside and exploring with confidence in children's clothes</p>
                <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;

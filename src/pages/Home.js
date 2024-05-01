import React from 'react';
import HeroBanner from '../components/HeroBanner';
import Categories from '../components/Categories';

const Home = () => {
  return (
      <div className="mt-[95px]">
        <HeroBanner />
        <Categories />
      </div>
  );
};

export default Home;

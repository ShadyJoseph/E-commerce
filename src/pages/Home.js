import React from 'react';
import Navbar from '../components/Navbar';
import HeroBanner from '../components/HeroBanner';
import Categories from '../components/Categories';

const Home = () => {
  return (
      <div>
        <Navbar />
        <HeroBanner />
        <Categories />
      </div>
  );
};

export default Home;

// App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';
import Home from '../src/pages/Home';
import Men from '../src/pages/Men';
import Women from '../src/pages/Women';
import Kids from '../src/pages/Kids';
import Cart from '../src/pages/Cart';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/men" element={<Men/>} />
        <Route path="/women" element={<Women/>} />
        <Route path="/kids" element={<Kids/>} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

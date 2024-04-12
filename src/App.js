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
import CheckOut from './pages/CheckOut';
import { CartProvider } from "./CartContext";
import ItemDetails from './pages/ItemDetails';
function App() {
  return (
    <CartProvider>
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/men" element={<Men/>} />
        <Route path="/women" element={<Women/>} />
        <Route path="/kids" element={<Kids/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/CheckOut" element={<CheckOut/>}/>
        <Route path="/itemDetails/:itemId" element={<ItemDetails/>}/>
      </Routes>
      <Footer />
    </div>
    </CartProvider>
  );
}

export default App;

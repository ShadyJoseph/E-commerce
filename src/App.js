import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import Home from "../src/pages/Home";
import Men from "../src/pages/Men";
import Women from "../src/pages/Women";
import Kids from "../src/pages/Kids";
import Cart from "../src/pages/Cart";
import CheckOut from "./pages/CheckOut";
import { CartProvider, ThemeProvider } from "./Context";
import ItemDetails from "./pages/ItemDetails";

function App() {
  return (
    <CartProvider>
      <ThemeProvider>
        <Navbar />
        <div className="min-h-screen pt-16"> {/* Ensure enough space for navbar and footer */}
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/men" element={<Men />} />
            <Route path="/women" element={<Women />} />
            <Route path="/kids" element={<Kids />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/CheckOut" element={<CheckOut />} />
            <Route path="/itemDetails/:itemId" element={<ItemDetails />} />
          </Routes>
        </div>
        <Footer />
      </ThemeProvider>
    </CartProvider>
  );
}

export default App;

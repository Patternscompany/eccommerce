
import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import Men from './Pages/Men';
import Women from './Pages/Women';
import Kid from './Pages/Kid';
import Cart from './Pages/Cart';
import { Poster } from './Components/Poster/Poster';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Footer from "./Components/Footer";


function App() {
  const [cart, setCart] = useState([]);

  const handleClick = (item, size) => {
    setCart([...cart, { ...item, size }]);
  };

  const handleRemove = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  return (
    <div>
    <BrowserRouter>
      <Navbar size={cart.length} />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/men" element={<Men handleClick={handleClick} />} />
        <Route path="/women" element={<Women />} />
        <Route path="/kid" element={<Kid />} />
        <Route path="/poster" element={<Poster handleClick={handleClick} />} />
        <Route path="/cart" element={<Cart cart={cart} handleRemove={handleRemove} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Shop />} /> {/* Catch-all for unknown routes */}
      </Routes>
     <Footer/>
    </BrowserRouter>
  </div>
  );
}

export default App;




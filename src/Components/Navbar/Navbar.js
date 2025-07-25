


import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';  // Import useNavigate
import './Navbar.css';
import bag from '../Assets/Shoping bag.png';
import cart from '../Assets/cart.png';

function Navbar({ size }) {
  const [menu, setMenu] = useState("");
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');  
  };

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <div className='logo'>
          <img style={{ height: '60px', width: '60px' }} src={bag} alt="Shopper Bag" />
        </div>
        <p><b>SHOPPER</b></p>
      </div>
      <ul className='nav-menu'>
        <li onClick={() => { setMenu("shop") }}>
          <Link style={{ textDecoration: 'none' }} to='/'>Shop</Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu("men") }}>
          <Link style={{ textDecoration: 'none' }} to='/men'>Men</Link>
          {menu === "men" ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu("women") }}>
          <Link style={{ textDecoration: 'none' }} to='/women'>Women</Link>
          {menu === "women" ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu("kid") }}>
          <Link style={{ textDecoration: 'none' }} to='/kid'>Kids</Link>
          {menu === "kid" ? <hr /> : <></>}
        </li>
      </ul>
     
      <div className='nav-login-cart'>
        <button onClick={handleLoginClick}>Login</button>
        <Link to='/cart'>
          <img style={{ height: '60px', width: '60px' }} src={cart} alt="Cart" />
        </Link>
        <div className='nav-cart-count'>{size}</div>
      </div>
    </div>
  );
}

export default Navbar;

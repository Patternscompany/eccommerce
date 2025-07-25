

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleClick = (product, size) => {
    setCartItems([...cartItems, { ...product, size }]);
  };

  return (
    <div>
      <Women handleClick={handleClick} />
      <Cart cartItems={cartItems} />
    </div>
  );
};

const Women = ({ handleClick }) => {
  const [selectedSizes, setSelectedSizes] = useState({});
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const Products = [
    { image: '/women1.1.webp', name: 'Tutti Dress', price: 1999, discountprice: 1499 },
    { image: '/women2 (2).webp', name: 'Rangeela Goa', price: 1999, discountprice: 1499 },
    { image: '/women3.webp', name: 'Coptic Dress', price: 1999, discountprice: 1449 },
    { image: '/women4.webp', name: 'Diamond Dress', price: 1999, discountprice: 1449 },
    { image: '/women5.webp', name: 'Tutti Dress', price: 1999, discountprice: 1499 },
    { image: '/women6.webp', name: 'Frozen Dress - Fiji', price: 2999, discountprice: 2499 },
    { image: '/women7.webp', name: 'Prairie Dress - Mango Season', price: 2999, discountprice: 2499 },
    { image: '/women8.webp', name: 'Prairie Dress - Spring Flowers', price: 2999, discountprice: 2499},
    { image: '/women9.webp', name: 'Mango Dervish Maxi Dress', price: 2999, discountprice: 2499 },
    { image: '/women10.jpg', name: 'Grey Dot Sol Dress - Short', price: 2999, discountprice: 2499 },
    { image: '/women11.jpg', name: 'Peacock Sol Dress - Short', price: 2999, discountprice: 2499 },
    { image: '/women12.webp', name: 'Grey Dot Dervish Maxi Dress', price: 2999, discountprice: 2499 },
    { image: '/women13.webp', name: 'Black Dervish Maxi Dress', price: 3000, discountprice: 2800 },
    { image: '/women15.jpg', name: 'Arrow Dress Short - Thin Stripe', price: 4499, discountprice: 3000 },
    { image: '/women14.webp', name: 'Sweety Dress - Black', price: 4499, discountprice: 3000 },
    
  ];

  const handleSizeChange = (index, e) => {
    setSelectedSizes({
      ...selectedSizes,
      [index]: e.target.value,
    });
  };

  const handleAddToBag = (product, index) => {
    const size = selectedSizes[index] || 'S';
    handleClick(product, size);
    navigate('/cart');
  };

  const filteredProducts = Products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div style={{ margin: '20px' }}>
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{ padding: '10px', width: '130px', height: '30px', fontSize: '16px', textAlign: 'center', justifyContent: 'center', marginLeft: '780px', position: 'relative', top: '-100px' }}
        />
      </div>

      <div className="product-list">
        <ul style={{ listStyle: 'none', padding: '0' }}>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <li key={index}>
                <p>
                  <img
                    src={product.image}
                    style={{ width: '230px', height: '350px', marginLeft: '90px', marginTop: '-70px' }}
                    alt={product.name}
                  />
                  <h2 style={{ marginLeft: '90px' }}>{product.name}</h2>
                  <span style={{ color: 'red', marginLeft: '90px' }}>RS.{product.discountprice}</span>
                  <span style={{ textDecoration: 'line-through', color: 'gray' }}>₹{product.price}</span>
                  <div style={{ marginLeft: '90px', marginTop: '10px' }}>
                    <label htmlFor={`size-${index}`}>Size: </label>
                    <select
                      id={`size-${index}`}
                      value={selectedSizes[index] || 'S'}
                      onChange={(e) => handleSizeChange(index, e)}
                    >
                      <option value="S">S</option>
                      <option value="M">M</option>
                      <option value="L">L</option>
                      <option value="XL">XL</option>
                      <option value="XXL">XXL</option>
                    </select>
                  </div>
                  <button
                    onClick={() => handleAddToBag(product, index)}
                    style={{ margin: '150px', position: 'relative', top: '-130px' }}
                  >
                    Add To Bag
                  </button>
                </p>
              </li>
            ))
          ) : (
            <p style={{ marginLeft: '90px' }}>No products found</p>
          )}
        </ul>
      </div>
    </div>
  );
};

const Cart = ({ cartItems }) => {
  return (
    <div>
      {/* <h2>Cart</h2> */}
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.name} - Size: {item.size} - Price: {item.discountprice}
          </li>
        ))}
      </ul>
      <div className='social-media1'>
        <h4><b>DM For More Details<hr /></b></h4>
        <img src='whatsapp icon.png'/>
        

      // </div>
      
    </div>
  );
};

export default App;
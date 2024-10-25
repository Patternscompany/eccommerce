

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Men = ({ handleClick }) => {
  const [selectedSizes, setSelectedSizes] = useState({});
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const Products = [
    { image: '/men1.webp', name: 'Cinnamon - brown', price: 1999, discountprice: 1220 },
    { image: '/men2.1.webp', name: 'Olive - Oasis', price: 1999, discountprice: 1220 },
    { image: '/men3.webp', name: 'Olive - Oasis', price: 1999, discountprice: 1220 },
    { image: '/men4.webp', name: 'Fierce - Black', price: 1999, discountprice: 1220 },
    { image: '/men5.webp', name: 'Olive - Oasis', price: 1999, discountprice: 1220 },
    { image: '/men6.webp', name: 'Warm Beige Classic', price: 1499, discountprice: 1399 },
    { image: '/men7.webp', name: 'Festive patterns - Green', price: 1499, discountprice: 999 },
    { image: '/men8.webp', name: 'Checks Style - Navy', price: 1499, discountprice: 999 },
    { image: '/men9.webp', name: 'Festive patterns - White', price: 1499, discountprice: 999 },
    { image: '/men10.webp', name: 'Limitless - Blue', price: 1499, discountprice: 1199 },
    { image: '/men11.1.webp', name: 'Be Bold - Maroon', price: 1399, discountprice: 1049 },
    { image: '/men12.webp', name: 'Be Bold - Beige', price: 1199, discountprice: 1049 },
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
          style={{ padding: '10px', width: '130px',height:'30px' ,fontSize: '16px',textAlign:'center',justifyContent:'center',marginLeft:'780px',position:'relative',top:'-100px' }}
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

export default Men;





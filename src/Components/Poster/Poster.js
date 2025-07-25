
import React from 'react';
import poster from '../Assets/poster.jpg';
import one from '../Assets/women1.1.webp';
import two from '../Assets/women2.1.webp';
import three from '../Assets/women3.11.webp';
import four from '../Assets/women4.webp';
import five from '../Assets/women5.webp';
import six from '../Assets/new1.webp';
import seven from '../Assets/new2.webp';
import eight from '../Assets/new3.webp';
import nine from '../Assets/new4.webp';
import ten from '../Assets/new5.webp';
import eleven from '../Assets/new6.webp';
import twelve from '../Assets/new7.webp';
import thirteen from '../Assets/new8.webp';






export const Poster = ({ handleClick }) => {
  console.log('handleClick received:', handleClick);
  const products = [
    { image: one, name: 'Tutti Dress', salePrice: 1200, regularPrice: 3000 },
    { image: two, name: 'Rangeela Goa', salePrice: 1250, regularPrice: 3600 },
    { image: three, name: 'Coptic Dress', salePrice: 1250, regularPrice: 3600 },
    { image: four, name: 'Diamond Dress', salePrice: 1250, regularPrice: 3600 },
    { image: five, name: 'Tutti Dress', salePrice: 1250, regularPrice: 3600 },
  ];

  return (
    <div>
      {
        
      }
      <div className='poster'>
        <img src={poster} alt="Poster" />
        <div className='popular'>
          <h2>POPULAR FOR WOMEN <hr /></h2>
        </div>
      </div>
      <div className='images'>
        
        {products.map((product, index) => (
          <div key={index} className='image-container'>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <div className='price'>
              <span className='sale-price'>Rs. {product.salePrice}</span>
              <span className='regular-price'>Rs. {product.regularPrice}</span>
              <span className='btn'>
                <button onClick={()=>handleClick(product)}>Add to Bag</button>
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* New Collection Section */}
      <div className='new-collection'>
        <h1>New Collection <hr /></h1>
        <div className='collection-img'>
          <img src={six} alt="New Collection 1" />
          <img src={seven} alt="New Collection 2" />
          <img src={eight} alt="New Collection 3" />
          <img src={nine} alt="New Collection 4" />
          <img src={ten} alt="New Collection 5" />
          <img src={eleven} alt="New Collection 6" />
          <img src={twelve} alt="New Collection 7" />
          <img src={thirteen} alt="New Collection 8" />
        </div>
        {/* Subscription Card */}
      
      </div>
    </div>
  );
}; 


import React from 'react';

const Cart = ({ cart, handleRemove }) => {
  const totalPrice = cart.reduce((total, item) => total + item.discountprice, 0);

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h3 className="cart-item-name">{item.name}</h3>
                <p className="cart-item-price">Price: ₹{item.discountprice}</p>
                <p className="cart-item-size">Size: {item.size}</p>
                <button onClick={() => handleRemove(index)} className="remove-button">
                  Remove
                </button>
              </div>
            </div>
          ))}
          <h5 className='delivery'> Delivery Charges = 0</h5>
          <h5 className='total-price'>Total Price: ₹{totalPrice}</h5>
          <button className='buynow'>Buy Now</button>
        </div>
      )}
    </div>
  );
};

export default Cart;


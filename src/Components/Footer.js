import React from 'react'
import bag from './Assets/Shoping bag.png';
import instagram from './Assets/instagram icon.png';
import whatsapp from './Assets/whatsapp icon.png';
import email from './Assets/email icon.png';

const Footer = () => {
  return (
    <div className='card'>
    <h2>Get Exclusive Offers On Your Email</h2>
    <p>Subscribe to our newsletter and stay updated.</p>
    <form>
      <input type='text' placeholder='Please Enter your Email' />
      <button type="submit">Submit</button>
    </form>
    <div className='bag1'>
      <img src={bag} alt="Shopping Bag" />
    </div>
    <div className='text1'>
      <h2><b>SHOPPER</b></h2>
    </div>
    <div className='text2'>
      <p><b>Company</b></p>
      <p><b>Products</b></p>
      <p><b>Offices</b></p>
      <p><b>About</b></p>
      <p><b>Contact</b></p>
    </div>
    <div className='social-media'>
      <h5><b>CONNECT WITH US <hr /></b></h5>
    </div>
    <div className='logos'>
      <img src={instagram} alt="Instagram" />
      <img src={whatsapp} alt="WhatsApp" />
      <img src={email} alt="Email" />
    </div>
  </div>
  )
}

export default Footer
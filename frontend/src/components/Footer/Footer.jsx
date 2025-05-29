import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className='footer-content'>
            <div className='footer-content-left'>
                <div className="logo">CoupanApp</div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore harum voluptatum est debitis praesentium facilis aliquam nesciunt quam expedita. Velit architecto at delectus sit corrupti perspiciatis aspernatur, incidunt earum blanditiis.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />                    
                </div>
            </div>
            <div className='footer-content-center'>
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className='footer-content-right'>
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+1-123-456-7890</li>
                    <li>contact@coupanapp.com</li>
                </ul>
            </div>            
        </div>
        <hr />
        <p className='footer-copyright'>Copyright 2025 © CoupanApp.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
import React from 'react'
import './index.css'
import logo from '../assets/image/logo.png'
const Footer = () => {
  return (
    <div id='footer-main'>
        <div id='ft1'>
            <div>Powered by <img src={logo}></img></div>
        </div>
        <div id='ft2'>
            <div>Need Help?</div>
            <div>Privacy Policy <span>&</span> terms</div>
        </div>
    </div>
  )
}

export default Footer
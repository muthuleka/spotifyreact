import React from 'react'
import { FiInstagram } from "react-icons/fi";
import { CiTwitter } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import '../Footer/Footer.css'

const Footer = () => {
  return (
    <>
    <div className='footer'>
        <div className='company'>
            <h4>Company</h4>
            <p>About</p>
            <p>Jobs</p>
            <p>For the Records</p>
        </div>
        <div className='company'>
            <h4>Communities</h4>
            <p>For Artist</p>
            <p>Developer</p>
            <p>Advertising</p>
            <p>Investors</p>
            <p>Vendors</p>

        </div>
        <div className='company'>
            <h4>Useful Links</h4>
            <p>Support</p>
            <p>Free Mobile App</p>
        </div>
        <div className='company'>
            <h4>Spotify Plans</h4>
            <p>premium Individual</p>
            <p>premium Duo</p>
            <p>premium Family</p>
            <p>premium Student </p>
            <p>Spotify Free</p>
        </div>
        <div className='social_media'>
            <FiInstagram className='icon'/>
            <FaFacebook className='icon'/>
            <CiTwitter className='icon'/>
        </div>
    </div>
    <div className='line'>

    </div>
    <div className='trade'>
        <p>2024 Spotify AB</p>

    </div>
    
    
    </>
  )
}

export default Footer
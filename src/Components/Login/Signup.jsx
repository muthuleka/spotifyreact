import React from 'react'
import '../Login/Logsign.css'
import { FaSpotify } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Signup = () => {
  return (
    <>
    <div className="signup-container">
        <div className="spotify_logo">
            <FaSpotify className='spotify-logo'/>
        </div>
        <h1>Sign up to start listening</h1>
        <form className="signup-form">
            <label for="email">Email address</label>
            <input type="email" id="email" placeholder="name@domain.com"/>
            <a href="" class="phone-signup">Use phone number instead.</a>
            <button type="submit" class="next-btn">Next</button>
        </form>
        <div className="divider">
            <span>or</span>
        </div>
        <div className="social-signup">
            <button class="google-signup">Sign up with Google</button>
            <button class="facebook-signup">Sign up with Facebook</button>
            <button class="apple-signup">Sign up with Apple</button>
        </div>
        <div className="login-link">
            <p>Already have an account? <Link to="/login"><a href="">Log in here.</a></Link></p>
        </div>
        <div className='privacy_policy'>
            <p>This site is protected by reCAPTCHA and the Google
            Privacy Policy and Terms of Service apply.</p>
        </div>
    </div>
    
    
    
    </>
  )
}

export default Signup
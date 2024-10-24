import React from 'react'
import '../Login/Logsign.css'
import { FaSpotify } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
    <div className="login-container">
            <div className="spotify-brand">
                <FaSpotify/>
            </div>
            <h1 className="login-heading">Log in to Spotify</h1>
            <div className="social-login-options">
                <button className="login-btn google-login">Continue with Google</button>
                <button className="login-btn facebook-login">Continue with Facebook</button>
                <button className="login-btn apple-login">Continue with Apple</button>
                <button className="login-btn phone-login">Continue with phone number</button>
            </div>
            <form className="login-form">
                <label htmlFor="user-email" className="login-label">Email or username</label>
                <input type="text" id="user-email" className="login-input" placeholder="Email or username" />
                <label htmlFor="user-password" className="login-label">Password</label>
                <input type="password" id="user-password" className="login-input" placeholder="Password" />
                <div className="login-remember">
                    <input type="checkbox" id="remember" className="login-checkbox" defaultChecked />
                    <label htmlFor="remember" className="login-checkbox-label">Remember me</label>
                </div>
                <button type="submit" className="login-submit-btn">Log In</button>
            </form>
            <div className='forgot_spotify'>
                <p>Don't have an account? <Link to="/signup"><a href="">Sign up for Spotify</a></Link></p>
            </div>
        </div>
        <div className='privacy_login'>
            <p>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
        </div>
        
    
    
    
    </>
  )
}

export default Login
import React from 'react'
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import "../../Pages/Homes.css"
import "../content/Content.css"
import { CiSearch } from "react-icons/ci";
import SearchBrowse from './SearchBrowse';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const SearchContent = () => {
    // const SearchContent = () => {
        const navigate = useNavigate();  // Using useNavigate hook to go back
        const goBack = () => {
          navigate(-1);  // Function to go back to the previous page
        };
  return (
    <>
    <div className='content_main'>
        <div className='content_navbar'>
            <div className="nav_arrows">
                <button onClick={goBack} className="nav_arrow_left_arrow">
                    <h3><SlArrowLeft /></h3>
                </button>
                <button className="nav_arrow_right_arrow">
                    <h3><SlArrowRight/></h3>
                </button>
                <input className='search-input' type="text"  placeholder='What Do You Want To Play' name="" id="" />
            </div>
            <div className="nav_auth_buttons">
            <Link to="/signup"><button className="signup_button">Sign up</button></Link>
            <Link to="/login"><button className="login_button">Log in</button></Link>
            </div>
        </div>
        <div className=''>
            <SearchBrowse/>
        </div>
    </div>
    
    
    </>
  )
}



export default SearchContent;

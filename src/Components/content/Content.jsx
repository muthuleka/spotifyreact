import React from 'react'
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import "../../Pages/Homes.css"
import "../content/Content.css"
import Slider from '../Slider/Slider';
import { Link, useNavigation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Content = () => {


  return (
    <>
    <div className='content_main'>
        <div className='content_navbar'>
            <div className="nav_arrows">
                <button className="nav_arrow_left_arrow">
                    <h3><SlArrowLeft/></h3>
                </button>
                <button className="nav_arrow_right_arrow">
                    <h3><SlArrowRight/></h3>
                </button>
            </div>
            <div className="nav_auth_buttons">
                <Link to="/signup"><button className="signup_button">Sign up</button></Link>
                <Link to="/login"><button className="login_button">Log in</button></Link>
            </div>
        </div>
        <div className=''>
            <Slider/>
        </div>
    </div>
    
    </>
  )
}

export default Content
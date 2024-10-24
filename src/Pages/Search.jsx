import React from 'react'
import { FaSpotify } from "react-icons/fa6";

import { FiSearch } from "react-icons/fi";
import { BiLibrary } from "react-icons/bi";
import { IoMdAdd } from "react-icons/io";
import { GrLanguage } from "react-icons/gr";
import { MdOutlineSearchOff } from "react-icons/md";
import { RiSearchEyeLine } from "react-icons/ri";

import { GoHomeFill } from "react-icons/go";



import { Link } from 'react-router-dom';


import { RiSearch2Fill } from "react-icons/ri";




import '../Pages/Homes.css'
import SearchContent from '../Components/Search/SearchContent';

const Search = () => {
  return (
    <>
    <div className='spotify_navbar'>
    <div className='spotify_navbar_left'>
        <div className='spotify'>
            <Link to="/">
            <div className='spotifybox'>
                <div className='spotifyicon'>
                    <h2><FaSpotify /> </h2>
                    <h3> Spotify </h3>
                </div>
            </div>
            </Link>
            <div className='spotifyhomesearch'>
                    <Link to="/">
                    <div className='spotifyhome'>
                        <div>
                        <h2><GoHomeFill /></h2>
                        </div>
                        <div>
                        <h4>Home</h4>
                        </div>
                    </div>
                    </Link>
                    <Link to="/search">
                    <div className='spotifysearch'>
                        <div>
                        <h2><RiSearchEyeLine /></h2>
                        </div>
                        <div>
                        <h4>Search </h4>
                        </div>
                    </div>
                    </Link>
                </div>
        </div>
        <div className='spotifylibrary'>
            <div className='spotifylibraryplus'>
                <div className='spotifyicon'>
                    <h2><BiLibrary /> </h2>
                    <h3> Your Library  </h3>
                </div>
                <div>
                    <h2><IoMdAdd/></h2>
                </div>
            </div>
            <div>
                <div className='spotify_library_scroll'>
                    <div className='spotify_library_box'>
                        <h5>Create Your First Playist</h5>
                        <h5>It's easy,we'ill help you </h5>
                        <div>
                            <button>Create Playist </button>
                        </div>
                    </div>
                    <div className='spotify_library_box' >
                        <h5>Let's find some podcasts to follow</h5>
                        <h5>We'll keep you updated on new episodes</h5>
                        <div>
                            <button>Create Playist </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='spotify_about'>
            <div className='Spotify_about_legal'>
                <div className='spotify_legal'>
                    <p>Legal</p>
                    <p>Safety & Privacy Center </p>
                    <p>Privacy Policy </p>
                </div>
                <div className='spotify_legal'>
                    <p>Cookies</p>
                    <p>About Ads & Privacy Center </p>
                    <p>Accessibility </p>
                </div>
                <div className='spotify_legal'>
                    <p>Cookies </p>
                </div>
            </div>
            <div className='spotify_language'>
                <button><GrLanguage/>     English </button>
            </div>
        </div>
        </div>
        </div>
        <div className='spotify_content_right'>
            <SearchContent/>
        </div>
        
    </div>
    <div className="gradient_section">
        <div className="gradient_section_content">
            <h3>Preview of Spotify</h3>
            <p>Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed.</p>
        </div>
        <div className='gradient_section_signup'>
            <Link to="/signup"><button>Sign up free</button></Link>
        </div>
    </div>
    
    
    </>
  )
}

export default Search
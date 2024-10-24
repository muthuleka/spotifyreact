import React from 'react'
import '../Slider/Slideralbum.css'
import { IoPlayCircleOutline } from "react-icons/io5";

const SpotifyTrending = (props) => {
    console.log(props);
    let newtrending=props.mytrending 
    console.log(newtrending);
    
    
  return (
    <>
    {newtrending.map(function (datas) {
        return(<div className='sliders'>
            <div className='sliderimgs'>
                <img src={datas.image} alt="" />
            </div>
            <div className='sliderconts'>
                <h4>{datas.name} </h4>
                <p>{datas.podcast}</p>
            </div>
            <div className='spotify_plays'>
                <h1><IoPlayCircleOutline/></h1>
            </div>
            </div>)
    })}
    
    
    
    </>
  )
}

export default SpotifyTrending
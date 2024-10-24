import React from 'react'
import '../Slider/Slideralbum.css'
import { IoPlayCircleOutline } from "react-icons/io5";

const Slideralbum = (props) => {
    console.log(props);
    let newalbums=props.myalbum
    console.log(newalbums);
    
    
  return (
    <>
    {newalbums.map(function (datas) {
        return( <div className='sliders'>
            <div className='sliderimgs'>
                <img src={datas.image} alt="" />
            </div>
            <div className='sliderconts'>
                <h4>{datas.album} </h4>
                <p>{datas.artist}</p>
            </div>
            <div className='spotify_plays'>
                <h1><IoPlayCircleOutline/></h1>
            </div>
    </div>
    )
    })}
    
    
    </>
  )
}

export default Slideralbum
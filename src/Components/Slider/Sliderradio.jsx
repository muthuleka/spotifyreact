import React from 'react'
import '../Slider/Slideralbum.css'
import { IoPlayCircleOutline } from "react-icons/io5";

const Sliderradio = (props) => {
    console.log(props);
    let newradio=props.myradio
    console.log(newradio);
    
  return (
    <>
    {newradio.map(function (datas) {
        return( <div className='sliders'>
            <div className='sliderimgs'>
                <img src={datas.image} alt="" />
            </div>
            <div className='sliderconts'>
                <h4>{datas.name} </h4>
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

export default Sliderradio
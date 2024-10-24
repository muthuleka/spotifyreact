import React from 'react'
import '../Slider/Slideralbum.css'
import { IoPlayCircleOutline } from "react-icons/io5";

const SliderFeatured = (props) => {
    console.log(props);
    let newfeatured=props.myfeatured
    console.log(newfeatured);
    

  return (
    <>
    {newfeatured.map(function (datas) {
        return(<div className='sliders'>
            <div className='sliderimgs'>
                <img src={datas.image} alt="" />
            </div>
            <div className='sliderconts'>
                <h4>{datas.name} </h4>
                <p>{datas.artists[0]}</p>
            </div>
            <div className='spotify_plays'>
                <h1><IoPlayCircleOutline/></h1>
            </div>
    </div>)
    })}
    
    
    </>
  )
}

export default SliderFeatured
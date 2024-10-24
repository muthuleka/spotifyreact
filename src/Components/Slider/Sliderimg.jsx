import React from 'react'
import '../Slider/Sliderimg.css'
import arrahman from '../../Assest/arrahman.webp'
import ani from '../../Assest/ani.webp'
import vijay from '../../Assest/vijay.webp'
import ajith from '../../Assest/ajith.webp'
import { IoPlayCircleOutline } from "react-icons/io5";


const Sliderimg = (props) => {
    console.log(props);
    let newpopular=props.mypopular
    console.log(newpopular);

        
  return (
    <>
    {newpopular.map(function (data) {
        return(<div className='slider'>
            <div className='sliderimg'>
                <img src={data.image} alt="" />
            </div>
            <div className='slidercont'>
                <h4>{data.name} </h4>
                <p>Artist</p>
            </div>
            <div className='spotify_play'>
                <h1><IoPlayCircleOutline/></h1>
            </div>
    </div>)
    })}

    
    </>
  )
}

export default Sliderimg
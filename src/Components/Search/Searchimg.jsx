import React from 'react'
import '../../Pages/Search.css'
import ajith from '../../Assest/ajith.webp'

const Searchimg = (props) => {
    console.log(props);
    let newbrowseImages=props.browseImages
    console.log(newbrowseImages);
    
    
  return (
    <>
    {newbrowseImages.map(function (datass) {
        return(<div className='browse'>
            <div className='browseimg'>
                <img src={datass.image} alt="" />
            </div>
        </div>)
    })}
    
    
    </>
  )
}

export default Searchimg
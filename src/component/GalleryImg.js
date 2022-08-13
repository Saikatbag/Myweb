import React from 'react'
import './css/galleryImag.css'

function GalleryImg(props) {
  return (
    
      <div className="dream">
        <img src={props.img} alt="img" />
      </div>

  )
}

export default GalleryImg
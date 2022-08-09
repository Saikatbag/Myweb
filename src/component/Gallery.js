import React from 'react'
import './css/gallery.css'
import a from "../asset/img/1.jpg"
import b from "../asset/img/2.jpg"
import c from "../asset/img/3.jpg"
import d from "../asset/img/4.jpg"
import e from "../asset/img/5.jpg"

function Gallery() {
    return (

        <div className='main'>
            <div className='main-gallery'>
            <div className='gallery'>
                <h1> Photo <span> Gallery </span> </h1>
            </div>

                    <div className="box">
                    <div className="dream">
                        <img src={a} alt="img"/>
                        </div>
                        
                    </div>
                

            </div>
        </div>
    )
}

export default Gallery
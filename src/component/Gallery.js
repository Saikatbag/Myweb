import React from 'react'
import './css/gallery.css'
import a from "../asset/img/1.jpg"
import b from "../asset/img/2.jpg"
import c from "../asset/img/3.jpg"
import d from "../asset/img/4.jpg"
import e from "../asset/img/5.jpg"
import f from "../asset/img/6.jpg"
import g from "../asset/img/6.jpg"

import GalleryImg from './GalleryImg'
import { LazyLoadComponent } from 'react-lazy-load-image-component';

function Gallery() {
    return (
        // container-fluid
        <div className='main'>
            <div className='main-gallery'>
            <div className='gallery'>
                <h1> Photo <span> Gallery </span> </h1>
            </div>
            <div className="box">
            <LazyLoadComponent>
            <GalleryImg img={a}/>
            <GalleryImg img={b}/>
            <GalleryImg img={c}/>
            <GalleryImg img={d}/>
            <GalleryImg img={e}/>
            <GalleryImg img={f}/>
            <GalleryImg img={g}/>
            </LazyLoadComponent>
            </div>

            </div>
        </div>
       
    )
}

export default Gallery
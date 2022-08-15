import React, { Component} from 'react'
import bg from '../asset/bg.mp4';
import bg2 from '../asset/bg2.mp4';

import Textmy from './Textmy'
import './css/home.css'
import TypeAnimation from 'react-type-animation';
import { LazyLoadComponent } from 'react-lazy-load-image-component';




export default class Home extends Component {
     constructor (prpps){
      super ();
      var now = new Date();
    var time = now.getHours();
      this.state={
        str1:" I'm a Software Development Engineer, from Garhbeta West Bangal. ",
        str2:" My areas of interest lie in FullStack Development, DevOps. ",
        str3:" I have experience in building scalable frontend architectures. ",
        time: time
      }
    }
  render() {
    return (
        <div className='mainhome'>
          <div className='overlay'></div>
          <LazyLoadComponent>
          {(this.state.time>=6 & this.state.time<18)? <video src={bg2} autoPlay loop muted />:<video src={bg} autoPlay loop muted />}
          
          </LazyLoadComponent> 
          <div className='content'>
            <div className='text_colum'>
            <Textmy direction='true' name="Hey I'm " />
            <Textmy  name="Saikat Bag" />
            </div>
            <div className='text_contenar'>
            <TypeAnimation
            cursor={true}
            sequence={["",3000,this.state.str1, 3000, this.state.str2,3000, this.state.str3,3000,'']}
            wrapper="h4"
            repeat={Infinity}
            />
            </div>
          </div>
        </div>
    )
  }
}

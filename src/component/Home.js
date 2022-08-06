import React, { Component} from 'react'
import bg from '../asset/bg.mp4';
import Textmy from './Textmy'
import './css/home.css'
import TypeAnimation from 'react-type-animation';
// import Slide from 'react-reveal/Slide';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
// const bg = React.lazy(()=> import ("../asset/bg.mp4"))

export default class Home extends Component {
     constructor (){
      super ();
      console.log("i am constructor")
      this.state={
        str1:" I'm a Software Development Engineer . ",
        str2:" My areas of interest lie in FullStack Development, DevOps . ",
        str3:" I have experience building scalable frontend architectures. "
      }
    }
  render() {
    return (
   
        <div className='main'>
          <div className='overlay'></div>
          <LazyLoadComponent>
          <video src={bg} autoPlay loop muted />
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

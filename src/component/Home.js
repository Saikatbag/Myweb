import React, { Component} from 'react'
import bg from '../asset/bg.mp4';
import Textmy from './Textmy'
import './css/home.css'
import Zoom from 'react-reveal/Zoom';
// const bg = React.lazy(()=> import ("../asset/bg.mp4"))

export default class Home extends Component {
     constructor (){
      super ();
      console.log("i am constructor")
      this.state={
        str :"Hi, I am from Garhbeta, West Bengal, I have done my BE in Information Technology at Jadavpur University. And also work as react netive developer for 7 month, I am looking for a good oprotunetion "
        
      }
    }
  render() {
    return (
   
        <div className='main'>
          <div className='overlay'></div>
          
          <video src={bg} autoPlay loop muted />
        
          <div className='content'>
            <div className='text_colum'>
            <Textmy direction='true' name="Siakat " />
            <Textmy  name=" Bag" />
            </div>
            <div className='text_contenar '>
            {/* {this.state.str.split(" ").map((s) => {return (<h4>
              <Zoom  right delay={1000}>
              <div>{s+' '}</div>
              </Zoom>
              </h4>) })} */}
              <h4>
              <Zoom  right cascade delay={2000} duration={4000}>
              <div>{this.state.str}</div>
              </Zoom>
              </h4>
            </div>
          </div>
        </div>
   
    )
  }
}

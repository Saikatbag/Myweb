import React, { Component } from 'react'
import AboutCard from './AboutCard'
import i1 from '../asset/home.jpg'
import i2 from '../asset/web.png'
import i3 from '../asset/car.png'
import './css/about.css'
import { LazyLoadComponent } from 'react-lazy-load-image-component';


export default class About extends Component {
  render() {
    return (
      <div className='container p-3 my-3 border '>
        <div className='project'>
          <h1> Project <span>List</span> </h1>
        </div>
        <div className='row'>
          <LazyLoadComponent>
            <div className='col-md-4' >
              <AboutCard title="Home Autometion "
                description="This project Control home application using Arduino by giving real time status of room temperature, Humidity, Door and Window Status "
                imgUrl={i1}
                newsUrl={''}
              />
            </div>
            <div className='col-md-4' >
              <AboutCard title="Racing Game"
                description="This is a Racing game, which has several levels . It also Auto starts the race after an accident within 10 sec "
                imgUrl={i3}
                newsUrl=''
              />
            </div>
            <div className='col-md-4' >
              <AboutCard title="Webpage"
                description="This is a portfolio web page, Mongo,Express,React,Node(MERN) "
                imgUrl={i2}
                newsUrl=''
              />
            </div>
          </LazyLoadComponent>
        </div>
      </div>
    )
  }
}

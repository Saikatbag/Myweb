import React, { Component } from 'react'

import img from "../asset/saikat.png";
import './css/about.css';
import { Link } from 'react-router-dom';


export default class About extends Component {


  constructor(props) {
    super(props);
    var now = new Date();
    var time = now.getHours();
    this.state = {
      time: time,
    }
  }
  render() {
    return (
      <div className='container my-2 border'>
        <div className='containerIntro'>
          <div className='imgcontainer'>
            <img src={img} alt="img" />
          </div>
          <div className='intro'>
            <h1><span>Hi I am</span> Saikat Bag</h1>
            <p> I am From Gargbeta, Paschim Medinipur,West Bengal. I am a softwer Engring,
              I graduation in IT at Jadavpur University. I love photography & Videography.
              I enjoy watching movies, listening to music, and going on road trips.
            </p>
          </div>

        </div>
          <div className='container-2'>
          <h1>Favorite <span>Subject</span></h1>
          <p> One of my Favorite subject is Data structures and algorithms <a href="https://github.com/Saikatbag/python" target="blank" c>chack this link</a>, Object-oriented programming. java and python is my Favorite language </p>
            <h1>Collage <span>Project</span></h1>
            <p>In my graduation  I have done a lot of projects, you can chack this my <Link to="project">project list</Link></p>

          </div>
      </div>
    )
  }
}

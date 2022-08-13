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
            <p> I am From Gargbeta, Paschim Medinipur,West Bengal. 
              I have done my graduation in IT at Jadavpur University. I am a softwer Engring,
            </p>
          </div>

        </div>
          <div className='container-2'>
          <h1>Career  <span>Objective</span></h1>
          <p> Strong in design and integration with intuitive problem-solving skills.
              Proficient in PYTHON, Java .<br/>
              Passionate about implementing and launching new projects. Ability to
              translate business requirements into technical solutions. Looking to start
              my career as an entry-level software engineer with a reputed firm driven
              by technology.<br/> </p>
            <h1>Write  <span>Experience</span></h1>
            <p>I worked on ReactNative Seven month. (1-December-2021 to 26-Jun-2022) I Developed font end design,then navigation, called API. (App Developer)</p>
            <h1>My <span>Projects</span></h1>
            <p>In my graduation  I have done a lot of projects, you can chack this my <Link to="project">project list.</Link></p>
            <h1>My <span>Skills</span></h1>
            <p><span>Programing Language -</span> Java, Python .
            <br/>
            <br/>
            <span>Web Technology - </span> 
            <br/><span>Font End:-</span>HTML, CSS, React.
            <br/><span>Back End:-</span>Express JS, node.
            <br/> 
            <br/><span>DataBase</span>MongoDB, My sql.
            <br/>
            <br/><span>Subject -</span><a href="https://github.com/Saikatbag/python" target="blank" >Data Structures</a>, Object-oriented programming. ,<br/> 

              {/* I love <Link to="project">pphotography & Videography. </Link>
              I enjoy watching movies, listening to music, and going on road trips. */}
              </p>
              

          </div>
      </div>
    )
  }
}

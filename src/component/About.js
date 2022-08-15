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
            <p> I am passionate about programming and always willing to learn about new technologies and
              getting to knew new things.I love to accept new challenges that will gave me chances to explore
              new tools and concepts which I never knew before and enhance my skills .
            </p>
          </div>

        </div>
        <div className='container-2'>
          <h1>Career Objective</h1>
          <p> Curious and hardworking individual who loves to explore and
            work on new and trending technologies in the market for
            contributing to the society and organization in an more efective
            and efcient way. Keen and open to knowledge of diferent
            domains, challenges. Believe in step by step growth and
            achievements .<br /> </p>
          <h1>Work  Experience</h1>
          <p>RUBY TECHNOLOGIES (December 2021 to Jun 2022) <br />
            <ul>
            Worked in a mobile application that  used to store customer details and 
             to inform them via mail about their given services.<br/>
             Technology used:
              <li>React Native,</li>
              <li> Node,</li>
              <li> Express, </li>
              <li> MongoDB </li>
            </ul>
            </p>
          <h1>My Projects</h1>
          <p>In my graduation  I have done a lot of projects,
            <ul>
              <li><span>Home Autometion :- </span>
                This project Control home application using Arduino by giving real time status</li>
              <li> <span>Racing Game :- </span>
                This is a Racing game, which has several levels . </li>
              <li><span>Webpage :- </span>
                This is a portfolio web page, Mongo,Express,React,Node(MERN)</li>
            </ul>

            Goto my <Link to="project">project list.</Link></p>
          <h1>My Skills</h1>
          <p><span>Programing Language -</span> Java, Python .
            <br />
            <br />
            <span>Web Technology - </span>
            <br /><span>Font End:-</span>HTML, CSS, React.
            <br /><span>Back End:-</span>Express JS, node.
            <br />
            <br /><span>DataBase</span>MongoDB, My sql.
            <br />
            <br /><span>Subject -</span><a href="https://github.com/Saikatbag/python" target="blank" >Data Structures</a>, Object-oriented programming. ,<br />

            {/* I love <Link to="project">pphotography & Videography. </Link>
              I enjoy watching movies, listening to music, and going on road trips. */}
          </p>


        </div>
      </div>
    )
  }
}

import React, { Component } from 'react'
import ProjectCard from './ProjectCard'
import i1 from '../asset/home.jpg'
import i2 from '../asset/web.png'
import i3 from '../asset/car.png'
import git from '../asset/git.png'
import rn from '../asset/rn.png'
import './css/project.css'

import { LazyLoadComponent } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom'


export default class Project extends Component {
  render() {
    return (
      <div className='container p-3 my-3 border'>
        <div className='project'>
          <h1> Project <span>List</span> </h1>
        </div>
        <div className='row'>
          <LazyLoadComponent>
            <div className='col-md-4' >
              <ProjectCard title="Home Autometion "
                description="This project Control home application using Arduino by giving real time status of room temperature, Humidity, Door and Window Status "
                imgUrl={i1}
                newsUrl={''}
              />
            </div>
            <div className='col-md-4' >
              <ProjectCard title="Racing Game"
                description="This is a Racing game, which has several levels . It also Auto starts the race after an accident within 10 sec "
                imgUrl={i3}
                newsUrl='https://github.com/Saikatbag/python/tree/main/CarGame'
              />
            </div>
            <div className='col-md-4' >
              <ProjectCard title="Webpage"
                description="This is a portfolio web page, Mongo,Express,React,Node(MERN) "
                imgUrl={i2}
                newsUrl='http://saikatbag.s3-website-us-west-2.amazonaws.com/'
              />
            </div>
            <div className='col-md-4' >
              <ProjectCard title="React-Native"
                description="React-Native mobile application  "
                imgUrl={rn}
                newsUrl='https://github.com/Saikatbag/React-Native'
              />
            </div>
            <div className='col-md-4' >
              <ProjectCard title="Git Automation"
                description="Build a Github repository which automatically sends an event (webhook) on the following Github actions (Push, Pull Request, Merge) to a registered endpoint, and store it to MongoDB"
                imgUrl={git}
                newsUrl='https://github.com/Saikatbag/GitAutomation'
              />
            </div>
          </LazyLoadComponent>
        </div>
        <Link to ='/about' className="btn btn-secondary shadow rounded">Back</Link>
      </div>
    )
  }
}

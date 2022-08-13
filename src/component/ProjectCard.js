import React, { Component } from 'react';
import img from '../asset/images.jpg';

export default class ProjectCard extends Component {
  render() {
    let {title,description,imgUrl,newsUrl} = this.props;
    return (
      <div className="card p-2 my-2" >
        <img src={imgUrl?imgUrl:img} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={newsUrl} target = "blank" className="btn btn-sm btn-secondary">Project</a>
          </div>
      </div>
    );
  }
}

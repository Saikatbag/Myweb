import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
// import "bootstrap/dist/css/bootstrap.css";


export default class Nav extends Component {

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <NavLink className="navbar-brand" to='/saikat'> Saikat</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <NavLink className="navbar-brand" to='/'>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="navbar-brand" to='/about'>About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="navbar-brand" to='/gallery'>Gallery</NavLink>
            </li>
          </ul>

        </div>
      </nav>
    )
  }
}

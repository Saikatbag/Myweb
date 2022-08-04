import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
export default class Nav extends Component {
 
  render() {

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
        <div className="container-fluid">
          {/* <a className="navbar-brand" href="/">Saikat</a> */}
          <NavLink className="navbar-brand" to='/saikat'> Saikat</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {/* <a className="nav-link" aria-current="page" href="/">Home</a> */}
                <NavLink className="navbar-brand" to='/'>Home</NavLink>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link" href="/">News</a> */}
                <NavLink className="navbar-brand"  to='/news'>News</NavLink>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link" href="/" tabindex="-1" aria-disabled="true">About</a> */}
                <NavLink className="navbar-brand" to='/about'>About</NavLink>
                <NavLink className="navbar-brand" to='/cv'>Create CV</NavLink>
              </li>
            </ul>
           
          </div>
        </div>
      </nav>
    )
  }
}

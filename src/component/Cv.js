
import React, { Component } from 'react';
import { Link, Outlet } from "react-router-dom";

export default class Cv extends Component {
   render() {
    return (
      <div className='container p-3 my-3 border shadow rounded' >
        <p>Fill the From</p>
       <Outlet/>
       <div className="btn-con">
            <button type="button" className="btn btn-secondary shadow rounded">Save</button>
            <Link to ='from2' className="btn btn-secondary shadow rounded">Save & Next </Link>
        </div>
      </div>
    )
  }
}

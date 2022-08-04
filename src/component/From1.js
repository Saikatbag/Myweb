import React, { Component } from 'react'
import "./css/btn.css"
import 'react-image-crop/dist/ReactCrop.css';
export default class From1 extends Component {
  render() {
    return (
        <div>
        
        <div className='r'>
            <div className='f-1'>
                <div className="mb-3">
                    <label for="formGroupExampleInput" className="form-label">Name </label>
                    <input type="text"
                        className="form-control"
                        id="Name"
                        placeholder="Enter your name" />
                </div>
                <div className="mb-3">
                    <label for="formGroupExampleInput2" className="form-label">Title</label>
                    <input type="text"
                        className="form-control"
                        id="title"
                        placeholder="Enter your  title . . . (Department)" />
                </div>
                <div className="mb-3">
                    <label for="formGroupExampleInput2" className="form-label">Address</label>
                    <input type="text"
                        className="form-control"
                        id="address"
                        placeholder="Enter your address . ." />
                </div>
                <div className="mb-3">
                    <label for="formGroupExampleInput2" className="form-label">Eamil</label>
                    <input type="text"
                        className="form-control"
                        id="email"
                        placeholder="Enter your email . ." />
                </div>
                <div className="mb-3">
                    <label for="formGroupExampleInput2" className="form-label">Phone Number</label>
                    <input type="text"
                        className="form-control"
                        id="phone"
                        placeholder="Enter your Phone number . ." />
                </div>
            </div>
            <div className='f-1 p-2 mx-2 '>
                <p>Select your profile picture</p>
                <div className="border center-content p-4 rounded">
                    <form method="post" action="#" id="#">
                        <div className="form-group files">
                            <label>Upload Your File </label>
                            <input type="file" className="form-control my-2" multiple="" />
                        </div>
                    </form>
                </div>
            </div>

        </div>
    </div>
    )
  }
}

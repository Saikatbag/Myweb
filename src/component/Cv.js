
import React, { Component } from 'react';
import "./css/btn.css"
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
export default class Cv extends Component {
  constructor(props) {
    super(props);
    this.state = {
      src:null,
      crop:{ aspect: 16 / 9 },
      image:null,
      output:null,
    }
  }


 
  
selectImage = (file) => {
    this.state.src(URL.createObjectURL(file));
  };
  
cropImageNow = () => {
    const canvas = document.createElement('canvas');
    const scaleX = this.state.image.naturalWidth / this.state.image.width;
    const scaleY = this.state.image.naturalHeight / this.state.image.height;
    canvas.width = this.state.crop.width;
    canvas.height = this.state.crop.height;
    const ctx = canvas.getContext('2d');
  
    const pixelRatio = window.devicePixelRatio;
    canvas.width = this.state.crop.width * pixelRatio;
    canvas.height = this.state.crop.height * pixelRatio;
    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    ctx.imageSmoothingQuality = 'high';
  
    ctx.drawImage(
      this.state.image,
      this.state.crop.x * scaleX,
      this.state.crop.y * scaleY,
      this.state.crop.width * scaleX,
      this.state.crop.height * scaleY,
      0,
      0,
      this.state.crop.width,
      this.state.crop.height,
    );
      
    // Converting to base64
    const base64Image = canvas.toDataURL('image/jpeg');
    this.state.output(base64Image);
  };

  render() {
    return (
      <div className='container p-3 my-3 border shadow rounded' >
        <p>Fill the From</p>
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
            <center>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            this.state.image(e.target.files[0]);
          }}
        />
        <br />
        <br />
        <div>
          {this.state.src && (
            <div>
              <ReactCrop src={this.state.src} onImageLoaded={this.state.image}
                crop={this.state.crop} onChange={this.state.crop} />
              <br />
              <button onClick={this.cropImageNow}>Crop</button>
              <br />
              <br />
            </div>
          )}
        </div>
        <div>{this.state.output}</div>
      </center>


          </div>

        </div>
        <div className="btn-con">
          <button type="button" className="btn btn-secondary shadow rounded">Save</button>
          <button type="button" className="btn btn-secondary shadow rounded">Save & Next </button>
        </div>
      </div>
    )
  }
}

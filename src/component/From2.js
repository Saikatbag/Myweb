import React, { Component } from 'react'
import "./css/btn.css"
// import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

export default class From2 extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <div className='r'>
                    <div className='f-1'>
                        <div className="mb-3">
                            <label for="formGroupExampleInput" className="form-label">Career Objective </label>
                            <input type="text"
                                className="form-control"
                                id="Career Objective"
                                placeholder="Enter Career Objective" />
                        </div>
                        <div className="mb-3">
                            <label for="formGroupExampleInput2" className="form-label">Education 1</label>
                            <input type="text"
                                className="form-control"
                                id=" High_Education"
                                placeholder="Enter your highest Education" />
                            <input type="text"
                                className="form-control my-2"
                                id=" High_Education_institution"
                                placeholder="Enter your institution" />
                            <input type="text"
                                className="form-control"
                                id=" High_Education_place"
                                placeholder="Enter your institution Place" />
                            <input type="text"
                                className="form-control my-2"
                                id=" High_Education_year"
                                placeholder="Enter your passing Year" />
                            <input type="text"
                                className="form-control"
                                id=" High_Education_marks"
                                placeholder="Enter your Marks" />
                        </div>

                        <div className="mb-3">
                            <label for="formGroupExampleInput2" className="form-label">Education 2</label>
                            <input type="text"
                                className="form-control"
                                id=" High_Education"
                                placeholder="Enter your highest Education" />
                            <input type="text"
                                className="form-control my-2"
                                id=" High_Education_institution"
                                placeholder="Enter your institution" />
                            <input type="text"
                                className="form-control"
                                id=" High_Education_place"
                                placeholder="Enter your institution Place" />
                            <input type="text"
                                className="form-control my-2"
                                id=" High_Education_year"
                                placeholder="Enter your passing Year" />
                            <input type="text"
                                className="form-control"
                                id=" High_Education_marks"
                                placeholder="Enter your Marks" />
                        </div>

                        <div className="mb-3">
                            <label for="formGroupExampleInput2" className="form-label">Project</label>
                            <input type="text"
                                className="form-control"
                                id="project_name"
                                placeholder="Enter your project name" />
                            <input type="text"
                                className="form-control my-2"
                                id="project_decription"
                                placeholder="Enter your project Decription" />
                            <input type="text"
                                className="form-control"
                                id="project_Skill"
                                placeholder="Enter your project skill" />
                        </div>
                    </div>
                    <div className='f-1 mx-2 '>
                        <div className="mb-3">
                            <label for="formGroupExampleInput2" className="form-label">Skills</label>
                            <input type="text"
                                className="form-control"
                                id="skills"
                                placeholder="Enter your skills . ." />
                        </div>
                        <div className="mb-3">
                            <label for="formGroupExampleInput2" className="form-label">Exprience</label>
                            <input type="text"
                                className="form-control"
                                id="exprience"
                                placeholder="Enter your exprience . ." />
                                <input type="text"
                                className="form-control my-2"
                                id="exprience_time"
                                placeholder="Enter your exprience time" />
                        </div>
                        <div className="mb-3">
                            <label for="formGroupExampleInput2" className="form-label">Hobbies</label>
                            <input type="text"
                                className="form-control"
                                id="hobbies"
                                placeholder="Enter your hobbies . ." />
                        </div>
                        <div className="mb-3">
                            <label for="formGroupExampleInput2" className="form-label">Languages</label>
                            <input type="text"
                                className="form-control"
                                id="languages"
                                placeholder="Enter your languages . ." />
                        </div>
                        <div className='f-1 p-2 mx-2 '>
                        <p>Select your Signature</p>
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

            </div>
        )
    }
}

import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import React, { Component } from 'react';
import img from "../asset/sai.png";
import sig from "../asset/saikatsig.png";
import "./css/cv.css";

export default class Saikat extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }
 downlodPdf() {
    const input = document.getElementById('content');
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'JPEG', 0, 0);
        // pdf.output('dataurlnewwindow');
        pdf.save("saikat.pdf");
      })
    ;
  }
  render() {
    return (
      <div className='container p-3 my-3 ' >
      <div className='container p-3 my-3 border main_cv_container' id='content' >
        <div className='cv'>
          <div className='ca' >
            <div className='ca1'>
              <h1>Saikat Bag </h1>
              <h3>Information Technology</h3>
              <p>Garhbeta<br/>
              Paschim Medinipur * 721127<br/>
              9832854600<br/>
              goponbag@gmail.com<br/>
              </p>
              
            </div>
            <div className='ci p-2'>
              <img src={img} style={{ width: '14rem' }} alt="..."></img>
            </div>
          </div>
          <div className='row border-top con' style={{fontSize: "13px"}}>
            <div className='col-md-6 p-2'>
              <h5>CAREER OBJECTIVE :</h5>
              Strong in design and integration with intuitive problem-solving skills.
              Proficient in PYTHON, Java and JavaScript.<br/>
              Passionate about implementing and launching new projects. Ability to
              translate business requirements into technical solutions. Looking to start
              my career as an entry-level software engineer with a reputed firm driven
              by technology.<br/>
            </div>
            <div className='col-md-6 p-2'>
            <h5>IT SKILLS :</h5>
            JAVA(Basic), Python, JavaScript<br/>
            React, ReactNative<br/>
            MongoDb,<br/>
            </div>
            <div className='col-md-6 p-2'>
            <h5>EDUCATION :</h5>
            Bachelor in Information Technology<br/>
            Jadavpur University, Kolkata<br/>
            2021,<br/>
            6.9 CGPA<br/><br/>
            Diploma in Computer Science<br/>
            Raja Ranjit Kishore Government Polytechnic, West Bengal<br/>
            2017,<br/>
            7.3 CGPA<br/>
            </div>
            <div className='col-md-6 p-2'>
            <h5>EXPERIENCE:</h5>
            Seven month work on ReactNative. (App Developer),
            <br/>

            </div>

            <div className='col-md-6 p-2'>
            <h5>PROJECTS:</h5>
            1. Home Automation:<br/>
            This project Control home application using Arduino by giving real time
            status of room temperature, Humidity, Door & Window Status etc.
            <br/>
            Skill : JAVA (Android Application) | JavaScript, HTML ( Using Web Interface) | C++(Using
            Arduino) |Red Node|<br/><br/>
            2. Racing Game (Python) :<br/>
            This is a Racing game, which has several levels . It also Auto starts the race after an
            accident within 10 sec.<br/>
            Skill : Python(PyGame) | Adobe Illustrator
            <br/><br/>
            3. Webpage (React) :
            This is a portfolio web page, heir use sum basic news api for newes, and also use weather api for view daly wather report. 
            Go to this link http://saikatbag.s3-website-us-west-2.amazonaws.com/<br/>
            Skill : React | (onGoing)
            </div>
            <div className='col-md-6 p-2'>
            <h5>HOBBIES:</h5>
            Technical Stuff knowledge,<br/>
            Photography, videography,<br/>
            Robotics,<br/>
            <br/>
            <h5>LANGUAGES:</h5>
            English, Hindi, Bengali
            </div>
          </div>
          <div className='ca' >
            <div className='my-3'>
            Place: Garhbeta <br/>
            Date: {new Date().toLocaleString()}
            </div>
            <div className='my-3'>
              <p>Signature</p>
              <img src={sig} style={{ width: '10rem' }} alt="..."></img>
            </div>
          </div>
        </div>
      </div>
        <button onClick={this.downlodPdf} type="button" className="btn btn-secondary">DownlodPdf</button>
      </div>
    )
  }
}

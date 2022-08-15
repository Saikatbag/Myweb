import React, { Component,} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './component/About';
import Contact from './component/Contact';
import Footer from './component/Footer';
import Gallery from './component/Gallery';
import Home from './component/Home';
import Nav from './component/Nav';
import Project from './component/Project';
import Saikat from './component/Saikat';


export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="saikat" element={<Saikat />} />
          <Route path="/" element={<Home />} />  

          <Route path="about" >
          <Route index element={<About/>} />
          <Route path="project" element={<Project />} />  
          </Route>

          <Route path="gallery" element={<Gallery />} />
          

         

          <Route path='contact'element={<Contact/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    )
  }
}

export default App
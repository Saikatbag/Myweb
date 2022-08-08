import React, { Component,} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './component/About';
import Contact from './component/Contact';
import Cv from './component/Cv';
import Footer from './component/Footer';
import From1 from './component/From1';
import From2 from './component/From2';
import Home from './component/Home';
import Nav from './component/Nav';
import Saikat from './component/Saikat';


export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="saikat" element={<Saikat />} />
          <Route path="/" element={<Home />} />     
          <Route path="about" element={<About />} />
          <Route path="cv" element={<Cv/>} >
          <Route index element={<From1/>} />
          <Route path='from2'element={<From2/>}/>
          </Route>
          <Route path='contact'element={<Contact/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    )
  }
}

export default App
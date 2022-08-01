// import PropTypes from 'prop-types'
import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './component/About';
import Home from './component/Home';
import Nav from './component/Nav'
import NewsContenar from './component/NewsContenar'
import Saikat from './component/Saikat';

export class App extends Component {


  render() {
    return (
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Saikat />} />
          <Route path="/saikat" element={<Home />} />
          <Route path="/news" element={<NewsContenar />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App
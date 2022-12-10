import React  from 'react';

import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/home'
import About from './pages/about'
import Resume from './pages/resume'
import Contact from './pages/contact'

import Navbar from './containers/navbar';


const App = () => {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/resume" element={<Resume/>} />
        <Route exact path="/contact" element={<Contact/>} />
        <Route element={<p>Path not resolved</p>} />
        {/* <Route exact path="/somepath" element={ Recommendations } /> */}
      </Routes>          
    </HashRouter>
  );
}

export default App;
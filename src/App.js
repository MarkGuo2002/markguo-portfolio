import React, { useEffect, useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import './index.css';
import 'aos/dist/aos.css'; // Import the styles

import AOS from 'aos';

import Navbar from './Navbar';
import Hero from './Hero';
import AboutMe from './AboutMe';
import Projects from './Projects';

function App() {
  return(
    <div>
      <Navbar />
      <div className='main-container px-16 py-20 lg:px-96'>
        <Hero />
        <AboutMe />
        <Projects />
      </div>
      
    </div>
  )
  
}

export default App;

import React, { useEffect } from 'react';
import './index.css';
import 'aos/dist/aos.css'; // Import the styles
import AOS from 'aos';

import Navbar from './Navbar';
import Hero from './Hero';
import AboutMe from './AboutMe';
import Projects from './Projects';
import ContactMe from './ContactMe';
import AdditionalInfo from './AdditionalInfo';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true
    });
  }
  , [])

  return(
    <div id="hero">
      <Navbar />
      <div className='main-container px-8 py-32 lg:px-36 w-full flex flex-col items-center'>
        <Hero />
        <AboutMe />
        <div className='w-full mt-12'>
                <AdditionalInfo />
        </div>
        <Projects />
        <ContactMe />

      </div>
      
    </div>
  )
  
}

export default App;

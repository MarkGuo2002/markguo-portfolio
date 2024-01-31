import React, { useEffect } from 'react';
import './App.css';
import "bulma/css/bulma.css"
import 'aos/dist/aos.css'; // Import the styles

import AOS from 'aos';
import Navbar from "./Navbar";
import GoTopButton from './GoTopButton';
import AboutMe from './AboutMe';
import Hero from './Hero';

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
    <Navbar />
    <GoTopButton />
    <div className='body'>
      <Hero />
      <AboutMe />
      <section className='section' data-aos="fade-right" id="publications">
        <div className="content is-normal">
          <h1>Publications</h1>
          <p>Mark Guo is a student at the University of Waterloo studying Computer Science. He is currently in his 2A term.</p>
        </div>
      </section>
      <section className='section' data-aos="fade-right" id="projects">
        <div className="content is-normal">
          <h1>Projects</h1>
          <p>Mark Guo is a student at the University of Waterloo studying Computer Science. He is currently in his 2A term.</p>
        </div>
      </section>
      <section className='section' data-aos="fade-right" id="contacts">
        <div className="content is-normal">
          <h1>Contacts</h1>
          <p>Mark Guo is a student at the University of Waterloo studying Computer Science. He is currently in his 2A term.</p>
        </div>
      </section>
      
    </div>
    </>
    
  );
}

export default App;

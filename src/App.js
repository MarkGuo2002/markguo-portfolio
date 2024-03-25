import React, { useEffect, useState} from 'react';
import './App.css';
import "bulma/css/bulma.css"
import 'aos/dist/aos.css'; // Import the styles

import AOS from 'aos';
import Navbar from "./Navbar";
import GoTopButton from './GoTopButton';
import AboutMe from './AboutMe';
import Hero from './Hero';
import Projects from './Projects';

function App() {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  useEffect(() => {
    AOS.init();

    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const shouldRender = viewportWidth >= 800;
  return (
    <>
      <Navbar render={shouldRender}/>
     {shouldRender && (
        <>
          <GoTopButton />
          <Hero />
        </>
      )}

    <div className='wrapper'>
        <AboutMe />
        <Projects />  
    </div> 
    
    {/*  wrapper */}
    <footer className="footer" id="Contacts">
        <div className="content has-text-centered">
          <p>
          <strong>Contacts</strong><br></br><br></br>
            markguo2002@gmail.coms
          </p>
        </div>
      </footer>
    </>
    
  );
}

export default App;

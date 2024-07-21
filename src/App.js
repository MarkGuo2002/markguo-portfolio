import './index.css';
import 'aos/dist/aos.css'; // Import the styles


import Navbar from './Navbar';
import Hero from './Hero';
import AboutMe from './AboutMe';
import Projects from './Projects';
import ContactMe from './ContactMe';

function App() {
  return(
    <div id="hero">
      <Navbar />
      <div className='main-container px-16 py-20 lg:px-96'>
        <Hero />
        <AboutMe />
        <Projects />
        <ContactMe />

      </div>
      
    </div>
  )
  
}

export default App;

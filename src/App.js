import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 

import './index.css';
import 'aos/dist/aos.css'; // Import the styles
import AOS from 'aos';
import Portfolio from './portfolio/Portfolio';
import Ling from './anniversary/Ling'


function App() {
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true
    });
  }
  , [])

  return(
    <Router>
      <Routes>
        <Route index element={ <Portfolio /> } />
        
        <Route path='/blogs' element={ <Ling /> } />
      </Routes>
    </Router>
    
  )
  
}

export default App;

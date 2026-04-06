import React from 'react'
import About from './Components/About';
import Experience from './Components/Experience';

import Hero from './Components/Hero';
import Mern from './Components/Mern';
import Footer from './Components/Footer';
const Routing = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/Mern" element={<Mern />} />
        <Route path="/About" element={<About />}/>
        <Route path="/Experience" element={<Experience />} />
        
        <Route path="/Footer" element={<Footer />} />
      </Routes>
    </>
  )
}

export default Routing
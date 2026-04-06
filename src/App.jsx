import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Hero from './Components/Hero';
import Mern from './Components/Mern';
import About from './Components/About';
import Experience from './Components/Experience';

import Footer from './Components/Footer';

function App() {
  React.useEffect(() => {
    const sections = document.querySelectorAll("section[data-reveal]");

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    sections.forEach((sec) => observer.observe(sec));

    return () => observer.disconnect();
  }, []);

  return (
    <>
        <Navbar/>
      <section id='hero' data-reveal>
        <Hero/>
      </section>
      <section id='mern' data-reveal>
        <Mern/>
      </section>
      <section id='about' data-reveal>
        <About/>
      </section>
      <section id='experience' data-reveal>
        <Experience/>
      </section>
      
      <section id='footer' data-reveal>
        <Footer/>
      </section>
    </>
  );
}

export default App;

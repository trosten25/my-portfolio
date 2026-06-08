import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/hero';
import About from './components/about';
import Projects from './components/project';
import Contact from './components/contact';
import Skills from './components/skills';
import './App.css';

function App() {
  return (
    <div className="portfolio-wrapper">
      <Navbar />
      {/* 1. Hero Section (Includes #home logic internally) */}
      <section id="home">
        <Hero />
      </section>
      
      {/* 2. About Section */}
      <section id="about">
        <About />
      </section>

      {/* 3. Skills Section */}
      <section id="skills">
        <Skills />
      </section>
      
      {/* 4. Projects Section */}
      <section id="projects">
        <Projects />
      </section>
      
      {/* 5. Contact Section */}
      <section id="contact">
        <Contact /> 
      </section>
    </div>
  );
}

export default App;
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Profiles from './components/Profiles';

function App() {
  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat bg-fixed" 
      style={{ backgroundImage: "url('/3.jpg')" }}
    >
      {/* Navbar with scroll-to-section functionality */}
      <Navbar />

      {/* Each section is given a unique id for smooth scrolling */}
      <main className="flex-grow mt-10">
        <section id="home" className="min-h-screen">
          <Home />
        </section>
        <section id="projects" className="min-h-screen">
          <Projects />
        </section>
        <section id="profiles" className="min-h-screen">
          <Profiles/>
        </section>
        <section id="skills" className="min-h-screen">
          <Skills />
        </section>
        <section id="contact" className="min-h-screen">
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;

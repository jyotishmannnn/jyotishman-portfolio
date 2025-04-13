import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Element } from 'react-scroll';
import ParticleBackground from './components/ParticleBackground';
import Hero from './components/Hero';
import About from './components/About';
import Achievements from './components/Achievements';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="relative bg-[#0A0A0A]">
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,rgba(10,10,10,0.3)_0%,rgba(10,10,10,0.7)_70%,rgba(10,10,10,0.9)_100%)]">
        <Canvas camera={{ position: [0, 0, 25], fov: 50 }}>
          <Suspense fallback={null}>
            <ParticleBackground />
          </Suspense>
        </Canvas>
      </div>
      
      <main className="relative z-10">
        <Element name="home">
          <Hero />
        </Element>
        <Element name="about" className="bg-[#0A0A0A]/30 backdrop-blur-sm">
          <About />
        </Element>
        <Element name="achievements" className="bg-[#0A0A0A]/40 backdrop-blur-sm">
          <Achievements />
        </Element>
        <Element name="projects" className="bg-[#0A0A0A]/30 backdrop-blur-sm">
          <Projects />
        </Element>
        <Element name="skills" className="bg-[#0A0A0A]/40 backdrop-blur-sm">
          <Skills />
        </Element>
        <Element name="contact" className="bg-[#0A0A0A]/30 backdrop-blur-sm">
          <Contact />
        </Element>
      </main>
    </div>
  );
}

export default App;
import React from 'react';
import BackgroundCanvas from './components/BackgroundCanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Internship from './components/Internship';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingResume from './components/FloatingResume';

export default function App() {
  return (
    <div className="portfolio-app" style={{ position: 'relative', minHeight: '100vh' }}>
      {/* Interactive Background Particle & Ambient Mesh */}
      <BackgroundCanvas />

      {/* 1. Sticky Navigation Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main id="main-content">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. About Me Section */}
        <About />

        {/* 4. Technical Skills Section */}
        <Skills />

        {/* 5. Professional Experience Section */}
        <Experience />

        {/* 6. Internship Section */}
        <Internship />

        {/* 7. Featured Projects Section */}
        <Projects />

        {/* 8. Certifications & Exposure Section */}
        <Certifications />

        {/* 9. Achievements Section */}
        <Achievements />

        {/* 10. Education Section */}
        <Education />

        {/* 11. Contact Section */}
        <Contact />
      </main>

      {/* 12. Minimal Modern Footer */}
      <Footer />

      {/* Extra Premium Feature: Floating Resume Download */}
      <FloatingResume />
    </div>
  );
}

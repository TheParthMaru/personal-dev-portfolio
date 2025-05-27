import './index.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Projects from './components/Projects'
import Contact from './components/Contact'
import { useEffect, useState } from 'react';
import { Analytics } from "@vercel/analytics/react";

function App() {
  const [currentSection, setCurrentSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: 'home', el: document.body },
        { id: 'experience', el: document.getElementById('experience') },
        { id: 'projects', el: document.getElementById('projects') },
        { id: 'contact', el: document.getElementById('contact') },
      ];
      const scrollY = window.scrollY + 120; // offset for sticky navbar
      let active = 'home';
      for (let i = 1; i < sections.length; i++) {
        if (sections[i].el && scrollY >= sections[i].el.offsetTop) {
          active = sections[i].id;
        }
      }
      setCurrentSection(active);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-[75vw] mx-auto mt-8">
      <Header currentSection={currentSection} />
      <Hero />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
      <Analytics />
    </div>
  )
}

export default App

import React, { useEffect, useRef } from 'react';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const rootRef = useRef(null);

  useEffect(() => {
    document.title = "Lance Javaluyas | Front End Developer";
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const root = rootRef.current;
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const maxScroll = documentHeight - windowHeight;
    const scrollPercentage = (scrollTop / maxScroll) * 100;

    if (scrollPercentage > 95) {
      root.style.backgroundColor = '#0F0E11'; // Change background color when scrolled to the bottom
    } else {
      root.style.backgroundColor = ''; // Revert to default background color otherwise
    }
  };

  return (
    <div className='bg-[#0F0E11]' ref={rootRef}>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

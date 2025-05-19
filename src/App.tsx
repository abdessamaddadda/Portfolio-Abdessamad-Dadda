import React, { useState, useEffect } from 'react';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import CV from './components/sections/CV';
import Work from './components/sections/Work';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Check for user's dark mode preference
  useEffect(() => {
    if (
      window.matchMedia && 
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      setDarkMode(true);
    }
  }, []);

  // Apply dark mode class to html element
  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <Hero />
        <About />
        <CV />
        <Work />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
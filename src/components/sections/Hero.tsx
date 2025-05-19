import React from 'react';
import Button from '../ui/Button';
import { ArrowDown } from 'lucide-react';
import backgroundImage from '../images/c1.jpg'; // ✅ Import de l'image

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative flex items-center min-h-screen dark:bg-gray-900">
      <div 
        className="absolute inset-0 z-0 bg-center bg-cover" 
        style={{ 
          backgroundImage: `url(${backgroundImage})`, // ✅ Utilisation correcte
          opacity: 0.5,
          filter: 'blur(8px)',
        }}
      ></div>

      <div className="container relative z-10 px-4 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="mb-6 text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl dark:text-white animate-fade-in">
            Salut, je suis <span className="text-blue-600 dark:text-blue-400">Abdessamad Dadda</span>
          </h1>
          <p className="mb-10 text-xl leading-relaxed text-gray-700 sm:text-2xl dark:text-gray-300 animate-fade-in-delay">
            Développeur Web & Mobile passionné, étudiant à l’ISMAGI – créateur de solutions modernes et intuitives et Entrepreneur .
          </p>

          <div className="flex flex-col justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 animate-fade-in-delay-2">
            <Button onClick={() => scrollToSection('contact')} variant="primary" size="lg">
              Me contacter
            </Button>
            <Button onClick={() => scrollToSection('work')} variant="secondary" size="lg">
              Voir mes projets
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute transform -translate-x-1/2 bottom-10 left-1/2 animate-bounce">
        <button 
          onClick={() => scrollToSection('about')} 
          className="flex flex-col items-center text-gray-500 transition-colors dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
          aria-label="Scroll down"
        >
          <span className="mb-2 text-sm">Faites défiler</span>
          <ArrowDown size={20} />
        </button>
      </div>
    </section>
  );
};

export default Hero;

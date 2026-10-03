import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FactsStrip from './components/FactsStrip';
import Range from './components/Range';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFab from './components/WhatsAppFab';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <FactsStrip />
        <Range />
        <Process />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}

export default App;

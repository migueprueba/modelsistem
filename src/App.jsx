import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import ValueProposition from './components/ValueProposition.jsx';
import Modules from './components/Modules.jsx';
import Specs from './components/Specs.jsx';
import ContactCTA from './components/ContactCTA.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-background text-on-surface flex flex-col overflow-x-hidden scroll-smooth">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ValueProposition />
        <Modules />
        <Specs />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}

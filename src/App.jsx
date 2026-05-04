import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsStrip from './components/StatsStrip';
import Experience from './components/Experience';
import Differentiation from './components/Differentiation';
import Waitlist from './components/Waitlist';
import Footer from './components/Footer';
import Mascot from './components/Mascot';
import MouseTrail from './components/MouseTrail';

function App() {
  return (
    <div className="min-h-screen bg-brand-offwhite font-sans text-brand-gray overflow-x-hidden selection:bg-brand-maroon selection:text-white relative cursor-none">
      <MouseTrail />
      <Navbar />
      <main>
        <Hero />
        <StatsStrip />
        <Experience />
        <Differentiation />
        <Waitlist />
      </main>
      <Footer />
      <Mascot />
    </div>
  );
}

export default App;

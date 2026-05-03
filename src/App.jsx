import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsStrip from './components/StatsStrip';
import Experience from './components/Experience';
import Differentiation from './components/Differentiation';
import FacilityInspiration from './components/FacilityInspiration';
import Waitlist from './components/Waitlist';
import Footer from './components/Footer';
import Mascot from './components/Mascot';
import MouseTrail from './components/MouseTrail';

function App() {
  return (
    <div className="min-h-screen bg-brand-navy font-sans text-white overflow-x-hidden selection:bg-brand-green selection:text-white relative cursor-none">
      <MouseTrail />
      <Navbar />
      <main>
        <Hero />
        <StatsStrip />
        <Experience />
        <Differentiation />
        <FacilityInspiration />
        <Waitlist />
      </main>
      <Footer />
      <Mascot />
    </div>
  );
}

export default App;

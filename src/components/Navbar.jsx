import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-brand-navy/80 backdrop-blur-xl border-b border-white/10 py-4 shadow-[0_4px_30px_rgba(0,0,0,0.5)]' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" className="text-2xl font-black tracking-tight text-white flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-lg bg-brand-blue flex items-center justify-center shadow-[0_0_15px_rgba(0,176,255,0.6)] group-hover:shadow-[0_0_25px_rgba(0,176,255,0.9)] transition-all">
            <span className="text-white text-sm font-black">TKC</span>
          </div>
          <span className="drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] group-hover:text-brand-green transition-colors duration-300">The Karting Club</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {['Experience', 'Track'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-sm font-bold uppercase tracking-widest text-white/70 hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] transition-all"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:block">
          <a 
            href="#waitlist"
            className="bg-transparent border-2 border-brand-blue hover:bg-brand-blue text-white px-8 py-2.5 rounded-full text-sm font-bold uppercase tracking-widest transition-all shadow-[0_0_15px_rgba(0,176,255,0.3)] hover:shadow-[0_0_25px_rgba(0,176,255,0.6)] hover:scale-105"
          >
            Join Waitlist
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden text-white p-2 hover:text-brand-maroon transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-brand-navy/95 backdrop-blur-xl border-b border-white/10 flex flex-col p-6 gap-6 shadow-2xl">
          {['Experience', 'Track'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-xl font-bold uppercase tracking-widest text-white hover:text-brand-maroon transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <a 
            href="#waitlist"
            onClick={() => setIsMobileMenuOpen(false)}
            className="bg-brand-maroon text-white px-6 py-4 rounded-full text-center font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(255,16,83,0.5)] mt-4"
          >
            Join Waitlist
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;

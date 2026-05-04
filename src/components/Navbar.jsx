import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);



  return (
    <header
      className="absolute top-0 left-0 right-0 z-50 bg-transparent py-6"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" className="flex items-center gap-3 group">
          <img
            src="/logo-icon.png"
            alt="The Karting Club"
            className="h-52 w-auto object-contain transition-transform group-hover:scale-105"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          <div className="hidden w-10 h-10 rounded-lg bg-brand-maroon items-center justify-center shadow-lg group-hover:shadow-xl transition-all">
            <span className="text-white text-sm font-black">TKC</span>
          </div>
          <span className="text-2xl font-black tracking-tight text-brand-navy">
            The Karting Club
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10 text-brand-navy/70">
          {['Experience'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-bold uppercase tracking-widest hover:text-brand-maroon transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:block">
          <a
            href="#waitlist"
            className="px-8 py-2.5 rounded-full text-sm font-bold uppercase tracking-widest transition-all hover:scale-105 shadow-lg bg-brand-navy text-white hover:bg-brand-maroon"
          >
            Join Waitlist
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 hover:text-brand-maroon transition-colors text-brand-navy"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-brand-navy border-b border-brand-gray/10 flex flex-col p-6 gap-6 shadow-2xl">
          {['Experience'].map((item) => (
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
            className="bg-brand-maroon text-white px-6 py-4 rounded-full text-center font-bold uppercase tracking-widest shadow-lg mt-4"
          >
            Join Waitlist
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;

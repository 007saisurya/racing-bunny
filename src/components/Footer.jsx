import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-brand-navy py-12 border-t border-brand-gray/10 relative z-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Left Side: Small Logo & Copyright */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          <a href="#" className="flex items-center group">
            <img 
              src="/logo-icon.png" 
              alt="The Karting Club" 
              className="h-32 w-auto object-contain brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity"
            />
          </a>
          <span className="hidden md:block w-px h-6 bg-white/20"></span>
          <p className="text-white/60 text-sm font-medium tracking-wide text-center md:text-left">
            &copy; {new Date().getFullYear()} The Karting Club. Phoenix, AZ. All rights reserved.
          </p>
        </div>

        {/* Right Side: Links */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          <nav className="flex gap-6">
            {['Experience', 'Track'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-sm font-bold uppercase tracking-widest text-white/60 hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>
          <span className="hidden md:block w-px h-6 bg-white/20"></span>
          <div className="flex gap-6">
            <a href="#" className="text-sm font-medium text-white/40 hover:text-white/80 transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm font-medium text-white/40 hover:text-white/80 transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-brand-navy pt-20 pb-10 border-t border-white/10 relative z-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10 mb-16">
          
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <a href="#" className="text-2xl font-black tracking-tight text-white flex items-center gap-3 mb-4 group">
              <div className="w-10 h-10 rounded-lg bg-brand-blue flex items-center justify-center shadow-[0_0_15px_rgba(0,176,255,0.5)] group-hover:shadow-[0_0_25px_rgba(0,176,255,0.9)] transition-all">
                <span className="text-white text-base font-black">TKC</span>
              </div>
              <span className="drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">The Karting Club</span>
            </a>
            <p className="text-brand-green text-sm tracking-widest uppercase font-bold drop-shadow-[0_0_10px_rgba(0,230,118,0.3)]">Phoenix, AZ</p>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {['Experience', 'Track'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-sm font-bold uppercase tracking-widest text-white/60 hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] transition-all"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-xs text-white/40 font-medium tracking-wide">
          <p>&copy; {new Date().getFullYear()} The Karting Club. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-brand-blue transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-blue transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

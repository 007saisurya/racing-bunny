import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Dynamic Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero-bg.jpg" 
          alt="Premium Karting Facility" 
          className="w-full h-full object-cover object-center scale-105 animate-float opacity-100"
          style={{ animationDuration: '30s' }}
        />
        {/* Gradients to ensure text visibility over image */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-offwhite via-brand-offwhite/80 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-offwhite via-transparent to-transparent z-10"></div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col items-start justify-center">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-brand-maroon/20 bg-white/80 backdrop-blur-md mb-8 shadow-lg"
        >
          <Zap size={18} className="text-brand-maroon animate-pulse" />
          <span className="text-sm font-bold tracking-widest uppercase text-brand-navy">Coming Soon to Phoenix, AZ</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-6 leading-none drop-shadow-md"
        >
          <span className="block text-brand-navy">THE NEXT</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-maroon to-brand-navy">
            EVOLUTION
          </span>
          <span className="block text-brand-gray">OF RACING.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-3xl font-medium text-brand-gray max-w-3xl leading-relaxed mb-12 border-l-4 border-brand-maroon pl-6 drop-shadow-md bg-white/30 backdrop-blur-sm p-4 rounded-r-2xl"
        >
          More than just an outdoor track. We’re building the ultimate motorsport playground in one of the fastest growing cities in America.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a 
            href="#waitlist"
            className="inline-flex items-center justify-center gap-4 px-10 py-5 rounded-full bg-brand-navy text-white font-black text-xl hover:scale-105 active:scale-95 transition-all shadow-[0_10px_30px_rgba(27,58,107,0.3)] hover:shadow-[0_15px_40px_rgba(27,58,107,0.5)] group"
          >
            GET ON THE WAITLIST
            <div className="w-10 h-10 rounded-full bg-white text-brand-navy flex items-center justify-center group-hover:bg-brand-maroon group-hover:text-white transition-colors">
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

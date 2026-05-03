import React from 'react';
import { motion } from 'framer-motion';

const Differentiation = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Diagonal background slice */}
      <div className="absolute inset-0 bg-brand-navy-light -skew-y-3 transform origin-top-left -z-10 border-y border-white/5 shadow-2xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter"
          >
            We don’t compete with <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-green">indoor karting.</span>
          </motion.h2>
          <p className="text-2xl text-white font-bold max-w-3xl mx-auto drop-shadow-[0_0_10px_rgba(0,176,255,0.8)]">
            WE COMPLETE IT.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16 max-w-6xl mx-auto">
          {/* Indoor Karting */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 w-full opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500"
          >
            <div className="border border-white/10 rounded-3xl p-10 bg-black/50">
              <h3 className="text-2xl font-bold mb-6 text-white/50 line-through decoration-brand-maroon decoration-4">The Old Way</h3>
              <ul className="space-y-4 font-mono text-white/40">
                <li>&gt; Entertainment-oriented</li>
                <li>&gt; Restricted electric karts</li>
                <li>&gt; Tight, repetitive indoor tracks</li>
                <li>&gt; Arcade atmosphere</li>
              </ul>
            </div>
          </motion.div>

          {/* VS Badge */}
          <div className="w-20 h-20 shrink-0 rounded-full bg-brand-blue flex items-center justify-center font-black text-3xl italic shadow-[0_0_30px_rgba(0,176,255,0.6)] z-20 hidden lg:flex">
            VS
          </div>

          {/* The Karting Club */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 w-full"
          >
            <div className="border border-neon-blue/30 rounded-3xl p-10 bg-gradient-to-br from-brand-blue-light/10 to-brand-navy-light relative overflow-hidden shadow-[0_0_40px_rgba(0,240,255,0.15)] group hover:shadow-[0_0_60px_rgba(0,240,255,0.3)] transition-all">
              <div className="absolute top-0 right-0 w-32 h-32 bg-neon-blue/20 blur-[50px] group-hover:bg-neon-blue/40 transition-all"></div>
              <h3 className="text-3xl font-black mb-6 text-white uppercase tracking-wider flex items-center gap-4">
                The New Standard
                <span className="w-3 h-3 rounded-full bg-neon-blue animate-pulse"></span>
              </h3>
              <ul className="space-y-4 text-xl font-medium text-white/90">
                <li className="flex items-center gap-3"><span className="text-neon-blue">⚡</span> Authentic motorsport culture</li>
                <li className="flex items-center gap-3"><span className="text-neon-blue">⚡</span> High-performance gas karts</li>
                <li className="flex items-center gap-3"><span className="text-neon-blue">⚡</span> Sprawling outdoor circuit</li>
                <li className="flex items-center gap-3"><span className="text-neon-blue">⚡</span> Premium country-club vibe</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Differentiation;

import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const cards = [
    { title: "High-Speed Circuit", stat: "0.75", label: "Miles" },
    { title: "Pro Karts", stat: "35", label: "Machines" },
    { title: "Sprawling Campus", stat: "12", label: "Acres" },
  ];

  return (
    <section id="experience" className="py-24 md:py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black mb-6 text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.2)] uppercase tracking-tight"
          >
            The Ecosystem
          </motion.h2>
          <p className="text-2xl text-neon-blue max-w-2xl mx-auto font-medium tracking-wide">
            DESIGNED FOR EVERY LEVEL OF ENTHUSIAST
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {cards.map((card, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="glass p-1 relative overflow-hidden group rounded-[2rem] animate-pulse-glow"
              style={{ animationDelay: `${index * 0.5}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/20 to-brand-green/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="bg-brand-navy-light/90 h-full rounded-[1.8rem] p-10 flex flex-col items-center justify-center text-center relative z-10 border border-white/5">
                <h3 className="text-2xl font-bold mb-8 text-white/80 uppercase tracking-widest">{card.title}</h3>
                <div className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/30 mb-2 drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)]">
                  {card.stat}
                </div>
                <div className="text-xl text-brand-green font-black uppercase tracking-[0.2em]">{card.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

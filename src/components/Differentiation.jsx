import React from 'react';
import { motion } from 'framer-motion';

const Differentiation = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-brand-offwhite">
      <div className="absolute inset-0 bg-white -skew-y-3 transform origin-top-left -z-10 border-y border-brand-gray/5 shadow-sm"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter text-brand-navy"
          >
            A new style of racing <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-navy to-brand-maroon">coming to the Valley.</span>
          </motion.h2>
        </div>

        <div className="flex flex-col lg:flex-row items-stretch justify-center gap-10 max-w-6xl mx-auto">
          {/* Indoor Karting */}
          <motion.div 
            initial={{ opacity: 0, x: -50, rotateY: 20 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="flex-1 w-full opacity-70 hover:opacity-100 transition-all duration-500 perspective-1000"
          >
            <div className="border border-brand-gray/10 rounded-3xl p-10 bg-brand-gray/5 h-full flex flex-col shadow-lg">
              <h3 className="text-3xl font-bold mb-6 text-brand-gray/60 decoration-brand-gray decoration-4">Indoor Karting</h3>
              <ul className="space-y-4 font-mono text-brand-gray/80 text-lg flex-1">
                <li className="flex items-start gap-2"><span>-</span> Electric karts with limited top speed</li>
                <li className="flex items-start gap-2"><span>-</span> Short, narrow tracks</li>
                <li className="flex items-start gap-2"><span>-</span> Limited overtaking opportunities</li>
                <li className="flex items-start gap-2"><span>-</span> Entertainment-focused experience</li>
              </ul>
            </div>
          </motion.div>

          {/* VS Badge */}
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="w-20 h-20 shrink-0 rounded-full bg-brand-navy flex items-center justify-center font-black text-3xl italic shadow-xl text-white z-20 self-center hidden lg:flex border-4 border-white"
          >
            VS
          </motion.div>

          {/* The Karting Club */}
          <motion.div 
            initial={{ opacity: 0, x: 50, rotateY: -20 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, translateY: -10 }}
            className="flex-1 w-full perspective-1000"
          >
            <div className="border-2 border-brand-maroon/20 rounded-3xl p-10 bg-gradient-to-br from-white to-brand-offwhite relative overflow-hidden shadow-2xl group transition-all h-full flex flex-col">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-maroon/10 blur-[50px] group-hover:bg-brand-maroon/20 transition-all group-hover:scale-150"></div>
              <h3 className="text-3xl font-black mb-6 text-brand-navy uppercase tracking-wider flex items-center gap-4">
                Outdoor Karting
                <span className="w-3 h-3 rounded-full bg-brand-maroon animate-pulse"></span>
              </h3>
              <ul className="space-y-4 text-xl font-bold text-brand-navy flex-1">
                <motion.li whileHover={{ x: 5 }} className="flex items-start gap-3"><span className="text-brand-maroon">✓</span> High-performance gas karts</motion.li>
                <motion.li whileHover={{ x: 5 }} className="flex items-start gap-3"><span className="text-brand-maroon">✓</span> 22ft wide, 0.75 mile long circuit</motion.li>
                <motion.li whileHover={{ x: 5 }} className="flex items-start gap-3"><span className="text-brand-maroon">✓</span> Real overtaking and race dynamics</motion.li>
                <motion.li whileHover={{ x: 5 }} className="flex items-start gap-3"><span className="text-brand-maroon">✓</span> Authentic motorsport experience</motion.li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Differentiation;

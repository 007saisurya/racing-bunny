import React from 'react';
import { motion } from 'framer-motion';

const FacilityInspiration = () => {
  return (
    <section id="track" className="py-24 md:py-32 relative overflow-hidden bg-brand-offwhite">
      <div className="absolute inset-0 bg-white -z-10 border-y border-brand-gray/5"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-16 md:w-2/3">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter text-brand-navy"
          >
            Built to be a <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-maroon to-brand-navy">Destination</span>.
          </motion.h2>
          <p className="text-xl md:text-3xl text-brand-gray/80 font-medium leading-relaxed">
            More than just a track. A place to arrive, race, learn, gather, and return to.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 md:h-[600px]">
          {/* Main Hero Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-8 rounded-[2rem] overflow-hidden relative group h-[400px] md:h-auto shadow-xl"
          >
            <img 
              src="/paddock-realistic.png" 
              alt="Premium Karting Facility Paddock" 
              className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-transparent to-transparent z-10"></div>
            <div className="absolute bottom-0 left-0 w-full p-10 z-20">
              <span className="text-3xl font-black tracking-widest uppercase text-white drop-shadow-md">The Paddock Club</span>
            </div>
          </motion.div>

          <div className="md:col-span-4 flex flex-col gap-4 md:gap-6">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex-1 rounded-[2rem] overflow-hidden relative group h-[250px] md:h-auto border border-brand-gray/10 shadow-lg"
            >
               <img 
                 src="/pro-shop.png" 
                 alt="Pro Shop" 
                 className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
               />
               <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 to-transparent z-10"></div>
               <div className="w-full h-full p-8 flex flex-col justify-end relative z-20">
                  <span className="text-xl font-bold tracking-widest uppercase text-white/90 group-hover:text-white group-hover:tracking-[0.3em] transition-all duration-300">Pro Shop</span>
               </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex-1 rounded-[2rem] overflow-hidden relative group h-[250px] md:h-auto border border-brand-gray/10 shadow-lg"
            >
               <img 
                 src="/cafe.png" 
                 alt="Café and Lounge" 
                 className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
               />
               <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 to-transparent z-10"></div>
               <div className="w-full h-full p-8 flex flex-col justify-end relative z-20">
                  <span className="text-xl font-bold tracking-widest uppercase text-white/90 group-hover:text-white group-hover:tracking-[0.3em] transition-all duration-300">Café & Lounge</span>
               </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacilityInspiration;

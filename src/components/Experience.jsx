import React from 'react';
import { motion } from 'framer-motion';
import { Flag, Trophy, Shield, Wrench } from 'lucide-react';

const Experience = () => {
  const cards = [
    { 
      title: "Arrive & Drive", 
      desc: "10-min sessions", 
      sub: "Adults and Kids",
      icon: <Flag size={48} className="text-white mb-4 drop-shadow-md group-hover:scale-125 group-hover:text-brand-maroon transition-all duration-500" />,
      bg: "/offering-arrive.png"
    },
    { 
      title: "Clinics & Academy", 
      desc: "Professional Training", 
      sub: "Kids, Teens, Adults",
      icon: <Shield size={48} className="text-white mb-4 drop-shadow-md group-hover:scale-125 group-hover:text-brand-maroon transition-all duration-500" />,
      bg: "/offering-academy.png"
    },
    { 
      title: "Races", 
      desc: "Sprint & Endurance", 
      sub: "Competitive Leagues",
      icon: <Trophy size={48} className="text-white mb-4 drop-shadow-md group-hover:scale-125 group-hover:text-brand-maroon transition-all duration-500" />,
      bg: "/offering-races.png"
    },
    { 
      title: "Membership", 
      desc: "On-site Storage", 
      sub: "For Kart Owners",
      icon: <Wrench size={48} className="text-white mb-4 drop-shadow-md group-hover:scale-125 group-hover:text-brand-maroon transition-all duration-500" />,
      bg: "/offering-membership.png"
    },
  ];

  return (
    <section id="experience" className="py-24 md:py-32 relative z-10 bg-brand-offwhite overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black mb-6 text-brand-navy uppercase tracking-tight"
          >
            Our Offerings
          </motion.h2>
          <p className="text-2xl text-brand-maroon max-w-2xl mx-auto font-medium tracking-wide">
            From first-time drivers to seasoned enthusiasts
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 mb-20 max-w-5xl mx-auto">
          {cards.map((card, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
              className="relative w-full max-w-[400px] mx-auto aspect-square rounded-full overflow-hidden flex flex-col items-center justify-center text-center group cursor-pointer shadow-2xl hover:shadow-[0_20px_50px_rgba(27,58,107,0.3)] hover:-translate-y-4 transition-all duration-500 ring-8 ring-white"
            >
              {/* Background Graphic */}
              <img 
                src={card.bg} 
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Dark Overlay that lightens slightly and shifts color on hover */}
              <div className="absolute inset-0 bg-brand-navy/80 group-hover:bg-brand-navy/50 transition-colors duration-500"></div>

              {/* Content */}
              <div className="relative z-10 p-8 flex flex-col items-center justify-center h-full w-full">
                {card.icon}
                <h3 className="text-3xl font-black mb-2 text-white uppercase tracking-wide drop-shadow-lg group-hover:-translate-y-2 transition-transform duration-500">{card.title}</h3>
                
                {/* Expanding Content on Hover */}
                <div className="h-0 overflow-hidden group-hover:h-20 transition-all duration-500 ease-in-out flex flex-col justify-start">
                  <div className="text-xl font-bold text-white/90 mb-1 drop-shadow-md translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                    {card.desc}
                  </div>
                  <div className="text-sm text-brand-offwhite font-semibold uppercase tracking-widest drop-shadow-md translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-150">
                    {card.sub}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

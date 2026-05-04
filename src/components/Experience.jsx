import React from 'react';
import { motion } from 'framer-motion';
import { Flag, Trophy, Shield, Wrench } from 'lucide-react';

const Experience = () => {
  const cards = [
    { 
      title: "Arrive & Drive", 
      desc: "10-min sessions", 
      sub: "Adults and Kids",
      icon: <Flag size={40} className="text-brand-maroon" />
    },
    { 
      title: "Clinics & Academy", 
      desc: "Professional Training", 
      sub: "Kids, Teens, Adults",
      icon: <Shield size={40} className="text-brand-navy" />
    },
    { 
      title: "Races", 
      desc: "Sprint & Endurance", 
      sub: "Competitive Leagues",
      icon: <Trophy size={40} className="text-brand-maroon" />
    },
    { 
      title: "Membership & Storage", 
      desc: "On-site facilities", 
      sub: "For Kart Owners",
      icon: <Wrench size={40} className="text-brand-navy" />
    },
  ];

  return (
    <section id="experience" className="py-24 md:py-32 relative z-10 bg-brand-offwhite">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 max-w-5xl mx-auto">
          {cards.map((card, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl p-10 flex flex-col items-center justify-center text-center relative border border-brand-gray/10 shadow-[0_10px_40px_rgba(27,58,107,0.05)] hover:shadow-[0_20px_50px_rgba(27,58,107,0.1)] transition-all group overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-navy to-brand-maroon scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              
              <div className="mb-6 bg-brand-offwhite w-24 h-24 rounded-full flex items-center justify-center shadow-inner">
                {card.icon}
              </div>
              <h3 className="text-3xl font-black mb-2 text-brand-navy uppercase tracking-wide">{card.title}</h3>
              <div className="text-xl font-bold text-brand-gray mb-2">
                {card.desc}
              </div>
              <div className="text-md text-brand-maroon font-semibold uppercase tracking-widest">{card.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

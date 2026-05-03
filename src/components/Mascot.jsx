import React from 'react';
import { motion } from 'framer-motion';

const Mascot = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 50, y: 50 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ 
        type: "spring", 
        stiffness: 100, 
        damping: 15,
        delay: 1 
      }}
      className="fixed bottom-0 right-10 z-50 pointer-events-none drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="relative flex flex-col items-center"
      >
        {/* Chat Bubble - Adjusted for flipped bunny */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2 }}
          className="absolute -top-8 right-24 bg-white text-brand-navy font-bold px-4 py-2 rounded-2xl rounded-br-none shadow-xl border-2 border-brand-blue whitespace-nowrap z-10"
        >
          Hop on the Waitlist! 🏁
        </motion.div>

        {/* Mascot Image - Flipped left, using screen blend mode for dark bg */}
        <img 
          src="/mascot-dark.png" 
          alt="Racing Bunny Mascot" 
          className="w-48 h-auto object-contain transform origin-bottom hover:scale-105 transition-transform pointer-events-auto cursor-pointer scale-x-[-1] mix-blend-screen opacity-90"
          onClick={() => {
            document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default Mascot;

import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const MouseTrail = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  // Use framer-motion springs for a fluid "water drop" trailing effect
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  useEffect(() => {
    cursorX.set(mousePosition.x);
    cursorY.set(mousePosition.y);
  }, [mousePosition, cursorX, cursorY]);

  return (
    <>
      {/* The main sharp dot */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-brand-green rounded-full pointer-events-none z-[9999] mix-blend-screen"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
          boxShadow: '0 0 10px rgba(0,230,118,1)'
        }}
      />
      {/* The larger, softer trailing glow (water drop feel) */}
      <motion.div
        className="fixed top-0 left-0 w-16 h-16 bg-brand-blue/30 rounded-full pointer-events-none z-[9998] blur-[8px] mix-blend-screen"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 150, mass: 1 }}
      />
    </>
  );
};

export default MouseTrail;

import React from 'react';

const StatsStrip = () => {
  const stats = [
    { value: "10-12", label: "Acres" },
    { value: "35", label: "Karts" },
    { value: "0.75", label: "Mile Circuit" },
    { value: "Amenities", label: "Reception • Café • Pro Shop" },
  ];

  return (
    <section className="border-y border-white/10 bg-brand-navy-light/30 backdrop-blur-sm relative z-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
          {stats.map((stat, index) => (
            <div key={index} className="py-8 md:py-12 px-4 flex flex-col items-center justify-center text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-sm md:text-base text-white/60 font-medium uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsStrip;

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, CheckCircle2, ArrowRight } from 'lucide-react';
import { saveEmailToWaitlist } from '../firebase';

const Waitlist = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email) {
      const success = await saveEmailToWaitlist(email);
      if (success) {
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
        setEmail('');
      } else {
        alert("There was an error saving your email. Have you set up your Firebase keys yet?");
      }
    }
  };

  return (
    <section id="waitlist" className="py-32 relative overflow-hidden flex items-center justify-center text-center z-10">
      {/* Background glowing effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue/20 blur-[120px] rounded-full -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-green/10 blur-[120px] rounded-full -z-10"></div>
      
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-brand-navy border border-brand-blue/30 shadow-[0_0_30px_rgba(0,176,255,0.2)] mb-8">
            <Mail size={32} className="text-brand-blue" />
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter uppercase text-white">
            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-green">Race?</span>
          </h2>
          <p className="text-xl md:text-2xl text-white/70 font-light max-w-2xl mx-auto">
            Spots are extremely limited. Join the waitlist today to secure early access and exclusive founding member benefits.
          </p>
        </motion.div>
        
        <div className="glass p-8 md:p-12 rounded-3xl border border-white/10 relative overflow-hidden shadow-2xl">
          {submitted ? (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center justify-center py-8"
            >
              <div className="w-20 h-20 bg-brand-green/20 rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 size={40} className="text-brand-green" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">You're on the list!</h3>
              <p className="text-white/60">Keep an eye on your inbox for updates.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 relative z-10">
              <div className="relative flex-1 group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-white/50 group-focus-within:text-brand-blue transition-colors">
                  <Mail size={20} />
                </div>
                <input 
                  type="email" 
                  required
                  placeholder="Enter your email address..."
                  className="w-full bg-white/5 border-2 border-white/10 rounded-full py-5 pl-12 pr-6 text-white placeholder:text-white/40 focus:outline-none focus:border-brand-blue focus:bg-white/10 transition-all text-lg"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <button 
                type="submit"
                className="w-full sm:w-auto px-8 py-5 rounded-full bg-gradient-to-r from-brand-blue to-brand-green text-brand-navy font-black text-lg uppercase tracking-wider hover:scale-105 active:scale-95 transition-all shadow-[0_0_30px_rgba(0,176,255,0.4)] hover:shadow-[0_0_50px_rgba(0,230,118,0.6)] flex items-center justify-center gap-2"
              >
                Join Waitlist
                <ArrowRight size={20} />
              </button>
            </form>
          )}
        </div>
        </div>
    </section>
  );
};

export default Waitlist;

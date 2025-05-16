import React from 'react';
import { motion } from 'framer-motion';
import { CountdownTimer } from './CountdownTimer';
import Banner from '../assets/Tracer-Banner.png';

export const Hero: React.FC = () => {
  const launchDate = new Date('2025-05-21T00:00:00Z');

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-primary-900/60 z-10" />
        <motion.div 
          className="w-full h-full"
          initial={{ scale: 1.1 }}
          animate={{ 
            scale: 1.0,
            y: [0, -10, 0],
          }}
          transition={{
            scale: { duration: 1.5 },
            y: { repeat: Infinity, duration: 6, ease: "easeInOut" }
          }}
        >
            <img 
              src={Banner}
              alt="Shoes Background" 
              className="w-full h-full object-cover object-center max-h-screen"
            />
        </motion.div>
      </div>
      
      {/* Content */}
      <div className="container-custom relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block mb-2 bg-accent-500 px-4 py-1 rounded-full text-white text-sm font-medium"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            #OwnYourGame
          </motion.div>
          
          <motion.h1 
            className="heading-xl text-white mb-4 drop-shadow-lg font-poppins"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="block">Stay Ahead. Save Big.</span>
          </motion.h1>
          
          <motion.p 
            className="text-gray-100 text-xl mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Be first inline when tracer lands on May 21st and score 20% off.
            <span className="block mt-2 text-accent-400 text-base">
              Offer valid from 7 days of launch. Join the early access squad.
            </span>
          </motion.p>

          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <CountdownTimer targetDate={launchDate} />
          </motion.div>
          
          <motion.div 
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <a 
              href="#subscription" 
              className="btn btn-accent"
            >
              Join Waitlist
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
import React from 'react';
import { motion } from 'framer-motion';
import { CountdownTimer } from './CountdownTimer';

export const Hero: React.FC = () => {
  // Launch date: 30 days from now
  const launchDate = new Date();
  launchDate.setDate(launchDate.getDate() + 30);

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image & Overlay */}
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
            src="https://images.pexels.com/photos/1456705/pexels-photo-1456705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="Premium Shoes Background" 
            className="w-full h-full object-cover"
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
            Premium Footwear
          </motion.div>
          
          <motion.h1 
            className="heading-xl text-white mb-4 drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="block">Coming Soon</span>
          </motion.h1>
          
          <motion.p 
            className="text-gray-100 text-xl mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Redefining the future of footwear with premium designs and unmatched comfort.
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
              Get Notified
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
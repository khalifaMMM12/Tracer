import React from 'react';
import { motion } from 'framer-motion';

interface CategoryToggleProps {
  activeCategory: 'casual' | 'trainers';
  setActiveCategory: (category: 'casual' | 'trainers') => void;
}

export const CategoryToggle: React.FC<CategoryToggleProps> = ({ 
  activeCategory, 
  setActiveCategory 
}) => {
  return (
    <div className="flex justify-center">
      <div className="relative inline-flex bg-gray-200 rounded-full p-1">
        {/* Background Pill that Moves */}
        <motion.div
          className="absolute inset-y-1 w-1/2 bg-primary-600 rounded-full shadow-md z-0"
          initial={false}
          animate={{
            x: activeCategory === 'casual' ? 0 : '100%',
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        />
        
        {/* Button: Casual */}
        <button
          className={`relative z-10 px-6 py-2 rounded-full text-sm font-medium transition-colors ${
            activeCategory === 'casual' ? 'text-white' : 'text-gray-700 hover:text-gray-900'
          }`}
          onClick={() => setActiveCategory('casual')}
        >
          Casual Shoes
        </button>
        
        {/* Button: Trainers */}
        <button
          className={`relative z-10 px-6 py-2 rounded-full text-sm font-medium transition-colors ${
            activeCategory === 'trainers' ? 'text-white' : 'text-gray-700 hover:text-gray-900'
          }`}
          onClick={() => setActiveCategory('trainers')}
        >
          Trainers
        </button>
      </div>
    </div>
  );
};
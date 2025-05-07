import React from 'react';
import { motion } from 'framer-motion';
import * as icons from 'lucide-react';

export const AboutUs: React.FC = () => {
  const features = [
    {
      icon: <icons.Footprints size={24} className="text-accent-500" />,
      title: 'Premium Quality',
      description: 'Crafted with the finest materials for maximum comfort and durability.',
    },
    {
      icon: <icons.Clock size={24} className="text-accent-500" />,
      title: 'Timeless Design',
      description: 'Classic aesthetics that never go out of style, for any occasion.',
    },
    // {
    //   icon: <icons.Award size={24} className="text-primary-600" />,
    //   title: 'Award Winning',
    //   description: 'Recognized globally for our innovative approach to footwear design.',
    // },
    {
      icon: <icons.Heart size={24} className="text-accent-500" />,
      title: 'Customer First',
      description: 'Dedicated to providing exceptional service and satisfaction.',
    },
  ];

  return (
    <section id="about" className="section bg-white">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="heading-lg text-gray-900 mb-4">About Tracer</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
          Tracer is more than a brand, it's a movement. <span className="font-bold">#OwnYourGame. </span>
          Built for the bold, the stylish, and the unapologetically authentic, 
          Tracer represents a new wave of youth culture where drip meets drive. Our apparel is designed to capture the energy of the streets, the
          spirit of sport, and the pulse of tomorrow.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 bg-primary-100 rounded-lg">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
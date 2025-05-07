import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ImageCarousel } from './ImageCarousel';
import { CategoryToggle } from './CategoryToggle';

export const ProductShowcase: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'casual' | 'trainers'>('casual');
  
  const casualShoes = [
    {
      id: 1,
      image: "https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Classic Lows",
      description: "Everyday casual comfort with premium leather"
    },
    {
      id: 2,
      image: "https://images.pexels.com/photos/2300334/pexels-photo-2300334.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Urban Walker",
      description: "Perfect for city life and casual outings"
    },
    {
      id: 3,
      image: "https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Weekend Comfort",
      description: "Stylish and comfortable for your weekend adventures"
    }
  ];
  
  const trainers = [
    {
      id: 4,
      image: "https://images.pexels.com/photos/2421374/pexels-photo-2421374.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Performance Max",
      description: "Engineered for maximum athletic performance"
    },
    {
      id: 5,
      image: "https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Runner Pro",
      description: "Lightweight design for serious runners"
    },
    {
      id: 6,
      image: "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Flex Trainer",
      description: "Flexibility and support for your workouts"
    }
  ];
  
  const activeShoes = activeCategory === 'casual' ? casualShoes : trainers;

  return (
    <section id="products" className="section bg-gray-50">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="heading-lg text-gray-900 mb-4">Our Collection</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Explore our premium selection of shoes designed for style and comfort.
            From casual everyday wear to high-performance trainers, we've got you covered.
          </p>
        </motion.div>
        
        <div className="mb-12">
          <CategoryToggle 
            activeCategory={activeCategory} 
            setActiveCategory={setActiveCategory} 
          />
        </div>
        
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <ImageCarousel images={activeShoes} />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'framer-motion';
import { Users, Clock, Package, Award } from 'lucide-react';

interface StatProps {
  icon: React.ReactNode;
  value: number;
  label: string;
  suffix?: string;
}

const StatItem: React.FC<StatProps> = ({ icon, value, label, suffix = "" }) => {
  const controls = useAnimation();
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [count, setCount] = React.useState(0);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
      
      // Animate the counter
      let startValue = 0;
      const duration = 2000; // ms
      const frameDuration = 1000 / 60; // ms per frame for 60fps
      const totalFrames = Math.round(duration / frameDuration);
      const increment = value / totalFrames;
      
      let timer: number | undefined;
      
      const updateCounter = () => {
        startValue += increment;
        if (startValue < value) {
          setCount(Math.floor(startValue));
          timer = window.setTimeout(updateCounter, frameDuration);
        } else {
          setCount(value);
          timer = undefined;
        }
      };
      
      updateCounter();
      
      return () => {
        if (timer) clearTimeout(timer);
      };
    }
  }, [controls, isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center text-center"
    >
      <div className="mb-4 text-primary-600">{icon}</div>
      <div className="text-4xl font-bold text-gray-900 mb-2">
        {count}{suffix}
      </div>
      <div className="text-gray-600">{label}</div>
    </motion.div>
  );
};

export const Stats: React.FC = () => {
  const stats = [
    { icon: <Users size={36} />, value: 10000, label: "Happy Customers", suffix: "+" },
    { icon: <Clock size={36} />, value: 5, label: "Years of Excellence" },
    { icon: <Package size={36} />, value: 25, label: "Premium Models" },
    { icon: <Award size={36} />, value: 12, label: "Design Awards" },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
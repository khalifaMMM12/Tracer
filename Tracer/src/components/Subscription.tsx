import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Mail, User, Phone} from 'lucide-react';

export const Subscription: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      name: '',
      email: '',
      phone: ''
    };

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
      isValid = false;
    }

    // Phone validation
    const phoneRegex = /^\+?[\d\s-]{10,}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
      isValid = false;
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', phone: '' });
      }, 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const InputField = ({ 
    name, 
    icon: Icon, 
    placeholder, 
    type = 'text' 
  }: { 
    name: string; 
    icon: React.ElementType; 
    placeholder: string; 
    type?: string; 
  }) => (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Icon className="text-gray-400" size={20} />
      </div>
      <input
        type={type}
        name={name}
        value={formData[name as keyof typeof formData]}
        onChange={handleChange}
        placeholder={placeholder}
        className={`w-full pl-10 pr-3 py-3 rounded-lg focus:outline-none focus:ring-2 ${
          errors[name as keyof typeof errors]
            ? 'focus:ring-red-500 border-red-500'
            : 'focus:ring-accent-500'
        } text-gray-800`}
      />
      {errors[name as keyof typeof errors] && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-red-400 text-sm mt-1 text-left"
        >
          {errors[name as keyof typeof errors]}
        </motion.p>
      )}
    </div>
  );

  return (
    <section id="subscription" className="section bg-[#f6f6f6] text-black">
      <div className="container-custom">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="heading-lg mb-4">Stay Updated</h2>
          <p className="text-black mb-8">
            Join the early access squad and be first in line when Tracer lands on May 15.
            <span className="block mt-2 text-accent-400 font-semibold">
              20% off valid for 7 days after launch
            </span>
          </p>

          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-primary-800 p-6 rounded-lg shadow-lg inline-flex items-center"
            >
              <CheckCircle2 className="text-accent-400 mr-3" size={24} />
              <span>Thank you! You're now subscribed to our newsletter.</span>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col gap-4">
                <InputField 
                  name="name" 
                  icon={User} 
                  placeholder="Enter your name" 
                />
                <InputField 
                  name="email" 
                  icon={Mail} 
                  placeholder="Enter your email" 
                  type="email" 
                />
                <InputField 
                  name="phone" 
                  icon={Phone} 
                  placeholder="Enter your phone number" 
                  type="tel" 
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn btn-accent w-full"
                >
                  Get Early Access
                </motion.button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};
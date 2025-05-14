import React, { useState, ChangeEvent, useCallback } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Mail, User, Phone } from 'lucide-react';
import axios from 'axios';

// InputField component lifted out of the parent component
const InputField: React.FC<{
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  icon: React.ElementType;
  placeholder: string;
  type?: string;
  error?: string;
}> = React.memo(({ name, value, onChange, icon: Icon, placeholder, type = 'text', error }) => (
  <div className="relative">
    <div className="absolute pt-4 left-0 pl-3 flex items-center pointer-events-none">
      <Icon
        className={`${
          error ? 'text-red-500' : 'text-gray-400'
        } transition-colors`}
        size={20}
      />
    </div>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`w-full pl-10 pr-3 py-3 rounded-lg border text-gray-800 transition-all duration-200 focus:outline-none focus:ring-2 ${
        error
          ? 'border-red-500 focus:ring-red-500'
          : 'border-gray-300 focus:ring-accent-500'
      }`}
    />
    <div className="mt-1 h-5">
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-red-400 text-sm"
        >
          {error}
        </motion.p>
      )}
    </div>
  </div>
));

export const Subscription: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let newValue = value;

    if (name === "phone") {
      newValue = `+234${value.replace(/\D/g, "")}`;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: newValue
    }));

    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: ''
      }));
    }
  }, [errors]);

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      name: '',
      email: '',
      phone: ''
    };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
      isValid = false;
    }

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsLoading(true);
      try {
        const response = await axios.post('https://tracer-0yut.onrender.com/api/subscribe', formData);

        if (response.status === 201) {
          setIsSubmitted(true);
          setTimeout(() => {
            setFormData({ name: '', email: '', phone: '' });
          }, 100);

          setTimeout(() => {
            setIsSubmitted(false);
          }, 4000);
        }
      } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
          const { message } = error.response.data;
          if (message === 'Email already exists') {
            setErrors((prev) => ({
              ...prev,
              email: 'This email is already registered.',
            }));
          } else {
            console.error('Error submitting form:', error);
          }
        }
      } finally {
        setIsLoading(false);
      }
    }
  };

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

          {isSubmitted && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-gradient-to-r from-accent-400 to-primary-600 p-6 rounded-xl shadow-2xl inline-flex items-center justify-center gap-3 mb-6 border-2 border-accent-500"
            >
              <CheckCircle2 className="text-white bg-accent-500 rounded-full p-1" size={32} />
              <span className="text-white text-lg font-semibold tracking-wide">Thank you! You've joined the early access squad.</span>
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col gap-4">
              <InputField
                name="name"
                value={formData.name}
                onChange={handleChange}
                icon={User}
                placeholder="Enter your name"
                error={errors.name}
              />
              <InputField
                name="email"
                value={formData.email}
                onChange={handleChange}
                icon={Mail}
                placeholder="Enter your email"
                type="email"
                error={errors.email}
              />
              <InputField
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                icon={Phone}
                placeholder="Enter your phone number"
                type="tel"
                error={errors.phone}
                // pattern="[0-9]*"
                // inputMode="numeric"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-accent w-full"
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="loader inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                ) : (
                  'Get Early Access'
                )}
              </motion.button>  
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Mail } from 'lucide-react';

export const Subscription: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isValid, setIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setIsValid(false);
      setErrorMessage('Please enter your email');
      return;
    }

    if (!validateEmail(email)) {
      setIsValid(false);
      setErrorMessage('Please enter a valid email');
      return;
    }

    // Form is valid, submit
    setIsValid(true);
    setErrorMessage('');
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setEmail('');
    }, 3000);
  };

  return (
    <section id="subscription" className="section bg-primary-900 text-white">
      <div className="container-custom">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="heading-lg mb-4">Stay Updated</h2>
          <p className="text-primary-100 mb-8">
            Subscribe now and get 20% off at launch. Be the first to know when our premium shoes become available.
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
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-grow">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="text-gray-400" size={20} />
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setIsValid(true);
                    }}
                    placeholder="Enter your email"
                    className={`w-full pl-10 pr-3 py-3 rounded-lg focus:outline-none focus:ring-2 ${
                      isValid
                        ? 'focus:ring-accent-500 text-gray-800'
                        : 'focus:ring-red-500 border-red-500 text-gray-800'
                    }`}
                  />
                  {!isValid && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-400 text-sm mt-1 text-left"
                    >
                      {errorMessage}
                    </motion.p>
                  )}
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn btn-accent whitespace-nowrap"
                >
                  Subscribe
                </motion.button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};
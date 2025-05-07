import React from 'react';
import { motion } from 'framer-motion';
import * as icons from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <icons.Instagram size={20} />, href: '#', label: 'Instagram' },
    { icon: <icons.Twitter size={20} />, href: '#', label: 'Twitter' },
    { icon: <icons.Facebook size={20} />, href: '#', label: 'Facebook' },
    { icon: <icons.Youtube size={20} />, href: '#', label: 'YouTube' },
  ];

  const contactInfo = [
    { 
      icon: <icons.Mail className="text-primary-600" size={20} />, 
      text: 'contact@tracershoes.com',
      href: 'mailto:contact@tracershoes.com'
    },
    { 
      icon: <icons.Phone className="text-primary-600" size={20} />, 
      text: '+1 (888) 555-SHOE',
      href: 'tel:+18885557463'
    },
    { 
      icon: <icons.MapPin className="text-primary-600" size={20} />, 
      text: '123 Fashion District, New York, NY',
      href: '#'
    },
  ];

  // const footerLinks = [
  //   {
  //     title: 'Shop',
  //     links: [
  //       { name: 'Casual Shoes', href: '#' },
  //       { name: 'Trainers', href: '#' },
  //       { name: 'Limited Editions', href: '#' },
  //       { name: 'Sale', href: '#' },
  //     ]
  //   },
  //   {
  //     title: 'Company',
  //     links: [
  //       { name: 'About Us', href: '#about' },
  //       { name: 'Careers', href: '#' },
  //       { name: 'Our Story', href: '#' },
  //       { name: 'Press', href: '#' },
  //     ]
  //   },
  //   {
  //     title: 'Help',
  //     links: [
  //       { name: 'FAQ', href: '#' },
  //       { name: 'Shipping', href: '#' },
  //       { name: 'Returns', href: '#' },
  //       { name: 'Contact Us', href: '#contact' },
  //     ]
  //   },
  // ];

  return (
    <footer id="contact" className="bg-gray-600 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand & Contact Info */}
          <div className="lg:col-span-2">
            <a href="#" className="inline-flex items-center gap-2 mb-6">
              <icons.Footprints className="h-8 w-8 text-primary-600" />
              <span className="text-xl font-bold text-white">TRACER</span>
            </a>
            <p className="text-white mb-6">
              Redefining the future of footwear with premium designs and unmatched comfort.
            </p>
            {/* <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <a href={item.href} className="flex items-center gap-3 text-white hover:text-primary-200">
                    {item.icon}
                    <span>{item.text}</span>
                  </a>
                </motion.li>
              ))}
            </ul> */}
          </div>
          
          {/* Footer Links */}
          {/* {footerLinks.map((group, groupIndex) => ( */}
            {/* <div key={group.title}> */}
            <div>
              {/* <h4 className="text-white font-semibold mb-4">{group.title}</h4> */}
              {/* <ul className="space-y-2">
                {group.links.map((link, linkIndex) => (
                  <motion.li 
                    key={link.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (groupIndex * 0.1) + (linkIndex * 0.05), duration: 0.5 }}
                  >
                    <a 
                      href={link.href} 
                      className="text-white hover:text-primary-200 transition-colors"
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul> */}
              <ul className="space-y-4">
                {contactInfo.map((item, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <a href={item.href} className="flex items-center gap-3 text-white hover:text-primary-200">
                      {item.icon}
                      <span>{item.text}</span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          {/* ))} */}
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white text-sm">
              © {currentYear} Tracer Shoes. All rights reserved.
            </p>
            
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className="text-white hover:text-primary-600 transition-colors"
                  aria-label={link.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
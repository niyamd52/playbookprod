import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-foreground text-background/70 py-12 mt-auto"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center space-x-6 mb-6">
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-background/60 hover:text-primary transition-colors"><Linkedin size={24}/></a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-background/60 hover:text-accent transition-colors"><Instagram size={24}/></a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-background/60 hover:text-blue-400 transition-colors"><Twitter size={24}/></a>
        </div>
        <p className="text-sm">&copy; {new Date().getFullYear()} Niyam Patel. All rights reserved.</p>
        <p className="text-xs mt-2">Designed with <span className="text-accent">&hearts;</span> by Hostinger Horizons</p>
      </div>
    </motion.footer>
  );
};

export default Footer;
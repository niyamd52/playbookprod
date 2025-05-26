import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ children, className, ...props }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    className={`bg-card text-card-foreground p-6 sm:p-8 rounded-xl shadow-lg border border-border ${className}`}
    {...props}
  >
    {children}
  </motion.div>
);

export default Card;
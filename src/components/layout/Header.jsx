import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Menu, X, Camera, User, Briefcase, Mail, Video } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/', icon: <Camera size={18}/> },
  { name: 'Portfolio', path: '/portfolio', icon: <Briefcase size={18}/> },
  { name: 'About', path: '/about', icon: <User size={18}/> },
  { name: 'Services', path: '/services', icon: <Briefcase size={18}/> },
  { name: 'Contact', path: '/contact', icon: <Mail size={18}/> },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg shadow-sm border-b border-border"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="text-3xl font-bold text-primary hover:opacity-80 transition-opacity">
            Niyam Patel
          </Link>
          <nav className="hidden md:flex space-x-1">
            {navLinks.map((link) => (
              <Button
                key={link.name}
                variant={location.pathname === link.path ? "default" : "ghost"}
                asChild
                className={`font-medium ${location.pathname === link.path ? 'bg-primary text-primary-foreground' : 'text-foreground/70 hover:text-primary hover:bg-primary/10'} transition-all duration-300`}
              >
                <Link to={link.path} className="flex items-center space-x-2 px-3 py-2 rounded-md">
                  {link.icon}
                  <span>{link.name}</span>
                </Link>
              </Button>
            ))}
          </nav>
          <div className="md:hidden">
            <Button variant="ghost" onClick={() => setIsOpen(!isOpen)} className="text-foreground/70 hover:text-primary">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-background/95 backdrop-blur-lg shadow-lg absolute w-full border-b border-border"
          >
            <nav className="flex flex-col space-y-1 px-4 py-4">
              {navLinks.map((link) => (
                <Button
                  key={link.name}
                  variant={location.pathname === link.path ? "default" : "ghost"}
                  asChild
                  className={`font-medium justify-start ${location.pathname === link.path ? 'bg-primary text-primary-foreground' : 'text-foreground/70 hover:text-primary hover:bg-primary/10'} transition-all duration-300`}
                  onClick={() => setIsOpen(false)}
                >
                  <Link to={link.path} className="flex items-center space-x-3 w-full px-3 py-3 rounded-md">
                    {link.icon}
                    <span>{link.name}</span>
                  </Link>
                </Button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
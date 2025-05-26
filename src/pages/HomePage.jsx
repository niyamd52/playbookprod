import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Card from '@/components/shared/Card';
import { Camera, User, Briefcase, Video } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="min-h-[calc(100vh-10rem)] flex flex-col justify-center items-center text-center px-4 py-16 bg-gradient-to-br from-background via-secondary/30 to-background text-foreground">
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2, type: "spring", stiffness: 100 }}
        className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6 tracking-tight"
      >
        Capturing Moments, <br className="hidden sm:block" />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Creating Memories.</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-lg sm:text-xl text-foreground/80 max-w-2xl mb-10"
      >
        Professional photography and videography services for events, portraits, and commercial projects. Let's tell your story through stunning visuals.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
      >
        <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground transition-opacity transform hover:scale-105">
          <Link to="/portfolio">View Portfolio</Link>
        </Button>
        <Button size="lg" variant="outline" asChild className="border-primary text-primary hover:bg-primary/10 hover:text-primary transition-all transform hover:scale-105">
          <Link to="/contact">Get in Touch</Link>
        </Button>
      </motion.div>
       <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl w-full">
        <Card className="bg-card/70 backdrop-blur-sm hover:shadow-primary/20 transition-shadow duration-300 text-center">
          <Camera size={40} className="mx-auto mb-4 text-accent"/>
          <h3 className="text-xl font-semibold mb-2 text-card-foreground">Events</h3>
          <p className="text-card-foreground/70 text-sm">Capturing the energy and emotion of your special occasions.</p>
        </Card>
        <Card className="bg-card/70 backdrop-blur-sm hover:shadow-primary/20 transition-shadow duration-300 text-center">
          <User size={40} className="mx-auto mb-4 text-accent"/>
          <h3 className="text-xl font-semibold mb-2 text-card-foreground">Portraits</h3>
          <p className="text-card-foreground/70 text-sm">Creating timeless portraits that reflect your unique personality.</p>
        </Card>
        <Card className="bg-card/70 backdrop-blur-sm hover:shadow-primary/20 transition-shadow duration-300 text-center">
          <Briefcase size={40} className="mx-auto mb-4 text-accent"/>
          <h3 className="text-xl font-semibold mb-2 text-card-foreground">Commercial</h3>
          <p className="text-card-foreground/70 text-sm">High-quality imagery to elevate your brand and products.</p>
        </Card>
        <Card className="bg-card/70 backdrop-blur-sm hover:shadow-primary/20 transition-shadow duration-300 text-center">
          <Video size={40} className="mx-auto mb-4 text-accent"/>
          <h3 className="text-xl font-semibold mb-2 text-card-foreground">Videography</h3>
          <p className="text-card-foreground/70 text-sm">Dynamic video content to bring your stories to life.</p>
        </Card>
      </div>
    </div>
  );
};

export default HomePage;
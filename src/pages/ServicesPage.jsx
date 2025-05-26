import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Card from '@/components/shared/Card';
import { Camera, User, Briefcase, Video } from 'lucide-react';

const ServicesPage = () => {
  const services = [
    { title: "Event Coverage", price: "Starting at $500", description: "Comprehensive photography for weddings, corporate events, parties, and more. Includes consultation and edited high-resolution images.", icon: <Camera size={36} className="text-accent mb-4"/> },
    { title: "Portrait Sessions", price: "Starting at $250", description: "Individual, couple, or family portraits. Studio or on-location shoots available. Perfect for capturing milestones or professional headshots.", icon: <User size={36} className="text-accent mb-4"/> },
    { title: "Commercial Work", price: "Custom Quote", description: "Product photography, branding imagery, and architectural shots. Tailored packages to meet your business needs.", icon: <Briefcase size={36} className="text-accent mb-4"/> },
    { title: "Videography", price: "Starting at $700", description: "Cinematic video production for events, brands, and personal projects. From concept to final edit.", icon: <Video size={36} className="text-accent mb-4"/> },
  ];

  return (
    <div className="min-h-screen bg-background py-12 sm:py-16 px-4">
      <div className="container mx-auto">
        <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-center"
        >
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Services</span>
        </motion.h1>
        <motion.p 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay:0.1 }}
            className="text-lg text-foreground/80 mb-12 text-center max-w-2xl mx-auto"
        >
            We offer a range of photography and videography services designed to capture your most important moments with creativity and professionalism.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-card shadow-xl h-full flex flex-col hover:shadow-primary/20 transition-shadow duration-300">
                <div className="text-center mb-auto">
                    {service.icon}
                    <h3 className="text-2xl font-semibold text-card-foreground mb-3">{service.title}</h3>
                    <p className="text-primary font-medium text-lg mb-4">{service.price}</p>
                    <p className="text-card-foreground/70 text-sm mb-6 leading-relaxed">{service.description}</p>
                </div>
                <Button asChild className="mt-auto w-full bg-primary hover:bg-primary/90 text-primary-foreground transition-opacity transform hover:scale-105">
                  <Link to="/contact">Book Now</Link>
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
         <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center bg-card/70 backdrop-blur-sm p-8 sm:p-10 rounded-xl shadow-lg border border-border"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Need Something Custom?
          </h2>
          <p className="text-foreground/80 mb-6 max-w-xl mx-auto">
            Every project is unique. If you have specific requirements or ideas not listed here, don't hesitate to reach out. We're flexible and love tackling new creative challenges!
          </p>
          <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground transition-opacity">
            <Link to="/contact">Discuss Your Project</Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesPage;
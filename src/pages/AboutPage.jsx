import React from 'react';
import { motion } from 'framer-motion';
import Card from '@/components/shared/Card';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/10 to-background py-12 sm:py-16 px-4">
      <div className="container mx-auto">
        <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl font-bold text-foreground mb-10 text-center"
        >
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Me</span>
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 sm:gap-12 items-center">
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="md:col-span-2"
            >
                 <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                    <img  
                        alt="Headshot of Niyam Patel" 
                        className="relative w-full h-auto rounded-lg shadow-xl aspect-square object-cover border-4 border-background"
                     src="https://images.unsplash.com/photo-1596108870714-bddbac33d0bc" />
                </div>
            </motion.div>
            <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="md:col-span-3"
            >
                <Card className="bg-card shadow-xl">
                    <h2 className="text-3xl font-semibold text-card-foreground mb-4">My Story</h2>
                    <p className="text-card-foreground/80 mb-4 leading-relaxed">
                        Hello! I'm Niyam Patel, a passionate photographer and videographer with a keen eye for detail and a love for storytelling. My journey into visual arts began [mention how/when], and since then, I've been dedicated to capturing life's fleeting moments and transforming them into lasting memories.
                    </p>
                    <p className="text-card-foreground/80 mb-4 leading-relaxed">
                        My creative process is centered around understanding your vision and bringing it to life. I believe that the best visuals are those that evoke emotion and tell a compelling story. Whether it's a grand event, an intimate portrait session, or a dynamic brand video, I strive to create content that is authentic, artistic, and deeply personal.
                    </p>
                    <p className="text-card-foreground/80 leading-relaxed">
                        What sets me apart is [mention your unique selling proposition - e.g., my ability to connect with clients, my unique style, my technical expertise]. I'm committed to providing a seamless and enjoyable experience from start to finish.
                    </p>
                </Card>
            </motion.div>
        </div>
         <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="mt-16"
        >
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Testimonials</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                    { name: "Jane D.", feedback: "Working with Niyam was an absolute pleasure! The photos and video exceeded our expectations.", company: "Happy Client" },
                    { name: "John S.", feedback: "Incredibly talented and professional. The results were stunning!", company: "Satisfied Customer" },
                    { name: "Alice B.", feedback: "Niyam captured our event perfectly. Highly recommend for any occasion.", company: "Event Organizer" },
                ].map((testimonial, index) => (
                    <Card key={index} className="bg-card shadow-lg">
                        <p className="text-card-foreground/70 italic mb-4">"{testimonial.feedback}"</p>
                        <p className="font-semibold text-card-foreground">{testimonial.name}</p>
                        <p className="text-sm text-primary">{testimonial.company}</p>
                    </Card>
                ))}
            </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
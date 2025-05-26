import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import Card from '@/components/shared/Card';
import { Mail, Linkedin, Instagram, Twitter } from 'lucide-react';

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1500));

    console.log("Form data submitted:", formData); 
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out, Niyam Patel will get back to you soon.",
      variant: "default",
      className: "bg-primary text-primary-foreground",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/10 to-background py-12 sm:py-16 px-4">
      <div className="container mx-auto">
        <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-center"
        >
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Touch</span>
        </motion.h1>
        <motion.p 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-foreground/80 mb-12 text-center max-w-2xl mx-auto"
        >
            Have a project in mind, a question, or just want to say hello? Fill out the form below or reach out via email or social media. We're excited to hear from you!
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <Card className="bg-card shadow-xl">
                    <h2 className="text-2xl font-semibold text-card-foreground mb-6">Contact Information</h2>
                    <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                            <Mail size={20} className="text-primary"/>
                            <a href="mailto:niyam.patel@example.com" className="text-card-foreground/80 hover:text-primary transition-colors">niyam.patel@example.com</a>
                        </div>
                        <div className="flex items-center space-x-3">
                            <Linkedin size={20} className="text-primary"/>
                            <a href="#" target="_blank" rel="noopener noreferrer" className="text-card-foreground/80 hover:text-primary transition-colors">LinkedIn Profile</a>
                        </div>
                        <div className="flex items-center space-x-3">
                            <Instagram size={20} className="text-primary"/>
                            <a href="#" target="_blank" rel="noopener noreferrer" className="text-card-foreground/80 hover:text-primary transition-colors">Instagram Page</a>
                        </div>
                        <div className="flex items-center space-x-3">
                            <Twitter size={20} className="text-primary"/>
                            <a href="#" target="_blank" rel="noopener noreferrer" className="text-card-foreground/80 hover:text-primary transition-colors">Twitter Profile</a>
                        </div>
                    </div>
                    <p className="text-sm text-card-foreground/60 mt-8">
                        Alternatively, you can use the contact form. We typically respond within 24-48 hours.
                    </p>
                </Card>
            </motion.div>
             <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
                <Card className="bg-card shadow-xl">
                    <h2 className="text-2xl font-semibold text-card-foreground mb-6">Send Us a Message</h2>
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-card-foreground/90 mb-1">Full Name</label>
                            <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required className="w-full px-3 py-2 border border-border bg-background/50 rounded-md shadow-sm focus:ring-primary focus:border-primary transition-colors text-foreground" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-card-foreground/90 mb-1">Email Address</label>
                            <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className="w-full px-3 py-2 border border-border bg-background/50 rounded-md shadow-sm focus:ring-primary focus:border-primary transition-colors text-foreground" />
                        </div>
                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium text-card-foreground/90 mb-1">Subject</label>
                            <input type="text" name="subject" id="subject" value={formData.subject} onChange={handleChange} required className="w-full px-3 py-2 border border-border bg-background/50 rounded-md shadow-sm focus:ring-primary focus:border-primary transition-colors text-foreground" />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-card-foreground/90 mb-1">Message</label>
                            <textarea name="message" id="message" rows="4" value={formData.message} onChange={handleChange} required className="w-full px-3 py-2 border border-border bg-background/50 rounded-md shadow-sm focus:ring-primary focus:border-primary transition-colors text-foreground"></textarea>
                        </div>
                        <Button type="submit" disabled={isSubmitting} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground transition-opacity disabled:opacity-70">
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </Button>
                    </form>
                </Card>
             </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
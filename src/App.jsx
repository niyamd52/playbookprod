import React from 'react';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AnimatedOutlet from '@/components/layout/AnimatedOutlet';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-background font-sans antialiased">
      <Header />
      <main className="flex-grow">
        <AnimatedOutlet />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
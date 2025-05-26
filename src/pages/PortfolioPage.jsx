import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Card from '@/components/shared/Card';
import ImageModal from '@/components/shared/ImageModal';
import { Video } from 'lucide-react';

const initialPortfolioItems = [
  { id: 1, type: 'image', title: "Sunset Over Mountains", category: "Events", description: "A breathtaking sunset captured during a mountain wedding.", imageUrl: "event-image-sunset-mountains", tools: ["Canon EOS R5", "Photoshop"], alt: "Majestic mountain range at sunset with orange and purple sky" },
  { id: 2, type: 'image', title: "Urban Portraits", category: "Portraits", description: "Candid portraits taken in a vibrant city setting.", imageUrl: "portrait-image-urban-style", tools: ["Nikon Z7", "Lightroom"], alt: "Stylish person posing against a colorful graffiti wall" },
  { id: 3, type: 'image', title: "Minimalist Product Shot", category: "Commercial", description: "Clean product photography for a luxury brand.", imageUrl: "commercial-image-watch-minimalist", tools: ["Sony A7IV", "Capture One"], alt: "Elegant watch displayed on a plain background with sharp lighting" },
  { id: 4, type: 'video', title: "Wedding Highlight Reel", category: "Videography", description: "A cinematic highlight reel of a beautiful wedding day.", vimeoId: "59777392", tools: ["Sony FX3", "Premiere Pro"], alt: "Preview of a wedding highlight video" },
  { id: 5, type: 'image', title: "Joyful Reception", category: "Events", description: "Capturing laughter and joy during a wedding reception.", imageUrl: "event-image-wedding-reception-joy", tools: ["Canon EOS R6", "Photoshop"], alt: "Guests laughing and dancing at an elegant wedding reception" },
  { id: 6, type: 'image', title: "Corporate Team", category: "Portraits", description: "Professional group photo for a corporate client.", imageUrl: "portrait-image-corporate-team-professional", tools: ["Fujifilm GFX100S", "Lightroom"], alt: "Diverse group of professionals smiling for a team photo in a modern office" },
  { id:7, type: 'video', title: "Brand Story", category: "Videography", description: "Short brand story video for a local artisan.", vimeoId: "82480422", tools: ["Blackmagic Pocket 6K", "DaVinci Resolve"], alt: "Preview of a brand story video showcasing craftsmanship" },
  { id: 8, type: 'image', title: "Food Photography", category: "Commercial", description: "Delicious and appealing food photography for a restaurant menu.", imageUrl: "commercial-image-gourmet-food-plating", tools: ["Sony A9 II", "Capture One"], alt: "Close-up shot of a gourmet dish, beautifully plated and lit" },
  { id: 9, type: 'image', title: "Adventure Landscape", category: "Events", description: "Dramatic landscape from an adventure travel event.", imageUrl: "event-image-adventure-landscape-dramatic", tools: ["DJI Mavic 3", "Lightroom"], alt: "Aerial view of a stunning, rugged landscape with hikers" },
  { id: 10, type: 'image', title: "Lifestyle Product Use", category: "Commercial", description: "Product shown in a lifestyle context.", imageUrl: "commercial-image-lifestyle-product-in-use", tools: ["Nikon D850", "Photoshop"], alt: "Person happily using a product in a natural, everyday setting" },
];


const PortfolioPage = () => {
  const [portfolioItems, setPortfolioItems] = useState(initialPortfolioItems);
  const [filter, setFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const categories = ["All", ...new Set(portfolioItems.map(item => item.category))];
  const filteredItems = filter === "All" ? portfolioItems : portfolioItems.filter(item => item.category === filter);

  const openModal = (item) => {
    if (item.type === 'image') {
      const imageItemsOnly = filteredItems.filter(i => i.type === 'image');
      const actualIndexInImageItems = imageItemsOnly.findIndex(imgItem => imgItem.id === item.id);
      setSelectedImage(imageItemsOnly[actualIndexInImageItems]);
      setCurrentIndex(actualIndexInImageItems);
    }
  };

  const closeModal = () => setSelectedImage(null);

  const imageItemsOnly = filteredItems.filter(i => i.type === 'image');

  const showNextImage = () => {
    const nextIndex = (currentIndex + 1) % imageItemsOnly.length;
    setSelectedImage(imageItemsOnly[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  const showPrevImage = () => {
    const prevIndex = (currentIndex - 1 + imageItemsOnly.length) % imageItemsOnly.length;
    setSelectedImage(imageItemsOnly[prevIndex]);
    setCurrentIndex(prevIndex);
  };


  return (
    <div className="min-h-screen bg-background py-12 sm:py-16 px-4">
      <div className="container mx-auto">
        <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-center"
        >
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Work</span>
        </motion.h1>
        <motion.p 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-foreground/80 mb-10 text-center max-w-2xl mx-auto"
        >
            Explore a selection of our projects. We take pride in delivering high-quality results across various categories.
        </motion.p>

        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center flex-wrap gap-2 sm:gap-3 mb-10 pb-2"
        >
          {categories.map(category => (
            <Button
              key={category}
              variant={filter === category ? "default" : "outline"}
              onClick={() => setFilter(category)}
              className={`${filter === category ? 'bg-primary text-primary-foreground' : 'border-border text-foreground/70 hover:bg-secondary/30 hover:text-primary'} transition-all duration-300`}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Card 
                  className="bg-card shadow-xl hover:shadow-primary/20 transition-shadow duration-300 overflow-hidden group cursor-pointer"
                  onClick={() => openModal(item)}
                >
                  <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-secondary/20">
                    {item.type === 'image' ? (
                      <img  
                        alt={item.alt || item.title} 
                        className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 ease-out"
                         src="https://images.unsplash.com/photo-1697256200022-f61abccad430" />
                    ) : (
                      <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-foreground/80">
                        <Video size={64} className="text-background/70" />
                      </div>
                    )}
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-semibold text-card-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-card-foreground/70 mb-3 h-16 overflow-hidden">{item.description}</p>
                    <div className="mb-3">
                        <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">{item.category}</span>
                    </div>
                    <div className="text-xs text-card-foreground/60">
                        <span className="font-medium">Tools:</span> {item.tools.join(', ')}
                    </div>
                    {item.type === 'video' && item.vimeoId && (
                       <div className="mt-4 video-responsive rounded-md overflow-hidden">
                         <iframe
                           src={`https://player.vimeo.com/video/${item.vimeoId}?badge=0&autopause=0&player_id=0&app_id=58479`}
                           allow="autoplay; fullscreen; picture-in-picture"
                           title={item.title}
                         ></iframe>
                       </div>
                    )}
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
         {filteredItems.length === 0 && (
            <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center text-foreground/60 mt-10 text-lg"
            >
                No projects found for this category.
            </motion.p>
        )}
      </div>
      {selectedImage && (
        <ImageModal
          isOpen={!!selectedImage}
          onClose={closeModal}
          imageSrc={selectedImage.imageUrl} 
          altText={selectedImage.alt || selectedImage.title}
          onNext={showNextImage}
          onPrev={showPrevImage}
          hasNext={currentIndex < imageItemsOnly.length - 1}
          hasPrev={currentIndex > 0}
        />
      )}
    </div>
  );
};

export default PortfolioPage;
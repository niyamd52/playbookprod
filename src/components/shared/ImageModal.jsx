import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ImageModal = ({ isOpen, onClose, imageSrc, altText, onNext, onPrev, hasNext, hasPrev }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="relative bg-card p-4 rounded-lg shadow-2xl max-w-3xl w-full max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-3 right-3 text-card-foreground/70 hover:text-card-foreground z-10"
              onClick={onClose}
            >
              <X size={24} />
            </Button>
            
            <div className="flex-grow flex items-center justify-center overflow-hidden">
              <img  alt={altText} className="max-w-full max-h-[calc(90vh-100px)] object-contain rounded" src="https://images.unsplash.com/photo-1551062657-faa29d4266ab" />
            </div>

            {(hasPrev || hasNext) && (
              <div className="flex justify-between items-center mt-4">
                <Button variant="outline" onClick={onPrev} disabled={!hasPrev} className="text-card-foreground">
                  <ChevronLeft size={20} className="mr-2" /> Previous
                </Button>
                <Button variant="outline" onClick={onNext} disabled={!hasNext} className="text-card-foreground">
                  Next <ChevronRight size={20} className="ml-2" />
                </Button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ImageModal;
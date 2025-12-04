import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import logo from "@assets/jackson_logo_transparent.png";

// Videos
import video1 from "@assets/generated_videos/philadelphia_residential_rowhome_street.mp4";
import video2 from "@assets/generated_videos/renovated_philadelphia_rowhome_exterior.mp4";
import video3 from "@assets/generated_videos/cinematic_drone_shot_of_philadelphia_skyline_at_sunrise.mp4";

const videos = [video1, video2, video3];

export function Hero() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
    }, 6000); // Switch every 6 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Video Background Slideshow */}
      <div className="absolute inset-0 z-0 bg-black">
        <AnimatePresence mode="popLayout">
          <motion.video
            key={currentVideoIndex}
            src={videos[currentVideoIndex]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          />
        </AnimatePresence>
        
        {/* Overlay Gradient - Green/Cream Theme */}
        <div className="absolute inset-0 bg-primary/60 mix-blend-multiply z-10" />
        <div className="absolute inset-0 bg-black/30 z-10" />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        >
          <div className="mb-8 flex justify-center">
            {/* Logo with inverted colors for dark background - removes the boxy look */}
            <div className="px-4 py-2 inline-block">
              <img 
                src={logo} 
                alt="Jackson Rental Homes" 
                className="w-[240px] md:w-[320px] h-auto object-contain brightness-0 invert drop-shadow-lg" 
              />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-medium tracking-tight mb-4 text-shadow-lg">
            The 1% Listing
          </h1>
          <p className="text-xl md:text-2xl font-light tracking-wide text-white/90 mb-8 font-sans max-w-3xl mx-auto text-shadow-sm">
            A smarter, more transparent way to sell your home in Philadelphia — and keep more of your equity.
          </p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-secondary text-lg px-8 py-6 rounded-sm font-sans uppercase tracking-widest border-none font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              See How It Works <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white to-transparent" />
      </motion.div>
    </section>
  );
}

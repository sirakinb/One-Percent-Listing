import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroVideo from "@assets/generated_videos/cinematic_drone_shot_of_philadelphia_skyline_at_sunrise.mp4";
import logo from "@assets/jackson_logo.png";

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        {/* Overlay Gradient - Green/Cream Theme */}
        <div className="absolute inset-0 bg-primary/70 mix-blend-multiply" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        >
          <div className="mb-8 flex justify-center">
            <div className="bg-white/90 backdrop-blur-sm px-8 py-4 rounded-sm border border-white/20 shadow-lg">
              <img src={logo} alt="Jackson Rental Homes" className="h-16 md:h-20 w-auto object-contain" />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-medium tracking-tight mb-4 text-shadow-lg">
            Your Home. Your Equity.
          </h1>
          <p className="text-xl md:text-2xl font-light tracking-wide text-white/90 mb-8 font-sans max-w-3xl mx-auto">
            Selling in Philadelphia just got smarter. Premium service for every neighborhood.
          </p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-secondary text-lg px-8 py-6 rounded-sm font-sans uppercase tracking-widest border-none font-semibold"
            >
              View Our Process <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white to-transparent" />
      </motion.div>
    </section>
  );
}

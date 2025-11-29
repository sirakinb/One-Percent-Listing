import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroVideo from "@assets/generated_videos/philadelphia_residential_rowhome_street.mp4";
import logo from "@assets/jackson_logo_transparent.png";

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
          key={heroVideo} // Force re-render if source changes
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        {/* Overlay Gradient - Green/Cream Theme */}
        <div className="absolute inset-0 bg-primary/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        >
          <div className="mb-8 flex justify-center">
            {/* Logo Container - White background for the black logo */}
            <div className="bg-white/95 backdrop-blur-sm px-6 py-4 rounded-sm border border-white/20 shadow-2xl inline-block">
              <img src={logo} alt="Jackson Rental Homes" className="w-[240px] md:w-[320px] h-auto object-contain" />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-medium tracking-tight mb-4 text-shadow-lg">
            The 1% Listing
          </h1>
          <p className="text-xl md:text-2xl font-light tracking-wide text-white/90 mb-8 font-sans max-w-3xl mx-auto text-shadow-sm">
            Your Home. Your Equity. Selling in Philadelphia just got smarter.
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

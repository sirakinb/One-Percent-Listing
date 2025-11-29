import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import soldImg from "@assets/generated_images/sold_sign_in_front_of_luxury_home.png";

export function CTA() {
  return (
    <section className="relative py-32 overflow-hidden flex items-center min-h-[80vh]">
      {/* Background Image with Parallax feel */}
      <div className="absolute inset-0 z-0">
        <img 
          src={soldImg} 
          alt="Sold Sign" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-5xl md:text-7xl font-serif text-white mb-6">
            Sell Smarter. <br/>
            <span className="text-accent italic">Save More.</span>
          </h2>
          <p className="text-xl text-white/80 font-sans font-light mb-10">
            Join the modern real estate revolution in Philadelphia.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-primary hover:bg-accent hover:text-primary-foreground text-lg px-10 py-8 rounded-none font-sans uppercase tracking-widest transition-all duration-300"
          >
            Learn How It Works
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

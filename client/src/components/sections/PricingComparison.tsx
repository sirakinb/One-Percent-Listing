import { motion } from "framer-motion";
import { Check } from "lucide-react";

export function PricingComparison() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-primary mb-4">Introducing the 1% Listing</h2>
          <p className="text-muted-foreground font-sans max-w-2xl mx-auto">
            Full-service real estate at a fraction of the traditional cost. 
            Available for all properties across Philadelphia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Traditional Model */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/50 p-8 md:p-12 border border-border grayscale opacity-70 hover:opacity-100 transition-opacity duration-500"
          >
            <h3 className="text-xl font-sans tracking-widest uppercase text-muted-foreground mb-2">Traditional</h3>
            <div className="text-5xl md:text-6xl font-serif text-muted-foreground mb-8">6%</div>
            <ul className="space-y-4 text-muted-foreground font-sans">
              <li className="flex items-center gap-3"><Check className="h-4 w-4" /> Standard Marketing</li>
              <li className="flex items-center gap-3"><Check className="h-4 w-4" /> MLS Listing</li>
              <li className="flex items-center gap-3"><Check className="h-4 w-4" /> Paperwork Handling</li>
              <li className="flex items-center gap-3 text-destructive decoration-destructive line-through opacity-50">High Fees</li>
            </ul>
          </motion.div>

          {/* The 1% Model */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-primary text-primary-foreground p-8 md:p-12 shadow-2xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 bg-accent text-white text-xs font-bold px-3 py-1 uppercase tracking-wider">
              The Jackson Standard
            </div>
            <h3 className="text-xl font-sans tracking-widest uppercase text-white/90 mb-2">Jackson Listing</h3>
            <div className="text-6xl md:text-7xl font-serif text-white mb-8 group-hover:scale-105 transition-transform duration-500 origin-left">
              1%
            </div>
            <ul className="space-y-4 text-white font-sans">
              <li className="flex items-center gap-3 font-medium"><div className="bg-white/20 p-1 rounded-full"><Check className="h-4 w-4 text-white" /></div> Professional Photography</li>
              <li className="flex items-center gap-3 font-medium"><div className="bg-white/20 p-1 rounded-full"><Check className="h-4 w-4 text-white" /></div> Drone Videography</li>
              <li className="flex items-center gap-3 font-medium"><div className="bg-white/20 p-1 rounded-full"><Check className="h-4 w-4 text-white" /></div> City-Wide Expertise</li>
              <li className="flex items-center gap-3 font-medium"><div className="bg-white/20 p-1 rounded-full"><Check className="h-4 w-4 text-white" /></div> Digital Marketing</li>
            </ul>
          </motion.div>
        </div>

        <div className="mt-16 text-center">
           <p className="text-2xl font-serif italic text-primary">
             "Your savings: thousands more in your pocket."
           </p>
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import interiorImage from "@assets/generated_images/bright_modern_philadelphia_rowhome_interior.png";

export function Vision() {
  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/5] lg:aspect-square overflow-hidden"
          >
            <img 
              src={interiorImage} 
              alt="Modern Philadelphia Rowhome Interior" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 border border-primary/5 pointer-events-none m-4" />
          </motion.div>

          {/* Text Side */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-accent font-sans text-sm tracking-[0.2em] uppercase mb-4 block">
                The Modern Seller
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6">
                The market is strong.
              </h2>
              <div className="w-20 h-[1px] bg-accent mb-8" />
              <p className="text-lg text-muted-foreground font-sans leading-relaxed max-w-md">
                You've built equity in your home through years of dedication. 
                When it's time to sell, you shouldn't have to give away a significant 
                portion of that value.
              </p>
              <p className="text-lg text-primary font-medium font-serif italic mt-4">
                "And you deserve to keep more of what you’ve built."
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import neighborhoodImg from "@assets/generated_images/aerial_view_of_diverse_philadelphia_neighborhoods.png";
import homeImg from "@assets/generated_images/renovated_family_home_in_philadelphia.png";

export function Neighborhoods() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-serif text-primary mb-2">Serving All of Philadelphia</h2>
            <p className="text-muted-foreground font-sans">From North Philly to South Philly, and everywhere in between.</p>
          </div>
          <div className="hidden md:block w-1/3 h-[1px] bg-border mb-2" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 h-[600px]">
          {/* Large Item */}
          <motion.div 
            className="md:col-span-7 relative overflow-hidden group cursor-pointer rounded-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src={neighborhoodImg} 
              alt="Philadelphia Neighborhoods" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-primary/40 mix-blend-multiply group-hover:bg-primary/30 transition-colors duration-500" />
            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="text-3xl font-serif mb-1">Community Focused</h3>
              <p className="text-sm font-sans tracking-widest uppercase opacity-80">Serving Diverse Neighborhoods</p>
            </div>
          </motion.div>

          {/* Small Item stacked */}
          <div className="md:col-span-5 flex flex-col gap-4 h-full">
            <motion.div 
              className="flex-1 relative overflow-hidden group cursor-pointer rounded-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img 
                src={homeImg} 
                alt="Renovated Home" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/40 mix-blend-multiply group-hover:bg-primary/30 transition-colors duration-500" />
              <div className="absolute bottom-8 left-8 text-white">
                <h3 className="text-3xl font-serif mb-1">Quality Homes</h3>
                <p className="text-sm font-sans tracking-widest uppercase opacity-80">Rehabbing & Renovating</p>
              </div>
            </motion.div>
            
            <div className="flex-1 bg-primary p-8 flex flex-col justify-center items-start text-white rounded-sm">
              <h3 className="text-2xl font-serif mb-4">Inclusive Real Estate</h3>
              <p className="text-sm text-white/70 font-sans mb-6 leading-relaxed">
                We are one of the only businesses in Philadelphia responsible for rehabbing houses and providing reasonable accommodations for people of all walks of life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

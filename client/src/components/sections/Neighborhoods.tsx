import { motion } from "framer-motion";
import rittenhouseImg from "@assets/generated_images/rittenhouse_square_park_philadelphia.png";
import fishtownImg from "@assets/generated_images/fishtown_philadelphia_modern_exterior.png";

export function Neighborhoods() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-serif text-primary mb-2">Philadelphia Living</h2>
            <p className="text-muted-foreground font-sans">Your neighborhood deserves better representation.</p>
          </div>
          <div className="hidden md:block w-1/3 h-[1px] bg-border mb-2" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 h-[600px]">
          {/* Large Item */}
          <motion.div 
            className="md:col-span-7 relative overflow-hidden group cursor-pointer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src={rittenhouseImg} 
              alt="Rittenhouse Square" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="text-3xl font-serif mb-1">Rittenhouse Square</h3>
              <p className="text-sm font-sans tracking-widest uppercase opacity-80">Center City</p>
            </div>
          </motion.div>

          {/* Small Item stacked */}
          <div className="md:col-span-5 flex flex-col gap-4 h-full">
            <motion.div 
              className="flex-1 relative overflow-hidden group cursor-pointer"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img 
                src={fishtownImg} 
                alt="Fishtown" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
              <div className="absolute bottom-8 left-8 text-white">
                <h3 className="text-3xl font-serif mb-1">Fishtown</h3>
                <p className="text-sm font-sans tracking-widest uppercase opacity-80">North Philadelphia</p>
              </div>
            </motion.div>
            
            <div className="flex-1 bg-primary p-8 flex flex-col justify-center items-start text-primary-foreground">
              <h3 className="text-2xl font-serif mb-4">Local Expertise</h3>
              <p className="text-sm text-white/60 font-sans mb-6 leading-relaxed">
                From the historic cobblestones of Old City to the vibrant avenues of Graduate Hospital, 
                we know what makes your block unique.
              </p>
              <span className="text-accent text-xs font-bold uppercase tracking-widest border-b border-accent pb-1">Explore Neighborhoods</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

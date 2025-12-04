import { motion } from "framer-motion";
import { Camera, Home, TrendingUp, FileSignature, MonitorPlay, ShieldCheck } from "lucide-react";

const services = [
  {
    icon: Camera,
    title: "Professional Photography",
    desc: "Magazine-quality HDR images that capture your home's best angles."
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    desc: "Targeted social campaigns reaching thousands of qualified local buyers."
  },
  {
    icon: FileSignature,
    title: "Seamless Support",
    desc: "Digital paperwork and dedicated transaction coordination."
  },
  {
    icon: ShieldCheck,
    title: "Expert Negotiation",
    desc: "Data-driven strategy to secure the best terms and highest price."
  }
];

export function ServicesGrid() {
  return (
    <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-serif mb-6">Polished Professional Presentation</h2>
          <div className="w-12 h-[1px] bg-accent mx-auto mb-8" />
          <p className="text-xl text-white/80 font-sans font-light max-w-3xl mx-auto leading-relaxed">
            Every listing receives a polished professional presentation tailored to the home.
            Available enhancements include photography, drone media, digital exposure, and selling guidance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="mb-6 inline-block p-4 border border-accent/20 rounded-none group-hover:bg-accent/10 transition-colors duration-300">
                <service.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-serif mb-3">{service.title}</h3>
              <p className="text-primary-foreground/60 font-sans font-light leading-relaxed text-sm">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

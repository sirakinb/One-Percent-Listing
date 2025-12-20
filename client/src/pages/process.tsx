import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useEffect } from "react";

export default function ProcessPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      {/* 1. HERO SECTION */}
      <section className="pt-24 pb-12 px-4 text-center container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-serif font-medium text-primary mb-6 leading-tight">
            Why Hundreds of Philadelphia Landlords Are Selling Now
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-3xl mx-auto leading-relaxed">
            And how the 1% Listing Program helps landlords sell quickly, profitably, and with less stress.
          </p>
        </motion.div>
      </section>

      {/* 2. VIDEO SECTION */}
      <section className="pb-24 px-4 container mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl mx-auto w-full"
        >
          {/* Responsive Video Container */}
          <div className="relative w-full pb-[56.25%] bg-black/5 rounded-sm overflow-hidden shadow-2xl border border-primary/10 mx-auto">
             {/* Placeholder for user video */}
            <iframe 
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/2QLRC3T6AAw?rel=0"
              title="VSL Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* CTA Button */}
          <div className="mt-12 text-center">
            <Link href="/booking">
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-primary text-white hover:bg-primary/90 text-lg px-10 py-8 rounded-sm font-sans uppercase tracking-widest shadow-lg hover:shadow-xl transition-all"
              >
                Book Your Free Consultation <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* 3. THREE-STEP PROCESS */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-primary mb-4">A Straightforward, 3-Step Selling Process</h2>
            <div className="w-20 h-[1px] bg-accent mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {[
              {
                step: "01",
                title: "Consultation",
                desc: "Discuss your goals, timeline, and options."
              },
              {
                step: "02",
                title: "Professional Presentation",
                desc: "Your home is prepared, photographed, and listed for maximum visibility."
              },
              {
                step: "03",
                title: "Sell & Save",
                desc: "You pay only a 1% listing fee — keeping more equity at closing."
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center relative p-6"
              >
                <div className="text-8xl font-serif text-primary/5 absolute -top-4 left-1/2 -translate-x-1/2 z-0 select-none">
                  {item.step}
                </div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-serif text-primary mb-4">{item.title}</h3>
                  <p className="text-muted-foreground font-sans leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link href="/booking">
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white text-lg px-8 py-6 rounded-sm font-sans uppercase tracking-widest transition-all"
              >
                Schedule Your Consultation <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. SAVINGS EXAMPLE */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 w-full">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-primary mb-4">See How Much You Could Save</h2>
          </div>

          <div className="max-w-3xl mx-auto bg-white p-6 md:p-12 rounded-sm shadow-xl border border-border w-full">
             <div className="space-y-6">
                <div className="flex flex-col sm:flex-row justify-between items-center border-b border-border pb-4 gap-2 text-center sm:text-left">
                  <span className="text-lg md:text-xl font-serif text-muted-foreground">Home Value</span>
                  <span className="text-lg md:text-xl font-sans font-bold text-primary">$350,000</span>
                </div>
                
                <div className="flex flex-col sm:flex-row justify-between items-center border-b border-border pb-4 opacity-60 gap-2 text-center sm:text-left">
                  <span className="text-lg md:text-xl font-serif text-muted-foreground">Traditional 6% Listing Fee</span>
                  <span className="text-lg md:text-xl font-sans font-bold text-destructive line-through">$21,000</span>
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-center border-b border-border pb-4 gap-2 text-center sm:text-left">
                  <span className="text-lg md:text-xl font-serif text-primary font-medium">Jackson 1% Listing Fee</span>
                  <span className="text-lg md:text-xl font-sans font-bold text-primary">$3,500</span>
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-center pt-4 bg-accent/10 p-4 rounded-sm gap-2 text-center sm:text-left">
                  <span className="text-xl md:text-2xl font-serif text-primary font-bold">Total Savings</span>
                  <span className="text-xl md:text-2xl font-sans font-bold text-accent">$17,500</span>
                </div>
             </div>
             <p className="text-center text-xs text-muted-foreground mt-6 italic">Actual savings vary depending on home value.</p>
          </div>
        </div>
      </section>

      {/* 5. FAQ SECTION */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-serif text-primary mb-12 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-8">
            {[
              { q: "Why offer a 1% listing?", a: "High efficiency and a streamlined process allow us to pass savings directly to sellers." },
              { q: "Is this available for all homes?", a: "Most properties qualify. We'll confirm during your consultation." },
              { q: "What’s included in the 1% fee?", a: "MLS listing, professional photography, pricing guidance, buyer inquiries, and negotiation support." },
              { q: "Is there any obligation?", a: "No, the consultation is completely free." }
            ].map((item, idx) => (
              <div key={idx} className="border-b border-border pb-6">
                <h3 className="text-xl font-serif text-primary mb-2">{item.q}</h3>
                <p className="text-muted-foreground font-sans">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FINAL CTA */}
      <section className="py-24 bg-primary text-white text-center">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Ready to Explore Your Selling Options?</h2>
            <p className="text-xl text-white/80 font-sans font-light mb-10">
              Book a quick consultation and see how much you can save with the 1% Listing Program.
            </p>
            <Link href="/booking">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-secondary text-lg px-10 py-8 rounded-sm font-sans uppercase tracking-widest shadow-lg transition-all font-semibold"
              >
                Book Your Free Consultation <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

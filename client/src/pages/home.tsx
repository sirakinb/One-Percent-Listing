import { Hero } from "@/components/sections/Hero";
import { Vision } from "@/components/sections/Vision";
import { PricingComparison } from "@/components/sections/PricingComparison";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { Neighborhoods } from "@/components/sections/Neighborhoods";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background w-full overflow-x-hidden">
      <Hero />
      <Vision />
      <PricingComparison />
      <ServicesGrid />
      <Neighborhoods />
      <CTA />
      <Footer />
    </div>
  );
}

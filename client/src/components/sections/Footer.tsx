import { Home } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground border-t border-white/10 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Home className="h-6 w-6 text-accent" />
            <span className="font-serif text-xl font-bold tracking-tight">ONE PERCENT <span className="text-accent">PHL</span></span>
          </div>
          <div className="flex gap-8 text-sm font-sans text-white/60">
            <a href="#" className="hover:text-white transition-colors">Listings</a>
            <a href="#" className="hover:text-white transition-colors">Our Process</a>
            <a href="#" className="hover:text-white transition-colors">Reviews</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
        <div className="text-center md:text-left text-xs text-white/30 font-sans">
          © 2024 One Percent Philadelphia. All rights reserved. Real Estate Brokerage.
        </div>
      </div>
    </footer>
  );
}

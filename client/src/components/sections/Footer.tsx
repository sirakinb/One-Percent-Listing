import { Home } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-white border-t border-white/10 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
            <div className="flex items-center gap-2 mb-2">
              <Home className="h-6 w-6 text-white" />
              <span className="font-serif text-xl font-bold tracking-tight">JACKSON <span className="font-light">RENTAL HOMES</span></span>
            </div>
            <span className="text-xs font-sans opacity-70 tracking-widest uppercase">The 1% Listing Program</span>
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-sm font-sans text-white/80">
            <a href="#" className="hover:text-white transition-colors">Home</a>
            <a href="#" className="hover:text-white transition-colors">About Us</a>
            <a href="#" className="hover:text-white transition-colors">Services</a>
            <a href="#" className="hover:text-white transition-colors">Contact Us</a>
            <a href="#" className="hover:text-white transition-colors border border-white/30 px-3 py-1 rounded-sm hover:bg-white hover:text-primary">Tenant Login</a>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/40 font-sans">
          <p>© 2024 Jackson Rental Homes LLC. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Providing reasonable accommodations for people of all walks of life.</p>
        </div>
      </div>
    </footer>
  );
}

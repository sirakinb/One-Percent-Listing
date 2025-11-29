import logo from "@assets/jackson_logo_transparent.png";

export function Footer() {
  return (
    <footer className="bg-primary text-white border-t border-white/10 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
            <div className="mb-4 max-w-[200px]">
              <img src={logo} alt="Jackson Rental Homes" className="w-full h-auto object-contain brightness-0 invert" />
            </div>
            <span className="text-xs font-sans opacity-70 tracking-widest uppercase">The 1% Listing Program</span>
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-sm font-sans text-white/80">
            <a href="#" className="hover:text-white transition-colors">Home</a>
            <a href="#" className="hover:text-white transition-colors">About Us</a>
            <a href="#" className="hover:text-white transition-colors">Services</a>
            <a href="#" className="hover:text-white transition-colors">Contact Us</a>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/40 font-sans">
          <p>© 2025 Jackson Rental Homes LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

import logo from "@assets/jackson_logo_transparent.png";

export function Footer() {
  return (
    <footer className="bg-primary text-white border-t border-white/10 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
            <div className="mb-2 max-w-[180px]">
              <img src={logo} alt="Jackson Rental Homes" className="w-full h-auto object-contain brightness-0 invert" />
            </div>
            <span className="text-xs font-sans opacity-70 tracking-widest uppercase">The 1% Listing Program</span>
          </div>
          <div className="text-xs text-white/40 font-sans mt-4 md:mt-0">
            <p>© 2025 Jackson Rental Homes LLC. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { motion } from "framer-motion";
import logo from "@assets/jackson_logo_transparent.png";
import { Link } from "wouter";

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-foreground flex flex-col">
      {/* Header with Logo */}
      <header className="pt-8 px-4 md:px-8">
        <div className="container mx-auto">
          <Link href="/">
            <div className="w-[180px] cursor-pointer">
              <img src={logo} alt="Jackson Rental Homes" className="w-full h-auto object-contain" />
            </div>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-12 md:py-16 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-serif font-medium text-primary mb-6 leading-tight">
            Book Your 1% Listing Consultation
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed">
            Speak with our team and see if selling now is the right move for your investment strategy.
          </p>
        </motion.div>

        {/* Zoho Booking Embed */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full max-w-4xl mx-auto bg-white rounded-sm shadow-xl border border-border overflow-hidden"
        >
          <iframe 
            width="100%" 
            height="750px" 
            src="https://jacksonrentalhomes.zohobookings.com/portal-embed#/4181473000002254002" 
            frameBorder="0" 
            allowFullScreen
            className="w-full"
            title="Book Consultation"
          ></iframe>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center text-sm text-muted-foreground mt-8 italic"
        >
          No pressure or obligations. Just a conversation about your property and your options.
        </motion.p>
      </main>
    </div>
  );
}

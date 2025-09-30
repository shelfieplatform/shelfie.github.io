import { useState } from "react";
import Header from "./Header";
import Hero from "./Hero";
import HowItWorks from "./HowItWorks";
import Footer from "./Footer";
import FloatingWaitlist from "./FloatingWaitlist";

export default function LandingPage() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  const handleJoinWaitlist = () => {
    setIsWaitlistOpen(true);
  };

  const handleCloseWaitlist = () => {
    setIsWaitlistOpen(false);
  };

          return (
            <div className="min-h-screen bg-gradient-to-b from-[#A690F2] to-[#2C1761] text-white">
              <div className="relative">
                <Header onJoinWaitlist={handleJoinWaitlist} />
                
                <main className="relative">
                  <Hero onJoinWaitlist={handleJoinWaitlist} />
                  
                  <div className="relative z-10">
                    <HowItWorks />
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                      <Footer />
                    </div>
                  </div>
                </main>
                
                <FloatingWaitlist 
                  isOpen={isWaitlistOpen} 
                  onClose={handleCloseWaitlist} 
                />
              </div>
            </div>
          );
}

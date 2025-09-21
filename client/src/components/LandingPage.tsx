import { useState } from "react";
import Header from "./Header";
import Hero from "./Hero";
import Features from "./Features";
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
    <div className="min-h-screen">
      <Header onJoinWaitlist={handleJoinWaitlist} />
      
      <main>
        <Hero onJoinWaitlist={handleJoinWaitlist} />
        
        <div id="features">
          <Features />
        </div>
      </main>
      
      <Footer />
      
      <FloatingWaitlist 
        isOpen={isWaitlistOpen} 
        onClose={handleCloseWaitlist} 
      />
    </div>
  );
}

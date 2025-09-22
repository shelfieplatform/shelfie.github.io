import { useState } from "react";
import Header from "./Header";
import Hero from "./Hero";
import HowItWorks from "./HowItWorks";
import Footer from "./Footer";
import FloatingWaitlist from "./FloatingWaitlist";
import PrivacyPolicy from "./PrivacyPolicy";
import TermsOfService from "./TermsOfService";

export default function LandingPage() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const [showTermsOfService, setShowTermsOfService] = useState(false);

  const handleJoinWaitlist = () => {
    setIsWaitlistOpen(true);
  };

  const handleCloseWaitlist = () => {
    setIsWaitlistOpen(false);
  };

  const handleShowPrivacyPolicy = () => {
    setShowPrivacyPolicy(true);
  };

  const handleBackFromPrivacy = () => {
    setShowPrivacyPolicy(false);
  };

  const handleShowTermsOfService = () => {
    setShowTermsOfService(true);
  };

  const handleBackFromTerms = () => {
    setShowTermsOfService(false);
  };

  if (showPrivacyPolicy) {
    return <PrivacyPolicy onBack={handleBackFromPrivacy} />;
  }

  if (showTermsOfService) {
    return <TermsOfService onBack={handleBackFromTerms} onShowPrivacyPolicy={handleShowPrivacyPolicy} />;
  }

          return (
            <div className="min-h-screen bg-gradient-to-b from-[#A690F2] to-[#2C1761] text-white">
              <div className="relative">
                <Header onJoinWaitlist={handleJoinWaitlist} />
                
                <main className="relative">
                  <Hero onJoinWaitlist={handleJoinWaitlist} />
                  
                  <div className="relative z-10">
                    <HowItWorks />
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                      <Footer onShowPrivacyPolicy={handleShowPrivacyPolicy} onShowTermsOfService={handleShowTermsOfService} />
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

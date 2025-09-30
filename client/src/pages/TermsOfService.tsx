import TermsOfService from "@/components/TermsOfService";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function TermsOfServicePage() {
  const handleBack = () => {
    window.history.back();
  };

  const handleShowPrivacyPolicy = () => {
    window.location.href = '/privacy-policy';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#A690F2] to-[#2C1761] text-white">
      {/* Header with Language Switcher */}
      <header className="fixed top-0 w-full z-40 bg-black/20 backdrop-blur-md border-b border-white/10 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-18 py-3 sm:py-2">
            <div className="flex-shrink-0">
              <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
                Shelfie
              </h1>
            </div>
            <div className="flex items-center gap-3">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </header>
      
      {/* Main Content */}
      <div className="pt-16">
        <TermsOfService onBack={handleBack} onShowPrivacyPolicy={handleShowPrivacyPolicy} />
      </div>
    </div>
  );
}

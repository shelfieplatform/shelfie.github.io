import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

interface HeaderProps {
  onJoinWaitlist: () => void;
}

export default function Header({ onJoinWaitlist }: HeaderProps) {
  const { t } = useLanguage();

  return (
    <header 
      className="fixed top-0 w-full z-40 bg-black/20 backdrop-blur-md border-b border-white/10 shadow-lg"
      role="banner"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between items-center h-16 sm:h-18 py-3 sm:py-2" role="navigation" aria-label="Main navigation">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
              <a href="/" aria-label="Shelfie - Home" className="hover:text-white/80 transition-colors">
                {t('header.logo')}
              </a>
            </h1>
          </div>

          {/* Language Switcher and CTA Button */}
          <div className="flex items-center gap-3" role="group" aria-label="User actions">
            <LanguageSwitcher />
            <Button
              onClick={onJoinWaitlist}
              className="bg-[#A690F2] hover:bg-[#9C7FE8] text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent px-4 sm:px-6 py-2 text-sm sm:text-base"
              data-testid="button-join-waitlist"
              aria-label="Join the waitlist to get early access to Shelfie"
              role="button"
              tabIndex={0}
            >
              <span className="hidden sm:inline" aria-hidden="false">{t('header.joinWaitlist')}</span>
              <span className="sm:hidden" aria-hidden="false">{t('header.join')}</span>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}

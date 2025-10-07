import { Button } from "@/components/ui/button";
import { BookOpen, Music, Film, Tv } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface HeroProps {
  onJoinWaitlist?: () => void;
}

export default function Hero({ onJoinWaitlist }: HeroProps) {
  const { t } = useLanguage();

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      role="main"
      aria-label="Hero section"
    >
      {/* Floating Media Icons */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-20 left-20 animate-bounce">
          <div className="p-3 bg-white/10 rounded-full backdrop-blur-sm">
            <BookOpen className="w-6 h-6 text-white" aria-hidden="true" />
          </div>
        </div>
        <div className="absolute top-32 right-24 animate-bounce delay-300">
          <div className="p-3 bg-white/10 rounded-full backdrop-blur-sm">
            <Music className="w-6 h-6 text-white" aria-hidden="true" />
          </div>
        </div>
        <div className="absolute bottom-32 left-32 animate-bounce delay-500">
          <div className="p-3 bg-white/10 rounded-full backdrop-blur-sm">
            <Film className="w-6 h-6 text-white" aria-hidden="true" />
          </div>
        </div>
        <div className="absolute bottom-20 right-20 animate-bounce delay-700">
          <div className="p-3 bg-white/10 rounded-full backdrop-blur-sm">
            <Tv className="w-6 h-6 text-white" aria-hidden="true" />
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight tracking-tight">
          {t('hero.welcome')} <span className="text-white">Shelfie</span>
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed font-medium px-2">
          {t('hero.subtitle')}
        </p>
        <Button 
          size="lg" 
          className="bg-[#A690F2] hover:bg-[#9C7FE8] text-white font-semibold px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 text-base sm:text-lg rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 active:scale-95 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent w-full sm:w-auto"
          onClick={onJoinWaitlist}
          data-testid="button-join-waitlist"
          aria-label="Join the waitlist to get early access to Shelfie"
          role="button"
          tabIndex={0}
        >
          <span className="relative">
            {t('hero.joinWaitlist')}
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-white/20 rounded-full animate-pulse" aria-hidden="true"></span>
          </span>
        </Button>
      </div>
    </section>
  );
}

import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'tr' : 'en');
  };

  return (
    <Button
      onClick={toggleLanguage}
      variant="ghost"
      size="sm"
      className="text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent"
      data-testid="language-switcher"
      aria-label={`Switch to ${language === 'en' ? 'Turkish' : 'English'} language`}
      role="button"
      tabIndex={0}
    >
      <Globe className="w-4 h-4 mr-2" aria-hidden="true" />
      <span aria-live="polite">{language === 'en' ? 'TR' : 'EN'}</span>
    </Button>
  );
}

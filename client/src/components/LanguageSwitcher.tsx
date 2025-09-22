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
      className="text-white hover:bg-white/10 transition-colors"
      data-testid="language-switcher"
    >
      <Globe className="w-4 h-4 mr-2" />
      {language === 'en' ? 'TR' : 'EN'}
    </Button>
  );
}

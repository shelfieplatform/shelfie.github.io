import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'tr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation keys
const translations = {
  en: {
    // Header
    'header.logo': 'Shelfie',
    'header.joinWaitlist': 'Join Waitlist',
    'header.join': 'Join',
    
    // Hero
    'hero.welcome': 'Welcome to',
    'hero.subtitle': 'Curate and Build Your Digital Shelf of Favorites',
    'hero.joinWaitlist': 'Join the Waitlist',
    
    // How It Works
    'howItWorks.step1.title': 'Add Your Favorites',
    'howItWorks.step1.description': 'Start by adding books, movies, music, and TV shows you love to your digital shelf.',
    'howItWorks.step2.title': 'Connect with Friends',
    'howItWorks.step2.description': 'Share your shelf with friends and discover their favorite content through social connections.',
    'howItWorks.step3.title': 'Discover & Organize',
    'howItWorks.step3.description': 'Get personalized recommendations and organize your collection with smart categorization.',
    
    // Features
    'features.title': 'Everything You Love,',
    'features.organized': 'Organized',
    'features.subtitle': 'Build your digital shelf and share your passions with the world',
    
    // Footer
    'footer.description': 'Build your digital shelf of favorites. Organize, share, and discover books, movies, music, and TV shows with friends.',
    'footer.contact': 'Contact',
    'footer.contactDescription': 'Get in touch with us:',
    'footer.copyright': 'All rights reserved.',
    'footer.privacyPolicy': 'Privacy Policy',
    'footer.termsOfService': 'Terms of Service',
    
    // Waitlist Modal
    'waitlist.title': 'Join the Waitlist',
    'waitlist.description': 'Be the first to know when Shelfie launches and get early access to organize your digital shelf!',
    'waitlist.name': 'Name',
    'waitlist.email': 'Email',
    'waitlist.namePlaceholder': 'Your name',
    'waitlist.emailPlaceholder': 'your@email.com',
    'waitlist.submit': 'Join Waitlist',
    'waitlist.submitting': 'Joining...',
    'waitlist.success': 'Welcome to the waitlist! 🎉',
    'waitlist.successDescription': "We'll notify you when Shelfie launches.",
    'waitlist.error': 'Missing information',
    'waitlist.errorDescription': 'Please fill in both your name and email.',
    
    // Privacy Policy
    'privacy.title': 'Privacy Policy',
    'privacy.back': 'Back',
    
    // Terms of Service
    'terms.title': 'Terms of Service',
    'terms.back': 'Back',
    'terms.welcome': 'Welcome to',
    'terms.intro': 'These Terms of Service ("Terms") govern your use of the Shelfie mobile application and related services (collectively, the "Service") operated by Shelfie Inc. ("we," "our," or "us").',
    'terms.lastUpdated': 'Last updated:',
    'terms.contact': 'Contact Information',
    'terms.contactDescription': 'If you have any questions about these Terms of Service, please contact us:',
    'terms.contactSupport': 'Contact Support',
  },
  tr: {
    // Header
    'header.logo': 'Shelfie',
    'header.joinWaitlist': 'Bekleme Listesine Katıl',
    'header.join': 'Katıl',
    
    // Hero
    'hero.welcome': 'Hoş Geldiniz',
    'hero.subtitle': 'Favorilerinizin Dijital Rafını Küratörlük Yapın ve Oluşturun',
    'hero.joinWaitlist': 'Bekleme Listesine Katıl',
    
    // How It Works
    'howItWorks.step1.title': 'Favorilerinizi Ekleyin',
    'howItWorks.step1.description': 'Sevdiğiniz kitapları, filmleri, müzikleri ve TV şovlarını dijital rafınıza ekleyerek başlayın.',
    'howItWorks.step2.title': 'Arkadaşlarınızla Bağlantı Kurun',
    'howItWorks.step2.description': 'Rafınızı arkadaşlarınızla paylaşın ve sosyal bağlantılar aracılığıyla onların favori içeriklerini keşfedin.',
    'howItWorks.step3.title': 'Keşfedin ve Düzenleyin',
    'howItWorks.step3.description': 'Kişiselleştirilmiş öneriler alın ve koleksiyonunuzu akıllı kategorilendirme ile düzenleyin.',
    
    // Features
    'features.title': 'Sevdiğiniz Her Şey,',
    'features.organized': 'Düzenli',
    'features.subtitle': 'Dijital rafınızı oluşturun ve tutkularınızı dünyayla paylaşın',
    
    // Footer
    'footer.description': 'Favorilerinizin dijital rafını oluşturun. Kitapları, filmleri, müziği ve TV şovlarını arkadaşlarınızla organize edin, paylaşın ve keşfedin.',
    'footer.contact': 'İletişim',
    'footer.contactDescription': 'Bizimle iletişime geçin:',
    'footer.copyright': 'Tüm hakları saklıdır.',
    'footer.privacyPolicy': 'Gizlilik Politikası',
    'footer.termsOfService': 'Hizmet Şartları',
    
    // Waitlist Modal
    'waitlist.title': 'Bekleme Listesine Katıl',
    'waitlist.description': 'Shelfie\'nin lansmanını ilk öğrenen olun ve dijital rafınızı organize etmek için erken erişim elde edin!',
    'waitlist.name': 'Ad',
    'waitlist.email': 'E-posta',
    'waitlist.namePlaceholder': 'Adınız',
    'waitlist.emailPlaceholder': 'email@example.com',
    'waitlist.submit': 'Bekleme Listesine Katıl',
    'waitlist.submitting': 'Katılıyor...',
    'waitlist.success': 'Bekleme listesine hoş geldiniz! 🎉',
    'waitlist.successDescription': 'Shelfie lansman yaptığında sizi bilgilendireceğiz.',
    'waitlist.error': 'Eksik bilgi',
    'waitlist.errorDescription': 'Lütfen hem adınızı hem de e-postanızı doldurun.',
    
    // Privacy Policy
    'privacy.title': 'Gizlilik Politikası',
    'privacy.back': 'Geri',
    
    // Terms of Service
    'terms.title': 'Hizmet Şartları',
    'terms.back': 'Geri',
    'terms.welcome': 'Hoş Geldiniz',
    'terms.intro': 'Bu Hizmet Şartları ("Şartlar"), Shelfie Inc. ("biz," "bizim," veya "bizim") tarafından işletilen Shelfie mobil uygulaması ve ilgili hizmetlerin (topluca "Hizmet") kullanımınızı yönetir.',
    'terms.lastUpdated': 'Son güncelleme:',
    'terms.contact': 'İletişim Bilgileri',
    'terms.contactDescription': 'Bu Hizmet Şartları hakkında herhangi bir sorunuz varsa, lütfen bizimle iletişime geçin:',
    'terms.contactSupport': 'Destek ile İletişime Geç',
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

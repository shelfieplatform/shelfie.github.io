import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Mail, ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface TermsOfServiceProps {
  onBack: () => void;
  onShowPrivacyPolicy?: () => void;
}

export default function TermsOfService({ onBack, onShowPrivacyPolicy }: TermsOfServiceProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [lastUpdated] = useState('December 2024');
  const { t } = useLanguage();

  const handleContactSupport = () => {
    window.open('mailto:shelfieplatform@gmail.com?subject=Terms of Service Question', '_blank');
  };

  const handleOpenPrivacyPolicy = () => {
    if (onShowPrivacyPolicy) {
      onShowPrivacyPolicy();
    }
  };

  const renderSection = (title: string, content: React.ReactNode) => (
    <div className="mb-4 sm:mb-6">
      <h2 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-white">{title}</h2>
      {content}
    </div>
  );

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#A690F2] to-[#2C1761] text-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
          <p className="text-white/80">{t('terms.loading')}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#A690F2] to-[#2C1761] text-white">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            <Button
              onClick={onBack}
              variant="ghost"
              className="text-white hover:bg-white/10"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t('terms.back')}
            </Button>
            <h1 className="text-lg sm:text-xl font-bold">{t('terms.title')}</h1>
            <div className="w-20" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
        {/* Intro Section */}
        <div className="bg-white/5 rounded-lg p-6 mb-8 border border-white/10">
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-center mb-4 text-white">
            {t('terms.welcome')} <span className="bg-gradient-to-r from-[#A690F2] to-white bg-clip-text text-transparent">Shelfie</span>
          </h1>
          <p className="text-sm sm:text-base text-white/80 leading-relaxed mb-4">
            {t('terms.intro')}
          </p>
          <p className="text-sm text-[#A690F2] font-medium text-center">
            {t('terms.lastUpdated')} {lastUpdated}
          </p>
        </div>

        {renderSection(
          t('terms.section1.title'),
          <div className="space-y-4">
            <p className="text-white/80 leading-relaxed">
              {t('terms.section1.content1')}
            </p>
            <p className="text-white/80 leading-relaxed">
              {t('terms.section1.content2')}
            </p>
          </div>
        )}

        {renderSection(
          t('terms.section2.title'),
          <div className="space-y-4">
            <p className="text-white/80 leading-relaxed">
              {t('terms.section2.content1')}
            </p>
            <ul className="list-disc list-inside space-y-1 text-white/80">
              <li>{t('terms.section2.list1')}</li>
              <li>{t('terms.section2.list2')}</li>
              <li>{t('terms.section2.list3')}</li>
              <li>{t('terms.section2.list4')}</li>
              <li>{t('terms.section2.list5')}</li>
              <li>{t('terms.section2.list6')}</li>
            </ul>
          </div>
        )}

        {renderSection(
          t('terms.section3.title'),
          <div className="space-y-4">
            <p className="text-white/80 leading-relaxed">
              {t('terms.section3.content1')}
            </p>
            <ul className="list-disc list-inside space-y-1 text-white/80">
              <li>{t('terms.section3.list1')}</li>
              <li>{t('terms.section3.list2')}</li>
              <li>{t('terms.section3.list3')}</li>
              <li>{t('terms.section3.list4')}</li>
              <li>{t('terms.section3.list5')}</li>
            </ul>
            <p className="text-white/80 leading-relaxed">
              {t('terms.section3.content2')}
            </p>
          </div>
        )}

        {renderSection(
          t('terms.section4.title'),
          <div className="space-y-4">
            <p className="text-white/80 leading-relaxed">
              {t('terms.section4.content1')}
            </p>
            <ul className="list-disc list-inside space-y-1 text-white/80">
              <li>{t('terms.section4.list1')}</li>
              <li>{t('terms.section4.list2')}</li>
              <li>{t('terms.section4.list3')}</li>
              <li>{t('terms.section4.list4')}</li>
              <li>{t('terms.section4.list5')}</li>
              <li>{t('terms.section4.list6')}</li>
            </ul>
            <p className="text-white/80 leading-relaxed">
              {t('terms.section4.content2')}
            </p>
          </div>
        )}

        {renderSection(
          t('terms.section5.title'),
          <div className="space-y-4">
            <p className="text-white/80 leading-relaxed">
              {t('terms.section5.content1')}
            </p>
            <Button
              onClick={handleOpenPrivacyPolicy}
              className="bg-[#A690F2] hover:bg-[#9C7FE8] text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none"
            >
              {t('terms.viewPrivacyPolicy')}
            </Button>
          </div>
        )}

        {renderSection(
          t('terms.section6.title'),
          <div className="space-y-4">
            <p className="text-white/80 leading-relaxed">
              {t('terms.section6.content1')}
            </p>
            <p className="text-white/80 leading-relaxed">
              {t('terms.section6.content2')}
            </p>
          </div>
        )}

        {renderSection(
          t('terms.section7.title'),
          <div className="space-y-4">
            <p className="text-white/80 leading-relaxed">
              {t('terms.section7.content1')}
            </p>
            <ul className="list-disc list-inside space-y-1 text-white/80">
              <li>{t('terms.section7.list1')}</li>
              <li>{t('terms.section7.list2')}</li>
              <li>{t('terms.section7.list3')}</li>
              <li>{t('terms.section7.list4')}</li>
              <li>{t('terms.section7.list5')}</li>
              <li>{t('terms.section7.list6')}</li>
            </ul>
          </div>
        )}

        {renderSection(
          t('terms.section8.title'),
          <div className="space-y-4">
            <p className="text-white/80 leading-relaxed">
              {t('terms.section8.content1')}
            </p>
            <p className="text-white/80 leading-relaxed">
              {t('terms.section8.content2')}
            </p>
          </div>
        )}

        {renderSection(
          t('terms.section9.title'),
          <div className="space-y-4">
            <p className="text-white/80 leading-relaxed">
              {t('terms.section9.content1')}
            </p>
            <p className="text-white/80 leading-relaxed">
              {t('terms.section9.content2')}
            </p>
          </div>
        )}

        {renderSection(
          t('terms.section10.title'),
          <div className="space-y-4">
            <p className="text-white/80 leading-relaxed">
              {t('terms.section10.content1')}
            </p>
            <p className="text-white/80 leading-relaxed">
              {t('terms.section10.content2')}
            </p>
          </div>
        )}

        {renderSection(
          t('terms.section11.title'),
          <p className="text-white/80 leading-relaxed">
            {t('terms.section11.content')}
          </p>
        )}

        {renderSection(
          t('terms.section12.title'),
          <div className="space-y-4">
            <p className="text-white/80 leading-relaxed">
              {t('terms.section12.content1')}
            </p>
            <p className="text-white/80 leading-relaxed">
              {t('terms.section12.content2')}
            </p>
          </div>
        )}

        {/* Contact Section */}
        <div className="bg-white/5 rounded-lg p-6 mt-8 border border-white/10">
          <h2 className="text-lg sm:text-xl font-bold mb-4 text-white">{t('terms.contact')}</h2>
          <p className="text-sm sm:text-base text-white/80 leading-relaxed mb-4">
            {t('terms.contactDescription')}
          </p>
          <div className="text-sm sm:text-base text-white/80 leading-relaxed mb-4">
            <p>Email: shelfieplatform@gmail.com</p>
            <p>Website: https://shelfieplatform.github.io/shelfie.github.io/</p>
          </div>
          <Button
            onClick={handleContactSupport}
            className="bg-[#A690F2] hover:bg-[#9C7FE8] text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-white/20"
          >
            <Mail className="w-4 h-4 mr-2" />
            {t('terms.contactSupport')}
          </Button>
        </div>
      </div>
    </div>
  );
}
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Mail, ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface PrivacyPolicyProps {
  onBack: () => void;
}

export default function PrivacyPolicy({ onBack }: PrivacyPolicyProps) {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const { t } = useLanguage();

  const handleContactSupport = () => {
    setIsContactOpen(true);
  };

  const handleEmailContact = () => {
    window.open('mailto:shelfieplatform@gmail.com?subject=Privacy Policy Question', '_blank');
  };

  const handleDataRequest = () => {
    window.open('mailto:shelfieplatform@gmail.com?subject=Data Request', '_blank');
  };

  const renderSection = (title: string, content: React.ReactNode) => (
    <div className="mb-4 sm:mb-6">
      <h2 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-white">{title}</h2>
      {content}
    </div>
  );

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
              {t('privacy.back')}
            </Button>
            <h1 className="text-lg sm:text-xl font-bold">{t('privacy.title')}</h1>
            <div className="w-20" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
        {renderSection(
          t('privacy.lastUpdated'),
          <p className="text-sm sm:text-base text-white/80 leading-relaxed">
            {t('privacy.intro')}
          </p>
        )}

        {renderSection(
          t('privacy.section1.title'),
          <div className="space-y-4">
            <p className="text-sm sm:text-base text-white/80 leading-relaxed">
              {t('privacy.section1.intro')}
            </p>
            
            <div>
              <h3 className="text-lg font-semibold mb-2 text-white">{t('privacy.section1.accountInfoTitle')}</h3>
              <ul className="list-disc list-inside space-y-1 text-white/80">
                <li>{t('privacy.section1.accountInfo1')}</li>
                <li>{t('privacy.section1.accountInfo2')}</li>
                <li>{t('privacy.section1.accountInfo3')}</li>
                <li>{t('privacy.section1.accountInfo4')}</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2 text-white">{t('privacy.section1.contentInfoTitle')}</h3>
              <ul className="list-disc list-inside space-y-1 text-white/80">
                <li>{t('privacy.section1.contentInfo1')}</li>
                <li>{t('privacy.section1.contentInfo2')}</li>
                <li>{t('privacy.section1.contentInfo3')}</li>
                <li>{t('privacy.section1.contentInfo4')}</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2 text-white">{t('privacy.section1.usageInfoTitle')}</h3>
              <ul className="list-disc list-inside space-y-1 text-white/80">
                <li>{t('privacy.section1.usageInfo1')}</li>
                <li>{t('privacy.section1.usageInfo2')}</li>
                <li>{t('privacy.section1.usageInfo3')}</li>
                <li>{t('privacy.section1.usageInfo4')}</li>
              </ul>
            </div>
          </div>
        )}

        {renderSection(
          t('privacy.section2.title'),
          <div className="space-y-4">
            <p className="text-sm sm:text-base text-white/80 leading-relaxed">
              {t('privacy.section2.intro')}
            </p>
            <ul className="list-disc list-inside space-y-1 text-white/80">
              <li>{t('privacy.section2.use1')}</li>
              <li>{t('privacy.section2.use2')}</li>
              <li>{t('privacy.section2.use3')}</li>
              <li>{t('privacy.section2.use4')}</li>
              <li>{t('privacy.section2.use5')}</li>
              <li>{t('privacy.section2.use6')}</li>
              <li>{t('privacy.section2.use7')}</li>
              <li>{t('privacy.section2.use8')}</li>
              <li>{t('privacy.section2.use9')}</li>
            </ul>
          </div>
        )}

        {renderSection(
          t('privacy.section3.title'),
          <div className="space-y-4">
            <p className="text-sm sm:text-base text-white/80 leading-relaxed">
              {t('privacy.section3.intro')}
            </p>
            
            <div>
              <h3 className="text-lg font-semibold mb-2 text-white">{t('privacy.section3.consentTitle')}</h3>
              <ul className="list-disc list-inside space-y-1 text-white/80">
                <li>{t('privacy.section3.consent1')}</li>
                <li>{t('privacy.section3.consent2')}</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2 text-white">{t('privacy.section3.otherUsersTitle')}</h3>
              <ul className="list-disc list-inside space-y-1 text-white/80">
                <li>{t('privacy.section3.otherUsers1')}</li>
                <li>{t('privacy.section3.otherUsers2')}</li>
                <li>{t('privacy.section3.otherUsers3')}</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2 text-white">{t('privacy.section3.serviceProvidersTitle')}</h3>
              <ul className="list-disc list-inside space-y-1 text-white/80">
                <li>{t('privacy.section3.serviceProviders1')}</li>
                <li>{t('privacy.section3.serviceProviders2')}</li>
                <li>{t('privacy.section3.serviceProviders3')}</li>
                <li>{t('privacy.section3.serviceProviders4')}</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2 text-white">{t('privacy.section3.legalTitle')}</h3>
              <ul className="list-disc list-inside space-y-1 text-white/80">
                <li>{t('privacy.section3.legal1')}</li>
                <li>{t('privacy.section3.legal2')}</li>
                <li>{t('privacy.section3.legal3')}</li>
                <li>{t('privacy.section3.legal4')}</li>
              </ul>
            </div>
          </div>
        )}

        {renderSection(
          t('privacy.section4.title'),
          <div className="space-y-4">
            <p className="text-sm sm:text-base text-white/80 leading-relaxed">
              {t('privacy.section4.intro')}
            </p>
            <ul className="list-disc list-inside space-y-1 text-white/80">
              <li>{t('privacy.section4.security1')}</li>
              <li>{t('privacy.section4.security2')}</li>
              <li>{t('privacy.section4.security3')}</li>
              <li>{t('privacy.section4.security4')}</li>
              <li>{t('privacy.section4.security5')}</li>
            </ul>
            <p className="text-sm sm:text-base text-white/80 leading-relaxed">
              {t('privacy.section4.warning')}
            </p>
          </div>
        )}

        {renderSection(
          t('privacy.section5.title'),
          <div className="space-y-4">
            <p className="text-sm sm:text-base text-white/80 leading-relaxed">
              {t('privacy.section5.intro')}
            </p>
            <ul className="list-disc list-inside space-y-1 text-white/80">
              <li>{t('privacy.section5.rights1')}</li>
              <li>{t('privacy.section5.rights2')}</li>
              <li>{t('privacy.section5.rights3')}</li>
              <li>{t('privacy.section5.rights4')}</li>
              <li>{t('privacy.section5.rights5')}</li>
              <li>{t('privacy.section5.rights6')}</li>
            </ul>
            <Button
              onClick={handleDataRequest}
              className="bg-[#A690F2] hover:bg-[#9C7FE8] text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none"
            >
              {t('privacy.section5.requestData')}
            </Button>
          </div>
        )}

        {renderSection(
          t('privacy.section6.title'),
          <p className="text-sm sm:text-base text-white/80 leading-relaxed">
            {t('privacy.section6.content')}
          </p>
        )}

        {renderSection(
          t('privacy.section7.title'),
          <p className="text-sm sm:text-base text-white/80 leading-relaxed">
            {t('privacy.section7.content')}
          </p>
        )}

        {renderSection(
          t('privacy.section8.title'),
          <p className="text-sm sm:text-base text-white/80 leading-relaxed">
            {t('privacy.section8.content')}
          </p>
        )}

        {renderSection(
          t('privacy.section9.title'),
          <div className="space-y-4">
            <p className="text-sm sm:text-base text-white/80 leading-relaxed">
              {t('privacy.section9.intro')}
            </p>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-white">{t('privacy.section9.integratedServicesTitle')}</h3>
              <ul className="list-disc list-inside space-y-1 text-white/80">
                <li>{t('privacy.section9.integratedServices1')}</li>
                <li>{t('privacy.section9.integratedServices2')}</li>
                <li>{t('privacy.section9.integratedServices3')}</li>
                <li>{t('privacy.section9.integratedServices4')}</li>
              </ul>
            </div>
          </div>
        )}

        {renderSection(
          t('privacy.section10.title'),
          <p className="text-sm sm:text-base text-white/80 leading-relaxed">
            {t('privacy.section10.content')}
          </p>
        )}

        {renderSection(
          t('privacy.section11.title'),
          <div className="space-y-4">
            <p className="text-sm sm:text-base text-white/80 leading-relaxed">
              {t('privacy.section11.intro')}
            </p>
            <ul className="list-disc list-inside space-y-1 text-white/80">
              <li>{t('privacy.section11.rights1')}</li>
              <li>{t('privacy.section11.rights2')}</li>
              <li>{t('privacy.section11.rights3')}</li>
              <li>{t('privacy.section11.rights4')}</li>
            </ul>
          </div>
        )}

        {renderSection(
          t('privacy.section12.title'),
          <div className="space-y-4">
            <p className="text-sm sm:text-base text-white/80 leading-relaxed">
              {t('privacy.section12.intro')}
            </p>
            <ul className="list-disc list-inside space-y-1 text-white/80">
              <li>{t('privacy.section12.rights1')}</li>
              <li>{t('privacy.section12.rights2')}</li>
              <li>{t('privacy.section12.rights3')}</li>
              <li>{t('privacy.section12.rights4')}</li>
              <li>{t('privacy.section12.rights5')}</li>
              <li>{t('privacy.section12.rights6')}</li>
            </ul>
          </div>
        )}

        {renderSection(
          t('privacy.contactUsTitle'),
          <div className="space-y-4">
            <p className="text-sm sm:text-base text-white/80 leading-relaxed">
              {t('privacy.contactUsIntro')}
            </p>
            <ul className="list-disc list-inside space-y-1 text-white/80">
              <li>{t('privacy.contactUsEmail')}</li>
              <li>{t('privacy.contactUsWebsite')}</li>
            </ul>
            <div className="flex gap-4">
              <Button
                onClick={handleEmailContact}
                className="bg-[#A690F2] hover:bg-[#9C7FE8] text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none"
              >
                <Mail className="w-4 h-4 mr-2" />
                {t('privacy.contactPrivacyTeam')}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
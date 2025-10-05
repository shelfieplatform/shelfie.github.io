import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Shield, Eye, UserX, FileText, Key, Bell, Settings, Trash2, RotateCcw, Lock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "wouter";

interface PrivacySecurityProps {
  onBack?: () => void;
}

export default function PrivacySecurity(props: any) {
  const { onBack } = props;
  const { t } = useLanguage();

  const articles = [
    {
      title: t('helpCenter.privacySecurity.privacySettings.title'),
      description: t('helpCenter.privacySecurity.privacySettings.description'),
      icon: Shield,
      href: "/help-center/privacy-security/privacy-settings",
      estimatedTime: "5 min read"
    },
    {
      title: t('helpCenter.privacySecurity.profileVisibility.title'),
      description: t('helpCenter.privacySecurity.profileVisibility.description'),
      icon: Eye,
      href: "/help-center/privacy-security/profile-visibility",
      estimatedTime: "4 min read"
    },
    {
      title: t('helpCenter.privacySecurity.blockingReporting.title'),
      description: t('helpCenter.privacySecurity.blockingReporting.description'),
      icon: UserX,
      href: "/help-center/privacy-security/blocking-reporting",
      estimatedTime: "4 min read"
    },
    {
      title: t('helpCenter.privacySecurity.dataProtection.title'),
      description: t('helpCenter.privacySecurity.dataProtection.description'),
      icon: FileText,
      href: "/help-center/privacy-security/data-protection",
      estimatedTime: "6 min read"
    },
    {
      title: t('helpCenter.privacySecurity.securityBestPractices.title'),
      description: t('helpCenter.privacySecurity.securityBestPractices.description'),
      icon: Lock,
      href: "/help-center/privacy-security/security-best-practices",
      estimatedTime: "5 min read"
    },
    {
      title: t('helpCenter.privacySecurity.twoFactorAuth.title'),
      description: t('helpCenter.privacySecurity.twoFactorAuth.description'),
      icon: Key,
      href: "/help-center/privacy-security/two-factor-auth",
      estimatedTime: "6 min read"
    },
    {
      title: t('helpCenter.privacySecurity.privacyPolicy.title'),
      description: t('helpCenter.privacySecurity.privacyPolicy.description'),
      icon: FileText,
      href: "/help-center/privacy-security/privacy-policy",
      estimatedTime: "3 min read"
    },
    {
      title: t('helpCenter.privacySecurity.dataSharing.title'),
      description: t('helpCenter.privacySecurity.dataSharing.description'),
      icon: Settings,
      href: "/help-center/privacy-security/data-sharing",
      estimatedTime: "4 min read"
    },
    {
      title: t('helpCenter.privacySecurity.thirdPartyIntegrations.title'),
      description: t('helpCenter.privacySecurity.thirdPartyIntegrations.description'),
      icon: Settings,
      href: "/help-center/privacy-security/third-party-integrations",
      estimatedTime: "5 min read"
    },
    {
      title: t('helpCenter.privacySecurity.securityNotifications.title'),
      description: t('helpCenter.privacySecurity.securityNotifications.description'),
      icon: Bell,
      href: "/help-center/privacy-security/security-notifications",
      estimatedTime: "3 min read"
    },
    {
      title: t('helpCenter.privacySecurity.accountRecovery.title'),
      description: t('helpCenter.privacySecurity.accountRecovery.description'),
      icon: RotateCcw,
      href: "/help-center/privacy-security/account-recovery",
      estimatedTime: "4 min read"
    },
    {
      title: t('helpCenter.privacySecurity.dataDeletion.title'),
      description: t('helpCenter.privacySecurity.dataDeletion.description'),
      icon: Trash2,
      href: "/help-center/privacy-security/data-deletion",
      estimatedTime: "4 min read"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#A690F2] to-[#2C1761] text-white">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            {onBack ? (
              <Button
                onClick={onBack}
                variant="ghost"
                className="text-white hover:bg-white/10"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                {t('helpCenter.back')}
              </Button>
            ) : (
              <Link href="/help-center">
                <Button
                  variant="ghost"
                  className="text-white hover:bg-white/10"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  {t('helpCenter.back')}
                </Button>
              </Link>
            )}
            <h1 className="text-lg sm:text-xl font-bold">
              {t('helpCenter.categories.privacySecurity.title')}
            </h1>
            <div className="w-20" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        {/* Category Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-full mb-4">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            {t('helpCenter.categories.privacySecurity.title')}
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            {t('helpCenter.categories.privacySecurity.description')}
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {articles.map((article, index) => (
            <Link key={index} href={article.href}>
              <Card className="bg-white/10 border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer group">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-lg bg-white/10 flex-shrink-0 group-hover:bg-white/20 transition-colors">
                      <article.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2 group-hover:text-white transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-white/70 text-sm mb-3">
                        {article.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-white/60">
                          {article.estimatedTime}
                        </span>
                        <div className="text-white/60 group-hover:text-white transition-colors">
                          <ArrowLeft className="w-4 h-4 rotate-180" />
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Back to Help Center */}
        <div className="text-center mt-12">
          <Link href="/help-center">
            <Button
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t('helpCenter.backToHelpCenter')}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

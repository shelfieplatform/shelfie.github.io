import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, User, Settings, Camera, FileText, Shield, Key, UserX, Download, RotateCcw, Eye } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "wouter";
import LanguageSwitcher from "@/components/LanguageSwitcher";

interface AccountProfileProps {
  onBack?: () => void;
}

export default function AccountProfile(props: any) {
  const { onBack } = props;
  const { t } = useLanguage();

  const articles = [
    {
      title: t('helpCenter.accountProfile.changeUsername.title'),
      description: t('helpCenter.accountProfile.changeUsername.description'),
      icon: User,
      href: "/help-center/account-profile/change-username",
      estimatedTime: "3 min read"
    },
    {
      title: t('helpCenter.accountProfile.updateProfile.title'),
      description: t('helpCenter.accountProfile.updateProfile.description'),
      icon: Settings,
      href: "/help-center/account-profile/update-profile",
      estimatedTime: "4 min read"
    },
    {
      title: t('helpCenter.accountProfile.profilePictures.title'),
      description: t('helpCenter.accountProfile.profilePictures.description'),
      icon: Camera,
      href: "/help-center/account-profile/profile-pictures",
      estimatedTime: "3 min read"
    },
    {
      title: t('helpCenter.accountProfile.settingBio.title'),
      description: t('helpCenter.accountProfile.settingBio.description'),
      icon: FileText,
      href: "/help-center/account-profile/setting-bio",
      estimatedTime: "2 min read"
    },
    {
      title: t('helpCenter.accountProfile.securitySettings.title'),
      description: t('helpCenter.accountProfile.securitySettings.description'),
      icon: Shield,
      href: "/help-center/account-profile/security-settings",
      estimatedTime: "5 min read"
    },
    {
      title: t('helpCenter.accountProfile.twoFactorAuth.title'),
      description: t('helpCenter.accountProfile.twoFactorAuth.description'),
      icon: Key,
      href: "/help-center/account-profile/two-factor-auth",
      estimatedTime: "6 min read"
    },
    {
      title: t('helpCenter.accountProfile.passwordManagement.title'),
      description: t('helpCenter.accountProfile.passwordManagement.description'),
      icon: Key,
      href: "/help-center/account-profile/password-management",
      estimatedTime: "3 min read"
    },
    {
      title: t('helpCenter.accountProfile.accountDeactivation.title'),
      description: t('helpCenter.accountProfile.accountDeactivation.description'),
      icon: UserX,
      href: "/help-center/account-profile/account-deactivation",
      estimatedTime: "4 min read"
    },
    {
      title: t('helpCenter.accountProfile.dataExport.title'),
      description: t('helpCenter.accountProfile.dataExport.description'),
      icon: Download,
      href: "/help-center/account-profile/data-export",
      estimatedTime: "3 min read"
    },
    {
      title: t('helpCenter.accountProfile.accountRecovery.title'),
      description: t('helpCenter.accountProfile.accountRecovery.description'),
      icon: RotateCcw,
      href: "/help-center/account-profile/account-recovery",
      estimatedTime: "5 min read"
    },
    {
      title: t('helpCenter.accountProfile.profileVisibility.title'),
      description: t('helpCenter.accountProfile.profileVisibility.description'),
      icon: Eye,
      href: "/help-center/account-profile/profile-visibility",
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
            <h1 className="text-lg sm:text-xl font-bold text-white">
              {t('helpCenter.categories.accountProfile.title')}
            </h1>
            <LanguageSwitcher />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        {/* Category Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full mb-4">
            <User className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
            {t('helpCenter.categories.accountProfile.title')}
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            {t('helpCenter.categories.accountProfile.description')}
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
                      <h3 className="font-semibold text-lg mb-2 text-white group-hover:text-white transition-colors">
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

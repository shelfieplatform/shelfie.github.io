import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BookOpen, User, Settings, Smartphone, Users, Bell, Shield, Eye, Home } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "wouter";
import LanguageSwitcher from "@/components/LanguageSwitcher";

interface GettingStartedProps {
  onBack?: () => void;
}

export default function GettingStarted(props: any) {
  const { onBack } = props;
  const { t } = useLanguage();

  const articles = [
    {
      title: t('helpCenter.gettingStarted.welcome.title'),
      description: t('helpCenter.gettingStarted.welcome.description'),
      icon: BookOpen,
      href: "/help-center/getting-started/welcome",
      estimatedTime: "5 min read"
    },
    {
      title: t('helpCenter.gettingStarted.creatingAccount.title'),
      description: t('helpCenter.gettingStarted.creatingAccount.description'),
      icon: User,
      href: "/help-center/getting-started/creating-account",
      estimatedTime: "3 min read"
    },
    {
      title: t('helpCenter.gettingStarted.settingUpProfile.title'),
      description: t('helpCenter.gettingStarted.settingUpProfile.description'),
      icon: Settings,
      href: "/help-center/getting-started/setting-up-profile",
      estimatedTime: "4 min read"
    },
    {
      title: t('helpCenter.gettingStarted.dashboard.title'),
      description: t('helpCenter.gettingStarted.dashboard.description'),
      icon: Eye,
      href: "/help-center/getting-started/dashboard",
      estimatedTime: "3 min read"
    },
    {
      title: t('helpCenter.gettingStarted.privacySettings.title'),
      description: t('helpCenter.gettingStarted.privacySettings.description'),
      icon: Shield,
      href: "/help-center/getting-started/privacy-settings",
      estimatedTime: "4 min read"
    },
    {
      title: t('helpCenter.gettingStarted.mobileApp.title'),
      description: t('helpCenter.gettingStarted.mobileApp.description'),
      icon: Smartphone,
      href: "/help-center/getting-started/mobile-app",
      estimatedTime: "2 min read"
    },
    {
      title: t('helpCenter.gettingStarted.firstFollowers.title'),
      description: t('helpCenter.gettingStarted.firstFollowers.description'),
      icon: Users,
      href: "/help-center/getting-started/first-followers",
      estimatedTime: "4 min read"
    },
    {
      title: t('helpCenter.gettingStarted.followingUsers.title'),
      description: t('helpCenter.gettingStarted.followingUsers.description'),
      icon: Users,
      href: "/help-center/getting-started/following-users",
      estimatedTime: "3 min read"
    },
    {
      title: t('helpCenter.gettingStarted.notifications.title'),
      description: t('helpCenter.gettingStarted.notifications.description'),
      icon: Bell,
      href: "/help-center/getting-started/notifications",
      estimatedTime: "3 min read"
    },
    {
      title: t('helpCenter.gettingStarted.securityTips.title'),
      description: t('helpCenter.gettingStarted.securityTips.description'),
      icon: Shield,
      href: "/help-center/getting-started/security-tips",
      estimatedTime: "5 min read"
    },
    {
      title: t('helpCenter.gettingStarted.platformTour.title'),
      description: t('helpCenter.gettingStarted.platformTour.description'),
      icon: BookOpen,
      href: "/help-center/getting-started/platform-tour",
      estimatedTime: "6 min read"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#A690F2] to-[#2C1761] text-white">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            <div className="flex items-center space-x-4">
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
              <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
                <div className="w-8 h-8 bg-gradient-to-r from-[#A690F2] to-[#9C7FE8] rounded-lg flex items-center justify-center">
                  <Home className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg sm:text-xl font-bold text-white">Shelfie</span>
              </Link>
            </div>
            <h1 className="text-lg sm:text-xl font-bold text-white">
              {t('helpCenter.categories.gettingStarted.title')}
            </h1>
            <LanguageSwitcher />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        {/* Category Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mb-4">
            <BookOpen className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
            {t('helpCenter.categories.gettingStarted.title')}
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            {t('helpCenter.categories.gettingStarted.description')}
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

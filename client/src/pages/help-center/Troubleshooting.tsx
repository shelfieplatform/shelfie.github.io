import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Wrench, LogIn, Smartphone, Upload, Search, Bell, Zap, Globe, AlertTriangle, RotateCcw, MessageSquare } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "wouter";
import LanguageSwitcher from "@/components/LanguageSwitcher";

interface TroubleshootingProps {
  onBack?: () => void;
}

export default function Troubleshooting(props: any) {
  const { onBack } = props;
  const { t } = useLanguage();

  const articles = [
    {
      title: t('helpCenter.troubleshooting.loginIssues.title'),
      description: t('helpCenter.troubleshooting.loginIssues.description'),
      icon: LogIn,
      href: "/help-center/troubleshooting/login-issues",
      estimatedTime: "4 min read"
    },
    {
      title: t('helpCenter.troubleshooting.appNotLoading.title'),
      description: t('helpCenter.troubleshooting.appNotLoading.description'),
      icon: Smartphone,
      href: "/help-center/troubleshooting/app-not-loading",
      estimatedTime: "5 min read"
    },
    {
      title: t('helpCenter.troubleshooting.uploadProblems.title'),
      description: t('helpCenter.troubleshooting.uploadProblems.description'),
      icon: Upload,
      href: "/help-center/troubleshooting/upload-problems",
      estimatedTime: "4 min read"
    },
    {
      title: t('helpCenter.troubleshooting.searchNotWorking.title'),
      description: t('helpCenter.troubleshooting.searchNotWorking.description'),
      icon: Search,
      href: "/help-center/troubleshooting/search-not-working",
      estimatedTime: "3 min read"
    },
    {
      title: t('helpCenter.troubleshooting.notificationIssues.title'),
      description: t('helpCenter.troubleshooting.notificationIssues.description'),
      icon: Bell,
      href: "/help-center/troubleshooting/notification-issues",
      estimatedTime: "4 min read"
    },
    {
      title: t('helpCenter.troubleshooting.performanceProblems.title'),
      description: t('helpCenter.troubleshooting.performanceProblems.description'),
      icon: Zap,
      href: "/help-center/troubleshooting/performance-problems",
      estimatedTime: "5 min read"
    },
    {
      title: t('helpCenter.troubleshooting.browserCompatibility.title'),
      description: t('helpCenter.troubleshooting.browserCompatibility.description'),
      icon: Globe,
      href: "/help-center/troubleshooting/browser-compatibility",
      estimatedTime: "3 min read"
    },
    {
      title: t('helpCenter.troubleshooting.mobileAppIssues.title'),
      description: t('helpCenter.troubleshooting.mobileAppIssues.description'),
      icon: Smartphone,
      href: "/help-center/troubleshooting/mobile-app-issues",
      estimatedTime: "4 min read"
    },
    {
      title: t('helpCenter.troubleshooting.accountAccess.title'),
      description: t('helpCenter.troubleshooting.accountAccess.description'),
      icon: LogIn,
      href: "/help-center/troubleshooting/account-access",
      estimatedTime: "4 min read"
    },
    {
      title: t('helpCenter.troubleshooting.dataSync.title'),
      description: t('helpCenter.troubleshooting.dataSync.description'),
      icon: RotateCcw,
      href: "/help-center/troubleshooting/data-sync",
      estimatedTime: "3 min read"
    },
    {
      title: t('helpCenter.troubleshooting.errorMessages.title'),
      description: t('helpCenter.troubleshooting.errorMessages.description'),
      icon: AlertTriangle,
      href: "/help-center/troubleshooting/error-messages",
      estimatedTime: "4 min read"
    },
    {
      title: t('helpCenter.troubleshooting.contactSupport.title'),
      description: t('helpCenter.troubleshooting.contactSupport.description'),
      icon: MessageSquare,
      href: "/help-center/troubleshooting/contact-support",
      estimatedTime: "2 min read"
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
              {t('helpCenter.categories.troubleshooting.title')}
            </h1>
            <LanguageSwitcher />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        {/* Category Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full mb-4">
            <Wrench className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
            {t('helpCenter.categories.troubleshooting.title')}
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            {t('helpCenter.categories.troubleshooting.description')}
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

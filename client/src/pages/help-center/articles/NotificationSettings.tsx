import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Bell, Smartphone, Monitor, Settings, CheckCircle, AlertCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "wouter";

export default function NotificationSettings(props: any) {
  const { t } = useLanguage();

  const notificationCategories = [
    {
      title: t('helpCenter.articles.notificationSettings.categories.social.title'),
      description: t('helpCenter.articles.notificationSettings.categories.social.description'),
      icon: Bell,
      settings: [
        t('helpCenter.articles.notificationSettings.categories.social.setting1'),
        t('helpCenter.articles.notificationSettings.categories.social.setting2'),
        t('helpCenter.articles.notificationSettings.categories.social.setting3')
      ]
    },
    {
      title: t('helpCenter.articles.notificationSettings.categories.content.title'),
      description: t('helpCenter.articles.notificationSettings.categories.content.description'),
      icon: Settings,
      settings: [
        t('helpCenter.articles.notificationSettings.categories.content.setting1'),
        t('helpCenter.articles.notificationSettings.categories.content.setting2'),
        t('helpCenter.articles.notificationSettings.categories.content.setting3')
      ]
    },
    {
      title: t('helpCenter.articles.notificationSettings.categories.system.title'),
      description: t('helpCenter.articles.notificationSettings.categories.system.description'),
      icon: AlertCircle,
      settings: [
        t('helpCenter.articles.notificationSettings.categories.system.setting1'),
        t('helpCenter.articles.notificationSettings.categories.system.setting2'),
        t('helpCenter.articles.notificationSettings.categories.system.setting3')
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#A690F2] to-[#2C1761] text-white">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            <Link href="/help-center/account-profile">
              <Button
                variant="ghost"
                className="text-white hover:bg-white/10"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                {t('helpCenter.backToCategory')}
              </Button>
            </Link>
            <h1 className="text-lg sm:text-xl font-bold text-white">{t('helpCenter.articles.notificationSettings.title')}</h1>
            <div className="w-20" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Article Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
            {t('helpCenter.articles.notificationSettings.title')}
          </h1>
          <p className="text-xl text-white/80 mb-6">
            {t('helpCenter.articles.notificationSettings.subtitle')}
          </p>
          <div className="flex items-center gap-4 text-sm text-white/60">
            <span>{t('helpCenter.articles.notificationSettings.readTime')}</span>
            <span>•</span>
            <span>{t('helpCenter.articles.notificationSettings.lastUpdated')}</span>
          </div>
        </div>

        {/* Introduction */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">
              {t('helpCenter.articles.notificationSettings.introduction.title')}
            </h2>
            <p className="text-white/80 mb-4">
              {t('helpCenter.articles.notificationSettings.introduction.content')}
            </p>
            <div className="bg-purple-500/20 border border-purple-400/30 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <Bell className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-purple-200 mb-2">
                    {t('helpCenter.articles.notificationSettings.introduction.tip')}
                  </h3>
                  <p className="text-purple-100">
                    {t('helpCenter.articles.notificationSettings.introduction.tipContent')}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Notification Categories */}
        <div className="space-y-8 mb-8">
          {notificationCategories.map((category, index) => (
            <Card key={index} className="bg-white/10 border-white/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                      <category.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 text-white">{category.title}</h3>
                    <p className="text-white/80 mb-4">{category.description}</p>
                    <h4 className="font-semibold text-white mb-3">
                      {t('helpCenter.articles.notificationSettings.availableSettings')}
                    </h4>
                    <ul className="space-y-2">
                      {category.settings.map((setting, settingIndex) => (
                        <li key={settingIndex} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-white/80">{setting}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Device Settings */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">
              {t('helpCenter.articles.notificationSettings.devices.title')}
            </h2>
            <p className="text-white/80 mb-4">
              {t('helpCenter.articles.notificationSettings.devices.description')}
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-500/20 border border-green-400/30 rounded-lg p-4">
                <div className="flex items-center gap-3 mb-3">
                  <Smartphone className="w-5 h-5 text-green-400" />
                  <h3 className="font-semibold text-green-200">
                    {t('helpCenter.articles.notificationSettings.devices.mobile.title')}
                  </h3>
                </div>
                <p className="text-green-100 mb-3">
                  {t('helpCenter.articles.notificationSettings.devices.mobile.description')}
                </p>
                <ul className="text-green-100 space-y-1 text-sm">
                  <li>• {t('helpCenter.articles.notificationSettings.devices.mobile.setting1')}</li>
                  <li>• {t('helpCenter.articles.notificationSettings.devices.mobile.setting2')}</li>
                  <li>• {t('helpCenter.articles.notificationSettings.devices.mobile.setting3')}</li>
                </ul>
              </div>
              
              <div className="bg-purple-500/20 border border-purple-400/30 rounded-lg p-4">
                <div className="flex items-center gap-3 mb-3">
                  <Monitor className="w-5 h-5 text-purple-400" />
                  <h3 className="font-semibold text-purple-200">
                    {t('helpCenter.articles.notificationSettings.devices.desktop.title')}
                  </h3>
                </div>
                <p className="text-purple-100 mb-3">
                  {t('helpCenter.articles.notificationSettings.devices.desktop.description')}
                </p>
                <ul className="text-purple-100 space-y-1 text-sm">
                  <li>• {t('helpCenter.articles.notificationSettings.devices.desktop.setting1')}</li>
                  <li>• {t('helpCenter.articles.notificationSettings.devices.desktop.setting2')}</li>
                  <li>• {t('helpCenter.articles.notificationSettings.devices.desktop.setting3')}</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* How to Access */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">
              {t('helpCenter.articles.notificationSettings.access.title')}
            </h2>
            <p className="text-white/80 mb-4">
              {t('helpCenter.articles.notificationSettings.access.description')}
            </p>
            
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  1
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-white">
                    {t('helpCenter.articles.notificationSettings.access.step1.title')}
                  </h3>
                  <p className="text-white/80">
                    {t('helpCenter.articles.notificationSettings.access.step1.description')}
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  2
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-white">
                    {t('helpCenter.articles.notificationSettings.access.step2.title')}
                  </h3>
                  <p className="text-white/80">
                    {t('helpCenter.articles.notificationSettings.access.step2.description')}
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  3
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-white">
                    {t('helpCenter.articles.notificationSettings.access.step3.title')}
                  </h3>
                  <p className="text-white/80">
                    {t('helpCenter.articles.notificationSettings.access.step3.description')}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Best Practices */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">
              {t('helpCenter.articles.notificationSettings.bestPractices.title')}
            </h2>
            <p className="text-white/80 mb-4">
              {t('helpCenter.articles.notificationSettings.bestPractices.description')}
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-500/20 border border-green-400/30 rounded-lg p-4">
                <h3 className="font-semibold text-green-200 mb-2">
                  {t('helpCenter.articles.notificationSettings.bestPractices.enable.title')}
                </h3>
                <ul className="text-green-100 space-y-1">
                  <li>• {t('helpCenter.articles.notificationSettings.bestPractices.enable.tip1')}</li>
                  <li>• {t('helpCenter.articles.notificationSettings.bestPractices.enable.tip2')}</li>
                  <li>• {t('helpCenter.articles.notificationSettings.bestPractices.enable.tip3')}</li>
                </ul>
              </div>
              
              <div className="bg-amber-500/20 border border-amber-400/30 rounded-lg p-4">
                <h3 className="font-semibold text-amber-200 mb-2">
                  {t('helpCenter.articles.notificationSettings.bestPractices.disable.title')}
                </h3>
                <ul className="text-amber-100 space-y-1">
                  <li>• {t('helpCenter.articles.notificationSettings.bestPractices.disable.tip1')}</li>
                  <li>• {t('helpCenter.articles.notificationSettings.bestPractices.disable.tip2')}</li>
                  <li>• {t('helpCenter.articles.notificationSettings.bestPractices.disable.tip3')}</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Related Articles */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">
              {t('helpCenter.articles.notificationSettings.related.title')}
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/help-center/account-profile/email-preferences">
                <div className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
                  <h3 className="font-semibold mb-2 text-white">
                    {t('helpCenter.articles.notificationSettings.related.emailPreferences')}
                  </h3>
                  <p className="text-white/60 text-sm">
                    {t('helpCenter.articles.notificationSettings.related.emailPreferencesDesc')}
                  </p>
                </div>
              </Link>
              <Link href="/help-center/getting-started/understanding-notifications">
                <div className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
                  <h3 className="font-semibold mb-2 text-white">
                    {t('helpCenter.articles.notificationSettings.related.understandingNotifications')}
                  </h3>
                  <p className="text-white/60 text-sm">
                    {t('helpCenter.articles.notificationSettings.related.understandingNotificationsDesc')}
                  </p>
                </div>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link href="/help-center/account-profile/email-preferences">
            <Button variant="outline" className="text-white border-white/20 hover:bg-white/10">
              ← {t('helpCenter.articles.notificationSettings.previousArticle')}
            </Button>
          </Link>
          <Link href="/help-center/adding-favorites">
            <Button className="bg-white text-purple-600 hover:bg-white/90">
              {t('helpCenter.articles.notificationSettings.nextArticle')} →
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

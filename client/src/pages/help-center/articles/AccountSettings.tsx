import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Settings, Shield, Bell, Eye, AlertCircle, CheckCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "wouter";

export default function AccountSettings(props: any) {
  const { t } = useLanguage();

  const settingsCategories = [
    {
      title: t('helpCenter.articles.accountSettings.categories.privacy.title'),
      description: t('helpCenter.articles.accountSettings.categories.privacy.description'),
      icon: Eye,
      settings: [
        t('helpCenter.articles.accountSettings.categories.privacy.setting1'),
        t('helpCenter.articles.accountSettings.categories.privacy.setting2'),
        t('helpCenter.articles.accountSettings.categories.privacy.setting3')
      ]
    },
    {
      title: t('helpCenter.articles.accountSettings.categories.notifications.title'),
      description: t('helpCenter.articles.accountSettings.categories.notifications.description'),
      icon: Bell,
      settings: [
        t('helpCenter.articles.accountSettings.categories.notifications.setting1'),
        t('helpCenter.articles.accountSettings.categories.notifications.setting2'),
        t('helpCenter.articles.accountSettings.categories.notifications.setting3')
      ]
    },
    {
      title: t('helpCenter.articles.accountSettings.categories.security.title'),
      description: t('helpCenter.articles.accountSettings.categories.security.description'),
      icon: Shield,
      settings: [
        t('helpCenter.articles.accountSettings.categories.security.setting1'),
        t('helpCenter.articles.accountSettings.categories.security.setting2'),
        t('helpCenter.articles.accountSettings.categories.security.setting3')
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
            <h1 className="text-lg sm:text-xl font-bold text-white">{t('helpCenter.articles.accountSettings.title')}</h1>
            <div className="w-20" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Article Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
            {t('helpCenter.articles.accountSettings.title')}
          </h1>
          <p className="text-xl text-white/80 mb-6">
            {t('helpCenter.articles.accountSettings.subtitle')}
          </p>
          <div className="flex items-center gap-4 text-sm text-white/60">
            <span>{t('helpCenter.articles.accountSettings.readTime')}</span>
            <span>•</span>
            <span>{t('helpCenter.articles.accountSettings.lastUpdated')}</span>
          </div>
        </div>

        {/* Introduction */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">
              {t('helpCenter.articles.accountSettings.introduction.title')}
            </h2>
            <p className="text-white/80 mb-4">
              {t('helpCenter.articles.accountSettings.introduction.content')}
            </p>
            <div className="bg-purple-500/20 border border-purple-400/30 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-purple-200 mb-2">
                    {t('helpCenter.articles.accountSettings.introduction.tip')}
                  </h3>
                  <p className="text-purple-100">
                    {t('helpCenter.articles.accountSettings.introduction.tipContent')}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Settings Categories */}
        <div className="space-y-8 mb-8">
          {settingsCategories.map((category, index) => (
            <Card key={index} className="bg-white/10 border-white/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                      <category.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                    <p className="text-white/80 mb-4">{category.description}</p>
                    <h4 className="font-semibold text-white mb-3">
                      {t('helpCenter.articles.accountSettings.availableSettings')}
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

        {/* How to Access */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">
              {t('helpCenter.articles.accountSettings.access.title')}
            </h2>
            <p className="text-white/80 mb-4">
              {t('helpCenter.articles.accountSettings.access.description')}
            </p>
            
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  1
                </div>
                <div>
                  <h3 className="font-semibold mb-1">
                    {t('helpCenter.articles.accountSettings.access.step1.title')}
                  </h3>
                  <p className="text-white/80">
                    {t('helpCenter.articles.accountSettings.access.step1.description')}
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  2
                </div>
                <div>
                  <h3 className="font-semibold mb-1">
                    {t('helpCenter.articles.accountSettings.access.step2.title')}
                  </h3>
                  <p className="text-white/80">
                    {t('helpCenter.articles.accountSettings.access.step2.description')}
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  3
                </div>
                <div>
                  <h3 className="font-semibold mb-1">
                    {t('helpCenter.articles.accountSettings.access.step3.title')}
                  </h3>
                  <p className="text-white/80">
                    {t('helpCenter.articles.accountSettings.access.step3.description')}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Important Notes */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">
              {t('helpCenter.articles.accountSettings.important.title')}
            </h2>
            <div className="space-y-4">
              <div className="bg-yellow-500/20 border border-yellow-400/30 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-yellow-200 mb-2">
                      {t('helpCenter.articles.accountSettings.important.note1.title')}
                    </h3>
                    <p className="text-yellow-100">
                      {t('helpCenter.articles.accountSettings.important.note1.content')}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-purple-500/20 border border-purple-400/30 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-purple-200 mb-2">
                      {t('helpCenter.articles.accountSettings.important.note2.title')}
                    </h3>
                    <p className="text-purple-100">
                      {t('helpCenter.articles.accountSettings.important.note2.content')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Related Articles */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">
              {t('helpCenter.articles.accountSettings.related.title')}
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/help-center/account-profile/profile-pictures">
                <div className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
                  <h3 className="font-semibold mb-2">
                    {t('helpCenter.articles.accountSettings.related.profilePictures')}
                  </h3>
                  <p className="text-white/60 text-sm">
                    {t('helpCenter.articles.accountSettings.related.profilePicturesDesc')}
                  </p>
                </div>
              </Link>
              <Link href="/help-center/privacy-security/privacy-settings">
                <div className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
                  <h3 className="font-semibold mb-2">
                    {t('helpCenter.articles.accountSettings.related.privacySettings')}
                  </h3>
                  <p className="text-white/60 text-sm">
                    {t('helpCenter.articles.accountSettings.related.privacySettingsDesc')}
                  </p>
                </div>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link href="/help-center/account-profile/profile-pictures">
            <Button variant="outline" className="text-white border-white/20 hover:bg-white/10">
              ← {t('helpCenter.articles.accountSettings.previousArticle')}
            </Button>
          </Link>
          <Link href="/help-center/account-profile/delete-account">
            <Button className="bg-white text-purple-600 hover:bg-white/90">
              {t('helpCenter.articles.accountSettings.nextArticle')} →
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

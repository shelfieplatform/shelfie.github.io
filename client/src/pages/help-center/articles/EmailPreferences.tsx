import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Mail, Bell, Settings, CheckCircle, AlertCircle, Shield } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "wouter";

export default function EmailPreferences(props: any) {
  const { t } = useLanguage();

  const emailTypes = [
    {
      title: t('helpCenter.articles.emailPreferences.types.notifications.title'),
      description: t('helpCenter.articles.emailPreferences.types.notifications.description'),
      icon: Bell,
      examples: [
        t('helpCenter.articles.emailPreferences.types.notifications.example1'),
        t('helpCenter.articles.emailPreferences.types.notifications.example2'),
        t('helpCenter.articles.emailPreferences.types.notifications.example3')
      ]
    },
    {
      title: t('helpCenter.articles.emailPreferences.types.updates.title'),
      description: t('helpCenter.articles.emailPreferences.types.updates.description'),
      icon: Settings,
      examples: [
        t('helpCenter.articles.emailPreferences.types.updates.example1'),
        t('helpCenter.articles.emailPreferences.types.updates.example2'),
        t('helpCenter.articles.emailPreferences.types.updates.example3')
      ]
    },
    {
      title: t('helpCenter.articles.emailPreferences.types.security.title'),
      description: t('helpCenter.articles.emailPreferences.types.security.description'),
      icon: Shield,
      examples: [
        t('helpCenter.articles.emailPreferences.types.security.example1'),
        t('helpCenter.articles.emailPreferences.types.security.example2'),
        t('helpCenter.articles.emailPreferences.types.security.example3')
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
            <h1 className="text-lg sm:text-xl font-bold text-white">{t('helpCenter.articles.emailPreferences.title')}</h1>
            <div className="w-20" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Article Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
            {t('helpCenter.articles.emailPreferences.title')}
          </h1>
          <p className="text-xl text-white/80 mb-6">
            {t('helpCenter.articles.emailPreferences.subtitle')}
          </p>
          <div className="flex items-center gap-4 text-sm text-white/60">
            <span>{t('helpCenter.articles.emailPreferences.readTime')}</span>
            <span>•</span>
            <span>{t('helpCenter.articles.emailPreferences.lastUpdated')}</span>
          </div>
        </div>

        {/* Introduction */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">
              {t('helpCenter.articles.emailPreferences.introduction.title')}
            </h2>
            <p className="text-white/80 mb-4">
              {t('helpCenter.articles.emailPreferences.introduction.content')}
            </p>
            <div className="bg-blue-500/20 border border-blue-400/30 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-blue-200 mb-2">
                    {t('helpCenter.articles.emailPreferences.introduction.tip')}
                  </h3>
                  <p className="text-blue-100">
                    {t('helpCenter.articles.emailPreferences.introduction.tipContent')}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Email Types */}
        <div className="space-y-8 mb-8">
          {emailTypes.map((type, index) => (
            <Card key={index} className="bg-white/10 border-white/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                      <type.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 text-white">{type.title}</h3>
                    <p className="text-white/80 mb-4">{type.description}</p>
                    <h4 className="font-semibold text-white mb-3">
                      {t('helpCenter.articles.emailPreferences.examples.title')}
                    </h4>
                    <ul className="space-y-2">
                      {type.examples.map((example, exampleIndex) => (
                        <li key={exampleIndex} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-white/80">{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* How to Manage */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">
              {t('helpCenter.articles.emailPreferences.manage.title')}
            </h2>
            <p className="text-white/80 mb-4">
              {t('helpCenter.articles.emailPreferences.manage.description')}
            </p>
            
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  1
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-white">
                    {t('helpCenter.articles.emailPreferences.manage.step1.title')}
                  </h3>
                  <p className="text-white/80">
                    {t('helpCenter.articles.emailPreferences.manage.step1.description')}
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  2
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-white">
                    {t('helpCenter.articles.emailPreferences.manage.step2.title')}
                  </h3>
                  <p className="text-white/80">
                    {t('helpCenter.articles.emailPreferences.manage.step2.description')}
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  3
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-white">
                    {t('helpCenter.articles.emailPreferences.manage.step3.title')}
                  </h3>
                  <p className="text-white/80">
                    {t('helpCenter.articles.emailPreferences.manage.step3.description')}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Frequency Options */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">
              {t('helpCenter.articles.emailPreferences.frequency.title')}
            </h2>
            <p className="text-white/80 mb-4">
              {t('helpCenter.articles.emailPreferences.frequency.description')}
            </p>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-green-500/20 border border-green-400/30 rounded-lg p-4">
                <h3 className="font-semibold text-green-200 mb-2">
                  {t('helpCenter.articles.emailPreferences.frequency.immediate.title')}
                </h3>
                <p className="text-green-100 mb-2">
                  {t('helpCenter.articles.emailPreferences.frequency.immediate.description')}
                </p>
                <ul className="text-green-100 space-y-1 text-sm">
                  <li>• {t('helpCenter.articles.emailPreferences.frequency.immediate.benefit1')}</li>
                  <li>• {t('helpCenter.articles.emailPreferences.frequency.immediate.benefit2')}</li>
                </ul>
              </div>
              
              <div className="bg-yellow-500/20 border border-yellow-400/30 rounded-lg p-4">
                <h3 className="font-semibold text-yellow-200 mb-2">
                  {t('helpCenter.articles.emailPreferences.frequency.daily.title')}
                </h3>
                <p className="text-yellow-100 mb-2">
                  {t('helpCenter.articles.emailPreferences.frequency.daily.description')}
                </p>
                <ul className="text-yellow-100 space-y-1 text-sm">
                  <li>• {t('helpCenter.articles.emailPreferences.frequency.daily.benefit1')}</li>
                  <li>• {t('helpCenter.articles.emailPreferences.frequency.daily.benefit2')}</li>
                </ul>
              </div>
              
              <div className="bg-blue-500/20 border border-blue-400/30 rounded-lg p-4">
                <h3 className="font-semibold text-blue-200 mb-2">
                  {t('helpCenter.articles.emailPreferences.frequency.weekly.title')}
                </h3>
                <p className="text-blue-100 mb-2">
                  {t('helpCenter.articles.emailPreferences.frequency.weekly.description')}
                </p>
                <ul className="text-blue-100 space-y-1 text-sm">
                  <li>• {t('helpCenter.articles.emailPreferences.frequency.weekly.benefit1')}</li>
                  <li>• {t('helpCenter.articles.emailPreferences.frequency.weekly.benefit2')}</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Unsubscribe */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">
              {t('helpCenter.articles.emailPreferences.unsubscribe.title')}
            </h2>
            <p className="text-white/80 mb-4">
              {t('helpCenter.articles.emailPreferences.unsubscribe.description')}
            </p>
            
            <div className="bg-red-500/20 border border-red-400/30 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-red-200 mb-2">
                    {t('helpCenter.articles.emailPreferences.unsubscribe.important.title')}
                  </h3>
                  <p className="text-red-100">
                    {t('helpCenter.articles.emailPreferences.unsubscribe.important.content')}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Related Articles */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">
              {t('helpCenter.articles.emailPreferences.related.title')}
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/help-center/account-profile/account-settings">
                <div className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
                  <h3 className="font-semibold mb-2 text-white">
                    {t('helpCenter.articles.emailPreferences.related.accountSettings')}
                  </h3>
                  <p className="text-white/60 text-sm">
                    {t('helpCenter.articles.emailPreferences.related.accountSettingsDesc')}
                  </p>
                </div>
              </Link>
              <Link href="/help-center/getting-started/understanding-notifications">
                <div className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
                  <h3 className="font-semibold mb-2 text-white">
                    {t('helpCenter.articles.emailPreferences.related.notifications')}
                  </h3>
                  <p className="text-white/60 text-sm">
                    {t('helpCenter.articles.emailPreferences.related.notificationsDesc')}
                  </p>
                </div>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link href="/help-center/account-profile/connected-apps">
            <Button variant="outline" className="text-white border-white/20 hover:bg-white/10">
              ← {t('helpCenter.articles.emailPreferences.previousArticle')}
            </Button>
          </Link>
          <Link href="/help-center/account-profile/notification-settings">
            <Button className="bg-white text-purple-600 hover:bg-white/90">
              {t('helpCenter.articles.emailPreferences.nextArticle')} →
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

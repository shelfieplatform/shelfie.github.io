import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Shield, Eye, Users, Lock, Globe, CheckCircle, AlertCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "wouter";

export default function PrivacySettings(props: any) {
  const { t } = useLanguage();

  const privacyLevels = [
    {
      title: t('helpCenter.articles.privacySettings.levels.public.title'),
      description: t('helpCenter.articles.privacySettings.levels.public.description'),
      icon: Globe,
      features: [
        t('helpCenter.articles.privacySettings.levels.public.feature1'),
        t('helpCenter.articles.privacySettings.levels.public.feature2'),
        t('helpCenter.articles.privacySettings.levels.public.feature3')
      ]
    },
    {
      title: t('helpCenter.articles.privacySettings.levels.followers.title'),
      description: t('helpCenter.articles.privacySettings.levels.followers.description'),
      icon: Users,
      features: [
        t('helpCenter.articles.privacySettings.levels.followers.feature1'),
        t('helpCenter.articles.privacySettings.levels.followers.feature2'),
        t('helpCenter.articles.privacySettings.levels.followers.feature3')
      ]
    },
    {
      title: t('helpCenter.articles.privacySettings.levels.private.title'),
      description: t('helpCenter.articles.privacySettings.levels.private.description'),
      icon: Lock,
      features: [
        t('helpCenter.articles.privacySettings.levels.private.feature1'),
        t('helpCenter.articles.privacySettings.levels.private.feature2'),
        t('helpCenter.articles.privacySettings.levels.private.feature3')
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#A690F2] to-[#2C1761] text-white">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            <Link href="/help-center/getting-started">
              <Button
                variant="ghost"
                className="text-white hover:bg-white/10"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                {t('helpCenter.backToCategory')}
              </Button>
            </Link>
            <h1 className="text-lg sm:text-xl font-bold">{t('helpCenter.articles.privacySettings.title')}</h1>
            <div className="w-20" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Article Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            {t('helpCenter.articles.privacySettings.title')}
          </h1>
          <p className="text-xl text-white/80 mb-6">
            {t('helpCenter.articles.privacySettings.subtitle')}
          </p>
          <div className="flex items-center gap-4 text-sm text-white/60">
            <span>{t('helpCenter.articles.privacySettings.readTime')}</span>
            <span>•</span>
            <span>{t('helpCenter.articles.privacySettings.lastUpdated')}</span>
          </div>
        </div>

        {/* Introduction */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4">
              {t('helpCenter.articles.privacySettings.introduction.title')}
            </h2>
            <p className="text-white/80 mb-4">
              {t('helpCenter.articles.privacySettings.introduction.content')}
            </p>
            <div className="bg-purple-500/20 border border-purple-400/30 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-purple-200 mb-2">
                    {t('helpCenter.articles.privacySettings.introduction.tip')}
                  </h3>
                  <p className="text-purple-100">
                    {t('helpCenter.articles.privacySettings.introduction.tipContent')}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Privacy Levels */}
        <div className="space-y-8 mb-8">
          {privacyLevels.map((level, index) => (
            <Card key={index} className="bg-white/10 border-white/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                      <level.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{level.title}</h3>
                    <p className="text-white/80 mb-4">{level.description}</p>
                    <ul className="space-y-2">
                      {level.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-white/80">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Profile Visibility */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4">
              {t('helpCenter.articles.privacySettings.profileVisibility.title')}
            </h2>
            <p className="text-white/80 mb-4">
              {t('helpCenter.articles.privacySettings.profileVisibility.description')}
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-500/20 border border-green-400/30 rounded-lg p-4">
                <h3 className="font-semibold text-green-200 mb-2">
                  {t('helpCenter.articles.privacySettings.profileVisibility.visible.title')}
                </h3>
                <ul className="text-green-100 space-y-1">
                  <li>• {t('helpCenter.articles.privacySettings.profileVisibility.visible.item1')}</li>
                  <li>• {t('helpCenter.articles.privacySettings.profileVisibility.visible.item2')}</li>
                  <li>• {t('helpCenter.articles.privacySettings.profileVisibility.visible.item3')}</li>
                </ul>
              </div>
              
              <div className="bg-amber-500/20 border border-amber-400/30 rounded-lg p-4">
                <h3 className="font-semibold text-amber-200 mb-2">
                  {t('helpCenter.articles.privacySettings.profileVisibility.hidden.title')}
                </h3>
                <ul className="text-amber-100 space-y-1">
                  <li>• {t('helpCenter.articles.privacySettings.profileVisibility.hidden.item1')}</li>
                  <li>• {t('helpCenter.articles.privacySettings.profileVisibility.hidden.item2')}</li>
                  <li>• {t('helpCenter.articles.privacySettings.profileVisibility.hidden.item3')}</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Content Privacy */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4">
              {t('helpCenter.articles.privacySettings.contentPrivacy.title')}
            </h2>
            <p className="text-white/80 mb-4">
              {t('helpCenter.articles.privacySettings.contentPrivacy.description')}
            </p>
            
            <div className="space-y-4">
              <div className="bg-purple-500/20 border border-purple-400/30 rounded-lg p-4">
                <h3 className="font-semibold text-purple-200 mb-2">
                  {t('helpCenter.articles.privacySettings.contentPrivacy.shelf.title')}
                </h3>
                <p className="text-purple-100 mb-2">
                  {t('helpCenter.articles.privacySettings.contentPrivacy.shelf.description')}
                </p>
                <ul className="text-purple-100 space-y-1">
                  <li>• {t('helpCenter.articles.privacySettings.contentPrivacy.shelf.option1')}</li>
                  <li>• {t('helpCenter.articles.privacySettings.contentPrivacy.shelf.option2')}</li>
                  <li>• {t('helpCenter.articles.privacySettings.contentPrivacy.shelf.option3')}</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Activity Privacy */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4">
              {t('helpCenter.articles.privacySettings.activityPrivacy.title')}
            </h2>
            <p className="text-white/80 mb-4">
              {t('helpCenter.articles.privacySettings.activityPrivacy.description')}
            </p>
            
            <div className="bg-yellow-500/20 border border-yellow-400/30 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-yellow-200 mb-2">
                    {t('helpCenter.articles.privacySettings.activityPrivacy.important.title')}
                  </h3>
                  <p className="text-yellow-100">
                    {t('helpCenter.articles.privacySettings.activityPrivacy.important.content')}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Related Articles */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4">
              {t('helpCenter.articles.privacySettings.related.title')}
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/help-center/getting-started/mobile-app">
                <div className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
                  <h3 className="font-semibold mb-2">
                    {t('helpCenter.articles.privacySettings.related.mobileApp')}
                  </h3>
                  <p className="text-white/60 text-sm">
                    {t('helpCenter.articles.privacySettings.related.mobileAppDesc')}
                  </p>
                </div>
              </Link>
              <Link href="/help-center/getting-started/desktop-mobile">
                <div className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
                  <h3 className="font-semibold mb-2">
                    {t('helpCenter.articles.privacySettings.related.desktopMobile')}
                  </h3>
                  <p className="text-white/60 text-sm">
                    {t('helpCenter.articles.privacySettings.related.desktopMobileDesc')}
                  </p>
                </div>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link href="/help-center/getting-started/dashboard">
            <Button variant="outline" className="text-white border-white/20 hover:bg-white/10">
              ← {t('helpCenter.articles.privacySettings.previousArticle')}
            </Button>
          </Link>
          <Link href="/help-center/getting-started/mobile-app">
            <Button className="bg-white text-purple-600 hover:bg-white/90">
              {t('helpCenter.articles.privacySettings.nextArticle')} →
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

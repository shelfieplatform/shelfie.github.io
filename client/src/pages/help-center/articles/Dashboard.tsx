import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Layout, BookOpen, Users, Heart, Bell, Search, Settings, CheckCircle, Home } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "wouter";

export default function Dashboard(props: any) {
  const { t } = useLanguage();

  const dashboardSections = [
    {
      title: t('helpCenter.articles.dashboard.sections.navigation.title'),
      description: t('helpCenter.articles.dashboard.sections.navigation.description'),
      icon: Layout,
      features: [
        t('helpCenter.articles.dashboard.sections.navigation.feature1'),
        t('helpCenter.articles.dashboard.sections.navigation.feature2'),
        t('helpCenter.articles.dashboard.sections.navigation.feature3')
      ]
    },
    {
      title: t('helpCenter.articles.dashboard.sections.activity.title'),
      description: t('helpCenter.articles.dashboard.sections.activity.description'),
      icon: BookOpen,
      features: [
        t('helpCenter.articles.dashboard.sections.activity.feature1'),
        t('helpCenter.articles.dashboard.sections.activity.feature2'),
        t('helpCenter.articles.dashboard.sections.activity.feature3')
      ]
    },
    {
      title: t('helpCenter.articles.dashboard.sections.social.title'),
      description: t('helpCenter.articles.dashboard.sections.social.description'),
      icon: Users,
      features: [
        t('helpCenter.articles.dashboard.sections.social.feature1'),
        t('helpCenter.articles.dashboard.sections.social.feature2'),
        t('helpCenter.articles.dashboard.sections.social.feature3')
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#A690F2] to-[#2C1761] text-white">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            <div className="flex items-center space-x-4">
              <Link href="/help-center/getting-started">
                <Button
                  variant="ghost"
                  className="text-white hover:bg-white/10"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  {t('helpCenter.backToCategory')}
                </Button>
              </Link>
              <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
                <div className="w-8 h-8 bg-gradient-to-r from-[#A690F2] to-[#9C7FE8] rounded-lg flex items-center justify-center">
                  <Home className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg sm:text-xl font-bold text-white">Shelfie</span>
              </Link>
            </div>
            <h1 className="text-lg sm:text-xl font-bold text-white">{t('helpCenter.articles.dashboard.title')}</h1>
            <div className="w-20" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Article Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
            {t('helpCenter.articles.dashboard.title')}
          </h1>
          <p className="text-xl text-white/80 mb-6">
            {t('helpCenter.articles.dashboard.subtitle')}
          </p>
          <div className="flex items-center gap-4 text-sm text-white/60">
            <span>{t('helpCenter.articles.dashboard.readTime')}</span>
            <span>•</span>
            <span>{t('helpCenter.articles.dashboard.lastUpdated')}</span>
          </div>
        </div>


        {/* Dashboard Sections */}
        <div className="space-y-8 mb-8">
          {dashboardSections.map((section, index) => (
            <Card key={index} className="bg-white/10 border-white/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                      <section.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 text-white">{section.title}</h3>
                    <p className="text-white/80 mb-4">{section.description}</p>
                    <ul className="space-y-2">
                      {section.features.map((feature, featureIndex) => (
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

        {/* Quick Actions */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">
              {t('helpCenter.articles.dashboard.quickActions.title')}
            </h2>
            <p className="text-white/80 mb-4">
              {t('helpCenter.articles.dashboard.quickActions.description')}
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-500/20 border border-green-400/30 rounded-lg p-4">
                <h3 className="font-semibold text-green-200 mb-2">
                  {t('helpCenter.articles.dashboard.quickActions.addContent.title')}
                </h3>
                <ul className="text-green-100 space-y-1">
                  <li>• {t('helpCenter.articles.dashboard.quickActions.addContent.action1')}</li>
                  <li>• {t('helpCenter.articles.dashboard.quickActions.addContent.action2')}</li>
                  <li>• {t('helpCenter.articles.dashboard.quickActions.addContent.action3')}</li>
                </ul>
              </div>
              
              <div className="bg-purple-500/20 border border-purple-400/30 rounded-lg p-4">
                <h3 className="font-semibold text-purple-200 mb-2">
                  {t('helpCenter.articles.dashboard.quickActions.social.title')}
                </h3>
                <ul className="text-purple-100 space-y-1">
                  <li>• {t('helpCenter.articles.dashboard.quickActions.social.action1')}</li>
                  <li>• {t('helpCenter.articles.dashboard.quickActions.social.action2')}</li>
                  <li>• {t('helpCenter.articles.dashboard.quickActions.social.action3')}</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>


        {/* Related Articles */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">
              {t('helpCenter.articles.dashboard.related.title')}
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/help-center/getting-started/privacy-settings">
                <div className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
                  <h3 className="font-semibold mb-2 text-white">
                    {t('helpCenter.articles.dashboard.related.privacySettings')}
                  </h3>
                  <p className="text-white/60 text-sm">
                    {t('helpCenter.articles.dashboard.related.privacySettingsDesc')}
                  </p>
                </div>
              </Link>
              <Link href="/help-center/getting-started/mobile-app">
                <div className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
                  <h3 className="font-semibold mb-2 text-white">
                    {t('helpCenter.articles.dashboard.related.mobileApp')}
                  </h3>
                  <p className="text-white/60 text-sm">
                    {t('helpCenter.articles.dashboard.related.mobileAppDesc')}
                  </p>
                </div>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link href="/help-center/getting-started/setting-up-profile">
            <Button variant="outline" className="text-white border-white/20 hover:bg-white/10">
              ← {t('helpCenter.articles.dashboard.previousArticle')}
            </Button>
          </Link>
          <Link href="/help-center/getting-started/privacy-settings">
            <Button className="bg-white text-purple-600 hover:bg-white/90">
              {t('helpCenter.articles.dashboard.nextArticle')} →
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

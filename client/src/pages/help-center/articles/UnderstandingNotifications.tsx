import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Bell, Users, Heart, MessageCircle, Settings, CheckCircle, AlertCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "wouter";

export default function UnderstandingNotifications(props: any) {
  const { t } = useLanguage();

  const notificationTypes = [
    {
      title: t('helpCenter.articles.understandingNotifications.types.follow.title'),
      description: t('helpCenter.articles.understandingNotifications.types.follow.description'),
      icon: Users,
      examples: [
        t('helpCenter.articles.understandingNotifications.types.follow.example1'),
        t('helpCenter.articles.understandingNotifications.types.follow.example2')
      ]
    },
    {
      title: t('helpCenter.articles.understandingNotifications.types.like.title'),
      description: t('helpCenter.articles.understandingNotifications.types.like.description'),
      icon: Heart,
      examples: [
        t('helpCenter.articles.understandingNotifications.types.like.example1'),
        t('helpCenter.articles.understandingNotifications.types.like.example2')
      ]
    },
    {
      title: t('helpCenter.articles.understandingNotifications.types.comment.title'),
      description: t('helpCenter.articles.understandingNotifications.types.comment.description'),
      icon: MessageCircle,
      examples: [
        t('helpCenter.articles.understandingNotifications.types.comment.example1'),
        t('helpCenter.articles.understandingNotifications.types.comment.example2')
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
            <h1 className="text-lg sm:text-xl font-bold">{t('helpCenter.articles.understandingNotifications.title')}</h1>
            <div className="w-20" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Article Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            {t('helpCenter.articles.understandingNotifications.title')}
          </h1>
          <p className="text-xl text-white/80 mb-6">
            {t('helpCenter.articles.understandingNotifications.subtitle')}
          </p>
          <div className="flex items-center gap-4 text-sm text-white/60">
            <span>{t('helpCenter.articles.understandingNotifications.readTime')}</span>
            <span>•</span>
            <span>{t('helpCenter.articles.understandingNotifications.lastUpdated')}</span>
          </div>
        </div>

        {/* Introduction */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4">
              {t('helpCenter.articles.understandingNotifications.introduction.title')}
            </h2>
            <p className="text-white/80 mb-4">
              {t('helpCenter.articles.understandingNotifications.introduction.content')}
            </p>
            <div className="bg-blue-500/20 border border-blue-400/30 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-blue-200 mb-2">
                    {t('helpCenter.articles.understandingNotifications.introduction.tip')}
                  </h3>
                  <p className="text-blue-100">
                    {t('helpCenter.articles.understandingNotifications.introduction.tipContent')}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Notification Types */}
        <div className="space-y-8 mb-8">
          {notificationTypes.map((type, index) => (
            <Card key={index} className="bg-white/10 border-white/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                      <type.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{type.title}</h3>
                    <p className="text-white/80 mb-4">{type.description}</p>
                    <h4 className="font-semibold text-white mb-3">
                      {t('helpCenter.articles.understandingNotifications.examples.title')}
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

        {/* Notification Settings */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4">
              {t('helpCenter.articles.understandingNotifications.settings.title')}
            </h2>
            <p className="text-white/80 mb-4">
              {t('helpCenter.articles.understandingNotifications.settings.description')}
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-500/20 border border-green-400/30 rounded-lg p-4">
                <h3 className="font-semibold text-green-200 mb-2">
                  {t('helpCenter.articles.understandingNotifications.settings.enable.title')}
                </h3>
                <ul className="text-green-100 space-y-1">
                  <li>• {t('helpCenter.articles.understandingNotifications.settings.enable.item1')}</li>
                  <li>• {t('helpCenter.articles.understandingNotifications.settings.enable.item2')}</li>
                  <li>• {t('helpCenter.articles.understandingNotifications.settings.enable.item3')}</li>
                </ul>
              </div>
              
              <div className="bg-yellow-500/20 border border-yellow-400/30 rounded-lg p-4">
                <h3 className="font-semibold text-yellow-200 mb-2">
                  {t('helpCenter.articles.understandingNotifications.settings.disable.title')}
                </h3>
                <ul className="text-yellow-100 space-y-1">
                  <li>• {t('helpCenter.articles.understandingNotifications.settings.disable.item1')}</li>
                  <li>• {t('helpCenter.articles.understandingNotifications.settings.disable.item2')}</li>
                  <li>• {t('helpCenter.articles.understandingNotifications.settings.disable.item3')}</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Mobile Notifications */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4">
              {t('helpCenter.articles.understandingNotifications.mobile.title')}
            </h2>
            <p className="text-white/80 mb-4">
              {t('helpCenter.articles.understandingNotifications.mobile.description')}
            </p>
            
            <div className="bg-purple-500/20 border border-purple-400/30 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <Bell className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-purple-200 mb-2">
                    {t('helpCenter.articles.understandingNotifications.mobile.important.title')}
                  </h3>
                  <p className="text-purple-100">
                    {t('helpCenter.articles.understandingNotifications.mobile.important.content')}
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
              {t('helpCenter.articles.understandingNotifications.related.title')}
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/help-center/getting-started/basic-security-tips">
                <div className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
                  <h3 className="font-semibold mb-2">
                    {t('helpCenter.articles.understandingNotifications.related.securityTips')}
                  </h3>
                  <p className="text-white/60 text-sm">
                    {t('helpCenter.articles.understandingNotifications.related.securityTipsDesc')}
                  </p>
                </div>
              </Link>
              <Link href="/help-center/getting-started/platform-tour">
                <div className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
                  <h3 className="font-semibold mb-2">
                    {t('helpCenter.articles.understandingNotifications.related.platformTour')}
                  </h3>
                  <p className="text-white/60 text-sm">
                    {t('helpCenter.articles.understandingNotifications.related.platformTourDesc')}
                  </p>
                </div>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link href="/help-center/getting-started/desktop-mobile">
            <Button variant="outline" className="text-white border-white/20 hover:bg-white/10">
              ← {t('helpCenter.articles.understandingNotifications.previousArticle')}
            </Button>
          </Link>
          <Link href="/help-center/getting-started/basic-security-tips">
            <Button className="bg-white text-purple-600 hover:bg-white/90">
              {t('helpCenter.articles.understandingNotifications.nextArticle')} →
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

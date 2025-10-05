import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Monitor, Smartphone, CheckCircle, AlertCircle, Wifi, Camera, Share } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "wouter";

export default function DesktopMobile(props: any) {
  const { t } = useLanguage();

  const platformFeatures = [
    {
      title: t('helpCenter.articles.desktopMobile.desktop.title'),
      description: t('helpCenter.articles.desktopMobile.desktop.description'),
      icon: Monitor,
      advantages: [
        t('helpCenter.articles.desktopMobile.desktop.advantage1'),
        t('helpCenter.articles.desktopMobile.desktop.advantage2'),
        t('helpCenter.articles.desktopMobile.desktop.advantage3'),
        t('helpCenter.articles.desktopMobile.desktop.advantage4')
      ]
    },
    {
      title: t('helpCenter.articles.desktopMobile.mobile.title'),
      description: t('helpCenter.articles.desktopMobile.mobile.description'),
      icon: Smartphone,
      advantages: [
        t('helpCenter.articles.desktopMobile.mobile.advantage1'),
        t('helpCenter.articles.desktopMobile.mobile.advantage2'),
        t('helpCenter.articles.desktopMobile.mobile.advantage3'),
        t('helpCenter.articles.desktopMobile.mobile.advantage4')
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
            <h1 className="text-lg sm:text-xl font-bold">{t('helpCenter.articles.desktopMobile.title')}</h1>
            <div className="w-20" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Article Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            {t('helpCenter.articles.desktopMobile.title')}
          </h1>
          <p className="text-xl text-white/80 mb-6">
            {t('helpCenter.articles.desktopMobile.subtitle')}
          </p>
          <div className="flex items-center gap-4 text-sm text-white/60">
            <span>{t('helpCenter.articles.desktopMobile.readTime')}</span>
            <span>•</span>
            <span>{t('helpCenter.articles.desktopMobile.lastUpdated')}</span>
          </div>
        </div>

        {/* Introduction */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4">
              {t('helpCenter.articles.desktopMobile.introduction.title')}
            </h2>
            <p className="text-white/80 mb-4">
              {t('helpCenter.articles.desktopMobile.introduction.content')}
            </p>
            <div className="bg-purple-500/20 border border-purple-400/30 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-purple-200 mb-2">
                    {t('helpCenter.articles.desktopMobile.introduction.tip')}
                  </h3>
                  <p className="text-purple-100">
                    {t('helpCenter.articles.desktopMobile.introduction.tipContent')}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Platform Comparison */}
        <div className="space-y-8 mb-8">
          {platformFeatures.map((platform, index) => (
            <Card key={index} className="bg-white/10 border-white/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                      <platform.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{platform.title}</h3>
                    <p className="text-white/80 mb-4">{platform.description}</p>
                    <h4 className="font-semibold text-white mb-3">
                      {t('helpCenter.articles.desktopMobile.advantages.title')}
                    </h4>
                    <ul className="space-y-2">
                      {platform.advantages.map((advantage, advantageIndex) => (
                        <li key={advantageIndex} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-white/80">{advantage}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Feature Comparison */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-6">
              {t('helpCenter.articles.desktopMobile.featureComparison.title')}
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="text-left py-3 px-4 font-semibold">
                      {t('helpCenter.articles.desktopMobile.featureComparison.feature')}
                    </th>
                    <th className="text-center py-3 px-4 font-semibold">
                      {t('helpCenter.articles.desktopMobile.featureComparison.desktop')}
                    </th>
                    <th className="text-center py-3 px-4 font-semibold">
                      {t('helpCenter.articles.desktopMobile.featureComparison.mobile')}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/10">
                    <td className="py-3 px-4">{t('helpCenter.articles.desktopMobile.featureComparison.bulkImport')}</td>
                    <td className="text-center py-3 px-4">
                      <CheckCircle className="w-4 h-4 text-green-400 mx-auto" />
                    </td>
                    <td className="text-center py-3 px-4">
                      <AlertCircle className="w-4 h-4 text-yellow-400 mx-auto" />
                    </td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-3 px-4">{t('helpCenter.articles.desktopMobile.featureComparison.camera')}</td>
                    <td className="text-center py-3 px-4">
                      <AlertCircle className="w-4 h-4 text-yellow-400 mx-auto" />
                    </td>
                    <td className="text-center py-3 px-4">
                      <CheckCircle className="w-4 h-4 text-green-400 mx-auto" />
                    </td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-3 px-4">{t('helpCenter.articles.desktopMobile.featureComparison.offline')}</td>
                    <td className="text-center py-3 px-4">
                      <AlertCircle className="w-4 h-4 text-yellow-400 mx-auto" />
                    </td>
                    <td className="text-center py-3 px-4">
                      <CheckCircle className="w-4 h-4 text-green-400 mx-auto" />
                    </td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-3 px-4">{t('helpCenter.articles.desktopMobile.featureComparison.share')}</td>
                    <td className="text-center py-3 px-4">
                      <CheckCircle className="w-4 h-4 text-green-400 mx-auto" />
                    </td>
                    <td className="text-center py-3 px-4">
                      <CheckCircle className="w-4 h-4 text-green-400 mx-auto" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* When to Use Each */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4">
              {t('helpCenter.articles.desktopMobile.whenToUse.title')}
            </h2>
            <p className="text-white/80 mb-4">
              {t('helpCenter.articles.desktopMobile.whenToUse.description')}
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-500/20 border border-green-400/30 rounded-lg p-4">
                <h3 className="font-semibold text-green-200 mb-3">
                  {t('helpCenter.articles.desktopMobile.whenToUse.desktop.title')}
                </h3>
                <ul className="text-green-100 space-y-2">
                  <li>• {t('helpCenter.articles.desktopMobile.whenToUse.desktop.use1')}</li>
                  <li>• {t('helpCenter.articles.desktopMobile.whenToUse.desktop.use2')}</li>
                  <li>• {t('helpCenter.articles.desktopMobile.whenToUse.desktop.use3')}</li>
                  <li>• {t('helpCenter.articles.desktopMobile.whenToUse.desktop.use4')}</li>
                </ul>
              </div>
              
              <div className="bg-purple-500/20 border border-purple-400/30 rounded-lg p-4">
                <h3 className="font-semibold text-purple-200 mb-3">
                  {t('helpCenter.articles.desktopMobile.whenToUse.mobile.title')}
                </h3>
                <ul className="text-purple-100 space-y-2">
                  <li>• {t('helpCenter.articles.desktopMobile.whenToUse.mobile.use1')}</li>
                  <li>• {t('helpCenter.articles.desktopMobile.whenToUse.mobile.use2')}</li>
                  <li>• {t('helpCenter.articles.desktopMobile.whenToUse.mobile.use3')}</li>
                  <li>• {t('helpCenter.articles.desktopMobile.whenToUse.mobile.use4')}</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Related Articles */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4">
              {t('helpCenter.articles.desktopMobile.related.title')}
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/help-center/getting-started/first-followers">
                <div className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
                  <h3 className="font-semibold mb-2">
                    {t('helpCenter.articles.desktopMobile.related.firstFollowers')}
                  </h3>
                  <p className="text-white/60 text-sm">
                    {t('helpCenter.articles.desktopMobile.related.firstFollowersDesc')}
                  </p>
                </div>
              </Link>
              <Link href="/help-center/getting-started/following-users">
                <div className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
                  <h3 className="font-semibold mb-2">
                    {t('helpCenter.articles.desktopMobile.related.followingUsers')}
                  </h3>
                  <p className="text-white/60 text-sm">
                    {t('helpCenter.articles.desktopMobile.related.followingUsersDesc')}
                  </p>
                </div>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link href="/help-center/getting-started/mobile-app">
            <Button variant="outline" className="text-white border-white/20 hover:bg-white/10">
              ← {t('helpCenter.articles.desktopMobile.previousArticle')}
            </Button>
          </Link>
          <Link href="/help-center/getting-started/first-followers">
            <Button className="bg-white text-purple-600 hover:bg-white/90">
              {t('helpCenter.articles.desktopMobile.nextArticle')} →
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Shield, Eye, Users, Lock, CheckCircle, AlertCircle, Settings } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "wouter";

export default function PrivacySettingsOverview(props: any) {
  const { t } = useLanguage();

  const privacyLevels = [
    {
      title: t('helpCenter.articles.privacySettingsOverview.levels.public.title'),
      description: t('helpCenter.articles.privacySettingsOverview.levels.public.description'),
      icon: Eye,
      features: [
        t('helpCenter.articles.privacySettingsOverview.levels.public.feature1'),
        t('helpCenter.articles.privacySettingsOverview.levels.public.feature2'),
        t('helpCenter.articles.privacySettingsOverview.levels.public.feature3')
      ]
    },
    {
      title: t('helpCenter.articles.privacySettingsOverview.levels.followers.title'),
      description: t('helpCenter.articles.privacySettingsOverview.levels.followers.description'),
      icon: Users,
      features: [
        t('helpCenter.articles.privacySettingsOverview.levels.followers.feature1'),
        t('helpCenter.articles.privacySettingsOverview.levels.followers.feature2'),
        t('helpCenter.articles.privacySettingsOverview.levels.followers.feature3')
      ]
    },
    {
      title: t('helpCenter.articles.privacySettingsOverview.levels.private.title'),
      description: t('helpCenter.articles.privacySettingsOverview.levels.private.description'),
      icon: Lock,
      features: [
        t('helpCenter.articles.privacySettingsOverview.levels.private.feature1'),
        t('helpCenter.articles.privacySettingsOverview.levels.private.feature2'),
        t('helpCenter.articles.privacySettingsOverview.levels.private.feature3')
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#A690F2] to-[#2C1761] text-white">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            <Link href="/help-center/privacy-security">
              <Button
                variant="ghost"
                className="text-white hover:bg-white/10"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                {t('helpCenter.backToCategory')}
              </Button>
            </Link>
            <h1 className="text-lg sm:text-xl font-bold text-white">{t('helpCenter.articles.privacySettingsOverview.title')}</h1>
            <div className="w-20" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Article Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
            {t('helpCenter.articles.privacySettingsOverview.title')}
          </h1>
          <p className="text-xl text-white/80 mb-6">
            {t('helpCenter.articles.privacySettingsOverview.subtitle')}
          </p>
          <div className="flex items-center gap-4 text-sm text-white/60">
            <span>{t('helpCenter.articles.privacySettingsOverview.readTime')}</span>
            <span>•</span>
            <span>{t('helpCenter.articles.privacySettingsOverview.lastUpdated')}</span>
          </div>
        </div>

        {/* Introduction */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">
              {t('helpCenter.articles.privacySettingsOverview.introduction.title')}
            </h2>
            <p className="text-white/80 mb-4">
              {t('helpCenter.articles.privacySettingsOverview.introduction.content')}
            </p>
            <div className="bg-blue-500/20 border border-blue-400/30 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-blue-200 mb-2">
                    {t('helpCenter.articles.privacySettingsOverview.introduction.tip')}
                  </h3>
                  <p className="text-blue-100">
                    {t('helpCenter.articles.privacySettingsOverview.introduction.tipContent')}
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
                    <h3 className="text-xl font-semibold mb-2 text-white">{level.title}</h3>
                    <p className="text-white/80 mb-4">{level.description}</p>
                    <h4 className="font-semibold text-white mb-3">
                      {t('helpCenter.articles.privacySettingsOverview.features.title')}
                    </h4>
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

        {/* How to Access Settings */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">
              {t('helpCenter.articles.privacySettingsOverview.howTo.title')}
            </h2>
            <p className="text-white/80 mb-4">
              {t('helpCenter.articles.privacySettingsOverview.howTo.description')}
            </p>
            
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  1
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-white">
                    {t('helpCenter.articles.privacySettingsOverview.howTo.step1.title')}
                  </h3>
                  <p className="text-white/80">
                    {t('helpCenter.articles.privacySettingsOverview.howTo.step1.description')}
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  2
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-white">
                    {t('helpCenter.articles.privacySettingsOverview.howTo.step2.title')}
                  </h3>
                  <p className="text-white/80">
                    {t('helpCenter.articles.privacySettingsOverview.howTo.step2.description')}
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  3
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-white">
                    {t('helpCenter.articles.privacySettingsOverview.howTo.step3.title')}
                  </h3>
                  <p className="text-white/80">
                    {t('helpCenter.articles.privacySettingsOverview.howTo.step3.description')}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Profile Visibility */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">
              {t('helpCenter.articles.privacySettingsOverview.profileVisibility.title')}
            </h2>
            <p className="text-white/80 mb-4">
              {t('helpCenter.articles.privacySettingsOverview.profileVisibility.description')}
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-500/20 border border-green-400/30 rounded-lg p-4">
                <h3 className="font-semibold text-green-200 mb-2">
                  {t('helpCenter.articles.privacySettingsOverview.profileVisibility.profile.title')}
                </h3>
                <p className="text-green-100 mb-2">
                  {t('helpCenter.articles.privacySettingsOverview.profileVisibility.profile.description')}
                </p>
                <ul className="text-green-100 space-y-1 text-sm">
                  <li>• {t('helpCenter.articles.privacySettingsOverview.profileVisibility.profile.tip1')}</li>
                  <li>• {t('helpCenter.articles.privacySettingsOverview.profileVisibility.profile.tip2')}</li>
                </ul>
              </div>
              
              <div className="bg-blue-500/20 border border-blue-400/30 rounded-lg p-4">
                <h3 className="font-semibold text-blue-200 mb-2">
                  {t('helpCenter.articles.privacySettingsOverview.profileVisibility.activity.title')}
                </h3>
                <p className="text-blue-100 mb-2">
                  {t('helpCenter.articles.privacySettingsOverview.profileVisibility.activity.description')}
                </p>
                <ul className="text-blue-100 space-y-1 text-sm">
                  <li>• {t('helpCenter.articles.privacySettingsOverview.profileVisibility.activity.tip1')}</li>
                  <li>• {t('helpCenter.articles.privacySettingsOverview.profileVisibility.activity.tip2')}</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Content Privacy */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">
              {t('helpCenter.articles.privacySettingsOverview.contentPrivacy.title')}
            </h2>
            <p className="text-white/80 mb-4">
              {t('helpCenter.articles.privacySettingsOverview.contentPrivacy.description')}
            </p>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-purple-500/20 border border-purple-400/30 rounded-lg p-4">
                <h3 className="font-semibold text-purple-200 mb-2">
                  {t('helpCenter.articles.privacySettingsOverview.contentPrivacy.shelf.title')}
                </h3>
                <p className="text-purple-100 text-sm">
                  {t('helpCenter.articles.privacySettingsOverview.contentPrivacy.shelf.description')}
                </p>
              </div>
              
              <div className="bg-yellow-500/20 border border-yellow-400/30 rounded-lg p-4">
                <h3 className="font-semibold text-yellow-200 mb-2">
                  {t('helpCenter.articles.privacySettingsOverview.contentPrivacy.reviews.title')}
                </h3>
                <p className="text-yellow-100 text-sm">
                  {t('helpCenter.articles.privacySettingsOverview.contentPrivacy.reviews.description')}
                </p>
              </div>
              
              <div className="bg-red-500/20 border border-red-400/30 rounded-lg p-4">
                <h3 className="font-semibold text-red-200 mb-2">
                  {t('helpCenter.articles.privacySettingsOverview.contentPrivacy.activity.title')}
                </h3>
                <p className="text-red-100 text-sm">
                  {t('helpCenter.articles.privacySettingsOverview.contentPrivacy.activity.description')}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tips and Best Practices */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">
              {t('helpCenter.articles.privacySettingsOverview.tips.title')}
            </h2>
            <p className="text-white/80 mb-4">
              {t('helpCenter.articles.privacySettingsOverview.tips.description')}
            </p>
            
            <div className="space-y-4">
              <div className="bg-green-500/20 border border-green-400/30 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-green-200 mb-2">
                      {t('helpCenter.articles.privacySettingsOverview.tips.tip1.title')}
                    </h3>
                    <p className="text-green-100">
                      {t('helpCenter.articles.privacySettingsOverview.tips.tip1.content')}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-500/20 border border-blue-400/30 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <Settings className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-blue-200 mb-2">
                      {t('helpCenter.articles.privacySettingsOverview.tips.tip2.title')}
                    </h3>
                    <p className="text-blue-100">
                      {t('helpCenter.articles.privacySettingsOverview.tips.tip2.content')}
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
              {t('helpCenter.articles.privacySettingsOverview.related.title')}
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/help-center/privacy-security/profile-visibility">
                <div className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
                  <h3 className="font-semibold mb-2 text-white">
                    {t('helpCenter.articles.privacySettingsOverview.related.profileVisibility')}
                  </h3>
                  <p className="text-white/60 text-sm">
                    {t('helpCenter.articles.privacySettingsOverview.related.profileVisibilityDesc')}
                  </p>
                </div>
              </Link>
              <Link href="/help-center/privacy-security/data-sharing">
                <div className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
                  <h3 className="font-semibold mb-2 text-white">
                    {t('helpCenter.articles.privacySettingsOverview.related.dataSharing')}
                  </h3>
                  <p className="text-white/60 text-sm">
                    {t('helpCenter.articles.privacySettingsOverview.related.dataSharingDesc')}
                  </p>
                </div>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link href="/help-center/privacy-security">
            <Button variant="outline" className="text-white border-white/20 hover:bg-white/10">
              ← {t('helpCenter.articles.privacySettingsOverview.previousArticle')}
            </Button>
          </Link>
          <Link href="/help-center/privacy-security/profile-visibility">
            <Button className="bg-white text-purple-600 hover:bg-white/90">
              {t('helpCenter.articles.privacySettingsOverview.nextArticle')} →
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

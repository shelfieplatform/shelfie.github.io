import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Shield, Users, Lock, CheckCircle, AlertCircle, Settings } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "wouter";

export default function DataSharingSettings(props: any) {
  const { t } = useLanguage();

  const sharingOptions = [
    {
      title: t('helpCenter.articles.dataSharingSettings.options.profile.title'),
      description: t('helpCenter.articles.dataSharingSettings.options.profile.description'),
      icon: Users,
      settings: [
        t('helpCenter.articles.dataSharingSettings.options.profile.setting1'),
        t('helpCenter.articles.dataSharingSettings.options.profile.setting2'),
        t('helpCenter.articles.dataSharingSettings.options.profile.setting3')
      ]
    },
    {
      title: t('helpCenter.articles.dataSharingSettings.options.activity.title'),
      description: t('helpCenter.articles.dataSharingSettings.options.activity.description'),
      icon: Settings,
      settings: [
        t('helpCenter.articles.dataSharingSettings.options.activity.setting1'),
        t('helpCenter.articles.dataSharingSettings.options.activity.setting2'),
        t('helpCenter.articles.dataSharingSettings.options.activity.setting3')
      ]
    },
    {
      title: t('helpCenter.articles.dataSharingSettings.options.analytics.title'),
      description: t('helpCenter.articles.dataSharingSettings.options.analytics.description'),
      icon: Lock,
      settings: [
        t('helpCenter.articles.dataSharingSettings.options.analytics.setting1'),
        t('helpCenter.articles.dataSharingSettings.options.analytics.setting2'),
        t('helpCenter.articles.dataSharingSettings.options.analytics.setting3')
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
            <h1 className="text-lg sm:text-xl font-bold text-white">{t('helpCenter.articles.dataSharingSettings.title')}</h1>
            <div className="w-20" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Article Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
            {t('helpCenter.articles.dataSharingSettings.title')}
          </h1>
          <p className="text-xl text-white/80 mb-6">
            {t('helpCenter.articles.dataSharingSettings.subtitle')}
          </p>
          <div className="flex items-center gap-4 text-sm text-white/60">
            <span>{t('helpCenter.articles.dataSharingSettings.readTime')}</span>
            <span>•</span>
            <span>{t('helpCenter.articles.dataSharingSettings.lastUpdated')}</span>
          </div>
        </div>

        {/* Introduction */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">
              {t('helpCenter.articles.dataSharingSettings.introduction.title')}
            </h2>
            <p className="text-white/80 mb-4">
              {t('helpCenter.articles.dataSharingSettings.introduction.content')}
            </p>
            <div className="bg-blue-500/20 border border-blue-400/30 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-blue-200 mb-2">
                    {t('helpCenter.articles.dataSharingSettings.introduction.tip')}
                  </h3>
                  <p className="text-blue-100">
                    {t('helpCenter.articles.dataSharingSettings.introduction.tipContent')}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Sharing Options */}
        <div className="space-y-8 mb-8">
          {sharingOptions.map((option, index) => (
            <Card key={index} className="bg-white/10 border-white/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                      <option.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 text-white">{option.title}</h3>
                    <p className="text-white/80 mb-4">{option.description}</p>
                    <h4 className="font-semibold text-white mb-3">
                      {t('helpCenter.articles.dataSharingSettings.settings.title')}
                    </h4>
                    <ul className="space-y-2">
                      {option.settings.map((setting, settingIndex) => (
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

        {/* How to Adjust Settings */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">
              {t('helpCenter.articles.dataSharingSettings.howTo.title')}
            </h2>
            <p className="text-white/80 mb-4">
              {t('helpCenter.articles.dataSharingSettings.howTo.description')}
            </p>
            
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  1
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-white">
                    {t('helpCenter.articles.dataSharingSettings.howTo.step1.title')}
                  </h3>
                  <p className="text-white/80">
                    {t('helpCenter.articles.dataSharingSettings.howTo.step1.description')}
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  2
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-white">
                    {t('helpCenter.articles.dataSharingSettings.howTo.step2.title')}
                  </h3>
                  <p className="text-white/80">
                    {t('helpCenter.articles.dataSharingSettings.howTo.step2.description')}
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  3
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-white">
                    {t('helpCenter.articles.dataSharingSettings.howTo.step3.title')}
                  </h3>
                  <p className="text-white/80">
                    {t('helpCenter.articles.dataSharingSettings.howTo.step3.description')}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Privacy Levels */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">
              {t('helpCenter.articles.dataSharingSettings.privacyLevels.title')}
            </h2>
            <p className="text-white/80 mb-4">
              {t('helpCenter.articles.dataSharingSettings.privacyLevels.description')}
            </p>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-green-500/20 border border-green-400/30 rounded-lg p-4">
                <h3 className="font-semibold text-green-200 mb-2">
                  {t('helpCenter.articles.dataSharingSettings.privacyLevels.public.title')}
                </h3>
                <p className="text-green-100 mb-2">
                  {t('helpCenter.articles.dataSharingSettings.privacyLevels.public.description')}
                </p>
                <ul className="text-green-100 space-y-1 text-sm">
                  <li>• {t('helpCenter.articles.dataSharingSettings.privacyLevels.public.tip1')}</li>
                  <li>• {t('helpCenter.articles.dataSharingSettings.privacyLevels.public.tip2')}</li>
                </ul>
              </div>
              
              <div className="bg-yellow-500/20 border border-yellow-400/30 rounded-lg p-4">
                <h3 className="font-semibold text-yellow-200 mb-2">
                  {t('helpCenter.articles.dataSharingSettings.privacyLevels.followers.title')}
                </h3>
                <p className="text-yellow-100 mb-2">
                  {t('helpCenter.articles.dataSharingSettings.privacyLevels.followers.description')}
                </p>
                <ul className="text-yellow-100 space-y-1 text-sm">
                  <li>• {t('helpCenter.articles.dataSharingSettings.privacyLevels.followers.tip1')}</li>
                  <li>• {t('helpCenter.articles.dataSharingSettings.privacyLevels.followers.tip2')}</li>
                </ul>
              </div>
              
              <div className="bg-red-500/20 border border-red-400/30 rounded-lg p-4">
                <h3 className="font-semibold text-red-200 mb-2">
                  {t('helpCenter.articles.dataSharingSettings.privacyLevels.private.title')}
                </h3>
                <p className="text-red-100 mb-2">
                  {t('helpCenter.articles.dataSharingSettings.privacyLevels.private.description')}
                </p>
                <ul className="text-red-100 space-y-1 text-sm">
                  <li>• {t('helpCenter.articles.dataSharingSettings.privacyLevels.private.tip1')}</li>
                  <li>• {t('helpCenter.articles.dataSharingSettings.privacyLevels.private.tip2')}</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Third-Party Sharing */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">
              {t('helpCenter.articles.dataSharingSettings.thirdParty.title')}
            </h2>
            <p className="text-white/80 mb-4">
              {t('helpCenter.articles.dataSharingSettings.thirdParty.description')}
            </p>
            
            <div className="space-y-4">
              <div className="bg-yellow-500/20 border border-yellow-400/30 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-yellow-200 mb-2">
                      {t('helpCenter.articles.dataSharingSettings.thirdParty.analytics.title')}
                    </h3>
                    <p className="text-yellow-100">
                      {t('helpCenter.articles.dataSharingSettings.thirdParty.analytics.content')}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-500/20 border border-blue-400/30 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-blue-200 mb-2">
                      {t('helpCenter.articles.dataSharingSettings.thirdParty.control.title')}
                    </h3>
                    <p className="text-blue-100">
                      {t('helpCenter.articles.dataSharingSettings.thirdParty.control.content')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Important Notes */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">
              {t('helpCenter.articles.dataSharingSettings.important.title')}
            </h2>
            <p className="text-white/80 mb-4">
              {t('helpCenter.articles.dataSharingSettings.important.description')}
            </p>
            
            <div className="space-y-4">
              <div className="bg-green-500/20 border border-green-400/30 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-green-200 mb-2">
                      {t('helpCenter.articles.dataSharingSettings.important.note1.title')}
                    </h3>
                    <p className="text-green-100">
                      {t('helpCenter.articles.dataSharingSettings.important.note1.content')}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-500/20 border border-blue-400/30 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <Settings className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-blue-200 mb-2">
                      {t('helpCenter.articles.dataSharingSettings.important.note2.title')}
                    </h3>
                    <p className="text-blue-100">
                      {t('helpCenter.articles.dataSharingSettings.important.note2.content')}
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
              {t('helpCenter.articles.dataSharingSettings.related.title')}
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/help-center/privacy-security/privacy-policy">
                <div className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
                  <h3 className="font-semibold mb-2 text-white">
                    {t('helpCenter.articles.dataSharingSettings.related.privacyPolicy')}
                  </h3>
                  <p className="text-white/60 text-sm">
                    {t('helpCenter.articles.dataSharingSettings.related.privacyPolicyDesc')}
                  </p>
                </div>
              </Link>
              <Link href="/help-center/privacy-security/profile-visibility">
                <div className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
                  <h3 className="font-semibold mb-2 text-white">
                    {t('helpCenter.articles.dataSharingSettings.related.profileVisibility')}
                  </h3>
                  <p className="text-white/60 text-sm">
                    {t('helpCenter.articles.dataSharingSettings.related.profileVisibilityDesc')}
                  </p>
                </div>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link href="/help-center/privacy-security/privacy-policy">
            <Button variant="outline" className="text-white border-white/20 hover:bg-white/10">
              ← {t('helpCenter.articles.dataSharingSettings.previousArticle')}
            </Button>
          </Link>
          <Link href="/help-center/privacy-security/account-recovery">
            <Button className="bg-white text-purple-600 hover:bg-white/90">
              {t('helpCenter.articles.dataSharingSettings.nextArticle')} →
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

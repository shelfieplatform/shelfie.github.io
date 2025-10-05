import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Shield, Lock, Key, CheckCircle, AlertCircle, Smartphone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "wouter";

export default function AccountSecurityBestPractices(props: any) {
  const { t } = useLanguage();

  const securityPractices = [
    {
      title: t('helpCenter.articles.accountSecurityBestPractices.practices.passwords.title'),
      description: t('helpCenter.articles.accountSecurityBestPractices.practices.passwords.description'),
      icon: Key,
      tips: [
        t('helpCenter.articles.accountSecurityBestPractices.practices.passwords.tip1'),
        t('helpCenter.articles.accountSecurityBestPractices.practices.passwords.tip2'),
        t('helpCenter.articles.accountSecurityBestPractices.practices.passwords.tip3')
      ]
    },
    {
      title: t('helpCenter.articles.accountSecurityBestPractices.practices.twoFactor.title'),
      description: t('helpCenter.articles.accountSecurityBestPractices.practices.twoFactor.description'),
      icon: Smartphone,
      tips: [
        t('helpCenter.articles.accountSecurityBestPractices.practices.twoFactor.tip1'),
        t('helpCenter.articles.accountSecurityBestPractices.practices.twoFactor.tip2'),
        t('helpCenter.articles.accountSecurityBestPractices.practices.twoFactor.tip3')
      ]
    },
    {
      title: t('helpCenter.articles.accountSecurityBestPractices.practices.privacy.title'),
      description: t('helpCenter.articles.accountSecurityBestPractices.practices.privacy.description'),
      icon: Shield,
      tips: [
        t('helpCenter.articles.accountSecurityBestPractices.practices.privacy.tip1'),
        t('helpCenter.articles.accountSecurityBestPractices.practices.privacy.tip2'),
        t('helpCenter.articles.accountSecurityBestPractices.practices.privacy.tip3')
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
            <h1 className="text-lg sm:text-xl font-bold text-white">{t('helpCenter.articles.accountSecurityBestPractices.title')}</h1>
            <div className="w-20" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Article Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
            {t('helpCenter.articles.accountSecurityBestPractices.title')}
          </h1>
          <p className="text-xl text-white/80 mb-6">
            {t('helpCenter.articles.accountSecurityBestPractices.subtitle')}
          </p>
          <div className="flex items-center gap-4 text-sm text-white/60">
            <span>{t('helpCenter.articles.accountSecurityBestPractices.readTime')}</span>
            <span>•</span>
            <span>{t('helpCenter.articles.accountSecurityBestPractices.lastUpdated')}</span>
          </div>
        </div>

        {/* Introduction */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">
              {t('helpCenter.articles.accountSecurityBestPractices.introduction.title')}
            </h2>
            <p className="text-white/80 mb-4">
              {t('helpCenter.articles.accountSecurityBestPractices.introduction.content')}
            </p>
            <div className="bg-purple-500/20 border border-purple-400/30 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-purple-200 mb-2">
                    {t('helpCenter.articles.accountSecurityBestPractices.introduction.tip')}
                  </h3>
                  <p className="text-purple-100">
                    {t('helpCenter.articles.accountSecurityBestPractices.introduction.tipContent')}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Security Practices */}
        <div className="space-y-8 mb-8">
          {securityPractices.map((practice, index) => (
            <Card key={index} className="bg-white/10 border-white/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                      <practice.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 text-white">{practice.title}</h3>
                    <p className="text-white/80 mb-4">{practice.description}</p>
                    <h4 className="font-semibold text-white mb-3">
                      {t('helpCenter.articles.accountSecurityBestPractices.tips.title')}
                    </h4>
                    <ul className="space-y-2">
                      {practice.tips.map((tip, tipIndex) => (
                        <li key={tipIndex} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-white/80">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Password Security */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">
              {t('helpCenter.articles.accountSecurityBestPractices.passwordSecurity.title')}
            </h2>
            <p className="text-white/80 mb-4">
              {t('helpCenter.articles.accountSecurityBestPractices.passwordSecurity.description')}
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-500/20 border border-green-400/30 rounded-lg p-4">
                <h3 className="font-semibold text-green-200 mb-2">
                  {t('helpCenter.articles.accountSecurityBestPractices.passwordSecurity.strong.title')}
                </h3>
                <p className="text-green-100 mb-2">
                  {t('helpCenter.articles.accountSecurityBestPractices.passwordSecurity.strong.description')}
                </p>
                <ul className="text-green-100 space-y-1 text-sm">
                  <li>• {t('helpCenter.articles.accountSecurityBestPractices.passwordSecurity.strong.tip1')}</li>
                  <li>• {t('helpCenter.articles.accountSecurityBestPractices.passwordSecurity.strong.tip2')}</li>
                </ul>
              </div>
              
              <div className="bg-purple-500/20 border border-purple-400/30 rounded-lg p-4">
                <h3 className="font-semibold text-purple-200 mb-2">
                  {t('helpCenter.articles.accountSecurityBestPractices.passwordSecurity.unique.title')}
                </h3>
                <p className="text-purple-100 mb-2">
                  {t('helpCenter.articles.accountSecurityBestPractices.passwordSecurity.unique.description')}
                </p>
                <ul className="text-purple-100 space-y-1 text-sm">
                  <li>• {t('helpCenter.articles.accountSecurityBestPractices.passwordSecurity.unique.tip1')}</li>
                  <li>• {t('helpCenter.articles.accountSecurityBestPractices.passwordSecurity.unique.tip2')}</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Two-Factor Authentication */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">
              {t('helpCenter.articles.accountSecurityBestPractices.twoFactor.title')}
            </h2>
            <p className="text-white/80 mb-4">
              {t('helpCenter.articles.accountSecurityBestPractices.twoFactor.description')}
            </p>
            
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  1
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-white">
                    {t('helpCenter.articles.accountSecurityBestPractices.twoFactor.step1.title')}
                  </h3>
                  <p className="text-white/80">
                    {t('helpCenter.articles.accountSecurityBestPractices.twoFactor.step1.description')}
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  2
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-white">
                    {t('helpCenter.articles.accountSecurityBestPractices.twoFactor.step2.title')}
                  </h3>
                  <p className="text-white/80">
                    {t('helpCenter.articles.accountSecurityBestPractices.twoFactor.step2.description')}
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  3
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-white">
                    {t('helpCenter.articles.accountSecurityBestPractices.twoFactor.step3.title')}
                  </h3>
                  <p className="text-white/80">
                    {t('helpCenter.articles.accountSecurityBestPractices.twoFactor.step3.description')}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Privacy Settings */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">
              {t('helpCenter.articles.accountSecurityBestPractices.privacySettings.title')}
            </h2>
            <p className="text-white/80 mb-4">
              {t('helpCenter.articles.accountSecurityBestPractices.privacySettings.description')}
            </p>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-purple-500/20 border border-purple-400/30 rounded-lg p-4">
                <h3 className="font-semibold text-purple-200 mb-2">
                  {t('helpCenter.articles.accountSecurityBestPractices.privacySettings.profile.title')}
                </h3>
                <p className="text-purple-100 text-sm">
                  {t('helpCenter.articles.accountSecurityBestPractices.privacySettings.profile.description')}
                </p>
              </div>
              
              <div className="bg-yellow-500/20 border border-yellow-400/30 rounded-lg p-4">
                <h3 className="font-semibold text-yellow-200 mb-2">
                  {t('helpCenter.articles.accountSecurityBestPractices.privacySettings.activity.title')}
                </h3>
                <p className="text-yellow-100 text-sm">
                  {t('helpCenter.articles.accountSecurityBestPractices.privacySettings.activity.description')}
                </p>
              </div>
              
              <div className="bg-amber-500/20 border border-amber-400/30 rounded-lg p-4">
                <h3 className="font-semibold text-amber-200 mb-2">
                  {t('helpCenter.articles.accountSecurityBestPractices.privacySettings.data.title')}
                </h3>
                <p className="text-amber-100 text-sm">
                  {t('helpCenter.articles.accountSecurityBestPractices.privacySettings.data.description')}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Common Threats */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">
              {t('helpCenter.articles.accountSecurityBestPractices.commonThreats.title')}
            </h2>
            <p className="text-white/80 mb-4">
              {t('helpCenter.articles.accountSecurityBestPractices.commonThreats.description')}
            </p>
            
            <div className="space-y-4">
              <div className="bg-yellow-500/20 border border-yellow-400/30 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-yellow-200 mb-2">
                      {t('helpCenter.articles.accountSecurityBestPractices.commonThreats.phishing.title')}
                    </h3>
                    <p className="text-yellow-100">
                      {t('helpCenter.articles.accountSecurityBestPractices.commonThreats.phishing.content')}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-purple-500/20 border border-purple-400/30 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-purple-200 mb-2">
                      {t('helpCenter.articles.accountSecurityBestPractices.commonThreats.social.title')}
                    </h3>
                    <p className="text-purple-100">
                      {t('helpCenter.articles.accountSecurityBestPractices.commonThreats.social.content')}
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
              {t('helpCenter.articles.accountSecurityBestPractices.related.title')}
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/help-center/privacy-security/two-factor-auth">
                <div className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
                  <h3 className="font-semibold mb-2 text-white">
                    {t('helpCenter.articles.accountSecurityBestPractices.related.twoFactorAuth')}
                  </h3>
                  <p className="text-white/60 text-sm">
                    {t('helpCenter.articles.accountSecurityBestPractices.related.twoFactorAuthDesc')}
                  </p>
                </div>
              </Link>
              <Link href="/help-center/privacy-security/data-protection">
                <div className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
                  <h3 className="font-semibold mb-2 text-white">
                    {t('helpCenter.articles.accountSecurityBestPractices.related.dataProtection')}
                  </h3>
                  <p className="text-white/60 text-sm">
                    {t('helpCenter.articles.accountSecurityBestPractices.related.dataProtectionDesc')}
                  </p>
                </div>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link href="/help-center/privacy-security/data-protection">
            <Button variant="outline" className="text-white border-white/20 hover:bg-white/10">
              ← {t('helpCenter.articles.accountSecurityBestPractices.previousArticle')}
            </Button>
          </Link>
          <Link href="/help-center/privacy-security/two-factor-auth">
            <Button className="bg-white text-purple-600 hover:bg-white/90">
              {t('helpCenter.articles.accountSecurityBestPractices.nextArticle')} →
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

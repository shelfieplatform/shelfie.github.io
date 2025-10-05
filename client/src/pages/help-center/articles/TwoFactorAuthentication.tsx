import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Shield, Smartphone, Key, CheckCircle, AlertCircle, Lock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "wouter";

export default function TwoFactorAuthentication(props: any) {
  const { t } = useLanguage();

  const authMethods = [
    {
      title: t('helpCenter.articles.twoFactorAuthentication.methods.app.title'),
      description: t('helpCenter.articles.twoFactorAuthentication.methods.app.description'),
      icon: Smartphone,
      benefits: [
        t('helpCenter.articles.twoFactorAuthentication.methods.app.benefit1'),
        t('helpCenter.articles.twoFactorAuthentication.methods.app.benefit2'),
        t('helpCenter.articles.twoFactorAuthentication.methods.app.benefit3')
      ]
    },
    {
      title: t('helpCenter.articles.twoFactorAuthentication.methods.sms.title'),
      description: t('helpCenter.articles.twoFactorAuthentication.methods.sms.description'),
      icon: Key,
      benefits: [
        t('helpCenter.articles.twoFactorAuthentication.methods.sms.benefit1'),
        t('helpCenter.articles.twoFactorAuthentication.methods.sms.benefit2'),
        t('helpCenter.articles.twoFactorAuthentication.methods.sms.benefit3')
      ]
    },
    {
      title: t('helpCenter.articles.twoFactorAuthentication.methods.backup.title'),
      description: t('helpCenter.articles.twoFactorAuthentication.methods.backup.description'),
      icon: Lock,
      benefits: [
        t('helpCenter.articles.twoFactorAuthentication.methods.backup.benefit1'),
        t('helpCenter.articles.twoFactorAuthentication.methods.backup.benefit2'),
        t('helpCenter.articles.twoFactorAuthentication.methods.backup.benefit3')
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
            <h1 className="text-lg sm:text-xl font-bold text-white">{t('helpCenter.articles.twoFactorAuthentication.title')}</h1>
            <div className="w-20" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Article Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
            {t('helpCenter.articles.twoFactorAuthentication.title')}
          </h1>
          <p className="text-xl text-white/80 mb-6">
            {t('helpCenter.articles.twoFactorAuthentication.subtitle')}
          </p>
          <div className="flex items-center gap-4 text-sm text-white/60">
            <span>{t('helpCenter.articles.twoFactorAuthentication.readTime')}</span>
            <span>•</span>
            <span>{t('helpCenter.articles.twoFactorAuthentication.lastUpdated')}</span>
          </div>
        </div>

        {/* Introduction */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">
              {t('helpCenter.articles.twoFactorAuthentication.introduction.title')}
            </h2>
            <p className="text-white/80 mb-4">
              {t('helpCenter.articles.twoFactorAuthentication.introduction.content')}
            </p>
            <div className="bg-purple-500/20 border border-purple-400/30 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-purple-200 mb-2">
                    {t('helpCenter.articles.twoFactorAuthentication.introduction.tip')}
                  </h3>
                  <p className="text-purple-100">
                    {t('helpCenter.articles.twoFactorAuthentication.introduction.tipContent')}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Authentication Methods */}
        <div className="space-y-8 mb-8">
          {authMethods.map((method, index) => (
            <Card key={index} className="bg-white/10 border-white/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                      <method.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 text-white">{method.title}</h3>
                    <p className="text-white/80 mb-4">{method.description}</p>
                    <h4 className="font-semibold text-white mb-3">
                      {t('helpCenter.articles.twoFactorAuthentication.benefits.title')}
                    </h4>
                    <ul className="space-y-2">
                      {method.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-white/80">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* How to Set Up 2FA */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">
              {t('helpCenter.articles.twoFactorAuthentication.howTo.title')}
            </h2>
            <p className="text-white/80 mb-4">
              {t('helpCenter.articles.twoFactorAuthentication.howTo.description')}
            </p>
            
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  1
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-white">
                    {t('helpCenter.articles.twoFactorAuthentication.howTo.step1.title')}
                  </h3>
                  <p className="text-white/80">
                    {t('helpCenter.articles.twoFactorAuthentication.howTo.step1.description')}
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  2
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-white">
                    {t('helpCenter.articles.twoFactorAuthentication.howTo.step2.title')}
                  </h3>
                  <p className="text-white/80">
                    {t('helpCenter.articles.twoFactorAuthentication.howTo.step2.description')}
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  3
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-white">
                    {t('helpCenter.articles.twoFactorAuthentication.howTo.step3.title')}
                  </h3>
                  <p className="text-white/80">
                    {t('helpCenter.articles.twoFactorAuthentication.howTo.step3.description')}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Backup Codes */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">
              {t('helpCenter.articles.twoFactorAuthentication.backupCodes.title')}
            </h2>
            <p className="text-white/80 mb-4">
              {t('helpCenter.articles.twoFactorAuthentication.backupCodes.description')}
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-500/20 border border-green-400/30 rounded-lg p-4">
                <h3 className="font-semibold text-green-200 mb-2">
                  {t('helpCenter.articles.twoFactorAuthentication.backupCodes.generation.title')}
                </h3>
                <p className="text-green-100 mb-2">
                  {t('helpCenter.articles.twoFactorAuthentication.backupCodes.generation.description')}
                </p>
                <ul className="text-green-100 space-y-1 text-sm">
                  <li>• {t('helpCenter.articles.twoFactorAuthentication.backupCodes.generation.tip1')}</li>
                  <li>• {t('helpCenter.articles.twoFactorAuthentication.backupCodes.generation.tip2')}</li>
                </ul>
              </div>
              
              <div className="bg-purple-500/20 border border-purple-400/30 rounded-lg p-4">
                <h3 className="font-semibold text-purple-200 mb-2">
                  {t('helpCenter.articles.twoFactorAuthentication.backupCodes.storage.title')}
                </h3>
                <p className="text-purple-100 mb-2">
                  {t('helpCenter.articles.twoFactorAuthentication.backupCodes.storage.description')}
                </p>
                <ul className="text-purple-100 space-y-1 text-sm">
                  <li>• {t('helpCenter.articles.twoFactorAuthentication.backupCodes.storage.tip1')}</li>
                  <li>• {t('helpCenter.articles.twoFactorAuthentication.backupCodes.storage.tip2')}</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Troubleshooting */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">
              {t('helpCenter.articles.twoFactorAuthentication.troubleshooting.title')}
            </h2>
            <p className="text-white/80 mb-4">
              {t('helpCenter.articles.twoFactorAuthentication.troubleshooting.description')}
            </p>
            
            <div className="space-y-4">
              <div className="bg-yellow-500/20 border border-yellow-400/30 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-yellow-200 mb-2">
                      {t('helpCenter.articles.twoFactorAuthentication.troubleshooting.lostDevice.title')}
                    </h3>
                    <p className="text-yellow-100">
                      {t('helpCenter.articles.twoFactorAuthentication.troubleshooting.lostDevice.content')}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-purple-500/20 border border-purple-400/30 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-purple-200 mb-2">
                      {t('helpCenter.articles.twoFactorAuthentication.troubleshooting.wrongCode.title')}
                    </h3>
                    <p className="text-purple-100">
                      {t('helpCenter.articles.twoFactorAuthentication.troubleshooting.wrongCode.content')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Security Benefits */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">
              {t('helpCenter.articles.twoFactorAuthentication.securityBenefits.title')}
            </h2>
            <p className="text-white/80 mb-4">
              {t('helpCenter.articles.twoFactorAuthentication.securityBenefits.description')}
            </p>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-purple-500/20 border border-purple-400/30 rounded-lg p-4">
                <h3 className="font-semibold text-purple-200 mb-2">
                  {t('helpCenter.articles.twoFactorAuthentication.securityBenefits.protection.title')}
                </h3>
                <p className="text-purple-100 text-sm">
                  {t('helpCenter.articles.twoFactorAuthentication.securityBenefits.protection.description')}
                </p>
              </div>
              
              <div className="bg-yellow-500/20 border border-yellow-400/30 rounded-lg p-4">
                <h3 className="font-semibold text-yellow-200 mb-2">
                  {t('helpCenter.articles.twoFactorAuthentication.securityBenefits.verification.title')}
                </h3>
                <p className="text-yellow-100 text-sm">
                  {t('helpCenter.articles.twoFactorAuthentication.securityBenefits.verification.description')}
                </p>
              </div>
              
              <div className="bg-amber-500/20 border border-amber-400/30 rounded-lg p-4">
                <h3 className="font-semibold text-amber-200 mb-2">
                  {t('helpCenter.articles.twoFactorAuthentication.securityBenefits.peace.title')}
                </h3>
                <p className="text-amber-100 text-sm">
                  {t('helpCenter.articles.twoFactorAuthentication.securityBenefits.peace.description')}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Related Articles */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">
              {t('helpCenter.articles.twoFactorAuthentication.related.title')}
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/help-center/privacy-security/security-best-practices">
                <div className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
                  <h3 className="font-semibold mb-2 text-white">
                    {t('helpCenter.articles.twoFactorAuthentication.related.securityBestPractices')}
                  </h3>
                  <p className="text-white/60 text-sm">
                    {t('helpCenter.articles.twoFactorAuthentication.related.securityBestPracticesDesc')}
                  </p>
                </div>
              </Link>
              <Link href="/help-center/privacy-security/account-recovery">
                <div className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
                  <h3 className="font-semibold mb-2 text-white">
                    {t('helpCenter.articles.twoFactorAuthentication.related.accountRecovery')}
                  </h3>
                  <p className="text-white/60 text-sm">
                    {t('helpCenter.articles.twoFactorAuthentication.related.accountRecoveryDesc')}
                  </p>
                </div>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link href="/help-center/privacy-security/security-best-practices">
            <Button variant="outline" className="text-white border-white/20 hover:bg-white/10">
              ← {t('helpCenter.articles.twoFactorAuthentication.previousArticle')}
            </Button>
          </Link>
          <Link href="/help-center/privacy-security/privacy-policy">
            <Button className="bg-white text-purple-600 hover:bg-white/90">
              {t('helpCenter.articles.twoFactorAuthentication.nextArticle')} →
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

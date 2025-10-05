import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Shield, AlertTriangle, Lock, Eye, CheckCircle, AlertCircle, Key } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "wouter";

export default function SecurityThreats(props: any) {
  const { t } = useLanguage();

  const threatTypes = [
    {
      title: t('helpCenter.articles.securityThreats.types.phishing.title'),
      description: t('helpCenter.articles.securityThreats.types.phishing.description'),
      icon: AlertTriangle,
      signs: [
        t('helpCenter.articles.securityThreats.types.phishing.sign1'),
        t('helpCenter.articles.securityThreats.types.phishing.sign2'),
        t('helpCenter.articles.securityThreats.types.phishing.sign3')
      ]
    },
    {
      title: t('helpCenter.articles.securityThreats.types.malware.title'),
      description: t('helpCenter.articles.securityThreats.types.malware.description'),
      icon: Lock,
      signs: [
        t('helpCenter.articles.securityThreats.types.malware.sign1'),
        t('helpCenter.articles.securityThreats.types.malware.sign2'),
        t('helpCenter.articles.securityThreats.types.malware.sign3')
      ]
    },
    {
      title: t('helpCenter.articles.securityThreats.types.social.title'),
      description: t('helpCenter.articles.securityThreats.types.social.description'),
      icon: Eye,
      signs: [
        t('helpCenter.articles.securityThreats.types.social.sign1'),
        t('helpCenter.articles.securityThreats.types.social.sign2'),
        t('helpCenter.articles.securityThreats.types.social.sign3')
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
            <h1 className="text-lg sm:text-xl font-bold text-white">{t('helpCenter.articles.securityThreats.title')}</h1>
            <div className="w-20" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Article Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
            {t('helpCenter.articles.securityThreats.title')}
          </h1>
          <p className="text-xl text-white/80 mb-6">
            {t('helpCenter.articles.securityThreats.subtitle')}
          </p>
          <div className="flex items-center gap-4 text-sm text-white/60">
            <span>{t('helpCenter.articles.securityThreats.readTime')}</span>
            <span>•</span>
            <span>{t('helpCenter.articles.securityThreats.lastUpdated')}</span>
          </div>
        </div>

        {/* Introduction */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">
              {t('helpCenter.articles.securityThreats.introduction.title')}
            </h2>
            <p className="text-white/80 mb-4">
              {t('helpCenter.articles.securityThreats.introduction.content')}
            </p>
            <div className="bg-blue-500/20 border border-blue-400/30 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-blue-200 mb-2">
                    {t('helpCenter.articles.securityThreats.introduction.tip')}
                  </h3>
                  <p className="text-blue-100">
                    {t('helpCenter.articles.securityThreats.introduction.tipContent')}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Threat Types */}
        <div className="space-y-8 mb-8">
          {threatTypes.map((threat, index) => (
            <Card key={index} className="bg-white/10 border-white/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                      <threat.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 text-white">{threat.title}</h3>
                    <p className="text-white/80 mb-4">{threat.description}</p>
                    <h4 className="font-semibold text-white mb-3">
                      {t('helpCenter.articles.securityThreats.warningSigns.title')}
                    </h4>
                    <ul className="space-y-2">
                      {threat.signs.map((sign, signIndex) => (
                        <li key={signIndex} className="flex items-start gap-2">
                          <AlertCircle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                          <span className="text-white/80">{sign}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* How to Protect Yourself */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">
              {t('helpCenter.articles.securityThreats.protection.title')}
            </h2>
            <p className="text-white/80 mb-4">
              {t('helpCenter.articles.securityThreats.protection.description')}
            </p>
            
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  1
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-white">
                    {t('helpCenter.articles.securityThreats.protection.step1.title')}
                  </h3>
                  <p className="text-white/80">
                    {t('helpCenter.articles.securityThreats.protection.step1.description')}
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  2
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-white">
                    {t('helpCenter.articles.securityThreats.protection.step2.title')}
                  </h3>
                  <p className="text-white/80">
                    {t('helpCenter.articles.securityThreats.protection.step2.description')}
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  3
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-white">
                    {t('helpCenter.articles.securityThreats.protection.step3.title')}
                  </h3>
                  <p className="text-white/80">
                    {t('helpCenter.articles.securityThreats.protection.step3.description')}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Common Scams */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">
              {t('helpCenter.articles.securityThreats.scams.title')}
            </h2>
            <p className="text-white/80 mb-4">
              {t('helpCenter.articles.securityThreats.scams.description')}
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-red-500/20 border border-red-400/30 rounded-lg p-4">
                <h3 className="font-semibold text-red-200 mb-2">
                  {t('helpCenter.articles.securityThreats.scams.fakeEmails.title')}
                </h3>
                <p className="text-red-100 mb-2">
                  {t('helpCenter.articles.securityThreats.scams.fakeEmails.description')}
                </p>
                <ul className="text-red-100 space-y-1 text-sm">
                  <li>• {t('helpCenter.articles.securityThreats.scams.fakeEmails.tip1')}</li>
                  <li>• {t('helpCenter.articles.securityThreats.scams.fakeEmails.tip2')}</li>
                </ul>
              </div>
              
              <div className="bg-yellow-500/20 border border-yellow-400/30 rounded-lg p-4">
                <h3 className="font-semibold text-yellow-200 mb-2">
                  {t('helpCenter.articles.securityThreats.scams.fakeProfiles.title')}
                </h3>
                <p className="text-yellow-100 mb-2">
                  {t('helpCenter.articles.securityThreats.scams.fakeProfiles.description')}
                </p>
                <ul className="text-yellow-100 space-y-1 text-sm">
                  <li>• {t('helpCenter.articles.securityThreats.scams.fakeProfiles.tip1')}</li>
                  <li>• {t('helpCenter.articles.securityThreats.scams.fakeProfiles.tip2')}</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* What to Do If Compromised */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">
              {t('helpCenter.articles.securityThreats.compromised.title')}
            </h2>
            <p className="text-white/80 mb-4">
              {t('helpCenter.articles.securityThreats.compromised.description')}
            </p>
            
            <div className="space-y-4">
              <div className="bg-red-500/20 border border-red-400/30 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-red-200 mb-2">
                      {t('helpCenter.articles.securityThreats.compromised.immediate.title')}
                    </h3>
                    <p className="text-red-100">
                      {t('helpCenter.articles.securityThreats.compromised.immediate.content')}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-500/20 border border-blue-400/30 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-blue-200 mb-2">
                      {t('helpCenter.articles.securityThreats.compromised.contact.title')}
                    </h3>
                    <p className="text-blue-100">
                      {t('helpCenter.articles.securityThreats.compromised.contact.content')}
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
              {t('helpCenter.articles.securityThreats.related.title')}
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/help-center/privacy-security/security-best-practices">
                <div className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
                  <h3 className="font-semibold mb-2 text-white">
                    {t('helpCenter.articles.securityThreats.related.securityBestPractices')}
                  </h3>
                  <p className="text-white/60 text-sm">
                    {t('helpCenter.articles.securityThreats.related.securityBestPracticesDesc')}
                  </p>
                </div>
              </Link>
              <Link href="/help-center/privacy-security/security-audit">
                <div className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
                  <h3 className="font-semibold mb-2 text-white">
                    {t('helpCenter.articles.securityThreats.related.securityAudit')}
                  </h3>
                  <p className="text-white/60 text-sm">
                    {t('helpCenter.articles.securityThreats.related.securityAuditDesc')}
                  </p>
                </div>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link href="/help-center/privacy-security/security-audit">
            <Button variant="outline" className="text-white border-white/20 hover:bg-white/10">
              ← {t('helpCenter.articles.securityThreats.previousArticle')}
            </Button>
          </Link>
          <Link href="/help-center/privacy-security/security-tips">
            <Button className="bg-white text-purple-600 hover:bg-white/90">
              {t('helpCenter.articles.securityThreats.nextArticle')} →
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Shield, Lock, Eye, AlertTriangle, CheckCircle, AlertCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "wouter";

export default function BasicSecurityTips(props: any) {
  const { t } = useLanguage();

  const securityTips = [
    {
      title: t('helpCenter.articles.basicSecurityTips.tips.password.title'),
      description: t('helpCenter.articles.basicSecurityTips.tips.password.description'),
      icon: Lock,
      points: [
        t('helpCenter.articles.basicSecurityTips.tips.password.point1'),
        t('helpCenter.articles.basicSecurityTips.tips.password.point2'),
        t('helpCenter.articles.basicSecurityTips.tips.password.point3')
      ]
    },
    {
      title: t('helpCenter.articles.basicSecurityTips.tips.privacy.title'),
      description: t('helpCenter.articles.basicSecurityTips.tips.privacy.description'),
      icon: Eye,
      points: [
        t('helpCenter.articles.basicSecurityTips.tips.privacy.point1'),
        t('helpCenter.articles.basicSecurityTips.tips.privacy.point2'),
        t('helpCenter.articles.basicSecurityTips.tips.privacy.point3')
      ]
    },
    {
      title: t('helpCenter.articles.basicSecurityTips.tips.account.title'),
      description: t('helpCenter.articles.basicSecurityTips.tips.account.description'),
      icon: Shield,
      points: [
        t('helpCenter.articles.basicSecurityTips.tips.account.point1'),
        t('helpCenter.articles.basicSecurityTips.tips.account.point2'),
        t('helpCenter.articles.basicSecurityTips.tips.account.point3')
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
            <h1 className="text-lg sm:text-xl font-bold">{t('helpCenter.articles.basicSecurityTips.title')}</h1>
            <div className="w-20" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Article Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            {t('helpCenter.articles.basicSecurityTips.title')}
          </h1>
          <p className="text-xl text-white/80 mb-6">
            {t('helpCenter.articles.basicSecurityTips.subtitle')}
          </p>
          <div className="flex items-center gap-4 text-sm text-white/60">
            <span>{t('helpCenter.articles.basicSecurityTips.readTime')}</span>
            <span>•</span>
            <span>{t('helpCenter.articles.basicSecurityTips.lastUpdated')}</span>
          </div>
        </div>

        {/* Introduction */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4">
              {t('helpCenter.articles.basicSecurityTips.introduction.title')}
            </h2>
            <p className="text-white/80 mb-4">
              {t('helpCenter.articles.basicSecurityTips.introduction.content')}
            </p>
            <div className="bg-amber-500/20 border border-amber-400/30 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-amber-200 mb-2">
                    {t('helpCenter.articles.basicSecurityTips.introduction.important')}
                  </h3>
                  <p className="text-amber-100">
                    {t('helpCenter.articles.basicSecurityTips.introduction.importantContent')}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Security Tips */}
        <div className="space-y-8 mb-8">
          {securityTips.map((tip, index) => (
            <Card key={index} className="bg-white/10 border-white/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                      <tip.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{tip.title}</h3>
                    <p className="text-white/80 mb-4">{tip.description}</p>
                    <ul className="space-y-2">
                      {tip.points.map((point, pointIndex) => (
                        <li key={pointIndex} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-white/80">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Common Threats */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4">
              {t('helpCenter.articles.basicSecurityTips.threats.title')}
            </h2>
            <p className="text-white/80 mb-4">
              {t('helpCenter.articles.basicSecurityTips.threats.description')}
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-amber-500/20 border border-amber-400/30 rounded-lg p-4">
                <h3 className="font-semibold text-amber-200 mb-2">
                  {t('helpCenter.articles.basicSecurityTips.threats.phishing.title')}
                </h3>
                <p className="text-amber-100 mb-2">
                  {t('helpCenter.articles.basicSecurityTips.threats.phishing.description')}
                </p>
                <ul className="text-amber-100 space-y-1 text-sm">
                  <li>• {t('helpCenter.articles.basicSecurityTips.threats.phishing.warning1')}</li>
                  <li>• {t('helpCenter.articles.basicSecurityTips.threats.phishing.warning2')}</li>
                  <li>• {t('helpCenter.articles.basicSecurityTips.threats.phishing.warning3')}</li>
                </ul>
              </div>
              
              <div className="bg-yellow-500/20 border border-yellow-400/30 rounded-lg p-4">
                <h3 className="font-semibold text-yellow-200 mb-2">
                  {t('helpCenter.articles.basicSecurityTips.threats.weakPasswords.title')}
                </h3>
                <p className="text-yellow-100 mb-2">
                  {t('helpCenter.articles.basicSecurityTips.threats.weakPasswords.description')}
                </p>
                <ul className="text-yellow-100 space-y-1 text-sm">
                  <li>• {t('helpCenter.articles.basicSecurityTips.threats.weakPasswords.warning1')}</li>
                  <li>• {t('helpCenter.articles.basicSecurityTips.threats.weakPasswords.warning2')}</li>
                  <li>• {t('helpCenter.articles.basicSecurityTips.threats.weakPasswords.warning3')}</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Best Practices */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4">
              {t('helpCenter.articles.basicSecurityTips.bestPractices.title')}
            </h2>
            <p className="text-white/80 mb-4">
              {t('helpCenter.articles.basicSecurityTips.bestPractices.description')}
            </p>
            
            <div className="space-y-4">
              <div className="bg-green-500/20 border border-green-400/30 rounded-lg p-4">
                <h3 className="font-semibold text-green-200 mb-2">
                  {t('helpCenter.articles.basicSecurityTips.bestPractices.recommendations.title')}
                </h3>
                <ul className="text-green-100 space-y-1">
                  <li>• {t('helpCenter.articles.basicSecurityTips.bestPractices.recommendations.item1')}</li>
                  <li>• {t('helpCenter.articles.basicSecurityTips.bestPractices.recommendations.item2')}</li>
                  <li>• {t('helpCenter.articles.basicSecurityTips.bestPractices.recommendations.item3')}</li>
                  <li>• {t('helpCenter.articles.basicSecurityTips.bestPractices.recommendations.item4')}</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Related Articles */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4">
              {t('helpCenter.articles.basicSecurityTips.related.title')}
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/help-center/getting-started/platform-tour">
                <div className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
                  <h3 className="font-semibold mb-2">
                    {t('helpCenter.articles.basicSecurityTips.related.platformTour')}
                  </h3>
                  <p className="text-white/60 text-sm">
                    {t('helpCenter.articles.basicSecurityTips.related.platformTourDesc')}
                  </p>
                </div>
              </Link>
              <Link href="/help-center/privacy-security/privacy-settings">
                <div className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
                  <h3 className="font-semibold mb-2">
                    {t('helpCenter.articles.basicSecurityTips.related.privacySettings')}
                  </h3>
                  <p className="text-white/60 text-sm">
                    {t('helpCenter.articles.basicSecurityTips.related.privacySettingsDesc')}
                  </p>
                </div>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link href="/help-center/getting-started/understanding-notifications">
            <Button variant="outline" className="text-white border-white/20 hover:bg-white/10">
              ← {t('helpCenter.articles.basicSecurityTips.previousArticle')}
            </Button>
          </Link>
          <Link href="/help-center/getting-started/platform-tour">
            <Button className="bg-white text-purple-600 hover:bg-white/90">
              {t('helpCenter.articles.basicSecurityTips.nextArticle')} →
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

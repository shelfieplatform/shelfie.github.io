import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Shield, AlertTriangle, UserX, Flag, CheckCircle, AlertCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "wouter";

export default function BlockingReporting(props: any) {
  const { t } = useLanguage();

  const blockingReasons = [
    {
      title: t('helpCenter.articles.blockingReporting.blocking.reasons.harassment.title'),
      description: t('helpCenter.articles.blockingReporting.blocking.reasons.harassment.description'),
      icon: AlertTriangle,
      examples: [
        t('helpCenter.articles.blockingReporting.blocking.reasons.harassment.example1'),
        t('helpCenter.articles.blockingReporting.blocking.reasons.harassment.example2'),
        t('helpCenter.articles.blockingReporting.blocking.reasons.harassment.example3')
      ]
    },
    {
      title: t('helpCenter.articles.blockingReporting.blocking.reasons.spam.title'),
      description: t('helpCenter.articles.blockingReporting.blocking.reasons.spam.description'),
      icon: Flag,
      examples: [
        t('helpCenter.articles.blockingReporting.blocking.reasons.spam.example1'),
        t('helpCenter.articles.blockingReporting.blocking.reasons.spam.example2'),
        t('helpCenter.articles.blockingReporting.blocking.reasons.spam.example3')
      ]
    },
    {
      title: t('helpCenter.articles.blockingReporting.blocking.reasons.inappropriate.title'),
      description: t('helpCenter.articles.blockingReporting.blocking.reasons.inappropriate.description'),
      icon: UserX,
      examples: [
        t('helpCenter.articles.blockingReporting.blocking.reasons.inappropriate.example1'),
        t('helpCenter.articles.blockingReporting.blocking.reasons.inappropriate.example2'),
        t('helpCenter.articles.blockingReporting.blocking.reasons.inappropriate.example3')
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#A690F2] to-[#2C1761] text-white">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            <Link href="/help-center/account-profile">
              <Button
                variant="ghost"
                className="text-white hover:bg-white/10"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                {t('helpCenter.backToCategory')}
              </Button>
            </Link>
            <h1 className="text-lg sm:text-xl font-bold text-white">{t('helpCenter.articles.blockingReporting.title')}</h1>
            <div className="w-20" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Article Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
            {t('helpCenter.articles.blockingReporting.title')}
          </h1>
          <p className="text-xl text-white/80 mb-6">
            {t('helpCenter.articles.blockingReporting.subtitle')}
          </p>
          <div className="flex items-center gap-4 text-sm text-white/60">
            <span>{t('helpCenter.articles.blockingReporting.readTime')}</span>
            <span>•</span>
            <span>{t('helpCenter.articles.blockingReporting.lastUpdated')}</span>
          </div>
        </div>

        {/* Introduction */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">
              {t('helpCenter.articles.blockingReporting.introduction.title')}
            </h2>
            <p className="text-white/80 mb-4">
              {t('helpCenter.articles.blockingReporting.introduction.content')}
            </p>
            <div className="bg-blue-500/20 border border-blue-400/30 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-blue-200 mb-2">
                    {t('helpCenter.articles.blockingReporting.introduction.tip')}
                  </h3>
                  <p className="text-blue-100">
                    {t('helpCenter.articles.blockingReporting.introduction.tipContent')}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Blocking Users */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">
              {t('helpCenter.articles.blockingReporting.blocking.title')}
            </h2>
            <p className="text-white/80 mb-4">
              {t('helpCenter.articles.blockingReporting.blocking.description')}
            </p>
            
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  1
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-white">
                    {t('helpCenter.articles.blockingReporting.blocking.step1.title')}
                  </h3>
                  <p className="text-white/80">
                    {t('helpCenter.articles.blockingReporting.blocking.step1.description')}
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  2
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-white">
                    {t('helpCenter.articles.blockingReporting.blocking.step2.title')}
                  </h3>
                  <p className="text-white/80">
                    {t('helpCenter.articles.blockingReporting.blocking.step2.description')}
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  3
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-white">
                    {t('helpCenter.articles.blockingReporting.blocking.step3.title')}
                  </h3>
                  <p className="text-white/80">
                    {t('helpCenter.articles.blockingReporting.blocking.step3.description')}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Blocking Reasons */}
        <div className="space-y-8 mb-8">
          {blockingReasons.map((reason, index) => (
            <Card key={index} className="bg-white/10 border-white/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                      <reason.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 text-white">{reason.title}</h3>
                    <p className="text-white/80 mb-4">{reason.description}</p>
                    <h4 className="font-semibold text-white mb-3">
                      {t('helpCenter.articles.blockingReporting.examples.title')}
                    </h4>
                    <ul className="space-y-2">
                      {reason.examples.map((example, exampleIndex) => (
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

        {/* Reporting Users */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">
              {t('helpCenter.articles.blockingReporting.reporting.title')}
            </h2>
            <p className="text-white/80 mb-4">
              {t('helpCenter.articles.blockingReporting.reporting.description')}
            </p>
            
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  1
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-white">
                    {t('helpCenter.articles.blockingReporting.reporting.step1.title')}
                  </h3>
                  <p className="text-white/80">
                    {t('helpCenter.articles.blockingReporting.reporting.step1.description')}
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  2
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-white">
                    {t('helpCenter.articles.blockingReporting.reporting.step2.title')}
                  </h3>
                  <p className="text-white/80">
                    {t('helpCenter.articles.blockingReporting.reporting.step2.description')}
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  3
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-white">
                    {t('helpCenter.articles.blockingReporting.reporting.step3.title')}
                  </h3>
                  <p className="text-white/80">
                    {t('helpCenter.articles.blockingReporting.reporting.step3.description')}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* What Happens After */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">
              {t('helpCenter.articles.blockingReporting.after.title')}
            </h2>
            <p className="text-white/80 mb-4">
              {t('helpCenter.articles.blockingReporting.after.description')}
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-500/20 border border-green-400/30 rounded-lg p-4">
                <h3 className="font-semibold text-green-200 mb-2">
                  {t('helpCenter.articles.blockingReporting.after.blocking.title')}
                </h3>
                <ul className="text-green-100 space-y-1 text-sm">
                  <li>• {t('helpCenter.articles.blockingReporting.after.blocking.effect1')}</li>
                  <li>• {t('helpCenter.articles.blockingReporting.after.blocking.effect2')}</li>
                  <li>• {t('helpCenter.articles.blockingReporting.after.blocking.effect3')}</li>
                </ul>
              </div>
              
              <div className="bg-blue-500/20 border border-blue-400/30 rounded-lg p-4">
                <h3 className="font-semibold text-blue-200 mb-2">
                  {t('helpCenter.articles.blockingReporting.after.reporting.title')}
                </h3>
                <ul className="text-blue-100 space-y-1 text-sm">
                  <li>• {t('helpCenter.articles.blockingReporting.after.reporting.effect1')}</li>
                  <li>• {t('helpCenter.articles.blockingReporting.after.reporting.effect2')}</li>
                  <li>• {t('helpCenter.articles.blockingReporting.after.reporting.effect3')}</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Important Notes */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">
              {t('helpCenter.articles.blockingReporting.important.title')}
            </h2>
            <div className="space-y-4">
              <div className="bg-yellow-500/20 border border-yellow-400/30 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-yellow-200 mb-2">
                      {t('helpCenter.articles.blockingReporting.important.note1.title')}
                    </h3>
                    <p className="text-yellow-100">
                      {t('helpCenter.articles.blockingReporting.important.note1.content')}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-500/20 border border-blue-400/30 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-blue-200 mb-2">
                      {t('helpCenter.articles.blockingReporting.important.note2.title')}
                    </h3>
                    <p className="text-blue-100">
                      {t('helpCenter.articles.blockingReporting.important.note2.content')}
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
              {t('helpCenter.articles.blockingReporting.related.title')}
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/help-center/account-profile/account-settings">
                <div className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
                  <h3 className="font-semibold mb-2 text-white">
                    {t('helpCenter.articles.blockingReporting.related.accountSettings')}
                  </h3>
                  <p className="text-white/60 text-sm">
                    {t('helpCenter.articles.blockingReporting.related.accountSettingsDesc')}
                  </p>
                </div>
              </Link>
              <Link href="/help-center/privacy-security">
                <div className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
                  <h3 className="font-semibold mb-2 text-white">
                    {t('helpCenter.articles.blockingReporting.related.privacySecurity')}
                  </h3>
                  <p className="text-white/60 text-sm">
                    {t('helpCenter.articles.blockingReporting.related.privacySecurityDesc')}
                  </p>
                </div>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link href="/help-center/account-profile/data-export">
            <Button variant="outline" className="text-white border-white/20 hover:bg-white/10">
              ← {t('helpCenter.articles.blockingReporting.previousArticle')}
            </Button>
          </Link>
          <Link href="/help-center/adding-favorites">
            <Button className="bg-white text-purple-600 hover:bg-white/90">
              {t('helpCenter.articles.blockingReporting.nextArticle')} →
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

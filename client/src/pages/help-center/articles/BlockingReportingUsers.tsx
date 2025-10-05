import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Shield, AlertTriangle, Ban, CheckCircle, AlertCircle, Flag } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "wouter";

export default function BlockingReportingUsers(props: any) {
  const { t } = useLanguage();

  const blockingReasons = [
    {
      title: t('helpCenter.articles.blockingReportingUsers.reasons.harassment.title'),
      description: t('helpCenter.articles.blockingReportingUsers.reasons.harassment.description'),
      icon: AlertTriangle,
      examples: [
        t('helpCenter.articles.blockingReportingUsers.reasons.harassment.example1'),
        t('helpCenter.articles.blockingReportingUsers.reasons.harassment.example2'),
        t('helpCenter.articles.blockingReportingUsers.reasons.harassment.example3')
      ]
    },
    {
      title: t('helpCenter.articles.blockingReportingUsers.reasons.spam.title'),
      description: t('helpCenter.articles.blockingReportingUsers.reasons.spam.description'),
      icon: Flag,
      examples: [
        t('helpCenter.articles.blockingReportingUsers.reasons.spam.example1'),
        t('helpCenter.articles.blockingReportingUsers.reasons.spam.example2'),
        t('helpCenter.articles.blockingReportingUsers.reasons.spam.example3')
      ]
    },
    {
      title: t('helpCenter.articles.blockingReportingUsers.reasons.inappropriate.title'),
      description: t('helpCenter.articles.blockingReportingUsers.reasons.inappropriate.description'),
      icon: Shield,
      examples: [
        t('helpCenter.articles.blockingReportingUsers.reasons.inappropriate.example1'),
        t('helpCenter.articles.blockingReportingUsers.reasons.inappropriate.example2'),
        t('helpCenter.articles.blockingReportingUsers.reasons.inappropriate.example3')
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
            <h1 className="text-lg sm:text-xl font-bold text-white">{t('helpCenter.articles.blockingReportingUsers.title')}</h1>
            <div className="w-20" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Article Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
            {t('helpCenter.articles.blockingReportingUsers.title')}
          </h1>
          <p className="text-xl text-white/80 mb-6">
            {t('helpCenter.articles.blockingReportingUsers.subtitle')}
          </p>
          <div className="flex items-center gap-4 text-sm text-white/60">
            <span>{t('helpCenter.articles.blockingReportingUsers.readTime')}</span>
            <span>•</span>
            <span>{t('helpCenter.articles.blockingReportingUsers.lastUpdated')}</span>
          </div>
        </div>

        {/* Introduction */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">
              {t('helpCenter.articles.blockingReportingUsers.introduction.title')}
            </h2>
            <p className="text-white/80 mb-4">
              {t('helpCenter.articles.blockingReportingUsers.introduction.content')}
            </p>
            <div className="bg-blue-500/20 border border-blue-400/30 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-blue-200 mb-2">
                    {t('helpCenter.articles.blockingReportingUsers.introduction.tip')}
                  </h3>
                  <p className="text-blue-100">
                    {t('helpCenter.articles.blockingReportingUsers.introduction.tipContent')}
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
                      {t('helpCenter.articles.blockingReportingUsers.examples.title')}
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

        {/* How to Block Users */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">
              {t('helpCenter.articles.blockingReportingUsers.howToBlock.title')}
            </h2>
            <p className="text-white/80 mb-4">
              {t('helpCenter.articles.blockingReportingUsers.howToBlock.description')}
            </p>
            
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  1
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-white">
                    {t('helpCenter.articles.blockingReportingUsers.howToBlock.step1.title')}
                  </h3>
                  <p className="text-white/80">
                    {t('helpCenter.articles.blockingReportingUsers.howToBlock.step1.description')}
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  2
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-white">
                    {t('helpCenter.articles.blockingReportingUsers.howToBlock.step2.title')}
                  </h3>
                  <p className="text-white/80">
                    {t('helpCenter.articles.blockingReportingUsers.howToBlock.step2.description')}
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  3
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-white">
                    {t('helpCenter.articles.blockingReportingUsers.howToBlock.step3.title')}
                  </h3>
                  <p className="text-white/80">
                    {t('helpCenter.articles.blockingReportingUsers.howToBlock.step3.description')}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* How to Report Users */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">
              {t('helpCenter.articles.blockingReportingUsers.howToReport.title')}
            </h2>
            <p className="text-white/80 mb-4">
              {t('helpCenter.articles.blockingReportingUsers.howToReport.description')}
            </p>
            
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  1
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-white">
                    {t('helpCenter.articles.blockingReportingUsers.howToReport.step1.title')}
                  </h3>
                  <p className="text-white/80">
                    {t('helpCenter.articles.blockingReportingUsers.howToReport.step1.description')}
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  2
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-white">
                    {t('helpCenter.articles.blockingReportingUsers.howToReport.step2.title')}
                  </h3>
                  <p className="text-white/80">
                    {t('helpCenter.articles.blockingReportingUsers.howToReport.step2.description')}
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  3
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-white">
                    {t('helpCenter.articles.blockingReportingUsers.howToReport.step3.title')}
                  </h3>
                  <p className="text-white/80">
                    {t('helpCenter.articles.blockingReportingUsers.howToReport.step3.description')}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* What Happens After Blocking */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">
              {t('helpCenter.articles.blockingReportingUsers.whatHappens.title')}
            </h2>
            <p className="text-white/80 mb-4">
              {t('helpCenter.articles.blockingReportingUsers.whatHappens.description')}
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-500/20 border border-green-400/30 rounded-lg p-4">
                <h3 className="font-semibold text-green-200 mb-2">
                  {t('helpCenter.articles.blockingReportingUsers.whatHappens.blocked.title')}
                </h3>
                <p className="text-green-100 mb-2">
                  {t('helpCenter.articles.blockingReportingUsers.whatHappens.blocked.description')}
                </p>
                <ul className="text-green-100 space-y-1 text-sm">
                  <li>• {t('helpCenter.articles.blockingReportingUsers.whatHappens.blocked.tip1')}</li>
                  <li>• {t('helpCenter.articles.blockingReportingUsers.whatHappens.blocked.tip2')}</li>
                </ul>
              </div>
              
              <div className="bg-blue-500/20 border border-blue-400/30 rounded-lg p-4">
                <h3 className="font-semibold text-blue-200 mb-2">
                  {t('helpCenter.articles.blockingReportingUsers.whatHappens.reported.title')}
                </h3>
                <p className="text-blue-100 mb-2">
                  {t('helpCenter.articles.blockingReportingUsers.whatHappens.reported.description')}
                </p>
                <ul className="text-blue-100 space-y-1 text-sm">
                  <li>• {t('helpCenter.articles.blockingReportingUsers.whatHappens.reported.tip1')}</li>
                  <li>• {t('helpCenter.articles.blockingReportingUsers.whatHappens.reported.tip2')}</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Important Notes */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">
              {t('helpCenter.articles.blockingReportingUsers.important.title')}
            </h2>
            <p className="text-white/80 mb-4">
              {t('helpCenter.articles.blockingReportingUsers.important.description')}
            </p>
            
            <div className="space-y-4">
              <div className="bg-yellow-500/20 border border-yellow-400/30 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-yellow-200 mb-2">
                      {t('helpCenter.articles.blockingReportingUsers.important.note1.title')}
                    </h3>
                    <p className="text-yellow-100">
                      {t('helpCenter.articles.blockingReportingUsers.important.note1.content')}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-500/20 border border-blue-400/30 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-blue-200 mb-2">
                      {t('helpCenter.articles.blockingReportingUsers.important.note2.title')}
                    </h3>
                    <p className="text-blue-100">
                      {t('helpCenter.articles.blockingReportingUsers.important.note2.content')}
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
              {t('helpCenter.articles.blockingReportingUsers.related.title')}
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/help-center/privacy-security/profile-visibility">
                <div className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
                  <h3 className="font-semibold mb-2 text-white">
                    {t('helpCenter.articles.blockingReportingUsers.related.profileVisibility')}
                  </h3>
                  <p className="text-white/60 text-sm">
                    {t('helpCenter.articles.blockingReportingUsers.related.profileVisibilityDesc')}
                  </p>
                </div>
              </Link>
              <Link href="/help-center/privacy-security/data-protection">
                <div className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
                  <h3 className="font-semibold mb-2 text-white">
                    {t('helpCenter.articles.blockingReportingUsers.related.dataProtection')}
                  </h3>
                  <p className="text-white/60 text-sm">
                    {t('helpCenter.articles.blockingReportingUsers.related.dataProtectionDesc')}
                  </p>
                </div>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link href="/help-center/privacy-security/profile-visibility">
            <Button variant="outline" className="text-white border-white/20 hover:bg-white/10">
              ← {t('helpCenter.articles.blockingReportingUsers.previousArticle')}
            </Button>
          </Link>
          <Link href="/help-center/privacy-security/data-protection">
            <Button className="bg-white text-purple-600 hover:bg-white/90">
              {t('helpCenter.articles.blockingReportingUsers.nextArticle')} →
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

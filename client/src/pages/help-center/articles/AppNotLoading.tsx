import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, RefreshCw, AlertCircle, CheckCircle, Wifi, Monitor, Smartphone, Settings } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "wouter";

export default function AppNotLoading(props: any) {
  const { t } = useLanguage();

  const commonCauses = [
    {
      title: t('helpCenter.articles.appNotLoading.causes.network.title'),
      description: t('helpCenter.articles.appNotLoading.causes.network.description'),
      icon: Wifi,
      solutions: [
        t('helpCenter.articles.appNotLoading.causes.network.solution1'),
        t('helpCenter.articles.appNotLoading.causes.network.solution2'),
        t('helpCenter.articles.appNotLoading.causes.network.solution3')
      ]
    },
    {
      title: t('helpCenter.articles.appNotLoading.causes.browser.title'),
      description: t('helpCenter.articles.appNotLoading.causes.browser.description'),
      icon: Monitor,
      solutions: [
        t('helpCenter.articles.appNotLoading.causes.browser.solution1'),
        t('helpCenter.articles.appNotLoading.causes.browser.solution2'),
        t('helpCenter.articles.appNotLoading.causes.browser.solution3')
      ]
    },
    {
      title: t('helpCenter.articles.appNotLoading.causes.mobile.title'),
      description: t('helpCenter.articles.appNotLoading.causes.mobile.description'),
      icon: Smartphone,
      solutions: [
        t('helpCenter.articles.appNotLoading.causes.mobile.solution1'),
        t('helpCenter.articles.appNotLoading.causes.mobile.solution2'),
        t('helpCenter.articles.appNotLoading.causes.mobile.solution3')
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#A690F2] to-[#2C1761] text-white">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            <Link href="/help-center/troubleshooting">
              <Button
                variant="ghost"
                className="text-white hover:bg-white/10"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                {t('helpCenter.backToCategory')}
              </Button>
            </Link>
            <h1 className="text-lg sm:text-xl font-bold text-white">{t('helpCenter.articles.appNotLoading.title')}</h1>
            <div className="w-20" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Article Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
            {t('helpCenter.articles.appNotLoading.title')}
          </h1>
          <p className="text-xl text-white/80 mb-6">
            {t('helpCenter.articles.appNotLoading.subtitle')}
          </p>
          <div className="flex items-center gap-4 text-sm text-white/60">
            <span>{t('helpCenter.articles.appNotLoading.readTime')}</span>
            <span>•</span>
            <span>{t('helpCenter.articles.appNotLoading.lastUpdated')}</span>
          </div>
        </div>

        {/* Introduction */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">
              {t('helpCenter.articles.appNotLoading.introduction.title')}
            </h2>
            <p className="text-white/80 mb-4">
              {t('helpCenter.articles.appNotLoading.introduction.content')}
            </p>
            <div className="bg-blue-500/20 border border-blue-400/30 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <RefreshCw className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-blue-200 mb-2">
                    {t('helpCenter.articles.appNotLoading.introduction.tip')}
                  </h3>
                  <p className="text-blue-100">
                    {t('helpCenter.articles.appNotLoading.introduction.tipContent')}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Common Causes */}
        <div className="space-y-8 mb-8">
          {commonCauses.map((cause, index) => (
            <Card key={index} className="bg-white/10 border-white/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                      <cause.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 text-white">{cause.title}</h3>
                    <p className="text-white/80 mb-4">{cause.description}</p>
                    <h4 className="font-semibold text-white mb-3">
                      {t('helpCenter.articles.appNotLoading.solutions.title')}
                    </h4>
                    <ul className="space-y-2">
                      {cause.solutions.map((solution, solutionIndex) => (
                        <li key={solutionIndex} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-white/80">{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Fixes */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">
              {t('helpCenter.articles.appNotLoading.quickFixes.title')}
            </h2>
            <p className="text-white/80 mb-4">
              {t('helpCenter.articles.appNotLoading.quickFixes.description')}
            </p>
            
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  1
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-white">
                    {t('helpCenter.articles.appNotLoading.quickFixes.step1.title')}
                  </h3>
                  <p className="text-white/80">
                    {t('helpCenter.articles.appNotLoading.quickFixes.step1.description')}
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  2
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-white">
                    {t('helpCenter.articles.appNotLoading.quickFixes.step2.title')}
                  </h3>
                  <p className="text-white/80">
                    {t('helpCenter.articles.appNotLoading.quickFixes.step2.description')}
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  3
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-white">
                    {t('helpCenter.articles.appNotLoading.quickFixes.step3.title')}
                  </h3>
                  <p className="text-white/80">
                    {t('helpCenter.articles.appNotLoading.quickFixes.step3.description')}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Browser Compatibility */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">
              {t('helpCenter.articles.appNotLoading.browserCompatibility.title')}
            </h2>
            <p className="text-white/80 mb-4">
              {t('helpCenter.articles.appNotLoading.browserCompatibility.description')}
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-500/20 border border-green-400/30 rounded-lg p-4">
                <h3 className="font-semibold text-green-200 mb-2">
                  {t('helpCenter.articles.appNotLoading.browserCompatibility.supported.title')}
                </h3>
                <p className="text-green-100 mb-2">
                  {t('helpCenter.articles.appNotLoading.browserCompatibility.supported.description')}
                </p>
                <ul className="text-green-100 space-y-1 text-sm">
                  <li>• {t('helpCenter.articles.appNotLoading.browserCompatibility.supported.browser1')}</li>
                  <li>• {t('helpCenter.articles.appNotLoading.browserCompatibility.supported.browser2')}</li>
                  <li>• {t('helpCenter.articles.appNotLoading.browserCompatibility.supported.browser3')}</li>
                </ul>
              </div>
              
              <div className="bg-yellow-500/20 border border-yellow-400/30 rounded-lg p-4">
                <h3 className="font-semibold text-yellow-200 mb-2">
                  {t('helpCenter.articles.appNotLoading.browserCompatibility.requirements.title')}
                </h3>
                <p className="text-yellow-100 mb-2">
                  {t('helpCenter.articles.appNotLoading.browserCompatibility.requirements.description')}
                </p>
                <ul className="text-yellow-100 space-y-1 text-sm">
                  <li>• {t('helpCenter.articles.appNotLoading.browserCompatibility.requirements.requirement1')}</li>
                  <li>• {t('helpCenter.articles.appNotLoading.browserCompatibility.requirements.requirement2')}</li>
                  <li>• {t('helpCenter.articles.appNotLoading.browserCompatibility.requirements.requirement3')}</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Performance Optimization */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">
              {t('helpCenter.articles.appNotLoading.performance.title')}
            </h2>
            <p className="text-white/80 mb-4">
              {t('helpCenter.articles.appNotLoading.performance.description')}
            </p>
            
            <div className="space-y-4">
              <div className="bg-blue-500/20 border border-blue-400/30 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <Settings className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-blue-200 mb-2">
                      {t('helpCenter.articles.appNotLoading.performance.cache.title')}
                    </h3>
                    <p className="text-blue-100">
                      {t('helpCenter.articles.appNotLoading.performance.cache.content')}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-500/20 border border-green-400/30 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <RefreshCw className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-green-200 mb-2">
                      {t('helpCenter.articles.appNotLoading.performance.extensions.title')}
                    </h3>
                    <p className="text-green-100">
                      {t('helpCenter.articles.appNotLoading.performance.extensions.content')}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-purple-500/20 border border-purple-400/30 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <Monitor className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-purple-200 mb-2">
                      {t('helpCenter.articles.appNotLoading.performance.hardware.title')}
                    </h3>
                    <p className="text-purple-100">
                      {t('helpCenter.articles.appNotLoading.performance.hardware.content')}
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
              {t('helpCenter.articles.appNotLoading.related.title')}
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/help-center/troubleshooting/performance-problems">
                <div className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
                  <h3 className="font-semibold mb-2 text-white">
                    {t('helpCenter.articles.appNotLoading.related.performanceProblems')}
                  </h3>
                  <p className="text-white/60 text-sm">
                    {t('helpCenter.articles.appNotLoading.related.performanceProblemsDesc')}
                  </p>
                </div>
              </Link>
              <Link href="/help-center/troubleshooting/browser-compatibility">
                <div className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
                  <h3 className="font-semibold mb-2 text-white">
                    {t('helpCenter.articles.appNotLoading.related.browserCompatibility')}
                  </h3>
                  <p className="text-white/60 text-sm">
                    {t('helpCenter.articles.appNotLoading.related.browserCompatibilityDesc')}
                  </p>
                </div>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link href="/help-center/troubleshooting/login-issues">
            <Button variant="outline" className="text-white border-white/20 hover:bg-white/10">
              ← {t('helpCenter.articles.appNotLoading.previousArticle')}
            </Button>
          </Link>
          <Link href="/help-center/troubleshooting/upload-problems">
            <Button className="bg-white text-purple-600 hover:bg-white/90">
              {t('helpCenter.articles.appNotLoading.nextArticle')} →
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

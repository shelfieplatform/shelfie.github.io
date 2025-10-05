import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Globe, AlertCircle, CheckCircle, Monitor, Smartphone, Wifi, Settings } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "wouter";

export default function BrowserCompatibility(props: any) {
  const { t } = useLanguage();

  const supportedBrowsers = [
    {
      name: "Chrome",
      version: "90+",
      icon: Globe,
      status: "Fully Supported",
      color: "green"
    },
    {
      name: "Firefox",
      version: "88+",
      icon: Globe,
      status: "Fully Supported",
      color: "green"
    },
    {
      name: "Safari",
      version: "14+",
      icon: Globe,
      status: "Fully Supported",
      color: "green"
    },
    {
      name: "Edge",
      version: "90+",
      icon: Globe,
      status: "Fully Supported",
      color: "green"
    }
  ];

  const commonIssues = [
    {
      title: t('helpCenter.articles.browserCompatibility.issues.oldBrowser.title'),
      description: t('helpCenter.articles.browserCompatibility.issues.oldBrowser.description'),
      icon: AlertCircle,
      solutions: [
        t('helpCenter.articles.browserCompatibility.issues.oldBrowser.solution1'),
        t('helpCenter.articles.browserCompatibility.issues.oldBrowser.solution2'),
        t('helpCenter.articles.browserCompatibility.issues.oldBrowser.solution3')
      ]
    },
    {
      title: t('helpCenter.articles.browserCompatibility.issues.featuresNotWorking.title'),
      description: t('helpCenter.articles.browserCompatibility.issues.featuresNotWorking.description'),
      icon: Settings,
      solutions: [
        t('helpCenter.articles.browserCompatibility.issues.featuresNotWorking.solution1'),
        t('helpCenter.articles.browserCompatibility.issues.featuresNotWorking.solution2'),
        t('helpCenter.articles.browserCompatibility.issues.featuresNotWorking.solution3')
      ]
    },
    {
      title: t('helpCenter.articles.browserCompatibility.issues.displayIssues.title'),
      description: t('helpCenter.articles.browserCompatibility.issues.displayIssues.description'),
      icon: Monitor,
      solutions: [
        t('helpCenter.articles.browserCompatibility.issues.displayIssues.solution1'),
        t('helpCenter.articles.browserCompatibility.issues.displayIssues.solution2'),
        t('helpCenter.articles.browserCompatibility.issues.displayIssues.solution3')
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
            <h1 className="text-lg sm:text-xl font-bold text-white">{t('helpCenter.articles.browserCompatibility.title')}</h1>
            <div className="w-20" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Article Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
            {t('helpCenter.articles.browserCompatibility.title')}
          </h1>
          <p className="text-xl text-white/80 mb-6">
            {t('helpCenter.articles.browserCompatibility.subtitle')}
          </p>
          <div className="flex items-center gap-4 text-sm text-white/60">
            <span>{t('helpCenter.articles.browserCompatibility.readTime')}</span>
            <span>•</span>
            <span>{t('helpCenter.articles.browserCompatibility.lastUpdated')}</span>
          </div>
        </div>

        {/* Introduction */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">
              {t('helpCenter.articles.browserCompatibility.introduction.title')}
            </h2>
            <p className="text-white/80 mb-4">
              {t('helpCenter.articles.browserCompatibility.introduction.content')}
            </p>
            <div className="bg-purple-500/20 border border-purple-400/30 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <Globe className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-purple-200 mb-2">
                    {t('helpCenter.articles.browserCompatibility.introduction.tip')}
                  </h3>
                  <p className="text-purple-100">
                    {t('helpCenter.articles.browserCompatibility.introduction.tipContent')}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Supported Browsers */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">
              {t('helpCenter.articles.browserCompatibility.supportedBrowsers.title')}
            </h2>
            <p className="text-white/80 mb-6">
              {t('helpCenter.articles.browserCompatibility.supportedBrowsers.description')}
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              {supportedBrowsers.map((browser, index) => (
                <div key={index} className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      <browser.icon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">{browser.name}</h3>
                      <p className="text-white/60 text-sm">Version {browser.version}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${
                      browser.color === 'green' ? 'bg-green-400' : 'bg-yellow-400'
                    }`}></div>
                    <span className="text-white/80 text-sm">{browser.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Common Issues */}
        <div className="space-y-8 mb-8">
          {commonIssues.map((issue, index) => (
            <Card key={index} className="bg-white/10 border-white/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center">
                      <issue.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 text-white">{issue.title}</h3>
                    <p className="text-white/80 mb-4">{issue.description}</p>
                    <h4 className="font-semibold text-white mb-3">
                      {t('helpCenter.articles.browserCompatibility.solutions.title')}
                    </h4>
                    <ul className="space-y-2">
                      {issue.solutions.map((solution, solutionIndex) => (
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

        {/* Browser Requirements */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">
              {t('helpCenter.articles.browserCompatibility.browserRequirements.title')}
            </h2>
            <p className="text-white/80 mb-4">
              {t('helpCenter.articles.browserCompatibility.browserRequirements.description')}
            </p>
            
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  1
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-white">
                    {t('helpCenter.articles.browserCompatibility.browserRequirements.step1.title')}
                  </h3>
                  <p className="text-white/80">
                    {t('helpCenter.articles.browserCompatibility.browserRequirements.step1.description')}
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  2
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-white">
                    {t('helpCenter.articles.browserCompatibility.browserRequirements.step2.title')}
                  </h3>
                  <p className="text-white/80">
                    {t('helpCenter.articles.browserCompatibility.browserRequirements.step2.description')}
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  3
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-white">
                    {t('helpCenter.articles.browserCompatibility.browserRequirements.step3.title')}
                  </h3>
                  <p className="text-white/80">
                    {t('helpCenter.articles.browserCompatibility.browserRequirements.step3.description')}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Mobile Browsers */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">
              {t('helpCenter.articles.browserCompatibility.mobileBrowsers.title')}
            </h2>
            <p className="text-white/80 mb-4">
              {t('helpCenter.articles.browserCompatibility.mobileBrowsers.description')}
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-500/20 border border-green-400/30 rounded-lg p-4">
                <h3 className="font-semibold text-green-200 mb-2">
                  {t('helpCenter.articles.browserCompatibility.mobileBrowsers.ios.title')}
                </h3>
                <p className="text-green-100 mb-2">
                  {t('helpCenter.articles.browserCompatibility.mobileBrowsers.ios.description')}
                </p>
                <ul className="text-green-100 space-y-1 text-sm">
                  <li>• {t('helpCenter.articles.browserCompatibility.mobileBrowsers.ios.browser1')}</li>
                  <li>• {t('helpCenter.articles.browserCompatibility.mobileBrowsers.ios.browser2')}</li>
                  <li>• {t('helpCenter.articles.browserCompatibility.mobileBrowsers.ios.browser3')}</li>
                </ul>
              </div>
              
              <div className="bg-purple-500/20 border border-purple-400/30 rounded-lg p-4">
                <h3 className="font-semibold text-purple-200 mb-2">
                  {t('helpCenter.articles.browserCompatibility.mobileBrowsers.android.title')}
                </h3>
                <p className="text-purple-100 mb-2">
                  {t('helpCenter.articles.browserCompatibility.mobileBrowsers.android.description')}
                </p>
                <ul className="text-purple-100 space-y-1 text-sm">
                  <li>• {t('helpCenter.articles.browserCompatibility.mobileBrowsers.android.browser1')}</li>
                  <li>• {t('helpCenter.articles.browserCompatibility.mobileBrowsers.android.browser2')}</li>
                  <li>• {t('helpCenter.articles.browserCompatibility.mobileBrowsers.android.browser3')}</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Troubleshooting */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">
              {t('helpCenter.articles.browserCompatibility.troubleshooting.title')}
            </h2>
            <p className="text-white/80 mb-4">
              {t('helpCenter.articles.browserCompatibility.troubleshooting.description')}
            </p>
            
            <div className="space-y-4">
              <div className="bg-yellow-500/20 border border-yellow-400/30 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <Settings className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-yellow-200 mb-2">
                      {t('helpCenter.articles.browserCompatibility.troubleshooting.clearCache.title')}
                    </h3>
                    <p className="text-yellow-100">
                      {t('helpCenter.articles.browserCompatibility.troubleshooting.clearCache.content')}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-purple-500/20 border border-purple-400/30 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <Monitor className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-purple-200 mb-2">
                      {t('helpCenter.articles.browserCompatibility.troubleshooting.disableExtensions.title')}
                    </h3>
                    <p className="text-purple-100">
                      {t('helpCenter.articles.browserCompatibility.troubleshooting.disableExtensions.content')}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-500/20 border border-green-400/30 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <Wifi className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-green-200 mb-2">
                      {t('helpCenter.articles.browserCompatibility.troubleshooting.updateBrowser.title')}
                    </h3>
                    <p className="text-green-100">
                      {t('helpCenter.articles.browserCompatibility.troubleshooting.updateBrowser.content')}
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
              {t('helpCenter.articles.browserCompatibility.related.title')}
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/help-center/troubleshooting/performance-problems">
                <div className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
                  <h3 className="font-semibold mb-2 text-white">
                    {t('helpCenter.articles.browserCompatibility.related.performanceProblems')}
                  </h3>
                  <p className="text-white/60 text-sm">
                    {t('helpCenter.articles.browserCompatibility.related.performanceProblemsDesc')}
                  </p>
                </div>
              </Link>
              <Link href="/help-center/troubleshooting/app-not-loading">
                <div className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
                  <h3 className="font-semibold mb-2 text-white">
                    {t('helpCenter.articles.browserCompatibility.related.appNotLoading')}
                  </h3>
                  <p className="text-white/60 text-sm">
                    {t('helpCenter.articles.browserCompatibility.related.appNotLoadingDesc')}
                  </p>
                </div>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link href="/help-center/troubleshooting/performance-problems">
            <Button variant="outline" className="text-white border-white/20 hover:bg-white/10">
              ← {t('helpCenter.articles.browserCompatibility.previousArticle')}
            </Button>
          </Link>
          <Link href="/help-center/troubleshooting/mobile-app-issues">
            <Button className="bg-white text-purple-600 hover:bg-white/90">
              {t('helpCenter.articles.browserCompatibility.nextArticle')} →
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

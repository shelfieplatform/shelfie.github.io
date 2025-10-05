import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Smartphone, AlertCircle, CheckCircle, Download, Wifi, Battery, Settings } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "wouter";

export default function MobileAppIssues(props: any) {
  const { t } = useLanguage();

  const commonIssues = [
    {
      title: t('helpCenter.articles.mobileAppIssues.issues.appCrashes.title'),
      description: t('helpCenter.articles.mobileAppIssues.issues.appCrashes.description'),
      icon: AlertCircle,
      solutions: [
        t('helpCenter.articles.mobileAppIssues.issues.appCrashes.solution1'),
        t('helpCenter.articles.mobileAppIssues.issues.appCrashes.solution2'),
        t('helpCenter.articles.mobileAppIssues.issues.appCrashes.solution3')
      ]
    },
    {
      title: t('helpCenter.articles.mobileAppIssues.issues.slowPerformance.title'),
      description: t('helpCenter.articles.mobileAppIssues.issues.slowPerformance.description'),
      icon: Settings,
      solutions: [
        t('helpCenter.articles.mobileAppIssues.issues.slowPerformance.solution1'),
        t('helpCenter.articles.mobileAppIssues.issues.slowPerformance.solution2'),
        t('helpCenter.articles.mobileAppIssues.issues.slowPerformance.solution3')
      ]
    },
    {
      title: t('helpCenter.articles.mobileAppIssues.issues.syncIssues.title'),
      description: t('helpCenter.articles.mobileAppIssues.issues.syncIssues.description'),
      icon: Wifi,
      solutions: [
        t('helpCenter.articles.mobileAppIssues.issues.syncIssues.solution1'),
        t('helpCenter.articles.mobileAppIssues.issues.syncIssues.solution2'),
        t('helpCenter.articles.mobileAppIssues.issues.syncIssues.solution3')
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
            <h1 className="text-lg sm:text-xl font-bold text-white">{t('helpCenter.articles.mobileAppIssues.title')}</h1>
            <div className="w-20" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Article Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
            {t('helpCenter.articles.mobileAppIssues.title')}
          </h1>
          <p className="text-xl text-white/80 mb-6">
            {t('helpCenter.articles.mobileAppIssues.subtitle')}
          </p>
          <div className="flex items-center gap-4 text-sm text-white/60">
            <span>{t('helpCenter.articles.mobileAppIssues.readTime')}</span>
            <span>•</span>
            <span>{t('helpCenter.articles.mobileAppIssues.lastUpdated')}</span>
          </div>
        </div>

        {/* Introduction */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">
              {t('helpCenter.articles.mobileAppIssues.introduction.title')}
            </h2>
            <p className="text-white/80 mb-4">
              {t('helpCenter.articles.mobileAppIssues.introduction.content')}
            </p>
            <div className="bg-purple-500/20 border border-purple-400/30 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <Smartphone className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-purple-200 mb-2">
                    {t('helpCenter.articles.mobileAppIssues.introduction.tip')}
                  </h3>
                  <p className="text-purple-100">
                    {t('helpCenter.articles.mobileAppIssues.introduction.tipContent')}
                  </p>
                </div>
              </div>
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
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                      <issue.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 text-white">{issue.title}</h3>
                    <p className="text-white/80 mb-4">{issue.description}</p>
                    <h4 className="font-semibold text-white mb-3">
                      {t('helpCenter.articles.mobileAppIssues.solutions.title')}
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

        {/* App Installation */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">
              {t('helpCenter.articles.mobileAppIssues.appInstallation.title')}
            </h2>
            <p className="text-white/80 mb-4">
              {t('helpCenter.articles.mobileAppIssues.appInstallation.description')}
            </p>
            
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  1
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-white">
                    {t('helpCenter.articles.mobileAppIssues.appInstallation.step1.title')}
                  </h3>
                  <p className="text-white/80">
                    {t('helpCenter.articles.mobileAppIssues.appInstallation.step1.description')}
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  2
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-white">
                    {t('helpCenter.articles.mobileAppIssues.appInstallation.step2.title')}
                  </h3>
                  <p className="text-white/80">
                    {t('helpCenter.articles.mobileAppIssues.appInstallation.step2.description')}
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  3
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-white">
                    {t('helpCenter.articles.mobileAppIssues.appInstallation.step3.title')}
                  </h3>
                  <p className="text-white/80">
                    {t('helpCenter.articles.mobileAppIssues.appInstallation.step3.description')}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Device Requirements */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">
              {t('helpCenter.articles.mobileAppIssues.deviceRequirements.title')}
            </h2>
            <p className="text-white/80 mb-4">
              {t('helpCenter.articles.mobileAppIssues.deviceRequirements.description')}
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-500/20 border border-green-400/30 rounded-lg p-4">
                <h3 className="font-semibold text-green-200 mb-2">
                  {t('helpCenter.articles.mobileAppIssues.deviceRequirements.ios.title')}
                </h3>
                <p className="text-green-100 mb-2">
                  {t('helpCenter.articles.mobileAppIssues.deviceRequirements.ios.description')}
                </p>
                <ul className="text-green-100 space-y-1 text-sm">
                  <li>• {t('helpCenter.articles.mobileAppIssues.deviceRequirements.ios.requirement1')}</li>
                  <li>• {t('helpCenter.articles.mobileAppIssues.deviceRequirements.ios.requirement2')}</li>
                  <li>• {t('helpCenter.articles.mobileAppIssues.deviceRequirements.ios.requirement3')}</li>
                </ul>
              </div>
              
              <div className="bg-purple-500/20 border border-purple-400/30 rounded-lg p-4">
                <h3 className="font-semibold text-purple-200 mb-2">
                  {t('helpCenter.articles.mobileAppIssues.deviceRequirements.android.title')}
                </h3>
                <p className="text-purple-100 mb-2">
                  {t('helpCenter.articles.mobileAppIssues.deviceRequirements.android.description')}
                </p>
                <ul className="text-purple-100 space-y-1 text-sm">
                  <li>• {t('helpCenter.articles.mobileAppIssues.deviceRequirements.android.requirement1')}</li>
                  <li>• {t('helpCenter.articles.mobileAppIssues.deviceRequirements.android.requirement2')}</li>
                  <li>• {t('helpCenter.articles.mobileAppIssues.deviceRequirements.android.requirement3')}</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Performance Optimization */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">
              {t('helpCenter.articles.mobileAppIssues.performanceOptimization.title')}
            </h2>
            <p className="text-white/80 mb-4">
              {t('helpCenter.articles.mobileAppIssues.performanceOptimization.description')}
            </p>
            
            <div className="space-y-4">
              <div className="bg-yellow-500/20 border border-yellow-400/30 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <Battery className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-yellow-200 mb-2">
                      {t('helpCenter.articles.mobileAppIssues.performanceOptimization.battery.title')}
                    </h3>
                    <p className="text-yellow-100">
                      {t('helpCenter.articles.mobileAppIssues.performanceOptimization.battery.content')}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-purple-500/20 border border-purple-400/30 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <Settings className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-purple-200 mb-2">
                      {t('helpCenter.articles.mobileAppIssues.performanceOptimization.storage.title')}
                    </h3>
                    <p className="text-purple-100">
                      {t('helpCenter.articles.mobileAppIssues.performanceOptimization.storage.content')}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-500/20 border border-green-400/30 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <Wifi className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-green-200 mb-2">
                      {t('helpCenter.articles.mobileAppIssues.performanceOptimization.network.title')}
                    </h3>
                    <p className="text-green-100">
                      {t('helpCenter.articles.mobileAppIssues.performanceOptimization.network.content')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Update Issues */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">
              {t('helpCenter.articles.mobileAppIssues.updateIssues.title')}
            </h2>
            <p className="text-white/80 mb-4">
              {t('helpCenter.articles.mobileAppIssues.updateIssues.description')}
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-amber-500/20 border border-amber-400/30 rounded-lg p-4">
                <h3 className="font-semibold text-amber-200 mb-2">
                  {t('helpCenter.articles.mobileAppIssues.updateIssues.updateFailed.title')}
                </h3>
                <p className="text-amber-100 mb-2">
                  {t('helpCenter.articles.mobileAppIssues.updateIssues.updateFailed.description')}
                </p>
                <ul className="text-amber-100 space-y-1 text-sm">
                  <li>• {t('helpCenter.articles.mobileAppIssues.updateIssues.updateFailed.solution1')}</li>
                  <li>• {t('helpCenter.articles.mobileAppIssues.updateIssues.updateFailed.solution2')}</li>
                  <li>• {t('helpCenter.articles.mobileAppIssues.updateIssues.updateFailed.solution3')}</li>
                </ul>
              </div>
              
              <div className="bg-purple-500/20 border border-purple-400/30 rounded-lg p-4">
                <h3 className="font-semibold text-purple-200 mb-2">
                  {t('helpCenter.articles.mobileAppIssues.updateIssues.autoUpdate.title')}
                </h3>
                <p className="text-purple-100 mb-2">
                  {t('helpCenter.articles.mobileAppIssues.updateIssues.autoUpdate.description')}
                </p>
                <ul className="text-purple-100 space-y-1 text-sm">
                  <li>• {t('helpCenter.articles.mobileAppIssues.updateIssues.autoUpdate.step1')}</li>
                  <li>• {t('helpCenter.articles.mobileAppIssues.updateIssues.autoUpdate.step2')}</li>
                  <li>• {t('helpCenter.articles.mobileAppIssues.updateIssues.autoUpdate.step3')}</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Related Articles */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">
              {t('helpCenter.articles.mobileAppIssues.related.title')}
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/help-center/troubleshooting/performance-problems">
                <div className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
                  <h3 className="font-semibold mb-2 text-white">
                    {t('helpCenter.articles.mobileAppIssues.related.performanceProblems')}
                  </h3>
                  <p className="text-white/60 text-sm">
                    {t('helpCenter.articles.mobileAppIssues.related.performanceProblemsDesc')}
                  </p>
                </div>
              </Link>
              <Link href="/help-center/getting-started/mobile-app">
                <div className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
                  <h3 className="font-semibold mb-2 text-white">
                    {t('helpCenter.articles.mobileAppIssues.related.mobileApp')}
                  </h3>
                  <p className="text-white/60 text-sm">
                    {t('helpCenter.articles.mobileAppIssues.related.mobileAppDesc')}
                  </p>
                </div>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link href="/help-center/troubleshooting/browser-compatibility">
            <Button variant="outline" className="text-white border-white/20 hover:bg-white/10">
              ← {t('helpCenter.articles.mobileAppIssues.previousArticle')}
            </Button>
          </Link>
          <Link href="/help-center/troubleshooting/account-access-problems">
            <Button className="bg-white text-purple-600 hover:bg-white/90">
              {t('helpCenter.articles.mobileAppIssues.nextArticle')} →
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

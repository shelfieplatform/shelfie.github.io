import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, AlertTriangle, AlertCircle, CheckCircle, XCircle, Info, Wifi, Database } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "wouter";

export default function ErrorMessages(props: any) {
  const { t } = useLanguage();

  const commonErrors = [
    {
      title: t('helpCenter.articles.errorMessages.errors.networkError.title'),
      description: t('helpCenter.articles.errorMessages.errors.networkError.description'),
      icon: Wifi,
      solutions: [
        t('helpCenter.articles.errorMessages.errors.networkError.solution1'),
        t('helpCenter.articles.errorMessages.errors.networkError.solution2'),
        t('helpCenter.articles.errorMessages.errors.networkError.solution3')
      ]
    },
    {
      title: t('helpCenter.articles.errorMessages.errors.serverError.title'),
      description: t('helpCenter.articles.errorMessages.errors.serverError.description'),
      icon: Database,
      solutions: [
        t('helpCenter.articles.errorMessages.errors.serverError.solution1'),
        t('helpCenter.articles.errorMessages.errors.serverError.solution2'),
        t('helpCenter.articles.errorMessages.errors.serverError.solution3')
      ]
    },
    {
      title: t('helpCenter.articles.errorMessages.errors.authenticationError.title'),
      description: t('helpCenter.articles.errorMessages.errors.authenticationError.description'),
      icon: XCircle,
      solutions: [
        t('helpCenter.articles.errorMessages.errors.authenticationError.solution1'),
        t('helpCenter.articles.errorMessages.errors.authenticationError.solution2'),
        t('helpCenter.articles.errorMessages.errors.authenticationError.solution3')
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
            <h1 className="text-lg sm:text-xl font-bold text-white">{t('helpCenter.articles.errorMessages.title')}</h1>
            <div className="w-20" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Article Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
            {t('helpCenter.articles.errorMessages.title')}
          </h1>
          <p className="text-xl text-white/80 mb-6">
            {t('helpCenter.articles.errorMessages.subtitle')}
          </p>
          <div className="flex items-center gap-4 text-sm text-white/60">
            <span>{t('helpCenter.articles.errorMessages.readTime')}</span>
            <span>•</span>
            <span>{t('helpCenter.articles.errorMessages.lastUpdated')}</span>
          </div>
        </div>

        {/* Introduction */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">
              {t('helpCenter.articles.errorMessages.introduction.title')}
            </h2>
            <p className="text-white/80 mb-4">
              {t('helpCenter.articles.errorMessages.introduction.content')}
            </p>
            <div className="bg-purple-500/20 border border-purple-400/30 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-purple-200 mb-2">
                    {t('helpCenter.articles.errorMessages.introduction.tip')}
                  </h3>
                  <p className="text-purple-100">
                    {t('helpCenter.articles.errorMessages.introduction.tipContent')}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Common Errors */}
        <div className="space-y-8 mb-8">
          {commonErrors.map((error, index) => (
            <Card key={index} className="bg-white/10 border-white/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center">
                      <error.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 text-white">{error.title}</h3>
                    <p className="text-white/80 mb-4">{error.description}</p>
                    <h4 className="font-semibold text-white mb-3">
                      {t('helpCenter.articles.errorMessages.solutions.title')}
                    </h4>
                    <ul className="space-y-2">
                      {error.solutions.map((solution, solutionIndex) => (
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

        {/* Error Code Reference */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">
              {t('helpCenter.articles.errorMessages.errorCodeReference.title')}
            </h2>
            <p className="text-white/80 mb-4">
              {t('helpCenter.articles.errorMessages.errorCodeReference.description')}
            </p>
            
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  1
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-white">
                    {t('helpCenter.articles.errorMessages.errorCodeReference.step1.title')}
                  </h3>
                  <p className="text-white/80">
                    {t('helpCenter.articles.errorMessages.errorCodeReference.step1.description')}
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  2
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-white">
                    {t('helpCenter.articles.errorMessages.errorCodeReference.step2.title')}
                  </h3>
                  <p className="text-white/80">
                    {t('helpCenter.articles.errorMessages.errorCodeReference.step2.description')}
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  3
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-white">
                    {t('helpCenter.articles.errorMessages.errorCodeReference.step3.title')}
                  </h3>
                  <p className="text-white/80">
                    {t('helpCenter.articles.errorMessages.errorCodeReference.step3.description')}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Error Types */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">
              {t('helpCenter.articles.errorMessages.errorTypes.title')}
            </h2>
            <p className="text-white/80 mb-4">
              {t('helpCenter.articles.errorMessages.errorTypes.description')}
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-amber-500/20 border border-amber-400/30 rounded-lg p-4">
                <h3 className="font-semibold text-amber-200 mb-2">
                  {t('helpCenter.articles.errorMessages.errorTypes.clientErrors.title')}
                </h3>
                <p className="text-amber-100 mb-2">
                  {t('helpCenter.articles.errorMessages.errorTypes.clientErrors.description')}
                </p>
                <ul className="text-amber-100 space-y-1 text-sm">
                  <li>• {t('helpCenter.articles.errorMessages.errorTypes.clientErrors.example1')}</li>
                  <li>• {t('helpCenter.articles.errorMessages.errorTypes.clientErrors.example2')}</li>
                  <li>• {t('helpCenter.articles.errorMessages.errorTypes.clientErrors.example3')}</li>
                </ul>
              </div>
              
              <div className="bg-purple-500/20 border border-purple-400/30 rounded-lg p-4">
                <h3 className="font-semibold text-purple-200 mb-2">
                  {t('helpCenter.articles.errorMessages.errorTypes.serverErrors.title')}
                </h3>
                <p className="text-purple-100 mb-2">
                  {t('helpCenter.articles.errorMessages.errorTypes.serverErrors.description')}
                </p>
                <ul className="text-purple-100 space-y-1 text-sm">
                  <li>• {t('helpCenter.articles.errorMessages.errorTypes.serverErrors.example1')}</li>
                  <li>• {t('helpCenter.articles.errorMessages.errorTypes.serverErrors.example2')}</li>
                  <li>• {t('helpCenter.articles.errorMessages.errorTypes.serverErrors.example3')}</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Troubleshooting Steps */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">
              {t('helpCenter.articles.errorMessages.troubleshootingSteps.title')}
            </h2>
            <p className="text-white/80 mb-4">
              {t('helpCenter.articles.errorMessages.troubleshootingSteps.description')}
            </p>
            
            <div className="space-y-4">
              <div className="bg-yellow-500/20 border border-yellow-400/30 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-yellow-200 mb-2">
                      {t('helpCenter.articles.errorMessages.troubleshootingSteps.identifyError.title')}
                    </h3>
                    <p className="text-yellow-100">
                      {t('helpCenter.articles.errorMessages.troubleshootingSteps.identifyError.content')}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-purple-500/20 border border-purple-400/30 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-purple-200 mb-2">
                      {t('helpCenter.articles.errorMessages.troubleshootingSteps.checkLogs.title')}
                    </h3>
                    <p className="text-purple-100">
                      {t('helpCenter.articles.errorMessages.troubleshootingSteps.checkLogs.content')}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-500/20 border border-green-400/30 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-green-200 mb-2">
                      {t('helpCenter.articles.errorMessages.troubleshootingSteps.contactSupport.title')}
                    </h3>
                    <p className="text-green-100">
                      {t('helpCenter.articles.errorMessages.troubleshootingSteps.contactSupport.content')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Prevention Tips */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">
              {t('helpCenter.articles.errorMessages.preventionTips.title')}
            </h2>
            <p className="text-white/80 mb-4">
              {t('helpCenter.articles.errorMessages.preventionTips.description')}
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-500/20 border border-green-400/30 rounded-lg p-4">
                <h3 className="font-semibold text-green-200 mb-2">
                  {t('helpCenter.articles.errorMessages.preventionTips.regularUpdates.title')}
                </h3>
                <p className="text-green-100 mb-2">
                  {t('helpCenter.articles.errorMessages.preventionTips.regularUpdates.description')}
                </p>
                <ul className="text-green-100 space-y-1 text-sm">
                  <li>• {t('helpCenter.articles.errorMessages.preventionTips.regularUpdates.tip1')}</li>
                  <li>• {t('helpCenter.articles.errorMessages.preventionTips.regularUpdates.tip2')}</li>
                  <li>• {t('helpCenter.articles.errorMessages.preventionTips.regularUpdates.tip3')}</li>
                </ul>
              </div>
              
              <div className="bg-purple-500/20 border border-purple-400/30 rounded-lg p-4">
                <h3 className="font-semibold text-purple-200 mb-2">
                  {t('helpCenter.articles.errorMessages.preventionTips.stableConnection.title')}
                </h3>
                <p className="text-purple-100 mb-2">
                  {t('helpCenter.articles.errorMessages.preventionTips.stableConnection.description')}
                </p>
                <ul className="text-purple-100 space-y-1 text-sm">
                  <li>• {t('helpCenter.articles.errorMessages.preventionTips.stableConnection.tip1')}</li>
                  <li>• {t('helpCenter.articles.errorMessages.preventionTips.stableConnection.tip2')}</li>
                  <li>• {t('helpCenter.articles.errorMessages.preventionTips.stableConnection.tip3')}</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Related Articles */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">
              {t('helpCenter.articles.errorMessages.related.title')}
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/help-center/troubleshooting/contact-technical-support">
                <div className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
                  <h3 className="font-semibold mb-2 text-white">
                    {t('helpCenter.articles.errorMessages.related.contactSupport')}
                  </h3>
                  <p className="text-white/60 text-sm">
                    {t('helpCenter.articles.errorMessages.related.contactSupportDesc')}
                  </p>
                </div>
              </Link>
              <Link href="/help-center/troubleshooting/performance-problems">
                <div className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
                  <h3 className="font-semibold mb-2 text-white">
                    {t('helpCenter.articles.errorMessages.related.performanceProblems')}
                  </h3>
                  <p className="text-white/60 text-sm">
                    {t('helpCenter.articles.errorMessages.related.performanceProblemsDesc')}
                  </p>
                </div>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link href="/help-center/troubleshooting/data-sync-issues">
            <Button variant="outline" className="text-white border-white/20 hover:bg-white/10">
              ← {t('helpCenter.articles.errorMessages.previousArticle')}
            </Button>
          </Link>
          <Link href="/help-center/troubleshooting/contact-technical-support">
            <Button className="bg-white text-purple-600 hover:bg-white/90">
              {t('helpCenter.articles.errorMessages.nextArticle')} →
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

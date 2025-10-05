import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Search, AlertCircle, CheckCircle, RefreshCw, Filter, Database, Wifi } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "wouter";

export default function SearchNotWorking(props: any) {
  const { t } = useLanguage();

  const commonIssues = [
    {
      title: t('helpCenter.articles.searchNotWorking.issues.noResults.title'),
      description: t('helpCenter.articles.searchNotWorking.issues.noResults.description'),
      icon: Search,
      solutions: [
        t('helpCenter.articles.searchNotWorking.issues.noResults.solution1'),
        t('helpCenter.articles.searchNotWorking.issues.noResults.solution2'),
        t('helpCenter.articles.searchNotWorking.issues.noResults.solution3')
      ]
    },
    {
      title: t('helpCenter.articles.searchNotWorking.issues.slowSearch.title'),
      description: t('helpCenter.articles.searchNotWorking.issues.slowSearch.description'),
      icon: RefreshCw,
      solutions: [
        t('helpCenter.articles.searchNotWorking.issues.slowSearch.solution1'),
        t('helpCenter.articles.searchNotWorking.issues.slowSearch.solution2'),
        t('helpCenter.articles.searchNotWorking.issues.slowSearch.solution3')
      ]
    },
    {
      title: t('helpCenter.articles.searchNotWorking.issues.filters.title'),
      description: t('helpCenter.articles.searchNotWorking.issues.filters.description'),
      icon: Filter,
      solutions: [
        t('helpCenter.articles.searchNotWorking.issues.filters.solution1'),
        t('helpCenter.articles.searchNotWorking.issues.filters.solution2'),
        t('helpCenter.articles.searchNotWorking.issues.filters.solution3')
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
            <h1 className="text-lg sm:text-xl font-bold text-white">{t('helpCenter.articles.searchNotWorking.title')}</h1>
            <div className="w-20" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Article Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
            {t('helpCenter.articles.searchNotWorking.title')}
          </h1>
          <p className="text-xl text-white/80 mb-6">
            {t('helpCenter.articles.searchNotWorking.subtitle')}
          </p>
          <div className="flex items-center gap-4 text-sm text-white/60">
            <span>{t('helpCenter.articles.searchNotWorking.readTime')}</span>
            <span>•</span>
            <span>{t('helpCenter.articles.searchNotWorking.lastUpdated')}</span>
          </div>
        </div>

        {/* Introduction */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">
              {t('helpCenter.articles.searchNotWorking.introduction.title')}
            </h2>
            <p className="text-white/80 mb-4">
              {t('helpCenter.articles.searchNotWorking.introduction.content')}
            </p>
            <div className="bg-blue-500/20 border border-blue-400/30 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <Search className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-blue-200 mb-2">
                    {t('helpCenter.articles.searchNotWorking.introduction.tip')}
                  </h3>
                  <p className="text-blue-100">
                    {t('helpCenter.articles.searchNotWorking.introduction.tipContent')}
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
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      <issue.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 text-white">{issue.title}</h3>
                    <p className="text-white/80 mb-4">{issue.description}</p>
                    <h4 className="font-semibold text-white mb-3">
                      {t('helpCenter.articles.searchNotWorking.solutions.title')}
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

        {/* Search Tips */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">
              {t('helpCenter.articles.searchNotWorking.searchTips.title')}
            </h2>
            <p className="text-white/80 mb-4">
              {t('helpCenter.articles.searchNotWorking.searchTips.description')}
            </p>
            
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  1
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-white">
                    {t('helpCenter.articles.searchNotWorking.searchTips.step1.title')}
                  </h3>
                  <p className="text-white/80">
                    {t('helpCenter.articles.searchNotWorking.searchTips.step1.description')}
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  2
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-white">
                    {t('helpCenter.articles.searchNotWorking.searchTips.step2.title')}
                  </h3>
                  <p className="text-white/80">
                    {t('helpCenter.articles.searchNotWorking.searchTips.step2.description')}
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  3
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-white">
                    {t('helpCenter.articles.searchNotWorking.searchTips.step3.title')}
                  </h3>
                  <p className="text-white/80">
                    {t('helpCenter.articles.searchNotWorking.searchTips.step3.description')}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Advanced Search */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">
              {t('helpCenter.articles.searchNotWorking.advancedSearch.title')}
            </h2>
            <p className="text-white/80 mb-4">
              {t('helpCenter.articles.searchNotWorking.advancedSearch.description')}
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-500/20 border border-green-400/30 rounded-lg p-4">
                <h3 className="font-semibold text-green-200 mb-2">
                  {t('helpCenter.articles.searchNotWorking.advancedSearch.operators.title')}
                </h3>
                <p className="text-green-100 mb-2">
                  {t('helpCenter.articles.searchNotWorking.advancedSearch.operators.description')}
                </p>
                <ul className="text-green-100 space-y-1 text-sm">
                  <li>• {t('helpCenter.articles.searchNotWorking.advancedSearch.operators.operator1')}</li>
                  <li>• {t('helpCenter.articles.searchNotWorking.advancedSearch.operators.operator2')}</li>
                  <li>• {t('helpCenter.articles.searchNotWorking.advancedSearch.operators.operator3')}</li>
                </ul>
              </div>
              
              <div className="bg-blue-500/20 border border-blue-400/30 rounded-lg p-4">
                <h3 className="font-semibold text-blue-200 mb-2">
                  {t('helpCenter.articles.searchNotWorking.advancedSearch.filters.title')}
                </h3>
                <p className="text-blue-100 mb-2">
                  {t('helpCenter.articles.searchNotWorking.advancedSearch.filters.description')}
                </p>
                <ul className="text-blue-100 space-y-1 text-sm">
                  <li>• {t('helpCenter.articles.searchNotWorking.advancedSearch.filters.filter1')}</li>
                  <li>• {t('helpCenter.articles.searchNotWorking.advancedSearch.filters.filter2')}</li>
                  <li>• {t('helpCenter.articles.searchNotWorking.advancedSearch.filters.filter3')}</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Performance Issues */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">
              {t('helpCenter.articles.searchNotWorking.performanceIssues.title')}
            </h2>
            <p className="text-white/80 mb-4">
              {t('helpCenter.articles.searchNotWorking.performanceIssues.description')}
            </p>
            
            <div className="space-y-4">
              <div className="bg-yellow-500/20 border border-yellow-400/30 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <Wifi className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-yellow-200 mb-2">
                      {t('helpCenter.articles.searchNotWorking.performanceIssues.network.title')}
                    </h3>
                    <p className="text-yellow-100">
                      {t('helpCenter.articles.searchNotWorking.performanceIssues.network.content')}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-red-500/20 border border-red-400/30 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <Database className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-red-200 mb-2">
                      {t('helpCenter.articles.searchNotWorking.performanceIssues.server.title')}
                    </h3>
                    <p className="text-red-100">
                      {t('helpCenter.articles.searchNotWorking.performanceIssues.server.content')}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-500/20 border border-blue-400/30 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <RefreshCw className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-blue-200 mb-2">
                      {t('helpCenter.articles.searchNotWorking.performanceIssues.cache.title')}
                    </h3>
                    <p className="text-blue-100">
                      {t('helpCenter.articles.searchNotWorking.performanceIssues.cache.content')}
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
              {t('helpCenter.articles.searchNotWorking.related.title')}
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/help-center/adding-favorites/advanced-search">
                <div className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
                  <h3 className="font-semibold mb-2 text-white">
                    {t('helpCenter.articles.searchNotWorking.related.advancedSearch')}
                  </h3>
                  <p className="text-white/60 text-sm">
                    {t('helpCenter.articles.searchNotWorking.related.advancedSearchDesc')}
                  </p>
                </div>
              </Link>
              <Link href="/help-center/troubleshooting/performance-problems">
                <div className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
                  <h3 className="font-semibold mb-2 text-white">
                    {t('helpCenter.articles.searchNotWorking.related.performanceProblems')}
                  </h3>
                  <p className="text-white/60 text-sm">
                    {t('helpCenter.articles.searchNotWorking.related.performanceProblemsDesc')}
                  </p>
                </div>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link href="/help-center/troubleshooting/upload-problems">
            <Button variant="outline" className="text-white border-white/20 hover:bg-white/10">
              ← {t('helpCenter.articles.searchNotWorking.previousArticle')}
            </Button>
          </Link>
          <Link href="/help-center/troubleshooting/notification-issues">
            <Button className="bg-white text-purple-600 hover:bg-white/90">
              {t('helpCenter.articles.searchNotWorking.nextArticle')} →
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

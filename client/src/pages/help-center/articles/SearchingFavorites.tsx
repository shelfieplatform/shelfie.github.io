import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Search, Filter, SortAsc, CheckCircle, AlertCircle, Zap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "wouter";

export default function SearchingFavorites(props: any) {
  const { t } = useLanguage();

  const searchMethods = [
    {
      title: t('helpCenter.articles.searchingFavorites.methods.basic.title'),
      description: t('helpCenter.articles.searchingFavorites.methods.basic.description'),
      icon: Search,
      features: [
        t('helpCenter.articles.searchingFavorites.methods.basic.feature1'),
        t('helpCenter.articles.searchingFavorites.methods.basic.feature2'),
        t('helpCenter.articles.searchingFavorites.methods.basic.feature3')
      ]
    },
    {
      title: t('helpCenter.articles.searchingFavorites.methods.advanced.title'),
      description: t('helpCenter.articles.searchingFavorites.methods.advanced.description'),
      icon: Filter,
      features: [
        t('helpCenter.articles.searchingFavorites.methods.advanced.feature1'),
        t('helpCenter.articles.searchingFavorites.methods.advanced.feature2'),
        t('helpCenter.articles.searchingFavorites.methods.advanced.feature3')
      ]
    },
    {
      title: t('helpCenter.articles.searchingFavorites.methods.smart.title'),
      description: t('helpCenter.articles.searchingFavorites.methods.smart.description'),
      icon: Zap,
      features: [
        t('helpCenter.articles.searchingFavorites.methods.smart.feature1'),
        t('helpCenter.articles.searchingFavorites.methods.smart.feature2'),
        t('helpCenter.articles.searchingFavorites.methods.smart.feature3')
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#A690F2] to-[#2C1761] text-white">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            <Link href="/help-center/adding-favorites">
              <Button
                variant="ghost"
                className="text-white hover:bg-white/10"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                {t('helpCenter.backToCategory')}
              </Button>
            </Link>
            <h1 className="text-lg sm:text-xl font-bold text-white">{t('helpCenter.articles.searchingFavorites.title')}</h1>
            <div className="w-20" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Article Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
            {t('helpCenter.articles.searchingFavorites.title')}
          </h1>
          <p className="text-xl text-white/80 mb-6">
            {t('helpCenter.articles.searchingFavorites.subtitle')}
          </p>
          <div className="flex items-center gap-4 text-sm text-white/60">
            <span>{t('helpCenter.articles.searchingFavorites.readTime')}</span>
            <span>•</span>
            <span>{t('helpCenter.articles.searchingFavorites.lastUpdated')}</span>
          </div>
        </div>

        {/* Introduction */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">
              {t('helpCenter.articles.searchingFavorites.introduction.title')}
            </h2>
            <p className="text-white/80 mb-4">
              {t('helpCenter.articles.searchingFavorites.introduction.content')}
            </p>
            <div className="bg-blue-500/20 border border-blue-400/30 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <Search className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-blue-200 mb-2">
                    {t('helpCenter.articles.searchingFavorites.introduction.tip')}
                  </h3>
                  <p className="text-blue-100">
                    {t('helpCenter.articles.searchingFavorites.introduction.tipContent')}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Search Methods */}
        <div className="space-y-8 mb-8">
          {searchMethods.map((method, index) => (
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
                      {t('helpCenter.articles.searchingFavorites.features.title')}
                    </h4>
                    <ul className="space-y-2">
                      {method.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-white/80">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Search */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">
              {t('helpCenter.articles.searchingFavorites.quick.title')}
            </h2>
            <p className="text-white/80 mb-4">
              {t('helpCenter.articles.searchingFavorites.quick.description')}
            </p>
            
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  1
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-white">
                    {t('helpCenter.articles.searchingFavorites.quick.step1.title')}
                  </h3>
                  <p className="text-white/80">
                    {t('helpCenter.articles.searchingFavorites.quick.step1.description')}
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  2
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-white">
                    {t('helpCenter.articles.searchingFavorites.quick.step2.title')}
                  </h3>
                  <p className="text-white/80">
                    {t('helpCenter.articles.searchingFavorites.quick.step2.description')}
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  3
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-white">
                    {t('helpCenter.articles.searchingFavorites.quick.step3.title')}
                  </h3>
                  <p className="text-white/80">
                    {t('helpCenter.articles.searchingFavorites.quick.step3.description')}
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
              {t('helpCenter.articles.searchingFavorites.advanced.title')}
            </h2>
            <p className="text-white/80 mb-4">
              {t('helpCenter.articles.searchingFavorites.advanced.description')}
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-500/20 border border-green-400/30 rounded-lg p-4">
                <h3 className="font-semibold text-green-200 mb-2">
                  {t('helpCenter.articles.searchingFavorites.advanced.filters.title')}
                </h3>
                <p className="text-green-100 mb-2">
                  {t('helpCenter.articles.searchingFavorites.advanced.filters.description')}
                </p>
                <ul className="text-green-100 space-y-1 text-sm">
                  <li>• {t('helpCenter.articles.searchingFavorites.advanced.filters.tip1')}</li>
                  <li>• {t('helpCenter.articles.searchingFavorites.advanced.filters.tip2')}</li>
                </ul>
              </div>
              
              <div className="bg-blue-500/20 border border-blue-400/30 rounded-lg p-4">
                <h3 className="font-semibold text-blue-200 mb-2">
                  {t('helpCenter.articles.searchingFavorites.advanced.operators.title')}
                </h3>
                <p className="text-blue-100 mb-2">
                  {t('helpCenter.articles.searchingFavorites.advanced.operators.description')}
                </p>
                <ul className="text-blue-100 space-y-1 text-sm">
                  <li>• {t('helpCenter.articles.searchingFavorites.advanced.operators.tip1')}</li>
                  <li>• {t('helpCenter.articles.searchingFavorites.advanced.operators.tip2')}</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Search Tips */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">
              {t('helpCenter.articles.searchingFavorites.tips.title')}
            </h2>
            <p className="text-white/80 mb-4">
              {t('helpCenter.articles.searchingFavorites.tips.description')}
            </p>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-purple-500/20 border border-purple-400/30 rounded-lg p-4">
                <h3 className="font-semibold text-purple-200 mb-2">
                  {t('helpCenter.articles.searchingFavorites.tips.keywords.title')}
                </h3>
                <p className="text-purple-100 text-sm">
                  {t('helpCenter.articles.searchingFavorites.tips.keywords.description')}
                </p>
              </div>
              
              <div className="bg-yellow-500/20 border border-yellow-400/30 rounded-lg p-4">
                <h3 className="font-semibold text-yellow-200 mb-2">
                  {t('helpCenter.articles.searchingFavorites.tips.partial.title')}
                </h3>
                <p className="text-yellow-100 text-sm">
                  {t('helpCenter.articles.searchingFavorites.tips.partial.description')}
                </p>
              </div>
              
              <div className="bg-red-500/20 border border-red-400/30 rounded-lg p-4">
                <h3 className="font-semibold text-red-200 mb-2">
                  {t('helpCenter.articles.searchingFavorites.tips.saved.title')}
                </h3>
                <p className="text-red-100 text-sm">
                  {t('helpCenter.articles.searchingFavorites.tips.saved.description')}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Troubleshooting */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">
              {t('helpCenter.articles.searchingFavorites.troubleshooting.title')}
            </h2>
            <p className="text-white/80 mb-4">
              {t('helpCenter.articles.searchingFavorites.troubleshooting.description')}
            </p>
            
            <div className="space-y-4">
              <div className="bg-yellow-500/20 border border-yellow-400/30 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-yellow-200 mb-2">
                      {t('helpCenter.articles.searchingFavorites.troubleshooting.noResults.title')}
                    </h3>
                    <p className="text-yellow-100">
                      {t('helpCenter.articles.searchingFavorites.troubleshooting.noResults.content')}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-500/20 border border-blue-400/30 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-blue-200 mb-2">
                      {t('helpCenter.articles.searchingFavorites.troubleshooting.slowSearch.title')}
                    </h3>
                    <p className="text-blue-100">
                      {t('helpCenter.articles.searchingFavorites.troubleshooting.slowSearch.content')}
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
              {t('helpCenter.articles.searchingFavorites.related.title')}
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/help-center/adding-favorites/organizing-favorites">
                <div className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
                  <h3 className="font-semibold mb-2 text-white">
                    {t('helpCenter.articles.searchingFavorites.related.organizingFavorites')}
                  </h3>
                  <p className="text-white/60 text-sm">
                    {t('helpCenter.articles.searchingFavorites.related.organizingFavoritesDesc')}
                  </p>
                </div>
              </Link>
              <Link href="/help-center/adding-favorites/creating-shelves">
                <div className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
                  <h3 className="font-semibold mb-2 text-white">
                    {t('helpCenter.articles.searchingFavorites.related.creatingShelves')}
                  </h3>
                  <p className="text-white/60 text-sm">
                    {t('helpCenter.articles.searchingFavorites.related.creatingShelvesDesc')}
                  </p>
                </div>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link href="/help-center/adding-favorites/organizing-favorites">
            <Button variant="outline" className="text-white border-white/20 hover:bg-white/10">
              ← {t('helpCenter.articles.searchingFavorites.previousArticle')}
            </Button>
          </Link>
          <Link href="/help-center/adding-favorites/rating-reviewing">
            <Button className="bg-white text-purple-600 hover:bg-white/90">
              {t('helpCenter.articles.searchingFavorites.nextArticle')} →
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

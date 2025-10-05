import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Music, Search, Star, CheckCircle, AlertCircle, Headphones } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "wouter";

export default function AddingMusic(props: any) {
  const { t } = useLanguage();

  const searchMethods = [
    {
      title: t('helpCenter.articles.addingMusic.search.title.title'),
      description: t('helpCenter.articles.addingMusic.search.title.description'),
      icon: Search,
      steps: [
        t('helpCenter.articles.addingMusic.search.title.step1'),
        t('helpCenter.articles.addingMusic.search.title.step2'),
        t('helpCenter.articles.addingMusic.search.title.step3')
      ]
    },
    {
      title: t('helpCenter.articles.addingMusic.search.artist.title'),
      description: t('helpCenter.articles.addingMusic.search.artist.description'),
      icon: Music,
      steps: [
        t('helpCenter.articles.addingMusic.search.artist.step1'),
        t('helpCenter.articles.addingMusic.search.artist.step2'),
        t('helpCenter.articles.addingMusic.search.artist.step3')
      ]
    },
    {
      title: t('helpCenter.articles.addingMusic.search.genre.title'),
      description: t('helpCenter.articles.addingMusic.search.genre.description'),
      icon: Star,
      steps: [
        t('helpCenter.articles.addingMusic.search.genre.step1'),
        t('helpCenter.articles.addingMusic.search.genre.step2'),
        t('helpCenter.articles.addingMusic.search.genre.step3')
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
            <h1 className="text-lg sm:text-xl font-bold text-white">{t('helpCenter.articles.addingMusic.title')}</h1>
            <div className="w-20" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Article Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
            {t('helpCenter.articles.addingMusic.title')}
          </h1>
          <p className="text-xl text-white/80 mb-6">
            {t('helpCenter.articles.addingMusic.subtitle')}
          </p>
          <div className="flex items-center gap-4 text-sm text-white/60">
            <span>{t('helpCenter.articles.addingMusic.readTime')}</span>
            <span>•</span>
            <span>{t('helpCenter.articles.addingMusic.lastUpdated')}</span>
          </div>
        </div>

        {/* Introduction */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">
              {t('helpCenter.articles.addingMusic.introduction.title')}
            </h2>
            <p className="text-white/80 mb-4">
              {t('helpCenter.articles.addingMusic.introduction.content')}
            </p>
            <div className="bg-purple-500/20 border border-purple-400/30 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <Music className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-purple-200 mb-2">
                    {t('helpCenter.articles.addingMusic.introduction.tip')}
                  </h3>
                  <p className="text-purple-100">
                    {t('helpCenter.articles.addingMusic.introduction.tipContent')}
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
                      {t('helpCenter.articles.addingMusic.steps.title')}
                    </h4>
                    <ul className="space-y-2">
                      {method.steps.map((step, stepIndex) => (
                        <li key={stepIndex} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-white/80">{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Adding to Favorites */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">
              {t('helpCenter.articles.addingMusic.favorites.title')}
            </h2>
            <p className="text-white/80 mb-4">
              {t('helpCenter.articles.addingMusic.favorites.description')}
            </p>
            
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  1
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-white">
                    {t('helpCenter.articles.addingMusic.favorites.step1.title')}
                  </h3>
                  <p className="text-white/80">
                    {t('helpCenter.articles.addingMusic.favorites.step1.description')}
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  2
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-white">
                    {t('helpCenter.articles.addingMusic.favorites.step2.title')}
                  </h3>
                  <p className="text-white/80">
                    {t('helpCenter.articles.addingMusic.favorites.step2.description')}
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  3
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-white">
                    {t('helpCenter.articles.addingMusic.favorites.step3.title')}
                  </h3>
                  <p className="text-white/80">
                    {t('helpCenter.articles.addingMusic.favorites.step3.description')}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Rating and Reviewing */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">
              {t('helpCenter.articles.addingMusic.rating.title')}
            </h2>
            <p className="text-white/80 mb-4">
              {t('helpCenter.articles.addingMusic.rating.description')}
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-500/20 border border-green-400/30 rounded-lg p-4">
                <h3 className="font-semibold text-green-200 mb-2">
                  {t('helpCenter.articles.addingMusic.rating.starRating.title')}
                </h3>
                <p className="text-green-100 mb-2">
                  {t('helpCenter.articles.addingMusic.rating.starRating.description')}
                </p>
                <ul className="text-green-100 space-y-1 text-sm">
                  <li>• {t('helpCenter.articles.addingMusic.rating.starRating.tip1')}</li>
                  <li>• {t('helpCenter.articles.addingMusic.rating.starRating.tip2')}</li>
                </ul>
              </div>
              
              <div className="bg-purple-500/20 border border-purple-400/30 rounded-lg p-4">
                <h3 className="font-semibold text-purple-200 mb-2">
                  {t('helpCenter.articles.addingMusic.rating.writtenReview.title')}
                </h3>
                <p className="text-purple-100 mb-2">
                  {t('helpCenter.articles.addingMusic.rating.writtenReview.description')}
                </p>
                <ul className="text-purple-100 space-y-1 text-sm">
                  <li>• {t('helpCenter.articles.addingMusic.rating.writtenReview.tip1')}</li>
                  <li>• {t('helpCenter.articles.addingMusic.rating.writtenReview.tip2')}</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Music Details */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">
              {t('helpCenter.articles.addingMusic.details.title')}
            </h2>
            <p className="text-white/80 mb-4">
              {t('helpCenter.articles.addingMusic.details.description')}
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-purple-500/20 border border-purple-400/30 rounded-lg p-4">
                <h3 className="font-semibold text-purple-200 mb-2">
                  {t('helpCenter.articles.addingMusic.details.basic.title')}
                </h3>
                <ul className="text-purple-100 space-y-1 text-sm">
                  <li>• {t('helpCenter.articles.addingMusic.details.basic.info1')}</li>
                  <li>• {t('helpCenter.articles.addingMusic.details.basic.info2')}</li>
                  <li>• {t('helpCenter.articles.addingMusic.details.basic.info3')}</li>
                </ul>
              </div>
              
              <div className="bg-yellow-500/20 border border-yellow-400/30 rounded-lg p-4">
                <h3 className="font-semibold text-yellow-200 mb-2">
                  {t('helpCenter.articles.addingMusic.details.advanced.title')}
                </h3>
                <ul className="text-yellow-100 space-y-1 text-sm">
                  <li>• {t('helpCenter.articles.addingMusic.details.advanced.info1')}</li>
                  <li>• {t('helpCenter.articles.addingMusic.details.advanced.info2')}</li>
                  <li>• {t('helpCenter.articles.addingMusic.details.advanced.info3')}</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tips and Best Practices */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">
              {t('helpCenter.articles.addingMusic.tips.title')}
            </h2>
            <p className="text-white/80 mb-4">
              {t('helpCenter.articles.addingMusic.tips.description')}
            </p>
            
            <div className="space-y-4">
              <div className="bg-green-500/20 border border-green-400/30 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-green-200 mb-2">
                      {t('helpCenter.articles.addingMusic.tips.tip1.title')}
                    </h3>
                    <p className="text-green-100">
                      {t('helpCenter.articles.addingMusic.tips.tip1.content')}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-purple-500/20 border border-purple-400/30 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <Headphones className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-purple-200 mb-2">
                      {t('helpCenter.articles.addingMusic.tips.tip2.title')}
                    </h3>
                    <p className="text-purple-100">
                      {t('helpCenter.articles.addingMusic.tips.tip2.content')}
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
              {t('helpCenter.articles.addingMusic.related.title')}
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/help-center/adding-favorites/adding-books">
                <div className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
                  <h3 className="font-semibold mb-2 text-white">
                    {t('helpCenter.articles.addingMusic.related.addingBooks')}
                  </h3>
                  <p className="text-white/60 text-sm">
                    {t('helpCenter.articles.addingMusic.related.addingBooksDesc')}
                  </p>
                </div>
              </Link>
              <Link href="/help-center/adding-favorites/adding-movies">
                <div className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
                  <h3 className="font-semibold mb-2 text-white">
                    {t('helpCenter.articles.addingMusic.related.addingMovies')}
                  </h3>
                  <p className="text-white/60 text-sm">
                    {t('helpCenter.articles.addingMusic.related.addingMoviesDesc')}
                  </p>
                </div>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link href="/help-center/adding-favorites/adding-movies">
            <Button variant="outline" className="text-white border-white/20 hover:bg-white/10">
              ← {t('helpCenter.articles.addingMusic.previousArticle')}
            </Button>
          </Link>
          <Link href="/help-center/adding-favorites/adding-series">
            <Button className="bg-white text-purple-600 hover:bg-white/90">
              {t('helpCenter.articles.addingMusic.nextArticle')} →
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

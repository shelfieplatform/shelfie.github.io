import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Tv, Search, Star, CheckCircle, AlertCircle, Play } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "wouter";

export default function AddingSeries(props: any) {
  const { t } = useLanguage();

  const searchMethods = [
    {
      title: t('helpCenter.articles.addingSeries.search.title.title'),
      description: t('helpCenter.articles.addingSeries.search.title.description'),
      icon: Search,
      steps: [
        t('helpCenter.articles.addingSeries.search.title.step1'),
        t('helpCenter.articles.addingSeries.search.title.step2'),
        t('helpCenter.articles.addingSeries.search.title.step3')
      ]
    },
    {
      title: t('helpCenter.articles.addingSeries.search.genre.title'),
      description: t('helpCenter.articles.addingSeries.search.genre.description'),
      icon: Tv,
      steps: [
        t('helpCenter.articles.addingSeries.search.genre.step1'),
        t('helpCenter.articles.addingSeries.search.genre.step2'),
        t('helpCenter.articles.addingSeries.search.genre.step3')
      ]
    },
    {
      title: t('helpCenter.articles.addingSeries.search.network.title'),
      description: t('helpCenter.articles.addingSeries.search.network.description'),
      icon: Star,
      steps: [
        t('helpCenter.articles.addingSeries.search.network.step1'),
        t('helpCenter.articles.addingSeries.search.network.step2'),
        t('helpCenter.articles.addingSeries.search.network.step3')
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
            <h1 className="text-lg sm:text-xl font-bold text-white">{t('helpCenter.articles.addingSeries.title')}</h1>
            <div className="w-20" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Article Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
            {t('helpCenter.articles.addingSeries.title')}
          </h1>
          <p className="text-xl text-white/80 mb-6">
            {t('helpCenter.articles.addingSeries.subtitle')}
          </p>
          <div className="flex items-center gap-4 text-sm text-white/60">
            <span>{t('helpCenter.articles.addingSeries.readTime')}</span>
            <span>•</span>
            <span>{t('helpCenter.articles.addingSeries.lastUpdated')}</span>
          </div>
        </div>

        {/* Introduction */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">
              {t('helpCenter.articles.addingSeries.introduction.title')}
            </h2>
            <p className="text-white/80 mb-4">
              {t('helpCenter.articles.addingSeries.introduction.content')}
            </p>
            <div className="bg-purple-500/20 border border-purple-400/30 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <Tv className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-purple-200 mb-2">
                    {t('helpCenter.articles.addingSeries.introduction.tip')}
                  </h3>
                  <p className="text-purple-100">
                    {t('helpCenter.articles.addingSeries.introduction.tipContent')}
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
                      {t('helpCenter.articles.addingSeries.steps.title')}
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
              {t('helpCenter.articles.addingSeries.favorites.title')}
            </h2>
            <p className="text-white/80 mb-4">
              {t('helpCenter.articles.addingSeries.favorites.description')}
            </p>
            
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  1
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-white">
                    {t('helpCenter.articles.addingSeries.favorites.step1.title')}
                  </h3>
                  <p className="text-white/80">
                    {t('helpCenter.articles.addingSeries.favorites.step1.description')}
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  2
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-white">
                    {t('helpCenter.articles.addingSeries.favorites.step2.title')}
                  </h3>
                  <p className="text-white/80">
                    {t('helpCenter.articles.addingSeries.favorites.step2.description')}
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  3
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-white">
                    {t('helpCenter.articles.addingSeries.favorites.step3.title')}
                  </h3>
                  <p className="text-white/80">
                    {t('helpCenter.articles.addingSeries.favorites.step3.description')}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tracking Progress */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">
              {t('helpCenter.articles.addingSeries.tracking.title')}
            </h2>
            <p className="text-white/80 mb-4">
              {t('helpCenter.articles.addingSeries.tracking.description')}
            </p>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-green-500/20 border border-green-400/30 rounded-lg p-4">
                <h3 className="font-semibold text-green-200 mb-2">
                  {t('helpCenter.articles.addingSeries.tracking.wantToWatch.title')}
                </h3>
                <p className="text-green-100 text-sm">
                  {t('helpCenter.articles.addingSeries.tracking.wantToWatch.description')}
                </p>
              </div>
              
              <div className="bg-yellow-500/20 border border-yellow-400/30 rounded-lg p-4">
                <h3 className="font-semibold text-yellow-200 mb-2">
                  {t('helpCenter.articles.addingSeries.tracking.currentlyWatching.title')}
                </h3>
                <p className="text-yellow-100 text-sm">
                  {t('helpCenter.articles.addingSeries.tracking.currentlyWatching.description')}
                </p>
              </div>
              
              <div className="bg-purple-500/20 border border-purple-400/30 rounded-lg p-4">
                <h3 className="font-semibold text-purple-200 mb-2">
                  {t('helpCenter.articles.addingSeries.tracking.completed.title')}
                </h3>
                <p className="text-purple-100 text-sm">
                  {t('helpCenter.articles.addingSeries.tracking.completed.description')}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Episode Tracking */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">
              {t('helpCenter.articles.addingSeries.episodes.title')}
            </h2>
            <p className="text-white/80 mb-4">
              {t('helpCenter.articles.addingSeries.episodes.description')}
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-purple-500/20 border border-purple-400/30 rounded-lg p-4">
                <h3 className="font-semibold text-purple-200 mb-2">
                  {t('helpCenter.articles.addingSeries.episodes.markWatched.title')}
                </h3>
                <p className="text-purple-100 mb-2">
                  {t('helpCenter.articles.addingSeries.episodes.markWatched.description')}
                </p>
                <ul className="text-purple-100 space-y-1 text-sm">
                  <li>• {t('helpCenter.articles.addingSeries.episodes.markWatched.tip1')}</li>
                  <li>• {t('helpCenter.articles.addingSeries.episodes.markWatched.tip2')}</li>
                </ul>
              </div>
              
              <div className="bg-amber-500/20 border border-amber-400/30 rounded-lg p-4">
                <h3 className="font-semibold text-amber-200 mb-2">
                  {t('helpCenter.articles.addingSeries.episodes.ratings.title')}
                </h3>
                <p className="text-amber-100 mb-2">
                  {t('helpCenter.articles.addingSeries.episodes.ratings.description')}
                </p>
                <ul className="text-amber-100 space-y-1 text-sm">
                  <li>• {t('helpCenter.articles.addingSeries.episodes.ratings.tip1')}</li>
                  <li>• {t('helpCenter.articles.addingSeries.episodes.ratings.tip2')}</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tips and Best Practices */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">
              {t('helpCenter.articles.addingSeries.tips.title')}
            </h2>
            <p className="text-white/80 mb-4">
              {t('helpCenter.articles.addingSeries.tips.description')}
            </p>
            
            <div className="space-y-4">
              <div className="bg-green-500/20 border border-green-400/30 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-green-200 mb-2">
                      {t('helpCenter.articles.addingSeries.tips.tip1.title')}
                    </h3>
                    <p className="text-green-100">
                      {t('helpCenter.articles.addingSeries.tips.tip1.content')}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-purple-500/20 border border-purple-400/30 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <Play className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-purple-200 mb-2">
                      {t('helpCenter.articles.addingSeries.tips.tip2.title')}
                    </h3>
                    <p className="text-purple-100">
                      {t('helpCenter.articles.addingSeries.tips.tip2.content')}
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
              {t('helpCenter.articles.addingSeries.related.title')}
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/help-center/adding-favorites/adding-movies">
                <div className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
                  <h3 className="font-semibold mb-2 text-white">
                    {t('helpCenter.articles.addingSeries.related.addingMovies')}
                  </h3>
                  <p className="text-white/60 text-sm">
                    {t('helpCenter.articles.addingSeries.related.addingMoviesDesc')}
                  </p>
                </div>
              </Link>
              <Link href="/help-center/adding-favorites/adding-books">
                <div className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
                  <h3 className="font-semibold mb-2 text-white">
                    {t('helpCenter.articles.addingSeries.related.addingBooks')}
                  </h3>
                  <p className="text-white/60 text-sm">
                    {t('helpCenter.articles.addingSeries.related.addingBooksDesc')}
                  </p>
                </div>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link href="/help-center/adding-favorites/adding-music">
            <Button variant="outline" className="text-white border-white/20 hover:bg-white/10">
              ← {t('helpCenter.articles.addingSeries.previousArticle')}
            </Button>
          </Link>
          <Link href="/help-center/adding-favorites/creating-shelves">
            <Button className="bg-white text-purple-600 hover:bg-white/90">
              {t('helpCenter.articles.addingSeries.nextArticle')} →
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

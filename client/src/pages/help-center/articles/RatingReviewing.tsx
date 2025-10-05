import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Star, MessageSquare, ThumbsUp, CheckCircle, AlertCircle, Edit } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "wouter";

export default function RatingReviewing(props: any) {
  const { t } = useLanguage();

  const reviewTypes = [
    {
      title: t('helpCenter.articles.ratingReviewing.types.quick.title'),
      description: t('helpCenter.articles.ratingReviewing.types.quick.description'),
      icon: Star,
      benefits: [
        t('helpCenter.articles.ratingReviewing.types.quick.benefit1'),
        t('helpCenter.articles.ratingReviewing.types.quick.benefit2'),
        t('helpCenter.articles.ratingReviewing.types.quick.benefit3')
      ]
    },
    {
      title: t('helpCenter.articles.ratingReviewing.types.detailed.title'),
      description: t('helpCenter.articles.ratingReviewing.types.detailed.description'),
      icon: MessageSquare,
      benefits: [
        t('helpCenter.articles.ratingReviewing.types.detailed.benefit1'),
        t('helpCenter.articles.ratingReviewing.types.detailed.benefit2'),
        t('helpCenter.articles.ratingReviewing.types.detailed.benefit3')
      ]
    },
    {
      title: t('helpCenter.articles.ratingReviewing.types.community.title'),
      description: t('helpCenter.articles.ratingReviewing.types.community.description'),
      icon: ThumbsUp,
      benefits: [
        t('helpCenter.articles.ratingReviewing.types.community.benefit1'),
        t('helpCenter.articles.ratingReviewing.types.community.benefit2'),
        t('helpCenter.articles.ratingReviewing.types.community.benefit3')
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
            <h1 className="text-lg sm:text-xl font-bold text-white">{t('helpCenter.articles.ratingReviewing.title')}</h1>
            <div className="w-20" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Article Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
            {t('helpCenter.articles.ratingReviewing.title')}
          </h1>
          <p className="text-xl text-white/80 mb-6">
            {t('helpCenter.articles.ratingReviewing.subtitle')}
          </p>
          <div className="flex items-center gap-4 text-sm text-white/60">
            <span>{t('helpCenter.articles.ratingReviewing.readTime')}</span>
            <span>•</span>
            <span>{t('helpCenter.articles.ratingReviewing.lastUpdated')}</span>
          </div>
        </div>

        {/* Introduction */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">
              {t('helpCenter.articles.ratingReviewing.introduction.title')}
            </h2>
            <p className="text-white/80 mb-4">
              {t('helpCenter.articles.ratingReviewing.introduction.content')}
            </p>
            <div className="bg-purple-500/20 border border-purple-400/30 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <Star className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-purple-200 mb-2">
                    {t('helpCenter.articles.ratingReviewing.introduction.tip')}
                  </h3>
                  <p className="text-purple-100">
                    {t('helpCenter.articles.ratingReviewing.introduction.tipContent')}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Review Types */}
        <div className="space-y-8 mb-8">
          {reviewTypes.map((type, index) => (
            <Card key={index} className="bg-white/10 border-white/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                      <type.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 text-white">{type.title}</h3>
                    <p className="text-white/80 mb-4">{type.description}</p>
                    <h4 className="font-semibold text-white mb-3">
                      {t('helpCenter.articles.ratingReviewing.benefits.title')}
                    </h4>
                    <ul className="space-y-2">
                      {type.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-white/80">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* How to Rate */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">
              {t('helpCenter.articles.ratingReviewing.rating.title')}
            </h2>
            <p className="text-white/80 mb-4">
              {t('helpCenter.articles.ratingReviewing.rating.description')}
            </p>
            
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  1
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-white">
                    {t('helpCenter.articles.ratingReviewing.rating.step1.title')}
                  </h3>
                  <p className="text-white/80">
                    {t('helpCenter.articles.ratingReviewing.rating.step1.description')}
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  2
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-white">
                    {t('helpCenter.articles.ratingReviewing.rating.step2.title')}
                  </h3>
                  <p className="text-white/80">
                    {t('helpCenter.articles.ratingReviewing.rating.step2.description')}
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  3
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-white">
                    {t('helpCenter.articles.ratingReviewing.rating.step3.title')}
                  </h3>
                  <p className="text-white/80">
                    {t('helpCenter.articles.ratingReviewing.rating.step3.description')}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Writing Reviews */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">
              {t('helpCenter.articles.ratingReviewing.writing.title')}
            </h2>
            <p className="text-white/80 mb-4">
              {t('helpCenter.articles.ratingReviewing.writing.description')}
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-500/20 border border-green-400/30 rounded-lg p-4">
                <h3 className="font-semibold text-green-200 mb-2">
                  {t('helpCenter.articles.ratingReviewing.writing.structure.title')}
                </h3>
                <p className="text-green-100 mb-2">
                  {t('helpCenter.articles.ratingReviewing.writing.structure.description')}
                </p>
                <ul className="text-green-100 space-y-1 text-sm">
                  <li>• {t('helpCenter.articles.ratingReviewing.writing.structure.tip1')}</li>
                  <li>• {t('helpCenter.articles.ratingReviewing.writing.structure.tip2')}</li>
                </ul>
              </div>
              
              <div className="bg-purple-500/20 border border-purple-400/30 rounded-lg p-4">
                <h3 className="font-semibold text-purple-200 mb-2">
                  {t('helpCenter.articles.ratingReviewing.writing.tone.title')}
                </h3>
                <p className="text-purple-100 mb-2">
                  {t('helpCenter.articles.ratingReviewing.writing.tone.description')}
                </p>
                <ul className="text-purple-100 space-y-1 text-sm">
                  <li>• {t('helpCenter.articles.ratingReviewing.writing.tone.tip1')}</li>
                  <li>• {t('helpCenter.articles.ratingReviewing.writing.tone.tip2')}</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Review Guidelines */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">
              {t('helpCenter.articles.ratingReviewing.guidelines.title')}
            </h2>
            <p className="text-white/80 mb-4">
              {t('helpCenter.articles.ratingReviewing.guidelines.description')}
            </p>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-purple-500/20 border border-purple-400/30 rounded-lg p-4">
                <h3 className="font-semibold text-purple-200 mb-2">
                  {t('helpCenter.articles.ratingReviewing.guidelines.helpful.title')}
                </h3>
                <p className="text-purple-100 text-sm">
                  {t('helpCenter.articles.ratingReviewing.guidelines.helpful.description')}
                </p>
              </div>
              
              <div className="bg-yellow-500/20 border border-yellow-400/30 rounded-lg p-4">
                <h3 className="font-semibold text-yellow-200 mb-2">
                  {t('helpCenter.articles.ratingReviewing.guidelines.respectful.title')}
                </h3>
                <p className="text-yellow-100 text-sm">
                  {t('helpCenter.articles.ratingReviewing.guidelines.respectful.description')}
                </p>
              </div>
              
              <div className="bg-amber-500/20 border border-amber-400/30 rounded-lg p-4">
                <h3 className="font-semibold text-amber-200 mb-2">
                  {t('helpCenter.articles.ratingReviewing.guidelines.constructive.title')}
                </h3>
                <p className="text-amber-100 text-sm">
                  {t('helpCenter.articles.ratingReviewing.guidelines.constructive.description')}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tips and Best Practices */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">
              {t('helpCenter.articles.ratingReviewing.tips.title')}
            </h2>
            <p className="text-white/80 mb-4">
              {t('helpCenter.articles.ratingReviewing.tips.description')}
            </p>
            
            <div className="space-y-4">
              <div className="bg-green-500/20 border border-green-400/30 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-green-200 mb-2">
                      {t('helpCenter.articles.ratingReviewing.tips.tip1.title')}
                    </h3>
                    <p className="text-green-100">
                      {t('helpCenter.articles.ratingReviewing.tips.tip1.content')}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-purple-500/20 border border-purple-400/30 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <Edit className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-purple-200 mb-2">
                      {t('helpCenter.articles.ratingReviewing.tips.tip2.title')}
                    </h3>
                    <p className="text-purple-100">
                      {t('helpCenter.articles.ratingReviewing.tips.tip2.content')}
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
              {t('helpCenter.articles.ratingReviewing.related.title')}
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/help-center/adding-favorites/searching-favorites">
                <div className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
                  <h3 className="font-semibold mb-2 text-white">
                    {t('helpCenter.articles.ratingReviewing.related.searchingFavorites')}
                  </h3>
                  <p className="text-white/60 text-sm">
                    {t('helpCenter.articles.ratingReviewing.related.searchingFavoritesDesc')}
                  </p>
                </div>
              </Link>
              <Link href="/help-center/adding-favorites/adding-books">
                <div className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
                  <h3 className="font-semibold mb-2 text-white">
                    {t('helpCenter.articles.ratingReviewing.related.addingBooks')}
                  </h3>
                  <p className="text-white/60 text-sm">
                    {t('helpCenter.articles.ratingReviewing.related.addingBooksDesc')}
                  </p>
                </div>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link href="/help-center/adding-favorites/searching-favorites">
            <Button variant="outline" className="text-white border-white/20 hover:bg-white/10">
              ← {t('helpCenter.articles.ratingReviewing.previousArticle')}
            </Button>
          </Link>
          <Link href="/help-center/adding-favorites/sharing-favorites">
            <Button className="bg-white text-purple-600 hover:bg-white/90">
              {t('helpCenter.articles.ratingReviewing.nextArticle')} →
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

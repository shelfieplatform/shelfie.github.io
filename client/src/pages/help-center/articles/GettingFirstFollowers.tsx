import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Users, Heart, Share, CheckCircle, AlertCircle, Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "wouter";

export default function GettingFirstFollowers(props: any) {
  const { t } = useLanguage();

  const strategies = [
    {
      title: t('helpCenter.articles.gettingFirstFollowers.strategies.content.title'),
      description: t('helpCenter.articles.gettingFirstFollowers.strategies.content.description'),
      icon: Star,
      tips: [
        t('helpCenter.articles.gettingFirstFollowers.strategies.content.tip1'),
        t('helpCenter.articles.gettingFirstFollowers.strategies.content.tip2'),
        t('helpCenter.articles.gettingFirstFollowers.strategies.content.tip3')
      ]
    },
    {
      title: t('helpCenter.articles.gettingFirstFollowers.strategies.engagement.title'),
      description: t('helpCenter.articles.gettingFirstFollowers.strategies.engagement.description'),
      icon: Heart,
      tips: [
        t('helpCenter.articles.gettingFirstFollowers.strategies.engagement.tip1'),
        t('helpCenter.articles.gettingFirstFollowers.strategies.engagement.tip2'),
        t('helpCenter.articles.gettingFirstFollowers.strategies.engagement.tip3')
      ]
    },
    {
      title: t('helpCenter.articles.gettingFirstFollowers.strategies.networking.title'),
      description: t('helpCenter.articles.gettingFirstFollowers.strategies.networking.description'),
      icon: Users,
      tips: [
        t('helpCenter.articles.gettingFirstFollowers.strategies.networking.tip1'),
        t('helpCenter.articles.gettingFirstFollowers.strategies.networking.tip2'),
        t('helpCenter.articles.gettingFirstFollowers.strategies.networking.tip3')
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#A690F2] to-[#2C1761] text-white">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            <Link href="/help-center/getting-started">
              <Button
                variant="ghost"
                className="text-white hover:bg-white/10"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                {t('helpCenter.backToCategory')}
              </Button>
            </Link>
            <h1 className="text-lg sm:text-xl font-bold text-white">{t('helpCenter.articles.gettingFirstFollowers.title')}</h1>
            <div className="w-20" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Article Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
            {t('helpCenter.articles.gettingFirstFollowers.title')}
          </h1>
          <p className="text-xl text-white/80 mb-6">
            {t('helpCenter.articles.gettingFirstFollowers.subtitle')}
          </p>
          <div className="flex items-center gap-4 text-sm text-white/60">
            <span>{t('helpCenter.articles.gettingFirstFollowers.readTime')}</span>
            <span>•</span>
            <span>{t('helpCenter.articles.gettingFirstFollowers.lastUpdated')}</span>
          </div>
        </div>

        {/* Introduction */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">
              {t('helpCenter.articles.gettingFirstFollowers.introduction.title')}
            </h2>
            <p className="text-white/80 mb-4">
              {t('helpCenter.articles.gettingFirstFollowers.introduction.content')}
            </p>
            <div className="bg-purple-500/20 border border-purple-400/30 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-purple-200 mb-2">
                    {t('helpCenter.articles.gettingFirstFollowers.introduction.tip')}
                  </h3>
                  <p className="text-purple-100">
                    {t('helpCenter.articles.gettingFirstFollowers.introduction.tipContent')}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Strategies */}
        <div className="space-y-8 mb-8">
          {strategies.map((strategy, index) => (
            <Card key={index} className="bg-white/10 border-white/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                      <strategy.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 text-white">{strategy.title}</h3>
                    <p className="text-white/80 mb-4">{strategy.description}</p>
                    <h4 className="font-semibold text-white mb-3">
                      {t('helpCenter.articles.gettingFirstFollowers.tips.title')}
                    </h4>
                    <ul className="space-y-2">
                      {strategy.tips.map((tip, tipIndex) => (
                        <li key={tipIndex} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-white/80">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Building Your Profile */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">
              {t('helpCenter.articles.gettingFirstFollowers.buildingProfile.title')}
            </h2>
            <p className="text-white/80 mb-4">
              {t('helpCenter.articles.gettingFirstFollowers.buildingProfile.description')}
            </p>
            
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  1
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-white">
                    {t('helpCenter.articles.gettingFirstFollowers.buildingProfile.step1.title')}
                  </h3>
                  <p className="text-white/80">
                    {t('helpCenter.articles.gettingFirstFollowers.buildingProfile.step1.description')}
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  2
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-white">
                    {t('helpCenter.articles.gettingFirstFollowers.buildingProfile.step2.title')}
                  </h3>
                  <p className="text-white/80">
                    {t('helpCenter.articles.gettingFirstFollowers.buildingProfile.step2.description')}
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  3
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-white">
                    {t('helpCenter.articles.gettingFirstFollowers.buildingProfile.step3.title')}
                  </h3>
                  <p className="text-white/80">
                    {t('helpCenter.articles.gettingFirstFollowers.buildingProfile.step3.description')}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Engagement Tips */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">
              {t('helpCenter.articles.gettingFirstFollowers.engagement.title')}
            </h2>
            <p className="text-white/80 mb-4">
              {t('helpCenter.articles.gettingFirstFollowers.engagement.description')}
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-500/20 border border-green-400/30 rounded-lg p-4">
                <h3 className="font-semibold text-green-200 mb-2">
                  {t('helpCenter.articles.gettingFirstFollowers.engagement.active.title')}
                </h3>
                <p className="text-green-100 mb-2">
                  {t('helpCenter.articles.gettingFirstFollowers.engagement.active.description')}
                </p>
                <ul className="text-green-100 space-y-1 text-sm">
                  <li>• {t('helpCenter.articles.gettingFirstFollowers.engagement.active.tip1')}</li>
                  <li>• {t('helpCenter.articles.gettingFirstFollowers.engagement.active.tip2')}</li>
                </ul>
              </div>
              
              <div className="bg-purple-500/20 border border-purple-400/30 rounded-lg p-4">
                <h3 className="font-semibold text-purple-200 mb-2">
                  {t('helpCenter.articles.gettingFirstFollowers.engagement.consistent.title')}
                </h3>
                <p className="text-purple-100 mb-2">
                  {t('helpCenter.articles.gettingFirstFollowers.engagement.consistent.description')}
                </p>
                <ul className="text-purple-100 space-y-1 text-sm">
                  <li>• {t('helpCenter.articles.gettingFirstFollowers.engagement.consistent.tip1')}</li>
                  <li>• {t('helpCenter.articles.gettingFirstFollowers.engagement.consistent.tip2')}</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Common Mistakes */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">
              {t('helpCenter.articles.gettingFirstFollowers.mistakes.title')}
            </h2>
            <p className="text-white/80 mb-4">
              {t('helpCenter.articles.gettingFirstFollowers.mistakes.description')}
            </p>
            
            <div className="space-y-4">
              <div className="bg-yellow-500/20 border border-yellow-400/30 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-yellow-200 mb-2">
                      {t('helpCenter.articles.gettingFirstFollowers.mistakes.mistake1.title')}
                    </h3>
                    <p className="text-yellow-100">
                      {t('helpCenter.articles.gettingFirstFollowers.mistakes.mistake1.content')}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-amber-500/20 border border-amber-400/30 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-amber-200 mb-2">
                      {t('helpCenter.articles.gettingFirstFollowers.mistakes.mistake2.title')}
                    </h3>
                    <p className="text-amber-100">
                      {t('helpCenter.articles.gettingFirstFollowers.mistakes.mistake2.content')}
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
              {t('helpCenter.articles.gettingFirstFollowers.related.title')}
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/help-center/getting-started/following-users">
                <div className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
                  <h3 className="font-semibold mb-2 text-white">
                    {t('helpCenter.articles.gettingFirstFollowers.related.followingUsers')}
                  </h3>
                  <p className="text-white/60 text-sm">
                    {t('helpCenter.articles.gettingFirstFollowers.related.followingUsersDesc')}
                  </p>
                </div>
              </Link>
              <Link href="/help-center/getting-started/setting-up-profile">
                <div className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
                  <h3 className="font-semibold mb-2 text-white">
                    {t('helpCenter.articles.gettingFirstFollowers.related.settingUpProfile')}
                  </h3>
                  <p className="text-white/60 text-sm">
                    {t('helpCenter.articles.gettingFirstFollowers.related.settingUpProfileDesc')}
                  </p>
                </div>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link href="/help-center/getting-started/basic-security-tips">
            <Button variant="outline" className="text-white border-white/20 hover:bg-white/10">
              ← {t('helpCenter.articles.gettingFirstFollowers.previousArticle')}
            </Button>
          </Link>
          <Link href="/help-center/getting-started/following-users">
            <Button className="bg-white text-purple-600 hover:bg-white/90">
              {t('helpCenter.articles.gettingFirstFollowers.nextArticle')} →
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

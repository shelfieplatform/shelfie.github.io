import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Users, Search, Heart, Star, CheckCircle, AlertCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "wouter";

export default function FollowingOtherUsers(props: any) {
  const { t } = useLanguage();

  const methods = [
    {
      title: t('helpCenter.articles.followingOtherUsers.methods.search.title'),
      description: t('helpCenter.articles.followingOtherUsers.methods.search.description'),
      icon: Search,
      steps: [
        t('helpCenter.articles.followingOtherUsers.methods.search.step1'),
        t('helpCenter.articles.followingOtherUsers.methods.search.step2'),
        t('helpCenter.articles.followingOtherUsers.methods.search.step3')
      ]
    },
    {
      title: t('helpCenter.articles.followingOtherUsers.methods.discover.title'),
      description: t('helpCenter.articles.followingOtherUsers.methods.discover.description'),
      icon: Star,
      steps: [
        t('helpCenter.articles.followingOtherUsers.methods.discover.step1'),
        t('helpCenter.articles.followingOtherUsers.methods.discover.step2'),
        t('helpCenter.articles.followingOtherUsers.methods.discover.step3')
      ]
    },
    {
      title: t('helpCenter.articles.followingOtherUsers.methods.recommendations.title'),
      description: t('helpCenter.articles.followingOtherUsers.methods.recommendations.description'),
      icon: Heart,
      steps: [
        t('helpCenter.articles.followingOtherUsers.methods.recommendations.step1'),
        t('helpCenter.articles.followingOtherUsers.methods.recommendations.step2'),
        t('helpCenter.articles.followingOtherUsers.methods.recommendations.step3')
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
            <h1 className="text-lg sm:text-xl font-bold text-white">{t('helpCenter.articles.followingOtherUsers.title')}</h1>
            <div className="w-20" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Article Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
            {t('helpCenter.articles.followingOtherUsers.title')}
          </h1>
          <p className="text-xl text-white/80 mb-6">
            {t('helpCenter.articles.followingOtherUsers.subtitle')}
          </p>
          <div className="flex items-center gap-4 text-sm text-white/60">
            <span>{t('helpCenter.articles.followingOtherUsers.readTime')}</span>
            <span>•</span>
            <span>{t('helpCenter.articles.followingOtherUsers.lastUpdated')}</span>
          </div>
        </div>

        {/* Introduction */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">
              {t('helpCenter.articles.followingOtherUsers.introduction.title')}
            </h2>
            <p className="text-white/80 mb-4">
              {t('helpCenter.articles.followingOtherUsers.introduction.content')}
            </p>
            <div className="bg-blue-500/20 border border-blue-400/30 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-blue-200 mb-2">
                    {t('helpCenter.articles.followingOtherUsers.introduction.tip')}
                  </h3>
                  <p className="text-blue-100">
                    {t('helpCenter.articles.followingOtherUsers.introduction.tipContent')}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Methods */}
        <div className="space-y-8 mb-8">
          {methods.map((method, index) => (
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
                      {t('helpCenter.articles.followingOtherUsers.steps.title')}
                    </h4>
                    <ol className="space-y-2">
                      {method.steps.map((step, stepIndex) => (
                        <li key={stepIndex} className="flex items-start gap-2">
                          <span className="w-6 h-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                            {stepIndex + 1}
                          </span>
                          <span className="text-white/80">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Following Process */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">
              {t('helpCenter.articles.followingOtherUsers.followingProcess.title')}
            </h2>
            <p className="text-white/80 mb-4">
              {t('helpCenter.articles.followingOtherUsers.followingProcess.description')}
            </p>
            
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  1
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-white">
                    {t('helpCenter.articles.followingOtherUsers.followingProcess.step1.title')}
                  </h3>
                  <p className="text-white/80">
                    {t('helpCenter.articles.followingOtherUsers.followingProcess.step1.description')}
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  2
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-white">
                    {t('helpCenter.articles.followingOtherUsers.followingProcess.step2.title')}
                  </h3>
                  <p className="text-white/80">
                    {t('helpCenter.articles.followingOtherUsers.followingProcess.step2.description')}
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  3
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-white">
                    {t('helpCenter.articles.followingOtherUsers.followingProcess.step3.title')}
                  </h3>
                  <p className="text-white/80">
                    {t('helpCenter.articles.followingOtherUsers.followingProcess.step3.description')}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Managing Your Following */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">
              {t('helpCenter.articles.followingOtherUsers.managing.title')}
            </h2>
            <p className="text-white/80 mb-4">
              {t('helpCenter.articles.followingOtherUsers.managing.description')}
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-500/20 border border-green-400/30 rounded-lg p-4">
                <h3 className="font-semibold text-green-200 mb-2">
                  {t('helpCenter.articles.followingOtherUsers.managing.organize.title')}
                </h3>
                <p className="text-green-100 mb-2">
                  {t('helpCenter.articles.followingOtherUsers.managing.organize.description')}
                </p>
                <ul className="text-green-100 space-y-1 text-sm">
                  <li>• {t('helpCenter.articles.followingOtherUsers.managing.organize.tip1')}</li>
                  <li>• {t('helpCenter.articles.followingOtherUsers.managing.organize.tip2')}</li>
                </ul>
              </div>
              
              <div className="bg-blue-500/20 border border-blue-400/30 rounded-lg p-4">
                <h3 className="font-semibold text-blue-200 mb-2">
                  {t('helpCenter.articles.followingOtherUsers.managing.unfollow.title')}
                </h3>
                <p className="text-blue-100 mb-2">
                  {t('helpCenter.articles.followingOtherUsers.managing.unfollow.description')}
                </p>
                <ul className="text-blue-100 space-y-1 text-sm">
                  <li>• {t('helpCenter.articles.followingOtherUsers.managing.unfollow.tip1')}</li>
                  <li>• {t('helpCenter.articles.followingOtherUsers.managing.unfollow.tip2')}</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Best Practices */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">
              {t('helpCenter.articles.followingOtherUsers.bestPractices.title')}
            </h2>
            <p className="text-white/80 mb-4">
              {t('helpCenter.articles.followingOtherUsers.bestPractices.description')}
            </p>
            
            <div className="space-y-4">
              <div className="bg-green-500/20 border border-green-400/30 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-green-200 mb-2">
                      {t('helpCenter.articles.followingOtherUsers.bestPractices.quality.title')}
                    </h3>
                    <p className="text-green-100">
                      {t('helpCenter.articles.followingOtherUsers.bestPractices.quality.content')}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-500/20 border border-blue-400/30 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-blue-200 mb-2">
                      {t('helpCenter.articles.followingOtherUsers.bestPractices.engagement.title')}
                    </h3>
                    <p className="text-blue-100">
                      {t('helpCenter.articles.followingOtherUsers.bestPractices.engagement.content')}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-purple-500/20 border border-purple-400/30 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-purple-200 mb-2">
                      {t('helpCenter.articles.followingOtherUsers.bestPractices.balance.title')}
                    </h3>
                    <p className="text-purple-100">
                      {t('helpCenter.articles.followingOtherUsers.bestPractices.balance.content')}
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
              {t('helpCenter.articles.followingOtherUsers.related.title')}
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/help-center/getting-started/first-followers">
                <div className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
                  <h3 className="font-semibold mb-2 text-white">
                    {t('helpCenter.articles.followingOtherUsers.related.gettingFirstFollowers')}
                  </h3>
                  <p className="text-white/60 text-sm">
                    {t('helpCenter.articles.followingOtherUsers.related.gettingFirstFollowersDesc')}
                  </p>
                </div>
              </Link>
              <Link href="/help-center/getting-started/notifications">
                <div className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
                  <h3 className="font-semibold mb-2 text-white">
                    {t('helpCenter.articles.followingOtherUsers.related.notifications')}
                  </h3>
                  <p className="text-white/60 text-sm">
                    {t('helpCenter.articles.followingOtherUsers.related.notificationsDesc')}
                  </p>
                </div>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link href="/help-center/getting-started/first-followers">
            <Button variant="outline" className="text-white border-white/20 hover:bg-white/10">
              ← {t('helpCenter.articles.followingOtherUsers.previousArticle')}
            </Button>
          </Link>
          <Link href="/help-center/getting-started/platform-tour">
            <Button className="bg-white text-purple-600 hover:bg-white/90">
              {t('helpCenter.articles.followingOtherUsers.nextArticle')} →
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

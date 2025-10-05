import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, User, Edit, AlertCircle, CheckCircle, Clock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "wouter";

export default function ChangeUsername(props: any) {
  const { t } = useLanguage();

  const steps = [
    {
      title: t('helpCenter.articles.changeUsername.steps.step1.title'),
      description: t('helpCenter.articles.changeUsername.steps.step1.description'),
      icon: Edit
    },
    {
      title: t('helpCenter.articles.changeUsername.steps.step2.title'),
      description: t('helpCenter.articles.changeUsername.steps.step2.description'),
      icon: User
    },
    {
      title: t('helpCenter.articles.changeUsername.steps.step3.title'),
      description: t('helpCenter.articles.changeUsername.steps.step3.description'),
      icon: CheckCircle
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#A690F2] to-[#2C1761] text-white">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            <Link href="/help-center/account-profile">
              <Button
                variant="ghost"
                className="text-white hover:bg-white/10"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                {t('helpCenter.backToCategory')}
              </Button>
            </Link>
            <h1 className="text-lg sm:text-xl font-bold text-white">{t('helpCenter.articles.changeUsername.title')}</h1>
            <div className="w-20" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Article Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
            {t('helpCenter.articles.changeUsername.title')}
          </h1>
          <p className="text-xl text-white/80 mb-6">
            {t('helpCenter.articles.changeUsername.subtitle')}
          </p>
          <div className="flex items-center gap-4 text-sm text-white/60">
            <span>{t('helpCenter.articles.changeUsername.readTime')}</span>
            <span>•</span>
            <span>{t('helpCenter.articles.changeUsername.lastUpdated')}</span>
          </div>
        </div>

        {/* Introduction */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">
              {t('helpCenter.articles.changeUsername.introduction.title')}
            </h2>
            <p className="text-white/80 mb-4">
              {t('helpCenter.articles.changeUsername.introduction.content')}
            </p>
            <div className="bg-purple-500/20 border border-purple-400/30 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-purple-200 mb-2">
                    {t('helpCenter.articles.changeUsername.introduction.tip')}
                  </h3>
                  <p className="text-purple-100">
                    {t('helpCenter.articles.changeUsername.introduction.tipContent')}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Steps */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-6 text-white">
              {t('helpCenter.articles.changeUsername.steps.title')}
            </h2>
            
            <div className="space-y-6">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                      <step.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                    <p className="text-white/80">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Requirements */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">
              {t('helpCenter.articles.changeUsername.requirements.title')}
            </h2>
            <p className="text-white/80 mb-4">
              {t('helpCenter.articles.changeUsername.requirements.description')}
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-500/20 border border-green-400/30 rounded-lg p-4">
                <h3 className="font-semibold text-green-200 mb-2">
                  {t('helpCenter.articles.changeUsername.requirements.valid.title')}
                </h3>
                <ul className="text-green-100 space-y-1">
                  <li>• {t('helpCenter.articles.changeUsername.requirements.valid.rule1')}</li>
                  <li>• {t('helpCenter.articles.changeUsername.requirements.valid.rule2')}</li>
                  <li>• {t('helpCenter.articles.changeUsername.requirements.valid.rule3')}</li>
                  <li>• {t('helpCenter.articles.changeUsername.requirements.valid.rule4')}</li>
                </ul>
              </div>
              
              <div className="bg-amber-500/20 border border-amber-400/30 rounded-lg p-4">
                <h3 className="font-semibold text-amber-200 mb-2">
                  {t('helpCenter.articles.changeUsername.requirements.invalid.title')}
                </h3>
                <ul className="text-amber-100 space-y-1">
                  <li>• {t('helpCenter.articles.changeUsername.requirements.invalid.rule1')}</li>
                  <li>• {t('helpCenter.articles.changeUsername.requirements.invalid.rule2')}</li>
                  <li>• {t('helpCenter.articles.changeUsername.requirements.invalid.rule3')}</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Limitations */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">
              {t('helpCenter.articles.changeUsername.limitations.title')}
            </h2>
            <p className="text-white/80 mb-4">
              {t('helpCenter.articles.changeUsername.limitations.description')}
            </p>
            
            <div className="bg-yellow-500/20 border border-yellow-400/30 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-yellow-200 mb-2">
                    {t('helpCenter.articles.changeUsername.limitations.important.title')}
                  </h3>
                  <p className="text-yellow-100">
                    {t('helpCenter.articles.changeUsername.limitations.important.content')}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Related Articles */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">
              {t('helpCenter.articles.changeUsername.related.title')}
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/help-center/account-profile/update-profile">
                <div className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
                  <h3 className="font-semibold mb-2">
                    {t('helpCenter.articles.changeUsername.related.updateProfile')}
                  </h3>
                  <p className="text-white/60 text-sm">
                    {t('helpCenter.articles.changeUsername.related.updateProfileDesc')}
                  </p>
                </div>
              </Link>
              <Link href="/help-center/account-profile/profile-pictures">
                <div className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
                  <h3 className="font-semibold mb-2">
                    {t('helpCenter.articles.changeUsername.related.profilePictures')}
                  </h3>
                  <p className="text-white/60 text-sm">
                    {t('helpCenter.articles.changeUsername.related.profilePicturesDesc')}
                  </p>
                </div>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link href="/help-center/account-profile">
            <Button variant="outline" className="text-white border-white/20 hover:bg-white/10">
              ← {t('helpCenter.articles.changeUsername.previousArticle')}
            </Button>
          </Link>
          <Link href="/help-center/account-profile/update-profile">
            <Button className="bg-white text-purple-600 hover:bg-white/90">
              {t('helpCenter.articles.changeUsername.nextArticle')} →
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Camera, Image, AlertCircle, CheckCircle, Upload } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "wouter";

export default function ProfilePictures(props: any) {
  const { t } = useLanguage();

  const requirements = [
    {
      title: t('helpCenter.articles.profilePictures.requirements.size.title'),
      description: t('helpCenter.articles.profilePictures.requirements.size.description'),
      icon: Image
    },
    {
      title: t('helpCenter.articles.profilePictures.requirements.format.title'),
      description: t('helpCenter.articles.profilePictures.requirements.format.description'),
      icon: Upload
    },
    {
      title: t('helpCenter.articles.profilePictures.requirements.quality.title'),
      description: t('helpCenter.articles.profilePictures.requirements.quality.description'),
      icon: Camera
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
            <h1 className="text-lg sm:text-xl font-bold">{t('helpCenter.articles.profilePictures.title')}</h1>
            <div className="w-20" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Article Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            {t('helpCenter.articles.profilePictures.title')}
          </h1>
          <p className="text-xl text-white/80 mb-6">
            {t('helpCenter.articles.profilePictures.subtitle')}
          </p>
          <div className="flex items-center gap-4 text-sm text-white/60">
            <span>{t('helpCenter.articles.profilePictures.readTime')}</span>
            <span>•</span>
            <span>{t('helpCenter.articles.profilePictures.lastUpdated')}</span>
          </div>
        </div>

        {/* Introduction */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4">
              {t('helpCenter.articles.profilePictures.introduction.title')}
            </h2>
            <p className="text-white/80 mb-4">
              {t('helpCenter.articles.profilePictures.introduction.content')}
            </p>
            <div className="bg-purple-500/20 border border-purple-400/30 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-purple-200 mb-2">
                    {t('helpCenter.articles.profilePictures.introduction.tip')}
                  </h3>
                  <p className="text-purple-100">
                    {t('helpCenter.articles.profilePictures.introduction.tipContent')}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Requirements */}
        <div className="space-y-8 mb-8">
          {requirements.map((req, index) => (
            <Card key={index} className="bg-white/10 border-white/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                      <req.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{req.title}</h3>
                    <p className="text-white/80">{req.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Upload Process */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4">
              {t('helpCenter.articles.profilePictures.upload.title')}
            </h2>
            <p className="text-white/80 mb-4">
              {t('helpCenter.articles.profilePictures.upload.description')}
            </p>
            
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  1
                </div>
                <div>
                  <h3 className="font-semibold mb-1">
                    {t('helpCenter.articles.profilePictures.upload.step1.title')}
                  </h3>
                  <p className="text-white/80">
                    {t('helpCenter.articles.profilePictures.upload.step1.description')}
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  2
                </div>
                <div>
                  <h3 className="font-semibold mb-1">
                    {t('helpCenter.articles.profilePictures.upload.step2.title')}
                  </h3>
                  <p className="text-white/80">
                    {t('helpCenter.articles.profilePictures.upload.step2.description')}
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  3
                </div>
                <div>
                  <h3 className="font-semibold mb-1">
                    {t('helpCenter.articles.profilePictures.upload.step3.title')}
                  </h3>
                  <p className="text-white/80">
                    {t('helpCenter.articles.profilePictures.upload.step3.description')}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tips */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4">
              {t('helpCenter.articles.profilePictures.tips.title')}
            </h2>
            <p className="text-white/80 mb-4">
              {t('helpCenter.articles.profilePictures.tips.description')}
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-500/20 border border-green-400/30 rounded-lg p-4">
                <h3 className="font-semibold text-green-200 mb-2">
                  {t('helpCenter.articles.profilePictures.tips.good.title')}
                </h3>
                <ul className="text-green-100 space-y-1">
                  <li>• {t('helpCenter.articles.profilePictures.tips.good.item1')}</li>
                  <li>• {t('helpCenter.articles.profilePictures.tips.good.item2')}</li>
                  <li>• {t('helpCenter.articles.profilePictures.tips.good.item3')}</li>
                </ul>
              </div>
              
              <div className="bg-amber-500/20 border border-amber-400/30 rounded-lg p-4">
                <h3 className="font-semibold text-amber-200 mb-2">
                  {t('helpCenter.articles.profilePictures.tips.avoid.title')}
                </h3>
                <ul className="text-amber-100 space-y-1">
                  <li>• {t('helpCenter.articles.profilePictures.tips.avoid.item1')}</li>
                  <li>• {t('helpCenter.articles.profilePictures.tips.avoid.item2')}</li>
                  <li>• {t('helpCenter.articles.profilePictures.tips.avoid.item3')}</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Troubleshooting */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4">
              {t('helpCenter.articles.profilePictures.troubleshooting.title')}
            </h2>
            <div className="space-y-4">
              <div className="bg-yellow-500/20 border border-yellow-400/30 rounded-lg p-4">
                <h3 className="font-semibold text-yellow-200 mb-2">
                  {t('helpCenter.articles.profilePictures.troubleshooting.issue1.title')}
                </h3>
                <p className="text-yellow-100 mb-2">
                  {t('helpCenter.articles.profilePictures.troubleshooting.issue1.description')}
                </p>
                <p className="text-yellow-100 text-sm">
                  {t('helpCenter.articles.profilePictures.troubleshooting.issue1.solution')}
                </p>
              </div>
              
              <div className="bg-purple-500/20 border border-purple-400/30 rounded-lg p-4">
                <h3 className="font-semibold text-purple-200 mb-2">
                  {t('helpCenter.articles.profilePictures.troubleshooting.issue2.title')}
                </h3>
                <p className="text-purple-100 mb-2">
                  {t('helpCenter.articles.profilePictures.troubleshooting.issue2.description')}
                </p>
                <p className="text-purple-100 text-sm">
                  {t('helpCenter.articles.profilePictures.troubleshooting.issue2.solution')}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Related Articles */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4">
              {t('helpCenter.articles.profilePictures.related.title')}
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/help-center/account-profile/update-profile">
                <div className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
                  <h3 className="font-semibold mb-2">
                    {t('helpCenter.articles.profilePictures.related.updateProfile')}
                  </h3>
                  <p className="text-white/60 text-sm">
                    {t('helpCenter.articles.profilePictures.related.updateProfileDesc')}
                  </p>
                </div>
              </Link>
              <Link href="/help-center/account-profile/change-username">
                <div className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
                  <h3 className="font-semibold mb-2">
                    {t('helpCenter.articles.profilePictures.related.changeUsername')}
                  </h3>
                  <p className="text-white/60 text-sm">
                    {t('helpCenter.articles.profilePictures.related.changeUsernameDesc')}
                  </p>
                </div>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link href="/help-center/account-profile/update-profile">
            <Button variant="outline" className="text-white border-white/20 hover:bg-white/10">
              ← {t('helpCenter.articles.profilePictures.previousArticle')}
            </Button>
          </Link>
          <Link href="/help-center/account-profile/account-settings">
            <Button className="bg-white text-purple-600 hover:bg-white/90">
              {t('helpCenter.articles.profilePictures.nextArticle')} →
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

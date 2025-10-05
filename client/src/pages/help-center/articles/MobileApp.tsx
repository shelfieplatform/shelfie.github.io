import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Smartphone, Download, Apple, Smartphone as Android, CheckCircle, ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "wouter";

export default function MobileApp(props: any) {
  const { t } = useLanguage();

  const appFeatures = [
    {
      title: t('helpCenter.articles.mobileApp.features.offline.title'),
      description: t('helpCenter.articles.mobileApp.features.offline.description'),
      icon: CheckCircle
    },
    {
      title: t('helpCenter.articles.mobileApp.features.notifications.title'),
      description: t('helpCenter.articles.mobileApp.features.notifications.description'),
      icon: CheckCircle
    },
    {
      title: t('helpCenter.articles.mobileApp.features.camera.title'),
      description: t('helpCenter.articles.mobileApp.features.camera.description'),
      icon: CheckCircle
    },
    {
      title: t('helpCenter.articles.mobileApp.features.share.title'),
      description: t('helpCenter.articles.mobileApp.features.share.description'),
      icon: CheckCircle
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
            <h1 className="text-lg sm:text-xl font-bold">{t('helpCenter.articles.mobileApp.title')}</h1>
            <div className="w-20" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Article Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            {t('helpCenter.articles.mobileApp.title')}
          </h1>
          <p className="text-xl text-white/80 mb-6">
            {t('helpCenter.articles.mobileApp.subtitle')}
          </p>
          <div className="flex items-center gap-4 text-sm text-white/60">
            <span>{t('helpCenter.articles.mobileApp.readTime')}</span>
            <span>•</span>
            <span>{t('helpCenter.articles.mobileApp.lastUpdated')}</span>
          </div>
        </div>

        {/* Introduction */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4">
              {t('helpCenter.articles.mobileApp.introduction.title')}
            </h2>
            <p className="text-white/80 mb-4">
              {t('helpCenter.articles.mobileApp.introduction.content')}
            </p>
            <div className="bg-blue-500/20 border border-blue-400/30 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-blue-200 mb-2">
                    {t('helpCenter.articles.mobileApp.introduction.tip')}
                  </h3>
                  <p className="text-blue-100">
                    {t('helpCenter.articles.mobileApp.introduction.tipContent')}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Download Options */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-6">
              {t('helpCenter.articles.mobileApp.download.title')}
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* iOS */}
              <div className="bg-black/20 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Apple className="w-8 h-8 text-white" />
                  <h3 className="text-xl font-semibold">iOS</h3>
                </div>
                <p className="text-white/80 mb-4">
                  {t('helpCenter.articles.mobileApp.download.ios.description')}
                </p>
                <ul className="text-white/80 space-y-2 mb-4">
                  <li>• {t('helpCenter.articles.mobileApp.download.ios.requirement1')}</li>
                  <li>• {t('helpCenter.articles.mobileApp.download.ios.requirement2')}</li>
                  <li>• {t('helpCenter.articles.mobileApp.download.ios.requirement3')}</li>
                </ul>
                <Button className="w-full bg-white text-black hover:bg-white/90">
                  <Download className="w-4 h-4 mr-2" />
                  {t('helpCenter.articles.mobileApp.download.ios.button')}
                </Button>
              </div>

              {/* Android */}
              <div className="bg-black/20 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Android className="w-8 h-8 text-white" />
                  <h3 className="text-xl font-semibold">Android</h3>
                </div>
                <p className="text-white/80 mb-4">
                  {t('helpCenter.articles.mobileApp.download.android.description')}
                </p>
                <ul className="text-white/80 space-y-2 mb-4">
                  <li>• {t('helpCenter.articles.mobileApp.download.android.requirement1')}</li>
                  <li>• {t('helpCenter.articles.mobileApp.download.android.requirement2')}</li>
                  <li>• {t('helpCenter.articles.mobileApp.download.android.requirement3')}</li>
                </ul>
                <Button className="w-full bg-white text-black hover:bg-white/90">
                  <Download className="w-4 h-4 mr-2" />
                  {t('helpCenter.articles.mobileApp.download.android.button')}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* App Features */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-6">
              {t('helpCenter.articles.mobileApp.features.title')}
            </h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              {appFeatures.map((feature, index) => (
                <div key={index} className="flex gap-3 p-4 bg-white/5 rounded-lg">
                  <feature.icon className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">{feature.title}</h3>
                    <p className="text-white/80 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Installation Steps */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4">
              {t('helpCenter.articles.mobileApp.installation.title')}
            </h2>
            <p className="text-white/80 mb-4">
              {t('helpCenter.articles.mobileApp.installation.description')}
            </p>
            
            <div className="space-y-4">
              <div className="bg-blue-500/20 border border-blue-400/30 rounded-lg p-4">
                <h3 className="font-semibold text-blue-200 mb-2">
                  {t('helpCenter.articles.mobileApp.installation.steps.title')}
                </h3>
                <ol className="text-blue-100 space-y-2">
                  <li>1. {t('helpCenter.articles.mobileApp.installation.steps.step1')}</li>
                  <li>2. {t('helpCenter.articles.mobileApp.installation.steps.step2')}</li>
                  <li>3. {t('helpCenter.articles.mobileApp.installation.steps.step3')}</li>
                  <li>4. {t('helpCenter.articles.mobileApp.installation.steps.step4')}</li>
                </ol>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Related Articles */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4">
              {t('helpCenter.articles.mobileApp.related.title')}
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/help-center/getting-started/desktop-mobile">
                <div className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
                  <h3 className="font-semibold mb-2">
                    {t('helpCenter.articles.mobileApp.related.desktopMobile')}
                  </h3>
                  <p className="text-white/60 text-sm">
                    {t('helpCenter.articles.mobileApp.related.desktopMobileDesc')}
                  </p>
                </div>
              </Link>
              <Link href="/help-center/getting-started/first-followers">
                <div className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
                  <h3 className="font-semibold mb-2">
                    {t('helpCenter.articles.mobileApp.related.firstFollowers')}
                  </h3>
                  <p className="text-white/60 text-sm">
                    {t('helpCenter.articles.mobileApp.related.firstFollowersDesc')}
                  </p>
                </div>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link href="/help-center/getting-started/privacy-settings">
            <Button variant="outline" className="text-white border-white/20 hover:bg-white/10">
              ← {t('helpCenter.articles.mobileApp.previousArticle')}
            </Button>
          </Link>
          <Link href="/help-center/getting-started/desktop-mobile">
            <Button className="bg-white text-purple-600 hover:bg-white/90">
              {t('helpCenter.articles.mobileApp.nextArticle')} →
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

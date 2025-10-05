import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Smartphone, Monitor, Tablet, Shield, AlertTriangle, CheckCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "wouter";

export default function ConnectedApps(props: any) {
  const { t } = useLanguage();

  const deviceTypes = [
    {
      title: t('helpCenter.articles.connectedApps.devices.mobile.title'),
      description: t('helpCenter.articles.connectedApps.devices.mobile.description'),
      icon: Smartphone,
      examples: [
        t('helpCenter.articles.connectedApps.devices.mobile.example1'),
        t('helpCenter.articles.connectedApps.devices.mobile.example2')
      ]
    },
    {
      title: t('helpCenter.articles.connectedApps.devices.desktop.title'),
      description: t('helpCenter.articles.connectedApps.devices.desktop.description'),
      icon: Monitor,
      examples: [
        t('helpCenter.articles.connectedApps.devices.desktop.example1'),
        t('helpCenter.articles.connectedApps.devices.desktop.example2')
      ]
    },
    {
      title: t('helpCenter.articles.connectedApps.devices.tablet.title'),
      description: t('helpCenter.articles.connectedApps.devices.tablet.description'),
      icon: Tablet,
      examples: [
        t('helpCenter.articles.connectedApps.devices.tablet.example1'),
        t('helpCenter.articles.connectedApps.devices.tablet.example2')
      ]
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
            <h1 className="text-lg sm:text-xl font-bold text-white">{t('helpCenter.articles.connectedApps.title')}</h1>
            <div className="w-20" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Article Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
            {t('helpCenter.articles.connectedApps.title')}
          </h1>
          <p className="text-xl text-white/80 mb-6">
            {t('helpCenter.articles.connectedApps.subtitle')}
          </p>
          <div className="flex items-center gap-4 text-sm text-white/60">
            <span>{t('helpCenter.articles.connectedApps.readTime')}</span>
            <span>•</span>
            <span>{t('helpCenter.articles.connectedApps.lastUpdated')}</span>
          </div>
        </div>

        {/* Introduction */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">
              {t('helpCenter.articles.connectedApps.introduction.title')}
            </h2>
            <p className="text-white/80 mb-4">
              {t('helpCenter.articles.connectedApps.introduction.content')}
            </p>
            <div className="bg-purple-500/20 border border-purple-400/30 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-purple-200 mb-2">
                    {t('helpCenter.articles.connectedApps.introduction.tip')}
                  </h3>
                  <p className="text-purple-100">
                    {t('helpCenter.articles.connectedApps.introduction.tipContent')}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Device Types */}
        <div className="space-y-8 mb-8">
          {deviceTypes.map((device, index) => (
            <Card key={index} className="bg-white/10 border-white/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                      <device.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 text-white">{device.title}</h3>
                    <p className="text-white/80 mb-4">{device.description}</p>
                    <h4 className="font-semibold text-white mb-3">
                      {t('helpCenter.articles.connectedApps.examples.title')}
                    </h4>
                    <ul className="space-y-2">
                      {device.examples.map((example, exampleIndex) => (
                        <li key={exampleIndex} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-white/80">{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* How to View */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">
              {t('helpCenter.articles.connectedApps.view.title')}
            </h2>
            <p className="text-white/80 mb-4">
              {t('helpCenter.articles.connectedApps.view.description')}
            </p>
            
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  1
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-white">
                    {t('helpCenter.articles.connectedApps.view.step1.title')}
                  </h3>
                  <p className="text-white/80">
                    {t('helpCenter.articles.connectedApps.view.step1.description')}
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  2
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-white">
                    {t('helpCenter.articles.connectedApps.view.step2.title')}
                  </h3>
                  <p className="text-white/80">
                    {t('helpCenter.articles.connectedApps.view.step2.description')}
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  3
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-white">
                    {t('helpCenter.articles.connectedApps.view.step3.title')}
                  </h3>
                  <p className="text-white/80">
                    {t('helpCenter.articles.connectedApps.view.step3.description')}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Security Tips */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">
              {t('helpCenter.articles.connectedApps.security.title')}
            </h2>
            <p className="text-white/80 mb-4">
              {t('helpCenter.articles.connectedApps.security.description')}
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-500/20 border border-green-400/30 rounded-lg p-4">
                <h3 className="font-semibold text-green-200 mb-2">
                  {t('helpCenter.articles.connectedApps.security.safe.title')}
                </h3>
                <ul className="text-green-100 space-y-1">
                  <li>• {t('helpCenter.articles.connectedApps.security.safe.tip1')}</li>
                  <li>• {t('helpCenter.articles.connectedApps.security.safe.tip2')}</li>
                  <li>• {t('helpCenter.articles.connectedApps.security.safe.tip3')}</li>
                </ul>
              </div>
              
              <div className="bg-amber-500/20 border border-amber-400/30 rounded-lg p-4">
                <h3 className="font-semibold text-amber-200 mb-2">
                  {t('helpCenter.articles.connectedApps.security.unsafe.title')}
                </h3>
                <ul className="text-amber-100 space-y-1">
                  <li>• {t('helpCenter.articles.connectedApps.security.unsafe.warning1')}</li>
                  <li>• {t('helpCenter.articles.connectedApps.security.unsafe.warning2')}</li>
                  <li>• {t('helpCenter.articles.connectedApps.security.unsafe.warning3')}</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Disconnect Devices */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">
              {t('helpCenter.articles.connectedApps.disconnect.title')}
            </h2>
            <p className="text-white/80 mb-4">
              {t('helpCenter.articles.connectedApps.disconnect.description')}
            </p>
            
            <div className="bg-yellow-500/20 border border-yellow-400/30 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-yellow-200 mb-2">
                    {t('helpCenter.articles.connectedApps.disconnect.important.title')}
                  </h3>
                  <p className="text-yellow-100">
                    {t('helpCenter.articles.connectedApps.disconnect.important.content')}
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
              {t('helpCenter.articles.connectedApps.related.title')}
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/help-center/account-profile/two-factor-auth">
                <div className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
                  <h3 className="font-semibold mb-2 text-white">
                    {t('helpCenter.articles.connectedApps.related.twoFactorAuth')}
                  </h3>
                  <p className="text-white/60 text-sm">
                    {t('helpCenter.articles.connectedApps.related.twoFactorAuthDesc')}
                  </p>
                </div>
              </Link>
              <Link href="/help-center/account-profile/account-settings">
                <div className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
                  <h3 className="font-semibold mb-2 text-white">
                    {t('helpCenter.articles.connectedApps.related.accountSettings')}
                  </h3>
                  <p className="text-white/60 text-sm">
                    {t('helpCenter.articles.connectedApps.related.accountSettingsDesc')}
                  </p>
                </div>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link href="/help-center/account-profile/two-factor-auth">
            <Button variant="outline" className="text-white border-white/20 hover:bg-white/10">
              ← {t('helpCenter.articles.connectedApps.previousArticle')}
            </Button>
          </Link>
          <Link href="/help-center/adding-favorites">
            <Button className="bg-white text-purple-600 hover:bg-white/90">
              {t('helpCenter.articles.connectedApps.nextArticle')} →
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

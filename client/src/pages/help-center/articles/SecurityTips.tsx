import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Shield, Key, Lock, CheckCircle, AlertCircle, Smartphone, Eye } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "wouter";

export default function SecurityTips(props: any) {
  const { t } = useLanguage();

  const tipCategories = [
    {
      title: t('helpCenter.articles.securityTips.categories.passwords.title'),
      description: t('helpCenter.articles.securityTips.categories.passwords.description'),
      icon: Key,
      tips: [
        t('helpCenter.articles.securityTips.categories.passwords.tip1'),
        t('helpCenter.articles.securityTips.categories.passwords.tip2'),
        t('helpCenter.articles.securityTips.categories.passwords.tip3')
      ]
    },
    {
      title: t('helpCenter.articles.securityTips.categories.devices.title'),
      description: t('helpCenter.articles.securityTips.categories.devices.description'),
      icon: Smartphone,
      tips: [
        t('helpCenter.articles.securityTips.categories.devices.tip1'),
        t('helpCenter.articles.securityTips.categories.devices.tip2'),
        t('helpCenter.articles.securityTips.categories.devices.tip3')
      ]
    },
    {
      title: t('helpCenter.articles.securityTips.categories.online.title'),
      description: t('helpCenter.articles.securityTips.categories.online.description'),
      icon: Eye,
      tips: [
        t('helpCenter.articles.securityTips.categories.online.tip1'),
        t('helpCenter.articles.securityTips.categories.online.tip2'),
        t('helpCenter.articles.securityTips.categories.online.tip3')
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#A690F2] to-[#2C1761] text-white">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            <Link href="/help-center/privacy-security">
              <Button
                variant="ghost"
                className="text-white hover:bg-white/10"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                {t('helpCenter.backToCategory')}
              </Button>
            </Link>
            <h1 className="text-lg sm:text-xl font-bold text-white">{t('helpCenter.articles.securityTips.title')}</h1>
            <div className="w-20" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Article Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
            {t('helpCenter.articles.securityTips.title')}
          </h1>
          <p className="text-xl text-white/80 mb-6">
            {t('helpCenter.articles.securityTips.subtitle')}
          </p>
          <div className="flex items-center gap-4 text-sm text-white/60">
            <span>{t('helpCenter.articles.securityTips.readTime')}</span>
            <span>•</span>
            <span>{t('helpCenter.articles.securityTips.lastUpdated')}</span>
          </div>
        </div>

        {/* Introduction */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">
              {t('helpCenter.articles.securityTips.introduction.title')}
            </h2>
            <p className="text-white/80 mb-4">
              {t('helpCenter.articles.securityTips.introduction.content')}
            </p>
            <div className="bg-purple-500/20 border border-purple-400/30 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-purple-200 mb-2">
                    {t('helpCenter.articles.securityTips.introduction.tip')}
                  </h3>
                  <p className="text-purple-100">
                    {t('helpCenter.articles.securityTips.introduction.tipContent')}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tip Categories */}
        <div className="space-y-8 mb-8">
          {tipCategories.map((category, index) => (
            <Card key={index} className="bg-white/10 border-white/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                      <category.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 text-white">{category.title}</h3>
                    <p className="text-white/80 mb-4">{category.description}</p>
                    <h4 className="font-semibold text-white mb-3">
                      {t('helpCenter.articles.securityTips.tips.title')}
                    </h4>
                    <ul className="space-y-2">
                      {category.tips.map((tip, tipIndex) => (
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

        {/* Quick Security Checklist */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">
              {t('helpCenter.articles.securityTips.checklist.title')}
            </h2>
            <p className="text-white/80 mb-4">
              {t('helpCenter.articles.securityTips.checklist.description')}
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-500/20 border border-green-400/30 rounded-lg p-4">
                <h3 className="font-semibold text-green-200 mb-2">
                  {t('helpCenter.articles.securityTips.checklist.basic.title')}
                </h3>
                <p className="text-green-100 mb-2">
                  {t('helpCenter.articles.securityTips.checklist.basic.description')}
                </p>
                <ul className="text-green-100 space-y-1 text-sm">
                  <li>• {t('helpCenter.articles.securityTips.checklist.basic.tip1')}</li>
                  <li>• {t('helpCenter.articles.securityTips.checklist.basic.tip2')}</li>
                </ul>
              </div>
              
              <div className="bg-purple-500/20 border border-purple-400/30 rounded-lg p-4">
                <h3 className="font-semibold text-purple-200 mb-2">
                  {t('helpCenter.articles.securityTips.checklist.advanced.title')}
                </h3>
                <p className="text-purple-100 mb-2">
                  {t('helpCenter.articles.securityTips.checklist.advanced.description')}
                </p>
                <ul className="text-purple-100 space-y-1 text-sm">
                  <li>• {t('helpCenter.articles.securityTips.checklist.advanced.tip1')}</li>
                  <li>• {t('helpCenter.articles.securityTips.checklist.advanced.tip2')}</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Regular Maintenance */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">
              {t('helpCenter.articles.securityTips.maintenance.title')}
            </h2>
            <p className="text-white/80 mb-4">
              {t('helpCenter.articles.securityTips.maintenance.description')}
            </p>
            
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  1
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-white">
                    {t('helpCenter.articles.securityTips.maintenance.step1.title')}
                  </h3>
                  <p className="text-white/80">
                    {t('helpCenter.articles.securityTips.maintenance.step1.description')}
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  2
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-white">
                    {t('helpCenter.articles.securityTips.maintenance.step2.title')}
                  </h3>
                  <p className="text-white/80">
                    {t('helpCenter.articles.securityTips.maintenance.step2.description')}
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  3
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-white">
                    {t('helpCenter.articles.securityTips.maintenance.step3.title')}
                  </h3>
                  <p className="text-white/80">
                    {t('helpCenter.articles.securityTips.maintenance.step3.description')}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Emergency Response */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">
              {t('helpCenter.articles.securityTips.emergency.title')}
            </h2>
            <p className="text-white/80 mb-4">
              {t('helpCenter.articles.securityTips.emergency.description')}
            </p>
            
            <div className="space-y-4">
              <div className="bg-amber-500/20 border border-amber-400/30 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-amber-200 mb-2">
                      {t('helpCenter.articles.securityTips.emergency.suspected.title')}
                    </h3>
                    <p className="text-amber-100">
                      {t('helpCenter.articles.securityTips.emergency.suspected.content')}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-purple-500/20 border border-purple-400/30 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-purple-200 mb-2">
                      {t('helpCenter.articles.securityTips.emergency.contact.title')}
                    </h3>
                    <p className="text-purple-100">
                      {t('helpCenter.articles.securityTips.emergency.contact.content')}
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
              {t('helpCenter.articles.securityTips.related.title')}
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/help-center/privacy-security/security-threats">
                <div className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
                  <h3 className="font-semibold mb-2 text-white">
                    {t('helpCenter.articles.securityTips.related.securityThreats')}
                  </h3>
                  <p className="text-white/60 text-sm">
                    {t('helpCenter.articles.securityTips.related.securityThreatsDesc')}
                  </p>
                </div>
              </Link>
              <Link href="/help-center/privacy-security/security-best-practices">
                <div className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
                  <h3 className="font-semibold mb-2 text-white">
                    {t('helpCenter.articles.securityTips.related.securityBestPractices')}
                  </h3>
                  <p className="text-white/60 text-sm">
                    {t('helpCenter.articles.securityTips.related.securityBestPracticesDesc')}
                  </p>
                </div>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link href="/help-center/privacy-security/security-threats">
            <Button variant="outline" className="text-white border-white/20 hover:bg-white/10">
              ← {t('helpCenter.articles.securityTips.previousArticle')}
            </Button>
          </Link>
          <Link href="/help-center/troubleshooting">
            <Button className="bg-white text-purple-600 hover:bg-white/90">
              {t('helpCenter.articles.securityTips.nextArticle')} →
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

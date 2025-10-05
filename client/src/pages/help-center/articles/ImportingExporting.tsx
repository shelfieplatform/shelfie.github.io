import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Download, Upload, FileText, CheckCircle, AlertCircle, Database } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "wouter";

export default function ImportingExporting(props: any) {
  const { t } = useLanguage();

  const dataTypes = [
    {
      title: t('helpCenter.articles.importingExporting.types.favorites.title'),
      description: t('helpCenter.articles.importingExporting.types.favorites.description'),
      icon: FileText,
      features: [
        t('helpCenter.articles.importingExporting.types.favorites.feature1'),
        t('helpCenter.articles.importingExporting.types.favorites.feature2'),
        t('helpCenter.articles.importingExporting.types.favorites.feature3')
      ]
    },
    {
      title: t('helpCenter.articles.importingExporting.types.profile.title'),
      description: t('helpCenter.articles.importingExporting.types.profile.description'),
      icon: Database,
      features: [
        t('helpCenter.articles.importingExporting.types.profile.feature1'),
        t('helpCenter.articles.importingExporting.types.profile.feature2'),
        t('helpCenter.articles.importingExporting.types.profile.feature3')
      ]
    },
    {
      title: t('helpCenter.articles.importingExporting.types.settings.title'),
      description: t('helpCenter.articles.importingExporting.types.settings.description'),
      icon: CheckCircle,
      features: [
        t('helpCenter.articles.importingExporting.types.settings.feature1'),
        t('helpCenter.articles.importingExporting.types.settings.feature2'),
        t('helpCenter.articles.importingExporting.types.settings.feature3')
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
            <h1 className="text-lg sm:text-xl font-bold text-white">{t('helpCenter.articles.importingExporting.title')}</h1>
            <div className="w-20" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Article Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
            {t('helpCenter.articles.importingExporting.title')}
          </h1>
          <p className="text-xl text-white/80 mb-6">
            {t('helpCenter.articles.importingExporting.subtitle')}
          </p>
          <div className="flex items-center gap-4 text-sm text-white/60">
            <span>{t('helpCenter.articles.importingExporting.readTime')}</span>
            <span>•</span>
            <span>{t('helpCenter.articles.importingExporting.lastUpdated')}</span>
          </div>
        </div>

        {/* Introduction */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">
              {t('helpCenter.articles.importingExporting.introduction.title')}
            </h2>
            <p className="text-white/80 mb-4">
              {t('helpCenter.articles.importingExporting.introduction.content')}
            </p>
            <div className="bg-purple-500/20 border border-purple-400/30 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <Download className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-purple-200 mb-2">
                    {t('helpCenter.articles.importingExporting.introduction.tip')}
                  </h3>
                  <p className="text-purple-100">
                    {t('helpCenter.articles.importingExporting.introduction.tipContent')}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Data Types */}
        <div className="space-y-8 mb-8">
          {dataTypes.map((type, index) => (
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
                      {t('helpCenter.articles.importingExporting.features.title')}
                    </h4>
                    <ul className="space-y-2">
                      {type.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-white/80">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* How to Export */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">
              {t('helpCenter.articles.importingExporting.export.title')}
            </h2>
            <p className="text-white/80 mb-4">
              {t('helpCenter.articles.importingExporting.export.description')}
            </p>
            
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  1
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-white">
                    {t('helpCenter.articles.importingExporting.export.step1.title')}
                  </h3>
                  <p className="text-white/80">
                    {t('helpCenter.articles.importingExporting.export.step1.description')}
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  2
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-white">
                    {t('helpCenter.articles.importingExporting.export.step2.title')}
                  </h3>
                  <p className="text-white/80">
                    {t('helpCenter.articles.importingExporting.export.step2.description')}
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  3
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-white">
                    {t('helpCenter.articles.importingExporting.export.step3.title')}
                  </h3>
                  <p className="text-white/80">
                    {t('helpCenter.articles.importingExporting.export.step3.description')}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* How to Import */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">
              {t('helpCenter.articles.importingExporting.import.title')}
            </h2>
            <p className="text-white/80 mb-4">
              {t('helpCenter.articles.importingExporting.import.description')}
            </p>
            
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  1
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-white">
                    {t('helpCenter.articles.importingExporting.import.step1.title')}
                  </h3>
                  <p className="text-white/80">
                    {t('helpCenter.articles.importingExporting.import.step1.description')}
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  2
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-white">
                    {t('helpCenter.articles.importingExporting.import.step2.title')}
                  </h3>
                  <p className="text-white/80">
                    {t('helpCenter.articles.importingExporting.import.step2.description')}
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  3
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-white">
                    {t('helpCenter.articles.importingExporting.import.step3.title')}
                  </h3>
                  <p className="text-white/80">
                    {t('helpCenter.articles.importingExporting.import.step3.description')}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* File Formats */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">
              {t('helpCenter.articles.importingExporting.formats.title')}
            </h2>
            <p className="text-white/80 mb-4">
              {t('helpCenter.articles.importingExporting.formats.description')}
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-500/20 border border-green-400/30 rounded-lg p-4">
                <h3 className="font-semibold text-green-200 mb-2">
                  {t('helpCenter.articles.importingExporting.formats.json.title')}
                </h3>
                <p className="text-green-100 mb-2">
                  {t('helpCenter.articles.importingExporting.formats.json.description')}
                </p>
                <ul className="text-green-100 space-y-1 text-sm">
                  <li>• {t('helpCenter.articles.importingExporting.formats.json.tip1')}</li>
                  <li>• {t('helpCenter.articles.importingExporting.formats.json.tip2')}</li>
                </ul>
              </div>
              
              <div className="bg-purple-500/20 border border-purple-400/30 rounded-lg p-4">
                <h3 className="font-semibold text-purple-200 mb-2">
                  {t('helpCenter.articles.importingExporting.formats.csv.title')}
                </h3>
                <p className="text-purple-100 mb-2">
                  {t('helpCenter.articles.importingExporting.formats.csv.description')}
                </p>
                <ul className="text-purple-100 space-y-1 text-sm">
                  <li>• {t('helpCenter.articles.importingExporting.formats.csv.tip1')}</li>
                  <li>• {t('helpCenter.articles.importingExporting.formats.csv.tip2')}</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Troubleshooting */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">
              {t('helpCenter.articles.importingExporting.troubleshooting.title')}
            </h2>
            <p className="text-white/80 mb-4">
              {t('helpCenter.articles.importingExporting.troubleshooting.description')}
            </p>
            
            <div className="space-y-4">
              <div className="bg-yellow-500/20 border border-yellow-400/30 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-yellow-200 mb-2">
                      {t('helpCenter.articles.importingExporting.troubleshooting.fileSize.title')}
                    </h3>
                    <p className="text-yellow-100">
                      {t('helpCenter.articles.importingExporting.troubleshooting.fileSize.content')}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-purple-500/20 border border-purple-400/30 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-purple-200 mb-2">
                      {t('helpCenter.articles.importingExporting.troubleshooting.format.title')}
                    </h3>
                    <p className="text-purple-100">
                      {t('helpCenter.articles.importingExporting.troubleshooting.format.content')}
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
              {t('helpCenter.articles.importingExporting.related.title')}
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/help-center/adding-favorites/sharing-favorites">
                <div className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
                  <h3 className="font-semibold mb-2 text-white">
                    {t('helpCenter.articles.importingExporting.related.sharingFavorites')}
                  </h3>
                  <p className="text-white/60 text-sm">
                    {t('helpCenter.articles.importingExporting.related.sharingFavoritesDesc')}
                  </p>
                </div>
              </Link>
              <Link href="/help-center/account-profile/data-export">
                <div className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
                  <h3 className="font-semibold mb-2 text-white">
                    {t('helpCenter.articles.importingExporting.related.dataExport')}
                  </h3>
                  <p className="text-white/60 text-sm">
                    {t('helpCenter.articles.importingExporting.related.dataExportDesc')}
                  </p>
                </div>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link href="/help-center/adding-favorites/sharing-favorites">
            <Button variant="outline" className="text-white border-white/20 hover:bg-white/10">
              ← {t('helpCenter.articles.importingExporting.previousArticle')}
            </Button>
          </Link>
          <Link href="/help-center/adding-favorites/bulk-actions">
            <Button className="bg-white text-purple-600 hover:bg-white/90">
              {t('helpCenter.articles.importingExporting.nextArticle')} →
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

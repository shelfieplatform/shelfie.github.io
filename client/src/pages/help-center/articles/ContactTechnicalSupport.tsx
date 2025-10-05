import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MessageCircle, Mail, Phone, Clock, User, AlertCircle, CheckCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "wouter";

export default function ContactTechnicalSupport(props: any) {
  const { t } = useLanguage();

  const contactMethods = [
    {
      title: t('helpCenter.articles.contactTechnicalSupport.contactMethods.email.title'),
      description: t('helpCenter.articles.contactTechnicalSupport.contactMethods.email.description'),
      icon: Mail,
      responseTime: t('helpCenter.articles.contactTechnicalSupport.contactMethods.email.responseTime'),
      availability: t('helpCenter.articles.contactTechnicalSupport.contactMethods.email.availability')
    },
    {
      title: t('helpCenter.articles.contactTechnicalSupport.contactMethods.liveChat.title'),
      description: t('helpCenter.articles.contactTechnicalSupport.contactMethods.liveChat.description'),
      icon: MessageCircle,
      responseTime: t('helpCenter.articles.contactTechnicalSupport.contactMethods.liveChat.responseTime'),
      availability: t('helpCenter.articles.contactTechnicalSupport.contactMethods.liveChat.availability')
    },
    {
      title: t('helpCenter.articles.contactTechnicalSupport.contactMethods.phone.title'),
      description: t('helpCenter.articles.contactTechnicalSupport.contactMethods.phone.description'),
      icon: Phone,
      responseTime: t('helpCenter.articles.contactTechnicalSupport.contactMethods.phone.responseTime'),
      availability: t('helpCenter.articles.contactTechnicalSupport.contactMethods.phone.availability')
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#A690F2] to-[#2C1761] text-white">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            <Link href="/help-center/troubleshooting">
              <Button
                variant="ghost"
                className="text-white hover:bg-white/10"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                {t('helpCenter.backToCategory')}
              </Button>
            </Link>
            <h1 className="text-lg sm:text-xl font-bold text-white">{t('helpCenter.articles.contactTechnicalSupport.title')}</h1>
            <div className="w-20" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Article Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
            {t('helpCenter.articles.contactTechnicalSupport.title')}
          </h1>
          <p className="text-xl text-white/80 mb-6">
            {t('helpCenter.articles.contactTechnicalSupport.subtitle')}
          </p>
          <div className="flex items-center gap-4 text-sm text-white/60">
            <span>{t('helpCenter.articles.contactTechnicalSupport.readTime')}</span>
            <span>•</span>
            <span>{t('helpCenter.articles.contactTechnicalSupport.lastUpdated')}</span>
          </div>
        </div>

        {/* Introduction */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">
              {t('helpCenter.articles.contactTechnicalSupport.introduction.title')}
            </h2>
            <p className="text-white/80 mb-4">
              {t('helpCenter.articles.contactTechnicalSupport.introduction.content')}
            </p>
            <div className="bg-purple-500/20 border border-purple-400/30 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <MessageCircle className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-purple-200 mb-2">
                    {t('helpCenter.articles.contactTechnicalSupport.introduction.tip')}
                  </h3>
                  <p className="text-purple-100">
                    {t('helpCenter.articles.contactTechnicalSupport.introduction.tipContent')}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Methods */}
        <div className="space-y-8 mb-8">
          {contactMethods.map((method, index) => (
            <Card key={index} className="bg-white/10 border-white/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                      <method.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 text-white">{method.title}</h3>
                    <p className="text-white/80 mb-4">{method.description}</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-white/5 rounded-lg p-3">
                        <div className="flex items-center gap-2 mb-1">
                          <Clock className="w-4 h-4 text-purple-400" />
                          <span className="text-white/60 text-sm">Response Time</span>
                        </div>
                        <p className="text-white/80 text-sm">{method.responseTime}</p>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3">
                        <div className="flex items-center gap-2 mb-1">
                          <User className="w-4 h-4 text-green-400" />
                          <span className="text-white/60 text-sm">Availability</span>
                        </div>
                        <p className="text-white/80 text-sm">{method.availability}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* What to Include */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">
              {t('helpCenter.articles.contactTechnicalSupport.whatToInclude.title')}
            </h2>
            <p className="text-white/80 mb-4">
              {t('helpCenter.articles.contactTechnicalSupport.whatToInclude.description')}
            </p>
            
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  1
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-white">
                    {t('helpCenter.articles.contactTechnicalSupport.whatToInclude.step1.title')}
                  </h3>
                  <p className="text-white/80">
                    {t('helpCenter.articles.contactTechnicalSupport.whatToInclude.step1.description')}
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  2
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-white">
                    {t('helpCenter.articles.contactTechnicalSupport.whatToInclude.step2.title')}
                  </h3>
                  <p className="text-white/80">
                    {t('helpCenter.articles.contactTechnicalSupport.whatToInclude.step2.description')}
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  3
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-white">
                    {t('helpCenter.articles.contactTechnicalSupport.whatToInclude.step3.title')}
                  </h3>
                  <p className="text-white/80">
                    {t('helpCenter.articles.contactTechnicalSupport.whatToInclude.step3.description')}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Support Hours */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">
              {t('helpCenter.articles.contactTechnicalSupport.supportHours.title')}
            </h2>
            <p className="text-white/80 mb-4">
              {t('helpCenter.articles.contactTechnicalSupport.supportHours.description')}
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-500/20 border border-green-400/30 rounded-lg p-4">
                <h3 className="font-semibold text-green-200 mb-2">
                  {t('helpCenter.articles.contactTechnicalSupport.supportHours.weekdays.title')}
                </h3>
                <p className="text-green-100 mb-2">
                  {t('helpCenter.articles.contactTechnicalSupport.supportHours.weekdays.description')}
                </p>
                <p className="text-green-100 text-sm">
                  {t('helpCenter.articles.contactTechnicalSupport.supportHours.weekdays.hours')}
                </p>
              </div>
              
              <div className="bg-purple-500/20 border border-purple-400/30 rounded-lg p-4">
                <h3 className="font-semibold text-purple-200 mb-2">
                  {t('helpCenter.articles.contactTechnicalSupport.supportHours.weekends.title')}
                </h3>
                <p className="text-purple-100 mb-2">
                  {t('helpCenter.articles.contactTechnicalSupport.supportHours.weekends.description')}
                </p>
                <p className="text-purple-100 text-sm">
                  {t('helpCenter.articles.contactTechnicalSupport.supportHours.weekends.hours')}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Emergency Support */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">
              {t('helpCenter.articles.contactTechnicalSupport.emergencySupport.title')}
            </h2>
            <p className="text-white/80 mb-4">
              {t('helpCenter.articles.contactTechnicalSupport.emergencySupport.description')}
            </p>
            
            <div className="space-y-4">
              <div className="bg-amber-500/20 border border-amber-400/30 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-amber-200 mb-2">
                      {t('helpCenter.articles.contactTechnicalSupport.emergencySupport.criticalIssues.title')}
                    </h3>
                    <p className="text-amber-100">
                      {t('helpCenter.articles.contactTechnicalSupport.emergencySupport.criticalIssues.content')}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-yellow-500/20 border border-yellow-400/30 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-yellow-200 mb-2">
                      {t('helpCenter.articles.contactTechnicalSupport.emergencySupport.phoneSupport.title')}
                    </h3>
                    <p className="text-yellow-100">
                      {t('helpCenter.articles.contactTechnicalSupport.emergencySupport.phoneSupport.content')}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-500/20 border border-green-400/30 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-green-200 mb-2">
                      {t('helpCenter.articles.contactTechnicalSupport.emergencySupport.responseTime.title')}
                    </h3>
                    <p className="text-green-100">
                      {t('helpCenter.articles.contactTechnicalSupport.emergencySupport.responseTime.content')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Before Contacting Support */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">
              {t('helpCenter.articles.contactTechnicalSupport.beforeContacting.title')}
            </h2>
            <p className="text-white/80 mb-4">
              {t('helpCenter.articles.contactTechnicalSupport.beforeContacting.description')}
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-purple-500/20 border border-purple-400/30 rounded-lg p-4">
                <h3 className="font-semibold text-purple-200 mb-2">
                  {t('helpCenter.articles.contactTechnicalSupport.beforeContacting.checklist.title')}
                </h3>
                <p className="text-purple-100 mb-2">
                  {t('helpCenter.articles.contactTechnicalSupport.beforeContacting.checklist.description')}
                </p>
                <ul className="text-purple-100 space-y-1 text-sm">
                  <li>• {t('helpCenter.articles.contactTechnicalSupport.beforeContacting.checklist.item1')}</li>
                  <li>• {t('helpCenter.articles.contactTechnicalSupport.beforeContacting.checklist.item2')}</li>
                  <li>• {t('helpCenter.articles.contactTechnicalSupport.beforeContacting.checklist.item3')}</li>
                </ul>
              </div>
              
              <div className="bg-green-500/20 border border-green-400/30 rounded-lg p-4">
                <h3 className="font-semibold text-green-200 mb-2">
                  {t('helpCenter.articles.contactTechnicalSupport.beforeContacting.documentation.title')}
                </h3>
                <p className="text-green-100 mb-2">
                  {t('helpCenter.articles.contactTechnicalSupport.beforeContacting.documentation.description')}
                </p>
                <ul className="text-green-100 space-y-1 text-sm">
                  <li>• {t('helpCenter.articles.contactTechnicalSupport.beforeContacting.documentation.item1')}</li>
                  <li>• {t('helpCenter.articles.contactTechnicalSupport.beforeContacting.documentation.item2')}</li>
                  <li>• {t('helpCenter.articles.contactTechnicalSupport.beforeContacting.documentation.item3')}</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Related Articles */}
        <Card className="mb-8 bg-white/10 border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">
              {t('helpCenter.articles.contactTechnicalSupport.related.title')}
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/help-center/troubleshooting/error-messages">
                <div className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
                  <h3 className="font-semibold mb-2 text-white">
                    {t('helpCenter.articles.contactTechnicalSupport.related.errorMessages')}
                  </h3>
                  <p className="text-white/60 text-sm">
                    {t('helpCenter.articles.contactTechnicalSupport.related.errorMessagesDesc')}
                  </p>
                </div>
              </Link>
              <Link href="/help-center/contact">
                <div className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
                  <h3 className="font-semibold mb-2 text-white">
                    {t('helpCenter.articles.contactTechnicalSupport.related.contactSupport')}
                  </h3>
                  <p className="text-white/60 text-sm">
                    {t('helpCenter.articles.contactTechnicalSupport.related.contactSupportDesc')}
                  </p>
                </div>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link href="/help-center/troubleshooting/error-messages">
            <Button variant="outline" className="text-white border-white/20 hover:bg-white/10">
              ← {t('helpCenter.articles.contactTechnicalSupport.previousArticle')}
            </Button>
          </Link>
          <Link href="/help-center">
            <Button className="bg-white text-purple-600 hover:bg-white/90">
              {t('helpCenter.articles.contactTechnicalSupport.nextArticle')} →
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

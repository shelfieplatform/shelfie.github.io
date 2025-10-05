import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, MessageCircle, Mail, Send, Bug, Lightbulb, Users } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "wouter";

interface ContactSupportProps {
  onBack?: () => void;
}

export default function ContactSupport(props: any) {
  const { onBack } = props;
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    category: "general"
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission
    console.log("Form submitted:", formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const contactOptions = [
    {
      title: t('helpCenter.contact.emailSupport.title'),
      description: t('helpCenter.contact.emailSupport.description'),
      icon: Mail,
      action: () => window.open('mailto:shelfieplatform@gmail.com', '_blank'),
      buttonText: t('helpCenter.contact.emailSupport.button')
    }
  ];


  const feedbackOptions = [
    {
      title: t('helpCenter.contact.feedback.title'),
      description: t('helpCenter.contact.feedback.description'),
      icon: Lightbulb,
      href: "/help-center/contact/feedback"
    },
    {
      title: t('helpCenter.contact.bugReports.title'),
      description: t('helpCenter.contact.bugReports.description'),
      icon: Bug,
      href: "/help-center/contact/bug-reports"
    },
    {
      title: t('helpCenter.contact.featureRequests.title'),
      description: t('helpCenter.contact.featureRequests.description'),
      icon: Lightbulb,
      href: "/help-center/contact/feature-requests"
    },
    {
      title: t('helpCenter.contact.communityForums.title'),
      description: t('helpCenter.contact.communityForums.description'),
      icon: Users,
      href: "/help-center/contact/community-forums"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#A690F2] to-[#2C1761] text-white">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            {onBack ? (
              <Button
                onClick={onBack}
                variant="ghost"
                className="text-white hover:bg-white/10"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                {t('helpCenter.back')}
              </Button>
            ) : (
              <Link href="/help-center">
                <Button
                  variant="ghost"
                  className="text-white hover:bg-white/10"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  {t('helpCenter.back')}
                </Button>
              </Link>
            )}
            <h1 className="text-lg sm:text-xl font-bold text-white">
              {t('helpCenter.categories.contactSupport.title')}
            </h1>
            <div className="w-20" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        {/* Category Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full mb-4">
            <MessageCircle className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
            {t('helpCenter.categories.contactSupport.title')}
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            {t('helpCenter.categories.contactSupport.description')}
          </p>
        </div>

        {/* Contact Options */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-8 text-center text-white">
            {t('helpCenter.contact.contactOptions.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactOptions.map((option, index) => (
              <Card key={index} className="bg-white/10 border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 rounded-full mb-4">
                    <option.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">
                    {option.title}
                  </h3>
                  <p className="text-white/70 text-sm mb-4">
                    {option.description}
                  </p>
                  <Button
                    onClick={option.action}
                    disabled={option.disabled}
                    className="bg-[#A690F2] hover:bg-[#9C7FE8] text-white w-full"
                  >
                    {option.buttonText}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="mb-12">
          <Card className="bg-white/10 border-white/20">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-white">
                {t('helpCenter.contact.contactForm.title')}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {t('helpCenter.contact.form.name')}
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-white/10 border-white/20 text-white placeholder-white/60"
                      placeholder={t('helpCenter.contact.form.namePlaceholder')}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {t('helpCenter.contact.form.email')}
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-white/10 border-white/20 text-white placeholder-white/60"
                      placeholder={t('helpCenter.contact.form.emailPlaceholder')}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    {t('helpCenter.contact.form.subject')}
                  </label>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="bg-white/10 border-white/20 text-white placeholder-white/60"
                    placeholder={t('helpCenter.contact.form.subjectPlaceholder')}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    {t('helpCenter.contact.form.message')}
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="bg-white/10 border-white/20 text-white placeholder-white/60"
                    placeholder={t('helpCenter.contact.form.messagePlaceholder')}
                  />
                </div>
                <Button
                  type="submit"
                  className="bg-[#A690F2] hover:bg-[#9C7FE8] text-white w-full"
                >
                  <Send className="w-4 h-4 mr-2" />
                  {t('helpCenter.contact.form.submit')}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>


        {/* Feedback Options */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-8 text-center text-white">
            {t('helpCenter.contact.feedbackOptions.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {feedbackOptions.map((option, index) => (
              <Link key={index} href={option.href}>
                <Card className="bg-white/10 border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer group">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-2 rounded-lg bg-white/10 flex-shrink-0 group-hover:bg-white/20 transition-colors">
                        <option.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2 group-hover:text-white transition-colors">
                          {option.title}
                        </h3>
                        <p className="text-white/80 text-sm">
                          {option.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Back to Help Center */}
        <div className="text-center">
          <Link href="/help-center">
            <Button
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t('helpCenter.backToHelpCenter')}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

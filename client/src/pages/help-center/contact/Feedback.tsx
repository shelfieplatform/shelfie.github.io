import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Send, Lightbulb, Star, MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "wouter";

interface FeedbackProps {
  onBack?: () => void;
}

export default function Feedback(props: any) {
  const { onBack } = props;
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    rating: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission
    console.log("Feedback submitted:", formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

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
              <Link href="/help-center/contact">
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
              {t('helpCenter.contact.feedback.title')}
            </h1>
            <div className="w-20" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full mb-4">
            <Lightbulb className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
            {t('helpCenter.contact.feedback.title')}
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            {t('helpCenter.contact.feedback.description')}
          </p>
        </div>

        {/* Feedback Form */}
        <div className="mb-12">
          <Card className="bg-white/10 border-white/20">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-white">
                {t('helpCenter.contact.feedback.formTitle')}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-white">
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
                    <label className="block text-sm font-medium mb-2 text-white">
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
                  <label className="block text-sm font-medium mb-2 text-white">
                    {t('helpCenter.contact.form.subject')}
                  </label>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="bg-white/10 border-white/20 text-white placeholder-white/60"
                    placeholder={t('helpCenter.contact.feedback.subjectPlaceholder')}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-white">
                    {t('helpCenter.contact.feedback.rating')}
                  </label>
                  <select
                    name="rating"
                    value={formData.rating}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 bg-white/10 border border-white/20 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  >
                    <option value="" className="bg-gray-800">
                      {t('helpCenter.contact.feedback.selectRating')}
                    </option>
                    <option value="5" className="bg-gray-800">⭐⭐⭐⭐⭐ {t('helpCenter.contact.feedback.excellent')}</option>
                    <option value="4" className="bg-gray-800">⭐⭐⭐⭐ {t('helpCenter.contact.feedback.good')}</option>
                    <option value="3" className="bg-gray-800">⭐⭐⭐ {t('helpCenter.contact.feedback.average')}</option>
                    <option value="2" className="bg-gray-800">⭐⭐ {t('helpCenter.contact.feedback.poor')}</option>
                    <option value="1" className="bg-gray-800">⭐ {t('helpCenter.contact.feedback.terrible')}</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-white">
                    {t('helpCenter.contact.form.message')}
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="bg-white/10 border-white/20 text-white placeholder-white/60"
                    placeholder={t('helpCenter.contact.feedback.messagePlaceholder')}
                  />
                </div>
                <Button
                  type="submit"
                  className="bg-[#A690F2] hover:bg-[#9C7FE8] text-white w-full"
                >
                  <Send className="w-4 h-4 mr-2" />
                  {t('helpCenter.contact.feedback.submit')}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Back to Contact Support */}
        <div className="text-center">
          <Link href="/help-center/contact">
            <Button
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t('helpCenter.backToContact')}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

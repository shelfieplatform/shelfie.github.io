import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Lightbulb, Star, Send } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useAnalytics } from "@/contexts/AnalyticsContext";
import { useToast } from "@/hooks/use-toast";
import { FormSubmissionService, validateFormData } from "@/services/formSubmissionService";
import { Link } from "wouter";

interface FeatureRequestsProps {
  onBack?: () => void;
}

export default function FeatureRequests(props: any) {
  const { onBack } = props;
  const { t } = useLanguage();
  const { trackFeatureRequest } = useAnalytics();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    featureType: "",
    priority: "",
    description: "",
    useCase: "",
    benefits: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Validate form data
      const validation = validateFormData({
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.description
      });
      
      if (!validation.isValid) {
        toast({
          title: "Validation Error",
          description: validation.errors.join(", "),
          variant: "destructive",
        });
        return;
      }

      // Submit form
      const response = await FormSubmissionService.submitForm({
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.description,
        formType: 'feature-request',
        additionalData: {
          featureType: formData.featureType,
          priority: formData.priority,
          useCase: formData.useCase,
          benefits: formData.benefits
        }
      });

      if (response.success) {
        toast({
          title: "Feature Request Submitted",
          description: response.message,
        });
        
        // Track analytics
        trackFeatureRequest(formData.featureType, formData.priority);
        
        // Reset form
        setFormData({
          name: "",
          email: "",
          subject: "",
          featureType: "",
          priority: "",
          description: "",
          useCase: "",
          benefits: ""
        });
      } else {
        toast({
          title: "Submission Failed",
          description: response.message,
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const featureTypes = [
    { value: "ui", label: "User Interface" },
    { value: "functionality", label: "New Functionality" },
    { value: "integration", label: "Third-party Integration" },
    { value: "mobile", label: "Mobile App Feature" },
    { value: "accessibility", label: "Accessibility" },
    { value: "other", label: "Other" }
  ];

  const priorityLevels = [
    { value: "low", label: "Low - Nice to have" },
    { value: "medium", label: "Medium - Would be helpful" },
    { value: "high", label: "High - Important for my workflow" },
    { value: "critical", label: "Critical - Blocking my usage" }
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
              {t('helpCenter.contact.featureRequests.title')}
            </h1>
            <div className="w-20" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full mb-4">
            <Lightbulb className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
            {t('helpCenter.contact.featureRequests.title')}
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            {t('helpCenter.contact.featureRequests.description')}
          </p>
        </div>

        {/* Feature Request Form */}
        <Card className="bg-white/10 border-white/20 mb-8">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6 text-white">
              {t('helpCenter.contact.featureRequests.formTitle')}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Basic Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-white">
                    {t('helpCenter.contact.featureRequests.form.name')}
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="bg-white/10 border-white/20 text-white placeholder-white"
                    placeholder={t('helpCenter.contact.featureRequests.form.namePlaceholder')}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-white">
                    {t('helpCenter.contact.featureRequests.form.email')}
                  </label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="bg-white/10 border-white/20 text-white placeholder-white"
                    placeholder={t('helpCenter.contact.featureRequests.form.emailPlaceholder')}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-white">
                  {t('helpCenter.contact.featureRequests.form.subject')}
                </label>
                <Input
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="bg-white/10 border-white/20 text-white placeholder-white"
                  placeholder={t('helpCenter.contact.featureRequests.form.subjectPlaceholder')}
                />
              </div>

              {/* Feature Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-white">
                    {t('helpCenter.contact.featureRequests.form.featureType')}
                  </label>
                  <select
                    name="featureType"
                    value={formData.featureType}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 bg-white/10 border border-white/20 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-white/20"
                  >
                    <option value="" className="bg-gray-800">
                      {t('helpCenter.contact.featureRequests.form.selectFeatureType')}
                    </option>
                    {featureTypes.map((type) => (
                      <option key={type.value} value={type.value} className="bg-gray-800">
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-white">
                    {t('helpCenter.contact.featureRequests.form.priority')}
                  </label>
                  <select
                    name="priority"
                    value={formData.priority}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 bg-white/10 border border-white/20 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-white/20"
                  >
                    <option value="" className="bg-gray-800">
                      {t('helpCenter.contact.featureRequests.form.selectPriority')}
                    </option>
                    {priorityLevels.map((level) => (
                      <option key={level.value} value={level.value} className="bg-gray-800">
                        {level.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-white">
                  {t('helpCenter.contact.featureRequests.form.description')}
                </label>
                <Textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="bg-white/10 border-white/20 text-white placeholder-white"
                  placeholder={t('helpCenter.contact.featureRequests.form.descriptionPlaceholder')}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-white">
                  {t('helpCenter.contact.featureRequests.form.useCase')}
                </label>
                <Textarea
                  name="useCase"
                  value={formData.useCase}
                  onChange={handleInputChange}
                  rows={3}
                  className="bg-white/10 border-white/20 text-white placeholder-white"
                  placeholder={t('helpCenter.contact.featureRequests.form.useCasePlaceholder')}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-white">
                  {t('helpCenter.contact.featureRequests.form.benefits')}
                </label>
                <Textarea
                  name="benefits"
                  value={formData.benefits}
                  onChange={handleInputChange}
                  rows={3}
                  className="bg-white/10 border-white/20 text-white placeholder-white"
                  placeholder={t('helpCenter.contact.featureRequests.form.benefitsPlaceholder')}
                />
              </div>

              <Button
                type="submit"
                className="bg-[#A690F2] hover:bg-[#9C7FE8] text-white w-full py-3"
                disabled={isSubmitting}
              >
                <Send className="w-4 h-4 mr-2" />
                {isSubmitting ? t('helpCenter.contact.featureRequests.form.submitting') : t('helpCenter.contact.featureRequests.form.submit')}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Tips Section */}
        <Card className="bg-white/10 border-white/20 mb-8">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-4 text-white flex items-center">
              <Star className="w-5 h-5 mr-2 text-amber-400" />
              {t('helpCenter.contact.featureRequests.tips.title')}
            </h3>
            <ul className="space-y-3 text-white/80">
              <li className="flex items-start">
                <span className="text-amber-400 mr-2">•</span>
                {t('helpCenter.contact.featureRequests.tips.tip1')}
              </li>
              <li className="flex items-start">
                <span className="text-amber-400 mr-2">•</span>
                {t('helpCenter.contact.featureRequests.tips.tip2')}
              </li>
              <li className="flex items-start">
                <span className="text-amber-400 mr-2">•</span>
                {t('helpCenter.contact.featureRequests.tips.tip3')}
              </li>
              <li className="flex items-start">
                <span className="text-amber-400 mr-2">•</span>
                {t('helpCenter.contact.featureRequests.tips.tip4')}
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Back to Contact */}
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

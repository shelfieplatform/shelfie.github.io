import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import { useAnalytics } from "@/contexts/AnalyticsContext";
import { useFocusTrap } from "@/hooks/useKeyboardNavigation";
import { X, Mail, User } from "lucide-react";

interface FloatingWaitlistProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FloatingWaitlist({ isOpen, onClose }: FloatingWaitlistProps) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { t } = useLanguage();
  const { trackWaitlistSignup } = useAnalytics();
  const modalRef = useRef<HTMLDivElement>(null);

  // Focus trap for accessibility
  useFocusTrap(modalRef, isOpen);

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen, onClose]);

  // Reset form when modal opens to ensure fresh state for each user
  useEffect(() => {
    if (isOpen) {
      setEmail("");
      setName("");
      setIsSubmitting(false);
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      toast({
        title: t('waitlist.error'),
        description: t('waitlist.errorDescription'),
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Send email notification to shelfieplatform@gmail.com
      const emailData = {
        to: 'shelfieplatform@gmail.com',
        subject: `New Waitlist Signup - ${name}`,
        body: `New user joined the Shelfie waitlist:\n\nName: ${name}\nEmail: ${email}\nTimestamp: ${new Date().toISOString()}\n\nThis is an automated notification from the Shelfie website.`
      };

      // Create mailto link to send email
      const mailtoLink = `mailto:${emailData.to}?subject=${encodeURIComponent(emailData.subject)}&body=${encodeURIComponent(emailData.body)}`;
      
      // Open email client
      window.open(mailtoLink, '_blank');
      
      // Track analytics
      trackWaitlistSignup(email, name);
      
      // Also log to console for development
      console.log("Waitlist signup:", { name, email, timestamp: new Date().toISOString() });
      
      toast({
        title: t('waitlist.success'),
        description: t('waitlist.successDescription'),
      });
      
      // Reset form
      setEmail("");
      setName("");
      setIsSubmitting(false);
      onClose();
      
    } catch (error) {
      console.error("Error joining waitlist:", error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" 
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="waitlist-title"
      aria-describedby="waitlist-description"
    >
      <div 
        ref={modalRef}
        className="bg-gradient-to-br from-[#A690F2] to-[#2C1761] border border-white/20 rounded-xl p-6 sm:p-8 max-w-md w-full shadow-2xl animate-in slide-in-from-bottom-4 duration-300"
        onClick={(e) => e.stopPropagation()}
        data-testid="modal-waitlist"
        role="document"
      >
        <div className="flex justify-between items-center mb-6">
          <h3 id="waitlist-title" className="text-xl sm:text-2xl font-bold text-white">
            {t('waitlist.title')}
          </h3>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent"
            data-testid="button-close-waitlist"
            aria-label="Close waitlist modal"
            role="button"
            tabIndex={0}
          >
            <X className="w-4 h-4" aria-hidden="true" />
          </Button>
        </div>
        
        <p id="waitlist-description" className="text-white/80 mb-6 text-sm sm:text-base">
          {t('waitlist.description')}
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-4" role="form" aria-label="Join waitlist form">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-white">
              {t('waitlist.name')}
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/60" aria-hidden="true" />
              <Input
                id="name"
                type="text"
                placeholder={t('waitlist.namePlaceholder')}
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-white/40 focus:ring-white/20 focus:outline-none focus:ring-2 focus:ring-white/50"
                data-testid="input-name"
                aria-required="true"
                aria-describedby="name-error"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-white">
              {t('waitlist.email')}
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/60" aria-hidden="true" />
              <Input
                id="email"
                type="email"
                placeholder={t('waitlist.emailPlaceholder')}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-white/40 focus:ring-white/20 focus:outline-none focus:ring-2 focus:ring-white/50"
                data-testid="input-email"
                aria-required="true"
                aria-describedby="email-error"
              />
            </div>
          </div>
          
          <Button
            type="submit"
            className="w-full bg-white text-[#A690F2] hover:bg-white/90 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent"
            disabled={isSubmitting}
            data-testid="button-submit-waitlist"
            aria-describedby="submit-status"
          >
            <span aria-live="polite">
              {isSubmitting ? t('waitlist.submitting') : t('waitlist.submit')}
            </span>
          </Button>
        </form>
      </div>
    </div>
  );
}

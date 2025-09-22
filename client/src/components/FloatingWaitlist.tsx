import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
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
        title: "Missing information",
        description: "Please fill in both your name and email.",
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
      
      // Also log to console for development
      console.log("Waitlist signup:", { name, email, timestamp: new Date().toISOString() });
      
      toast({
        title: "Welcome to the waitlist! 🎉",
        description: "We'll notify you when Shelfie launches.",
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
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div 
        className="bg-gradient-to-br from-[#A690F2] to-[#2C1761] border border-white/20 rounded-xl p-6 sm:p-8 max-w-md w-full shadow-2xl animate-in slide-in-from-bottom-4 duration-300"
        onClick={(e) => e.stopPropagation()}
        data-testid="modal-waitlist"
      >
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            Join the Waitlist
          </h3>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="text-white hover:bg-white/10"
            data-testid="button-close-waitlist"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
        
        <p className="text-white/80 mb-6 text-sm sm:text-base">
          Be the first to know when Shelfie launches and get early access to organize your digital shelf!
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-white">
              Name
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/60" />
              <Input
                id="name"
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-white/40 focus:ring-white/20"
                data-testid="input-name"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-white">
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/60" />
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-white/40 focus:ring-white/20"
                data-testid="input-email"
              />
            </div>
          </div>
          
          <Button
            type="submit"
            className="w-full bg-white text-[#A690F2] hover:bg-white/90 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95"
            disabled={isSubmitting}
            data-testid="button-submit-waitlist"
          >
            {isSubmitting ? "Joining..." : "Join Waitlist"}
          </Button>
        </form>
      </div>
    </div>
  );
}

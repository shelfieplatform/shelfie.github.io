import { Facebook, Instagram } from "lucide-react";

// Custom X (formerly Twitter) icon component
const XIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const socialLinks = [
  { icon: XIcon, href: "#", label: "X" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
];

interface FooterProps {
  onShowPrivacyPolicy?: () => void;
  onShowTermsOfService?: () => void;
}

export default function Footer({ onShowPrivacyPolicy, onShowTermsOfService }: FooterProps) {
  return (
    <footer className="border-t border-white/20 backdrop-blur-sm bg-black/10">
      <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Brand - Left aligned */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Shelfie
                </h3>
                <p className="text-white/80 mb-6 max-w-md">
                  Build your digital shelf of favorites. Organize, share, and discover books, movies, music, and TV shows with friends.
                </p>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="p-3 rounded-full bg-white/10 text-white/80 hover:bg-white/20 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg group"
                      aria-label={social.label}
                      data-testid={`link-social-${social.label.toLowerCase()}`}
                    >
                      <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                    </a>
                  ))}
                </div>
              </div>
              
              {/* Contact - Right aligned on desktop, left aligned on mobile */}
              <div className="md:text-right">
                <h4 className="font-semibold mb-4 text-white">Contact</h4>
                <p className="text-white/80 mb-2">Get in touch with us:</p>
                <a 
                  href="mailto:shelfieplatform@gmail.com" 
                  className="text-white hover:text-white/80 transition-colors break-all"
                >
                  shelfieplatform@gmail.com
                </a>
              </div>
            </div>
        
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/80 text-center md:text-left">
              © 2024 <span className="text-white">Shelfie</span>. All rights reserved.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-sm text-white/80">
              <button 
                onClick={onShowPrivacyPolicy}
                className="hover:text-white transition-colors text-center" 
                data-testid="link-privacy"
              >
                Privacy Policy
              </button>
              <button 
                onClick={onShowTermsOfService}
                className="hover:text-white transition-colors text-center" 
                data-testid="link-terms"
              >
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

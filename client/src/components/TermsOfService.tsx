import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Mail, ExternalLink } from "lucide-react";

interface TermsOfServiceProps {
  onBack: () => void;
  onShowPrivacyPolicy?: () => void;
}

export default function TermsOfService({ onBack, onShowPrivacyPolicy }: TermsOfServiceProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [lastUpdated] = useState('December 2024');

  const handleContactSupport = () => {
    window.open('mailto:shelfieplatform@gmail.com?subject=Terms of Service Question', '_blank');
  };

  const handleOpenPrivacyPolicy = () => {
    if (onShowPrivacyPolicy) {
      onShowPrivacyPolicy();
    }
  };

  const renderSection = (title: string, content: React.ReactNode) => (
    <div className="mb-4 sm:mb-6">
      <h2 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-white">{title}</h2>
      {content}
    </div>
  );

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#A690F2] to-[#2C1761] text-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
          <p className="text-white/80">Loading terms of service...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#A690F2] to-[#2C1761] text-white">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            <Button
              onClick={onBack}
              variant="ghost"
              className="text-white hover:bg-white/10"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            <h1 className="text-lg sm:text-xl font-bold">Terms of Service</h1>
            <div className="w-20" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
        {/* Intro Section */}
        <div className="bg-white/5 rounded-lg p-6 mb-8 border border-white/10">
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-center mb-4 text-white">
            Welcome to <span className="bg-gradient-to-r from-[#A690F2] to-white bg-clip-text text-transparent">Shelfie</span>
          </h1>
          <p className="text-sm sm:text-base text-white/80 leading-relaxed mb-4">
            These Terms of Service ("Terms") govern your use of the Shelfie mobile application 
            and related services (collectively, the "Service") operated by Shelfie Inc. 
            ("we," "our," or "us").
          </p>
          <p className="text-sm text-[#A690F2] font-medium text-center">
            Last updated: {lastUpdated}
          </p>
        </div>

        {renderSection(
          '1. Acceptance of Terms',
          <div className="space-y-4">
            <p className="text-white/80 leading-relaxed">
              By accessing or using our Service, you agree to be bound by these Terms. 
              If you disagree with any part of these terms, then you may not access the Service.
            </p>
            <p className="text-white/80 leading-relaxed">
              We reserve the right to update and change these Terms from time to time without notice. 
              Any new features that augment or enhance the current Service shall be subject to these Terms.
            </p>
          </div>
        )}

        {renderSection(
          '2. Description of Service',
          <div className="space-y-4">
            <p className="text-white/80 leading-relaxed">
              Shelfie is a social media platform that allows users to share and discover their 
              favorite books, movies, TV shows, music, and podcasts. Our Service includes:
            </p>
            <ul className="list-disc list-inside space-y-1 text-white/80">
              <li>Creating and managing personal profiles</li>
              <li>Sharing favorite content with the community</li>
              <li>Discovering new content through recommendations</li>
              <li>Following other users and building connections</li>
              <li>Accessing personalized content feeds</li>
              <li>Participating in community discussions</li>
            </ul>
          </div>
        )}

        {renderSection(
          '3. User Accounts',
          <div className="space-y-4">
            <p className="text-white/80 leading-relaxed">
              To access certain features of the Service, you must register for an account. 
              You agree to:
            </p>
            <ul className="list-disc list-inside space-y-1 text-white/80">
              <li>Provide accurate, current, and complete information</li>
              <li>Maintain and update your account information</li>
              <li>Keep your password secure and confidential</li>
              <li>Accept responsibility for all activities under your account</li>
              <li>Notify us immediately of any unauthorized use</li>
            </ul>
            <p className="text-white/80 leading-relaxed">
              You must be at least 13 years old to create an account. Users under 18 must have 
              parental consent to use the Service.
            </p>
          </div>
        )}

        {renderSection(
          '4. User Content and Conduct',
          <div className="space-y-4">
            <p className="text-white/80 leading-relaxed">
              You are responsible for all content you post, upload, or share on the Service. 
              You agree not to:
            </p>
            <ul className="list-disc list-inside space-y-1 text-white/80">
              <li>Post content that is illegal, harmful, or violates others' rights</li>
              <li>Share copyrighted material without permission</li>
              <li>Post spam, misleading, or deceptive content</li>
              <li>Harass, abuse, or harm other users</li>
              <li>Impersonate others or create fake accounts</li>
              <li>Use the Service for commercial purposes without permission</li>
            </ul>
            <p className="text-white/80 leading-relaxed">
              We reserve the right to remove content that violates these Terms and to suspend 
              or terminate accounts that engage in prohibited activities.
            </p>
          </div>
        )}

        {renderSection(
          '5. Privacy and Data Protection',
          <div className="space-y-4">
            <p className="text-white/80 leading-relaxed">
              Your privacy is important to us. Our Privacy Policy explains how we collect, 
              use, and protect your information when you use our Service. By using our Service, 
              you agree to the collection and use of information in accordance with our Privacy Policy.
            </p>
            <Button
              onClick={handleOpenPrivacyPolicy}
              className="bg-[#A690F2] hover:bg-[#9C7FE8] text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none"
            >
              View Privacy Policy →
            </Button>
          </div>
        )}

        {renderSection(
          '6. Intellectual Property',
          <div className="space-y-4">
            <p className="text-white/80 leading-relaxed">
              The Service and its original content, features, and functionality are owned by 
              Shelfie Inc. and are protected by international copyright, trademark, patent, 
              trade secret, and other intellectual property laws.
            </p>
            <p className="text-white/80 leading-relaxed">
              You retain ownership of content you create and share, but grant us a license 
              to use, display, and distribute your content in connection with the Service.
            </p>
          </div>
        )}

        {renderSection(
          '7. Prohibited Uses',
          <div className="space-y-4">
            <p className="text-white/80 leading-relaxed">
              You may not use our Service:
            </p>
            <ul className="list-disc list-inside space-y-1 text-white/80">
              <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
              <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
              <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
              <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
              <li>To submit false or misleading information</li>
              <li>To upload or transmit viruses or any other type of malicious code</li>
            </ul>
          </div>
        )}

        {renderSection(
          '8. Service Availability',
          <div className="space-y-4">
            <p className="text-white/80 leading-relaxed">
              We strive to provide continuous service availability, but we do not guarantee 
              that the Service will be available at all times. We may experience hardware, 
              software, or other problems or need to perform maintenance related to the Service.
            </p>
            <p className="text-white/80 leading-relaxed">
              We reserve the right to change, suspend, or discontinue the Service or any part 
              of it at any time with or without notice.
            </p>
          </div>
        )}

        {renderSection(
          '9. Disclaimers and Limitations',
          <div className="space-y-4">
            <p className="text-white/80 leading-relaxed">
              The Service is provided on an "AS IS" and "AS AVAILABLE" basis. We make no 
              warranties, expressed or implied, and hereby disclaim all other warranties 
              including, without limitation, implied warranties or conditions of merchantability, 
              fitness for a particular purpose, or non-infringement of intellectual property.
            </p>
            <p className="text-white/80 leading-relaxed">
              In no event shall Shelfie Inc. be liable for any indirect, incidental, special, 
              consequential, or punitive damages, including without limitation, loss of profits, 
              data, use, goodwill, or other intangible losses.
            </p>
          </div>
        )}

        {renderSection(
          '10. Termination',
          <div className="space-y-4">
            <p className="text-white/80 leading-relaxed">
              We may terminate or suspend your account and bar access to the Service immediately, 
              without prior notice or liability, under our sole discretion, for any reason 
              whatsoever and without limitation, including but not limited to a breach of the Terms.
            </p>
            <p className="text-white/80 leading-relaxed">
              If you wish to terminate your account, you may simply discontinue using the Service 
              or contact us to request account deletion.
            </p>
          </div>
        )}

        {renderSection(
          '11. Governing Law',
          <p className="text-white/80 leading-relaxed">
            These Terms shall be interpreted and governed by the laws of the State of California, 
            United States, without regard to its conflict of law provisions. Our failure to 
            enforce any right or provision of these Terms will not be considered a waiver 
            of those rights.
          </p>
        )}

        {renderSection(
          '12. Changes to Terms',
          <div className="space-y-4">
            <p className="text-white/80 leading-relaxed">
              We reserve the right, at our sole discretion, to modify or replace these Terms 
              at any time. If a revision is material, we will provide at least 30 days notice 
              prior to any new terms taking effect.
            </p>
            <p className="text-white/80 leading-relaxed">
              By continuing to access or use our Service after those revisions become effective, 
              you agree to be bound by the revised terms.
            </p>
          </div>
        )}

        {/* Contact Section */}
        <div className="bg-white/5 rounded-lg p-6 mt-8 border border-white/10">
          <h2 className="text-lg sm:text-xl font-bold mb-4 text-white">Contact Information</h2>
          <p className="text-sm sm:text-base text-white/80 leading-relaxed mb-4">
            If you have any questions about these Terms of Service, please contact us:
          </p>
          <div className="text-sm sm:text-base text-white/80 leading-relaxed mb-4">
            <p>Email: shelfieplatform@gmail.com</p>
            <p>Website: https://shelfieplatform.github.io/shelfie.github.io/</p>
          </div>
          <Button
            onClick={handleContactSupport}
            className="bg-[#A690F2] hover:bg-[#9C7FE8] text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-white/20"
          >
            <Mail className="w-4 h-4 mr-2" />
            Contact Support
          </Button>
        </div>
      </div>
    </div>
  );
}

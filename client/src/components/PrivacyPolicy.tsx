import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Mail, ExternalLink } from "lucide-react";

interface PrivacyPolicyProps {
  onBack: () => void;
}

export default function PrivacyPolicy({ onBack }: PrivacyPolicyProps) {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const handleContactSupport = () => {
    setIsContactOpen(true);
  };

  const handleEmailContact = () => {
    window.open('mailto:shelfieplatform@gmail.com?subject=Privacy Policy Question', '_blank');
  };

  const handleDataRequest = () => {
    window.open('mailto:shelfieplatform@gmail.com?subject=Data Request', '_blank');
  };

  const renderSection = (title: string, content: React.ReactNode) => (
    <div className="mb-4 sm:mb-6">
      <h2 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-white">{title}</h2>
      {content}
    </div>
  );

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
            <h1 className="text-lg sm:text-xl font-bold">Privacy Policy</h1>
            <div className="w-20" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
        {renderSection(
          'Last Updated: December 29, 2024',
          <p className="text-sm sm:text-base text-white/80 leading-relaxed">
            This Privacy Policy describes how Shelfie ("we," "our," or "us") collects, uses, and shares your personal information when you use our mobile application and website (collectively, the "Service"). By using the Service, you agree to the collection and use of information in accordance with this policy.
          </p>
        )}

        {renderSection(
          '1. Information We Collect',
          <div className="space-y-4">
            <p className="text-sm sm:text-base text-white/80 leading-relaxed">
              We collect information you provide directly to us, such as when you create an account, use our Service, or contact us for support.
            </p>
            
            <div>
              <h3 className="text-lg font-semibold mb-2 text-white">Account Information:</h3>
              <ul className="list-disc list-inside space-y-1 text-white/80">
                <li>Name, email address, username, and password</li>
                <li>Profile picture and bio information</li>
                <li>Date of birth and location information</li>
                <li>Phone number (if provided for two-factor authentication)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2 text-white">Content Information:</h3>
              <ul className="list-disc list-inside space-y-1 text-white/80">
                <li>Favorite books, movies, TV shows, music, and podcasts</li>
                <li>Posts, comments, and reviews you create</li>
                <li>Messages and communications with other users</li>
                <li>Photos, videos, and other media you share</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2 text-white">Usage Information:</h3>
              <ul className="list-disc list-inside space-y-1 text-white/80">
                <li>How you interact with our Service</li>
                <li>Pages visited, features used, and time spent</li>
                <li>Device information and IP address</li>
                <li>Location data (if you enable location services)</li>
              </ul>
            </div>
          </div>
        )}

        {renderSection(
          '2. How We Use Your Information',
          <div className="space-y-4">
            <p className="text-sm sm:text-base text-white/80 leading-relaxed">
              We use the information we collect to provide, maintain, and improve our Service:
            </p>
            <ul className="list-disc list-inside space-y-1 text-white/80">
              <li>Provide and maintain the Service</li>
              <li>Create and manage your account</li>
              <li>Process transactions and send related information</li>
              <li>Send technical notices, updates, and support messages</li>
              <li>Respond to your comments and questions</li>
              <li>Provide personalized content and recommendations</li>
              <li>Monitor and analyze trends and usage</li>
              <li>Detect, prevent, and address technical issues</li>
              <li>Ensure security and prevent fraud</li>
            </ul>
          </div>
        )}

        {renderSection(
          '3. How We Share Your Information',
          <div className="space-y-4">
            <p className="text-sm sm:text-base text-white/80 leading-relaxed">
              We may share your information in the following circumstances:
            </p>
            
            <div>
              <h3 className="text-lg font-semibold mb-2 text-white">With Your Consent:</h3>
              <ul className="list-disc list-inside space-y-1 text-white/80">
                <li>When you explicitly consent to sharing</li>
                <li>When you choose to make content public</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2 text-white">With Other Users:</h3>
              <ul className="list-disc list-inside space-y-1 text-white/80">
                <li>Public profile information and posts</li>
                <li>Messages sent to other users</li>
                <li>Comments and interactions on public content</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2 text-white">With Service Providers:</h3>
              <ul className="list-disc list-inside space-y-1 text-white/80">
                <li>Cloud storage and hosting services</li>
                <li>Analytics and performance monitoring</li>
                <li>Customer support and communication tools</li>
                <li>Payment processing (if applicable)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2 text-white">Legal Requirements:</h3>
              <ul className="list-disc list-inside space-y-1 text-white/80">
                <li>To comply with legal obligations</li>
                <li>To protect our rights and property</li>
                <li>To prevent fraud or abuse</li>
                <li>In case of emergency or safety concerns</li>
              </ul>
            </div>
          </div>
        )}

        {renderSection(
          '4. Data Security',
          <div className="space-y-4">
            <p className="text-sm sm:text-base text-white/80 leading-relaxed">
              We implement appropriate technical and organizational measures to protect your personal information:
            </p>
            <ul className="list-disc list-inside space-y-1 text-white/80">
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security assessments and updates</li>
              <li>Access controls and authentication</li>
              <li>Secure data centers and infrastructure</li>
              <li>Employee training on data protection</li>
            </ul>
            <p className="text-sm sm:text-base text-white/80 leading-relaxed">
              However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
            </p>
          </div>
        )}

        {renderSection(
          '5. Your Rights and Choices',
          <div className="space-y-4">
            <p className="text-sm sm:text-base text-white/80 leading-relaxed">
              You have certain rights regarding your personal information:
            </p>
            <ul className="list-disc list-inside space-y-1 text-white/80">
              <li>Access: Request a copy of your personal information</li>
              <li>Correction: Update or correct inaccurate information</li>
              <li>Deletion: Request deletion of your personal information</li>
              <li>Portability: Export your data in a machine-readable format</li>
              <li>Restriction: Limit how we process your information</li>
              <li>Objection: Object to certain processing activities</li>
            </ul>
            <Button
              onClick={handleDataRequest}
              className="bg-[#A690F2] hover:bg-[#9C7FE8] text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none"
            >
              Request Your Data
            </Button>
          </div>
        )}

        {renderSection(
          '6. Data Retention',
          <p className="text-sm sm:text-base text-white/80 leading-relaxed">
            We retain your personal information for as long as necessary to provide our Service and fulfill the purposes outlined in this Privacy Policy. We will delete or anonymize your information when it is no longer needed, unless we are required to retain it for legal or regulatory purposes.
          </p>
        )}

        {renderSection(
          '7. Children\'s Privacy',
          <p className="text-sm sm:text-base text-white/80 leading-relaxed">
            Our Service is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us so we can delete such information.
          </p>
        )}

        {renderSection(
          '8. International Data Transfers',
          <p className="text-sm sm:text-base text-white/80 leading-relaxed">
            Your information may be transferred to and processed in countries other than your own. We ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards to protect your information.
          </p>
        )}

        {renderSection(
          '9. Third-Party Services',
          <div className="space-y-4">
            <p className="text-sm sm:text-base text-white/80 leading-relaxed">
              Our Service may contain links to third-party websites or services. We are not responsible for the privacy practices of these third parties. We encourage you to read their privacy policies before providing any information.
            </p>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-white">Integrated Services:</h3>
              <ul className="list-disc list-inside space-y-1 text-white/80">
                <li>Spotify (for music recommendations)</li>
                <li>Goodreads (for book recommendations)</li>
                <li>Letterboxd (for movie recommendations)</li>
                <li>Apple Music (for music integration)</li>
              </ul>
            </div>
          </div>
        )}

        {renderSection(
          '10. Changes to This Privacy Policy',
          <p className="text-sm sm:text-base text-white/80 leading-relaxed">
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. We encourage you to review this Privacy Policy periodically for any changes.
          </p>
        )}

        {renderSection(
          '11. California Privacy Rights',
          <div className="space-y-4">
            <p className="text-sm sm:text-base text-white/80 leading-relaxed">
              If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA):
            </p>
            <ul className="list-disc list-inside space-y-1 text-white/80">
              <li>Right to know what personal information is collected</li>
              <li>Right to delete personal information</li>
              <li>Right to opt-out of the sale of personal information</li>
              <li>Right to non-discrimination for exercising privacy rights</li>
            </ul>
          </div>
        )}

        {renderSection(
          '12. European Privacy Rights',
          <div className="space-y-4">
            <p className="text-sm sm:text-base text-white/80 leading-relaxed">
              If you are in the European Economic Area (EEA), you have rights under the General Data Protection Regulation (GDPR):
            </p>
            <ul className="list-disc list-inside space-y-1 text-white/80">
              <li>Right of access to your personal data</li>
              <li>Right to rectification of inaccurate data</li>
              <li>Right to erasure ("right to be forgotten")</li>
              <li>Right to restrict processing</li>
              <li>Right to data portability</li>
              <li>Right to object to processing</li>
            </ul>
          </div>
        )}

        {renderSection(
          'Contact Us',
          <div className="space-y-4">
            <p className="text-sm sm:text-base text-white/80 leading-relaxed">
              If you have any questions about this Privacy Policy or our privacy practices, please contact us:
            </p>
            <ul className="list-disc list-inside space-y-1 text-white/80">
              <li>By email: shelfieplatform@gmail.com</li>
              <li>By visiting: https://shelfieplatform.github.io/shelfie.github.io/</li>
            </ul>
            <div className="flex gap-4">
              <Button
                onClick={handleEmailContact}
                className="bg-[#A690F2] hover:bg-[#9C7FE8] text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none"
              >
                <Mail className="w-4 h-4 mr-2" />
                Contact Privacy Team
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

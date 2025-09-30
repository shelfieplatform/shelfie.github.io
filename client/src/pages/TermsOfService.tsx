import TermsOfService from "@/components/TermsOfService";

export default function TermsOfServicePage() {
  const handleBack = () => {
    window.history.back();
  };

  const handleShowPrivacyPolicy = () => {
    window.location.href = '/privacy-policy';
  };

  return <TermsOfService onBack={handleBack} onShowPrivacyPolicy={handleShowPrivacyPolicy} />;
}

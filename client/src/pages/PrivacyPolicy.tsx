import PrivacyPolicy from "@/components/PrivacyPolicy";

export default function PrivacyPolicyPage() {
  const handleBack = () => {
    window.history.back();
  };

  return <PrivacyPolicy onBack={handleBack} />;
}

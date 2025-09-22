import { PlusCircle, UserPlus, Search, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function HowItWorks() {
  const { t } = useLanguage();

  const steps = [
    {
      icon: PlusCircle,
      title: t('howItWorks.step1.title'),
      description: t('howItWorks.step1.description')
    },
    {
      icon: UserPlus,
      title: t('howItWorks.step2.title'),
      description: t('howItWorks.step2.description')
    },
    {
      icon: Search,
      title: t('howItWorks.step3.title'),
      description: t('howItWorks.step3.description')
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center p-4 sm:p-6">
              <div className="bg-white/10 p-4 sm:p-5 rounded-full mb-4 sm:mb-6 w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
                <step.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-white leading-tight">{step.title}</h3>
              <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-xs sm:max-w-sm">{step.description}</p>
              {index < steps.length - 1 && (
                <ArrowRight className="w-6 h-6 mt-6 hidden md:block text-white/60" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

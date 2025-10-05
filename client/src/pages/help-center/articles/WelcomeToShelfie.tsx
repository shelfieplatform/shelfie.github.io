import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, BookOpen, Heart, Users, Star, CheckCircle, BookMarked } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "wouter";

export default function WelcomeToShelfie(props: any) {
  const { onBack } = props;
  const { t } = useLanguage();

  const features = [
    {
      icon: BookOpen,
      title: t('helpCenter.articles.welcome.features.digitalShelf.title'),
      description: t('helpCenter.articles.welcome.features.digitalShelf.description')
    },
    {
      icon: Heart,
      title: t('helpCenter.articles.welcome.features.socialDiscovery.title'),
      description: t('helpCenter.articles.welcome.features.socialDiscovery.description')
    },
    {
      icon: Users,
      title: t('helpCenter.articles.welcome.features.community.title'),
      description: t('helpCenter.articles.welcome.features.community.description')
    },
    {
      icon: Star,
      title: t('helpCenter.articles.welcome.features.recommendations.title'),
      description: t('helpCenter.articles.welcome.features.recommendations.description')
    },
    {
      icon: BookMarked,
      title: t('helpCenter.articles.welcome.features.privateDiary.title'),
      description: t('helpCenter.articles.welcome.features.privateDiary.description')
    }
  ];

  const gettingStartedSteps = [
    t('helpCenter.articles.welcome.steps.createAccount'),
    t('helpCenter.articles.welcome.steps.setupProfile'),
    t('helpCenter.articles.welcome.steps.addFavorites'),
    t('helpCenter.articles.welcome.steps.followUsers'),
    t('helpCenter.articles.welcome.steps.exploreContent')
  ];

  const relatedArticles = [
    {
      title: t('helpCenter.articles.welcome.related.creatingAccount'),
      href: "/help-center/getting-started/creating-account"
    },
    {
      title: t('helpCenter.articles.welcome.related.settingUpProfile'),
      href: "/help-center/getting-started/setting-up-profile"
    },
    {
      title: t('helpCenter.articles.welcome.related.addingBooks'),
      href: "/help-center/adding-favorites/add-books"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#A690F2] to-[#2C1761] text-white">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            <div className="flex items-center space-x-4">
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
                <Link href="/help-center/getting-started">
                  <Button
                    variant="ghost"
                    className="text-white hover:bg-white/10"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    {t('helpCenter.back')}
                  </Button>
                </Link>
              )}
            </div>
            <h1 className="text-lg sm:text-xl font-bold text-white">
              {t('helpCenter.articles.welcome.title')}
            </h1>
            <div className="w-20" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        {/* Article Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
            {t('helpCenter.articles.welcome.title')}
          </h1>
          <p className="text-lg text-white/80 mb-6">
            {t('helpCenter.articles.welcome.subtitle')}
          </p>
          <div className="flex items-center justify-center space-x-4 text-sm text-white/60">
            <span>{t('helpCenter.articles.welcome.readTime')}</span>
            <span>•</span>
            <span>{t('helpCenter.articles.welcome.lastUpdated')}</span>
          </div>
        </div>

        {/* Introduction */}
        <div className="mb-12">
          <Card className="bg-white/10 border-white/20">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-white">
                {t('helpCenter.articles.welcome.introduction.title')}
              </h2>
              <p className="text-white/80 leading-relaxed mb-6">
                {t('helpCenter.articles.welcome.introduction.content')}
              </p>
              <div className="bg-white/5 rounded-lg p-6">
                <h3 className="font-semibold mb-3 text-white">
                  {t('helpCenter.articles.welcome.introduction.highlight')}
                </h3>
                <p className="text-white/80 text-sm">
                  {t('helpCenter.articles.welcome.introduction.highlightContent')}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Key Features */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-8 text-center text-white">
            {t('helpCenter.articles.welcome.features.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="bg-white/10 border-white/20">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-lg bg-white/10 flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2 text-white">
                        {feature.title}
                      </h3>
                      <p className="text-white/80 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Getting Started Steps */}
        <div className="mb-12">
          <Card className="bg-white/10 border-white/20">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-white">
                {t('helpCenter.articles.welcome.steps.title')}
              </h2>
              <div className="space-y-4">
                {gettingStartedSteps.map((step, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-[#A690F2] rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-white/80">{step}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Success Tips */}
        <div className="mb-12">
          <Card className="bg-white/10 border-white/20">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-white">
                {t('helpCenter.articles.welcome.tips.title')}
              </h2>
              <div className="space-y-4">
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="font-semibold mb-2 text-white">
                    {t('helpCenter.articles.welcome.tips.tip1.title')}
                  </h3>
                  <p className="text-white/80 text-sm">
                    {t('helpCenter.articles.welcome.tips.tip1.content')}
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="font-semibold mb-2 text-white">
                    {t('helpCenter.articles.welcome.tips.tip2.title')}
                  </h3>
                  <p className="text-white/80 text-sm">
                    {t('helpCenter.articles.welcome.tips.tip2.content')}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Related Articles */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center text-white">
            {t('helpCenter.articles.welcome.related.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {relatedArticles.map((article, index) => (
              <Link key={index} href={article.href}>
                <Card className="bg-white/10 border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer">
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-sm text-white group-hover:text-white transition-colors">
                      {article.title}
                    </h3>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between">
          <Link href="/help-center/getting-started">
            <Button
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 w-full sm:w-auto"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t('helpCenter.backToCategory')}
            </Button>
          </Link>
          <Link href="/help-center/getting-started/creating-account">
            <Button className="bg-[#A690F2] hover:bg-[#9C7FE8] text-white w-full sm:w-auto">
              {t('helpCenter.articles.welcome.nextArticle')}
              <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

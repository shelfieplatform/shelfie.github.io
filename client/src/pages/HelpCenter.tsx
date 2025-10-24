import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, BookOpen, User, Heart, Shield, Wrench, MessageCircle, ArrowRight, HelpCircle, Home } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useAnalytics } from "@/contexts/AnalyticsContext";
import { Link } from "wouter";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import SearchResults from "@/components/SearchResults";

interface HelpCenterProps {
  onBack?: () => void;
}

export default function HelpCenter(props: any) {
  const { onBack } = props;
  const { t } = useLanguage();
  const { trackHelpCenterSearch } = useAnalytics();
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearchResults, setShowSearchResults] = useState(false);
  // URGENT: Custom domain not updating - Force deployment for shelfieplatform.com


  const categories = [
    {
      title: t('helpCenter.categories.gettingStarted.title'),
      description: t('helpCenter.categories.gettingStarted.description'),
      icon: BookOpen,
      href: "/help-center/getting-started",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: t('helpCenter.categories.accountProfile.title'),
      description: t('helpCenter.categories.accountProfile.description'),
      icon: User,
      href: "/help-center/account-profile",
      color: "from-green-500 to-green-600"
    },
    {
      title: t('helpCenter.categories.addingFavorites.title'),
      description: t('helpCenter.categories.addingFavorites.description'),
      icon: Heart,
      href: "/help-center/adding-favorites",
      color: "from-purple-500 to-purple-600"
    },
    {
      title: t('helpCenter.categories.privacySecurity.title'),
      description: t('helpCenter.categories.privacySecurity.description'),
      icon: Shield,
      href: "/help-center/privacy-security",
      color: "from-red-500 to-red-600"
    },
    {
      title: t('helpCenter.categories.troubleshooting.title'),
      description: t('helpCenter.categories.troubleshooting.description'),
      icon: Wrench,
      href: "/help-center/troubleshooting",
      color: "from-orange-500 to-orange-600"
    },
    {
      title: t('helpCenter.categories.contactSupport.title'),
      description: t('helpCenter.categories.contactSupport.description'),
      icon: MessageCircle,
      href: "/help-center/contact",
      color: "from-teal-500 to-teal-600"
    }
  ];

  const popularArticles = [
    {
      title: t('helpCenter.popular.welcome.title'),
      description: t('helpCenter.popular.welcome.description'),
      href: "/help-center/getting-started/welcome"
    },
    {
      title: t('helpCenter.popular.setupProfile.title'),
      description: t('helpCenter.popular.setupProfile.description'),
      href: "/help-center/getting-started/setting-up-profile"
    },
    {
      title: t('helpCenter.popular.addBooks.title'),
      description: t('helpCenter.popular.addBooks.description'),
      href: "/help-center/adding-favorites/add-books"
    },
    {
      title: t('helpCenter.popular.privacySettings.title'),
      description: t('helpCenter.popular.privacySettings.description'),
      href: "/help-center/privacy-security/privacy-settings"
    }
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setShowSearchResults(true);
      // Track search analytics
      trackHelpCenterSearch(searchQuery, 0); // Results count will be updated by SearchResults component
    }
  };

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    if (e.target.value.trim()) {
      setShowSearchResults(true);
    } else {
      setShowSearchResults(false);
    }
  };

  const handleCloseSearch = () => {
    setShowSearchResults(false);
    setSearchQuery("");
  };

  return (
    <>
      {showSearchResults && (
        <SearchResults 
          query={searchQuery} 
          onClose={handleCloseSearch} 
        />
      )}
      <div className="min-h-screen bg-gradient-to-b from-[#A690F2] to-[#2C1761] text-white">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            <div className="flex items-center space-x-4">
              {onBack && (
                <Button
                  onClick={onBack}
                  variant="ghost"
                  className="text-white hover:bg-white/10"
                >
                  ← {t('helpCenter.back')}
                </Button>
              )}
              <Link href="/" className="text-lg sm:text-xl font-bold text-white hover:opacity-80 transition-opacity">
                Shelfie
              </Link>
            </div>
            <h1 className="text-lg sm:text-xl font-bold text-white">{t('helpCenter.title')}</h1>
            <LanguageSwitcher />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
            {t('helpCenter.hero.title')}
          </h1>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            {t('helpCenter.hero.subtitle')}
          </p>
          
          {/* Search Bar */}
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto mb-8">
            <div className="relative group">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/70 w-5 h-5 transition-colors group-focus-within:text-white" />
              <Input
                type="text"
                placeholder={t('helpCenter.search.placeholder')}
                value={searchQuery}
                onChange={handleSearchInputChange}
                className="pl-10 pr-4 py-3 bg-white/10 border-white/20 text-white placeholder-white focus:bg-white/20 focus:border-white/40 focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-transparent transition-all duration-200 hover:bg-white/15 hover:border-white/30"
              />
            </div>
          </form>
        </div>

        {/* Browse by Category */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center text-white">
            {t('helpCenter.categories.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <Link key={index} href={category.href}>
                <Card className="bg-white/10 border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer group">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} flex-shrink-0`}>
                        <category.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-2 text-white group-hover:text-white transition-colors">
                          {category.title}
                        </h3>
                        <p className="text-white/70 text-sm mb-3">
                          {category.description}
                        </p>
                        <div className="flex items-center text-white/60 group-hover:text-white transition-colors">
                          <span className="text-sm">{t('helpCenter.categories.viewAll')}</span>
                          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Popular Articles */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center text-white">
            {t('helpCenter.popular.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {popularArticles.map((article, index) => (
              <Link key={index} href={article.href}>
                <Card className="bg-white/10 border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer group">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-2 rounded-lg bg-white/10 flex-shrink-0">
                        <HelpCircle className="w-5 h-5 text-white/80" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-2 text-white group-hover:text-white transition-colors">
                          {article.title}
                        </h3>
                        <p className="text-white/70 text-sm">
                          {article.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Contact Support */}
        <div className="text-center">
          <Card className="bg-white/10 border-white/20 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-4 text-white">
                {t('helpCenter.contact.title')}
              </h3>
              <p className="text-white/80 mb-6">
                {t('helpCenter.contact.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => window.open('mailto:shelfieplatform@gmail.com', '_blank')}
                  className="bg-[#A690F2] hover:bg-[#9C7FE8] text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  {t('helpCenter.contact.emailSupport')}
                </Button>
                <Link href="/help-center/contact">
                  <Button
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white/10"
                  >
                    {t('helpCenter.contact.contactForm')}
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      </div>
    </>
  );
}

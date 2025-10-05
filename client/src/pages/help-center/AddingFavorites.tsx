import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Heart, BookOpen, Film, Music, Upload, FolderOpen, Share, Search, Star, Layers, Download, Tag } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "wouter";

interface AddingFavoritesProps {
  onBack?: () => void;
}

export default function AddingFavorites(props: any) {
  const { onBack } = props;
  const { t } = useLanguage();

  const articles = [
    {
      title: t('helpCenter.addingFavorites.addBooks.title'),
      description: t('helpCenter.addingFavorites.addBooks.description'),
      icon: BookOpen,
      href: "/help-center/adding-favorites/add-books",
      estimatedTime: "5 min read"
    },
    {
      title: t('helpCenter.addingFavorites.addMoviesTv.title'),
      description: t('helpCenter.addingFavorites.addMoviesTv.description'),
      icon: Film,
      href: "/help-center/adding-favorites/add-movies-tv",
      estimatedTime: "5 min read"
    },
    {
      title: t('helpCenter.addingFavorites.addMusic.title'),
      description: t('helpCenter.addingFavorites.addMusic.description'),
      icon: Music,
      href: "/help-center/adding-favorites/add-music",
      estimatedTime: "4 min read"
    },
    {
      title: t('helpCenter.addingFavorites.importLists.title'),
      description: t('helpCenter.addingFavorites.importLists.description'),
      icon: Upload,
      href: "/help-center/adding-favorites/import-lists",
      estimatedTime: "6 min read"
    },
    {
      title: t('helpCenter.addingFavorites.organizeFavorites.title'),
      description: t('helpCenter.addingFavorites.organizeFavorites.description'),
      icon: FolderOpen,
      href: "/help-center/adding-favorites/organize-favorites",
      estimatedTime: "4 min read"
    },
    {
      title: t('helpCenter.addingFavorites.customLists.title'),
      description: t('helpCenter.addingFavorites.customLists.description'),
      icon: Layers,
      href: "/help-center/adding-favorites/custom-lists",
      estimatedTime: "5 min read"
    },
    {
      title: t('helpCenter.addingFavorites.shareFavorites.title'),
      description: t('helpCenter.addingFavorites.shareFavorites.description'),
      icon: Share,
      href: "/help-center/adding-favorites/share-favorites",
      estimatedTime: "3 min read"
    },
    {
      title: t('helpCenter.addingFavorites.findContent.title'),
      description: t('helpCenter.addingFavorites.findContent.description'),
      icon: Search,
      href: "/help-center/adding-favorites/find-content",
      estimatedTime: "4 min read"
    },
    {
      title: t('helpCenter.addingFavorites.ratingReviewing.title'),
      description: t('helpCenter.addingFavorites.ratingReviewing.description'),
      icon: Star,
      href: "/help-center/adding-favorites/rating-reviewing",
      estimatedTime: "3 min read"
    },
    {
      title: t('helpCenter.addingFavorites.manageCollections.title'),
      description: t('helpCenter.addingFavorites.manageCollections.description'),
      icon: FolderOpen,
      href: "/help-center/adding-favorites/manage-collections",
      estimatedTime: "4 min read"
    },
    {
      title: t('helpCenter.addingFavorites.bulkImport.title'),
      description: t('helpCenter.addingFavorites.bulkImport.description'),
      icon: Download,
      href: "/help-center/adding-favorites/bulk-import",
      estimatedTime: "5 min read"
    },
    {
      title: t('helpCenter.addingFavorites.favoriteCategories.title'),
      description: t('helpCenter.addingFavorites.favoriteCategories.description'),
      icon: Tag,
      href: "/help-center/adding-favorites/favorite-categories",
      estimatedTime: "3 min read"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#A690F2] to-[#2C1761] text-white">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
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
              <Link href="/help-center">
                <Button
                  variant="ghost"
                  className="text-white hover:bg-white/10"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  {t('helpCenter.back')}
                </Button>
              </Link>
            )}
            <h1 className="text-lg sm:text-xl font-bold text-white">
              {t('helpCenter.categories.addingFavorites.title')}
            </h1>
            <div className="w-20" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        {/* Category Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full mb-4">
            <Heart className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
            {t('helpCenter.categories.addingFavorites.title')}
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            {t('helpCenter.categories.addingFavorites.description')}
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {articles.map((article, index) => (
            <Link key={index} href={article.href}>
              <Card className="bg-white/10 border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer group">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-lg bg-white/10 flex-shrink-0 group-hover:bg-white/20 transition-colors">
                      <article.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2 text-white group-hover:text-white transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-white/70 text-sm mb-3">
                        {article.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-white/60">
                          {article.estimatedTime}
                        </span>
                        <div className="text-white/60 group-hover:text-white transition-colors">
                          <ArrowLeft className="w-4 h-4 rotate-180" />
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Back to Help Center */}
        <div className="text-center mt-12">
          <Link href="/help-center">
            <Button
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t('helpCenter.backToHelpCenter')}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

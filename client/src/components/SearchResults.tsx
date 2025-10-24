import { useState, useEffect, useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Clock, Tag, ArrowRight, X, Filter } from "lucide-react";
import { Link } from "wouter";
import Fuse from "fuse.js";
import { SearchArticle, getSearchData } from "@/lib/searchData";
import { useLanguage } from "@/contexts/LanguageContext";
import { useAnalytics } from "@/contexts/AnalyticsContext";

interface SearchResultsProps {
  query: string;
  onClose: () => void;
}

export default function SearchResults({ query, onClose }: SearchResultsProps) {
  const { t } = useLanguage();
  const { trackHelpCenterSearch } = useAnalytics();
  // Force rebuild: Search modal dark theme deployment - CACHE BUST $(Date.now())
  const [searchQuery, setSearchQuery] = useState(query);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [sortBy, setSortBy] = useState<"relevance" | "category" | "time">("relevance");

  // Get search data
  const searchData = useMemo(() => getSearchData(t), [t]);

  // Fuse.js configuration
  const fuseOptions = {
    keys: [
      { name: "title", weight: 0.4 },
      { name: "description", weight: 0.3 },
      { name: "content", weight: 0.2 },
      { name: "tags", weight: 0.1 }
    ],
    threshold: 0.3,
    includeScore: true,
    includeMatches: true
  };

  const fuse = useMemo(() => new Fuse(searchData, fuseOptions), [searchData]);

  // Search results
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];

    const results = fuse.search(searchQuery);
    
    // Track search analytics
    trackHelpCenterSearch(searchQuery, results.length);
    
    // Filter by category if selected
    let filteredResults = results;
    if (selectedCategory !== "all") {
      filteredResults = results.filter(result => result.item.categoryKey === selectedCategory);
    }

    // Sort results
    switch (sortBy) {
      case "category":
        return filteredResults.sort((a, b) => a.item.category.localeCompare(b.item.category));
      case "time":
        return filteredResults.sort((a, b) => {
          const timeA = parseInt(a.item.estimatedTime);
          const timeB = parseInt(b.item.estimatedTime);
          return timeA - timeB;
        });
      default: // relevance
        return filteredResults.sort((a, b) => (a.score || 0) - (b.score || 0));
    }
  }, [searchQuery, selectedCategory, sortBy, fuse]);

  // Get unique categories for filter
  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(searchData.map(item => item.categoryKey)));
    return uniqueCategories.map(key => ({
      key,
      label: searchData.find(item => item.categoryKey === key)?.category || key
    }));
  }, [searchData]);

  // Highlight search terms in text
  const highlightText = (text: string, query: string) => {
    if (!query.trim()) return text;
    
    const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    const parts = text.split(regex);
    
    return parts.map((part, index) => 
      regex.test(part) ? (
        <mark key={index} className="bg-yellow-200 text-yellow-900 px-1 rounded">
          {part}
        </mark>
      ) : part
    );
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-start justify-center p-4">
      <div className="bg-gradient-to-b from-[#A690F2] to-[#2C1761] rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden !important" style={{background: 'linear-gradient(to bottom, #A690F2, #2C1761)'}}>
        {/* Header */}
        <div className="p-6 border-b border-white/20">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-white">
              {t('helpCenter.search.results')}
            </h2>
            <Button
              onClick={onClose}
              variant="ghost"
              size="sm"
              className="text-white/70 hover:text-white hover:bg-white/10"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Search Input */}
          <div className="relative mb-4 group">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/70 w-5 h-5 transition-colors group-focus-within:text-white" />
            <Input
              type="text"
              placeholder={t('helpCenter.search.placeholder')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-3 bg-white/10 border-white/20 text-white placeholder-white focus:bg-white/20 focus:border-white/40 focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-transparent transition-all duration-200"
              autoFocus
            />
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 items-center">
            {/* Category Filter */}
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-white/70" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-3 py-1 bg-white/10 border border-white/20 rounded-md text-sm text-white focus:outline-none focus:ring-2 focus:ring-white/20 focus:bg-white/20"
              >
                <option value="all" className="bg-[#2C1761] text-white">{t('helpCenter.search.allCategories')}</option>
                {categories.map(category => (
                  <option key={category.key} value={category.key} className="bg-[#2C1761] text-white">
                    {category.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort Filter */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-white/80">{t('helpCenter.search.sortBy')}:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as "relevance" | "category" | "time")}
                className="px-3 py-1 bg-white/10 border border-white/20 rounded-md text-sm text-white focus:outline-none focus:ring-2 focus:ring-white/20 focus:bg-white/20"
              >
                <option value="relevance" className="bg-[#2C1761] text-white">{t('helpCenter.search.relevance')}</option>
                <option value="category" className="bg-[#2C1761] text-white">{t('helpCenter.search.category')}</option>
                <option value="time" className="bg-[#2C1761] text-white">{t('helpCenter.search.readingTime')}</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          {searchResults.length === 0 ? (
            <div className="text-center py-12">
              <Search className="w-12 h-12 text-white/50 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">
                {t('helpCenter.search.noResults')}
              </h3>
              <p className="text-white/70">
                {t('helpCenter.search.noResultsDesc')}
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="text-sm text-white/80 mb-4">
                {t('helpCenter.search.foundResults', { count: searchResults.length })}
              </div>
              
              {searchResults.map((result, index) => (
                <Link key={index} href={result.item.href} onClick={onClose}>
                  <Card className="bg-white/10 border-white/20 hover:bg-white/20 transition-all duration-200 cursor-pointer border-l-4 border-l-[#A690F2] group">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="text-lg font-semibold text-white">
                              {highlightText(result.item.title, searchQuery)}
                            </h3>
                            <Badge variant="secondary" className="text-xs bg-white/20 text-white border-white/30">
                              {result.item.category}
                            </Badge>
                          </div>
                          
                          <p className="text-white/80 mb-3">
                            {highlightText(result.item.description, searchQuery)}
                          </p>
                          
                          <div className="flex items-center gap-4 text-sm text-white/60">
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {result.item.estimatedTime}
                            </div>
                            <div className="flex items-center gap-1">
                              <Tag className="w-4 h-4" />
                              {result.item.tags.slice(0, 3).join(", ")}
                            </div>
                          </div>
                        </div>
                        
                        <ArrowRight className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-white/20 bg-white/5">
          <div className="flex items-center justify-between">
            <p className="text-sm text-white/70">
              {t('helpCenter.search.searchTips')}
            </p>
            <Button
              onClick={onClose}
              variant="outline"
              size="sm"
              className="border-white/20 text-white hover:bg-white/10"
            >
              {t('helpCenter.search.close')}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

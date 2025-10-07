import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: any;
  noindex?: boolean;
  language?: string;
}

export default function SEOHead({
  title = 'Shelfie - Build Your Digital Shelf',
  description = 'Curate and organize your favorite books, music, movies, and TV shows. Connect with friends and discover new favorites through social sharing.',
  keywords = 'shelfie, digital shelf, books, movies, music, tv shows, social media, favorites, recommendations, discovery',
  canonicalUrl = 'https://www.shelfieplatform.com',
  ogImage = 'https://www.shelfieplatform.com/og-image.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  structuredData,
  noindex = false,
  language = 'en'
}: SEOHeadProps) {
  const fullTitle = title.includes('Shelfie') ? title : `${title} | Shelfie`;
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Shelfie Platform" />
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow'} />
      <link rel="canonical" href={canonicalUrl} />
      <html lang={language} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Shelfie" />
      <meta property="og:locale" content={language === 'tr' ? 'tr_TR' : 'en_US'} />
      
      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@shelfieplatform" />
      <meta name="twitter:creator" content="@shelfieplatform" />
      
      {/* Additional SEO */}
      <meta name="theme-color" content="#A690F2" />
      <meta name="msapplication-TileColor" content="#A690F2" />
      <meta name="color-scheme" content="dark" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
}

// Predefined structured data for different page types
export const getHomePageStructuredData = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Shelfie",
  "description": "Curate and organize your favorite books, music, movies, and TV shows. Connect with friends and discover new favorites through social sharing.",
  "url": "https://www.shelfieplatform.com/",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://www.shelfieplatform.com/help-center?search={search_term_string}",
    "query-input": "required name=search_term_string"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Shelfie Platform",
    "url": "https://www.shelfieplatform.com/",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.shelfieplatform.com/logo.png"
    }
  }
});

export const getHelpCenterStructuredData = () => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Help Center",
  "description": "Get help with using Shelfie. Find answers to common questions, learn how to use features, and get support.",
  "url": "https://www.shelfieplatform.com/help-center",
  "isPartOf": {
    "@type": "WebSite",
    "name": "Shelfie",
    "url": "https://www.shelfieplatform.com/"
  },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.shelfieplatform.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Help Center",
        "item": "https://www.shelfieplatform.com/help-center"
      }
    ]
  }
});

export const getArticleStructuredData = (title: string, description: string, url: string, category: string) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": title,
  "description": description,
  "url": url,
  "author": {
    "@type": "Organization",
    "name": "Shelfie Platform"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Shelfie Platform",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.shelfieplatform.com/logo.png"
    }
  },
  "datePublished": new Date().toISOString(),
  "dateModified": new Date().toISOString(),
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": url
  },
  "articleSection": category
});

export const getFAQStructuredData = (faqs: Array<{question: string, answer: string}>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

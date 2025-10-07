import { useLanguage } from "@/contexts/LanguageContext";

export interface SearchArticle {
  id: string;
  title: string;
  description: string;
  category: string;
  categoryKey: string;
  href: string;
  estimatedTime: string;
  tags: string[];
  content: string;
}

export const getSearchData = (t: (key: string) => string): SearchArticle[] => {
  return [
    // Getting Started Category
    {
      id: "welcome",
      title: t('helpCenter.gettingStarted.welcome.title'),
      description: t('helpCenter.gettingStarted.welcome.description'),
      category: t('helpCenter.categories.gettingStarted.title'),
      categoryKey: "gettingStarted",
      href: "/help-center/getting-started/welcome",
      estimatedTime: "5 min read",
      tags: ["welcome", "getting started", "first steps", "introduction"],
      content: t('helpCenter.gettingStarted.welcome.content') || "Welcome to Shelfie platform guide"
    },
    {
      id: "creatingAccount",
      title: t('helpCenter.gettingStarted.creatingAccount.title'),
      description: t('helpCenter.gettingStarted.creatingAccount.description'),
      category: t('helpCenter.categories.gettingStarted.title'),
      categoryKey: "gettingStarted",
      href: "/help-center/getting-started/creating-account",
      estimatedTime: "3 min read",
      tags: ["account", "signup", "registration", "create account"],
      content: t('helpCenter.gettingStarted.creatingAccount.content') || "How to create your Shelfie account"
    },
    {
      id: "settingUpProfile",
      title: t('helpCenter.gettingStarted.settingUpProfile.title'),
      description: t('helpCenter.gettingStarted.settingUpProfile.description'),
      category: t('helpCenter.categories.gettingStarted.title'),
      categoryKey: "gettingStarted",
      href: "/help-center/getting-started/setting-up-profile",
      estimatedTime: "4 min read",
      tags: ["profile", "setup", "bio", "profile picture", "personalization"],
      content: t('helpCenter.gettingStarted.settingUpProfile.content') || "Setting up your Shelfie profile"
    },
    {
      id: "dashboard",
      title: t('helpCenter.gettingStarted.dashboard.title'),
      description: t('helpCenter.gettingStarted.dashboard.description'),
      category: t('helpCenter.categories.gettingStarted.title'),
      categoryKey: "gettingStarted",
      href: "/help-center/getting-started/dashboard",
      estimatedTime: "3 min read",
      tags: ["dashboard", "home", "main page", "overview"],
      content: t('helpCenter.gettingStarted.dashboard.content') || "Understanding your Shelfie dashboard"
    },
    {
      id: "privacySettings",
      title: t('helpCenter.gettingStarted.privacySettings.title'),
      description: t('helpCenter.gettingStarted.privacySettings.description'),
      category: t('helpCenter.categories.gettingStarted.title'),
      categoryKey: "gettingStarted",
      href: "/help-center/getting-started/privacy-settings",
      estimatedTime: "4 min read",
      tags: ["privacy", "settings", "security", "visibility"],
      content: t('helpCenter.gettingStarted.privacySettings.content') || "Privacy settings configuration"
    },
    {
      id: "mobileApp",
      title: t('helpCenter.gettingStarted.mobileApp.title'),
      description: t('helpCenter.gettingStarted.mobileApp.description'),
      category: t('helpCenter.categories.gettingStarted.title'),
      categoryKey: "gettingStarted",
      href: "/help-center/getting-started/mobile-app",
      estimatedTime: "2 min read",
      tags: ["mobile", "app", "download", "ios", "android"],
      content: t('helpCenter.gettingStarted.mobileApp.content') || "Mobile app download and setup"
    },
    {
      id: "firstFollowers",
      title: t('helpCenter.gettingStarted.firstFollowers.title'),
      description: t('helpCenter.gettingStarted.firstFollowers.description'),
      category: t('helpCenter.categories.gettingStarted.title'),
      categoryKey: "gettingStarted",
      href: "/help-center/getting-started/first-followers",
      estimatedTime: "4 min read",
      tags: ["followers", "social", "community", "networking"],
      content: t('helpCenter.gettingStarted.firstFollowers.content') || "Getting your first followers on Shelfie"
    },
    {
      id: "followingUsers",
      title: t('helpCenter.gettingStarted.followingUsers.title'),
      description: t('helpCenter.gettingStarted.followingUsers.description'),
      category: t('helpCenter.categories.gettingStarted.title'),
      categoryKey: "gettingStarted",
      href: "/help-center/getting-started/following-users",
      estimatedTime: "3 min read",
      tags: ["following", "users", "social", "connections"],
      content: t('helpCenter.gettingStarted.followingUsers.content') || "How to follow other users"
    },
    {
      id: "platformTour",
      title: t('helpCenter.gettingStarted.platformTour.title'),
      description: t('helpCenter.gettingStarted.platformTour.description'),
      category: t('helpCenter.categories.gettingStarted.title'),
      categoryKey: "gettingStarted",
      href: "/help-center/getting-started/platform-tour",
      estimatedTime: "6 min read",
      tags: ["tour", "overview", "features", "navigation"],
      content: t('helpCenter.gettingStarted.platformTour.content') || "Complete platform tour and features"
    },

    // Account & Profile Category
    {
      id: "changeUsername",
      title: t('helpCenter.accountProfile.changeUsername.title'),
      description: t('helpCenter.accountProfile.changeUsername.description'),
      category: t('helpCenter.categories.accountProfile.title'),
      categoryKey: "accountProfile",
      href: "/help-center/account-profile/change-username",
      estimatedTime: "3 min read",
      tags: ["username", "change", "profile", "identity"],
      content: t('helpCenter.accountProfile.changeUsername.content') || "How to change your username"
    },
    {
      id: "updateProfile",
      title: t('helpCenter.accountProfile.updateProfile.title'),
      description: t('helpCenter.accountProfile.updateProfile.description'),
      category: t('helpCenter.categories.accountProfile.title'),
      categoryKey: "accountProfile",
      href: "/help-center/account-profile/update-profile",
      estimatedTime: "4 min read",
      tags: ["profile", "update", "edit", "personal information"],
      content: t('helpCenter.accountProfile.updateProfile.content') || "Updating your profile information"
    },
    {
      id: "profilePictures",
      title: t('helpCenter.accountProfile.profilePictures.title'),
      description: t('helpCenter.accountProfile.profilePictures.description'),
      category: t('helpCenter.categories.accountProfile.title'),
      categoryKey: "accountProfile",
      href: "/help-center/account-profile/profile-pictures",
      estimatedTime: "3 min read",
      tags: ["profile picture", "avatar", "photo", "image"],
      content: t('helpCenter.accountProfile.profilePictures.content') || "Setting up your profile picture"
    },
    {
      id: "settingBio",
      title: t('helpCenter.accountProfile.settingBio.title'),
      description: t('helpCenter.accountProfile.settingBio.description'),
      category: t('helpCenter.categories.accountProfile.title'),
      categoryKey: "accountProfile",
      href: "/help-center/account-profile/setting-bio",
      estimatedTime: "2 min read",
      tags: ["bio", "description", "about", "personal"],
      content: t('helpCenter.accountProfile.settingBio.content') || "Writing your bio"
    },
    {
      id: "securitySettings",
      title: t('helpCenter.accountProfile.securitySettings.title'),
      description: t('helpCenter.accountProfile.securitySettings.description'),
      category: t('helpCenter.categories.accountProfile.title'),
      categoryKey: "accountProfile",
      href: "/help-center/account-profile/security-settings",
      estimatedTime: "5 min read",
      tags: ["security", "settings", "privacy", "protection"],
      content: t('helpCenter.accountProfile.securitySettings.content') || "Account security settings"
    },
    {
      id: "twoFactorAuth",
      title: t('helpCenter.accountProfile.twoFactorAuth.title'),
      description: t('helpCenter.accountProfile.twoFactorAuth.description'),
      category: t('helpCenter.categories.accountProfile.title'),
      categoryKey: "accountProfile",
      href: "/help-center/account-profile/two-factor-auth",
      estimatedTime: "6 min read",
      tags: ["2fa", "two factor", "authentication", "security"],
      content: t('helpCenter.accountProfile.twoFactorAuth.content') || "Setting up two-factor authentication"
    },
    {
      id: "passwordManagement",
      title: t('helpCenter.accountProfile.passwordManagement.title'),
      description: t('helpCenter.accountProfile.passwordManagement.description'),
      category: t('helpCenter.categories.accountProfile.title'),
      categoryKey: "accountProfile",
      href: "/help-center/account-profile/password-management",
      estimatedTime: "4 min read",
      tags: ["password", "change", "reset", "security"],
      content: t('helpCenter.accountProfile.passwordManagement.content') || "Managing your password"
    },

    // Adding Favorites Category
    {
      id: "addBooks",
      title: t('helpCenter.addingFavorites.addBooks.title'),
      description: t('helpCenter.addingFavorites.addBooks.description'),
      category: t('helpCenter.categories.addingFavorites.title'),
      categoryKey: "addingFavorites",
      href: "/help-center/adding-favorites/add-books",
      estimatedTime: "5 min read",
      tags: ["books", "add", "favorites", "reading"],
      content: t('helpCenter.addingFavorites.addBooks.content') || "How to add books to your favorites"
    },
    {
      id: "addMoviesTv",
      title: t('helpCenter.addingFavorites.addMoviesTv.title'),
      description: t('helpCenter.addingFavorites.addMoviesTv.description'),
      category: t('helpCenter.categories.addingFavorites.title'),
      categoryKey: "addingFavorites",
      href: "/help-center/adding-favorites/add-movies-tv",
      estimatedTime: "5 min read",
      tags: ["movies", "tv", "shows", "entertainment"],
      content: t('helpCenter.addingFavorites.addMoviesTv.content') || "Adding movies and TV shows"
    },
    {
      id: "addMusic",
      title: t('helpCenter.addingFavorites.addMusic.title'),
      description: t('helpCenter.addingFavorites.addMusic.description'),
      category: t('helpCenter.categories.addingFavorites.title'),
      categoryKey: "addingFavorites",
      href: "/help-center/adding-favorites/add-music",
      estimatedTime: "4 min read",
      tags: ["music", "songs", "artists", "audio"],
      content: t('helpCenter.addingFavorites.addMusic.content') || "Adding music to your favorites"
    },
    {
      id: "importLists",
      title: t('helpCenter.addingFavorites.importLists.title'),
      description: t('helpCenter.addingFavorites.importLists.description'),
      category: t('helpCenter.categories.addingFavorites.title'),
      categoryKey: "addingFavorites",
      href: "/help-center/adding-favorites/import-lists",
      estimatedTime: "6 min read",
      tags: ["import", "lists", "bulk", "csv"],
      content: t('helpCenter.addingFavorites.importLists.content') || "Importing lists from other platforms"
    },
    {
      id: "shareFavorites",
      title: t('helpCenter.addingFavorites.shareFavorites.title'),
      description: t('helpCenter.addingFavorites.shareFavorites.description'),
      category: t('helpCenter.categories.addingFavorites.title'),
      categoryKey: "addingFavorites",
      href: "/help-center/adding-favorites/share-favorites",
      estimatedTime: "3 min read",
      tags: ["share", "social", "export", "recommendations"],
      content: t('helpCenter.addingFavorites.shareFavorites.content') || "Sharing your favorites"
    },
    {
      id: "findContent",
      title: t('helpCenter.addingFavorites.findContent.title'),
      description: t('helpCenter.addingFavorites.findContent.description'),
      category: t('helpCenter.categories.addingFavorites.title'),
      categoryKey: "addingFavorites",
      href: "/help-center/adding-favorites/find-content",
      estimatedTime: "4 min read",
      tags: ["search", "discover", "find", "content"],
      content: t('helpCenter.addingFavorites.findContent.content') || "Finding content to add"
    },
    {
      id: "manageCollections",
      title: t('helpCenter.addingFavorites.manageCollections.title'),
      description: t('helpCenter.addingFavorites.manageCollections.description'),
      category: t('helpCenter.categories.addingFavorites.title'),
      categoryKey: "addingFavorites",
      href: "/help-center/adding-favorites/manage-collections",
      estimatedTime: "4 min read",
      tags: ["collections", "organize", "manage", "shelves"],
      content: t('helpCenter.addingFavorites.manageCollections.content') || "Managing your collections"
    },
    {
      id: "bulkImport",
      title: t('helpCenter.addingFavorites.bulkImport.title'),
      description: t('helpCenter.addingFavorites.bulkImport.description'),
      category: t('helpCenter.categories.addingFavorites.title'),
      categoryKey: "addingFavorites",
      href: "/help-center/adding-favorites/bulk-import",
      estimatedTime: "5 min read",
      tags: ["bulk", "import", "mass", "upload"],
      content: t('helpCenter.addingFavorites.bulkImport.content') || "Bulk importing favorites"
    },
    {
      id: "favoriteCategories",
      title: t('helpCenter.addingFavorites.favoriteCategories.title'),
      description: t('helpCenter.addingFavorites.favoriteCategories.description'),
      category: t('helpCenter.categories.addingFavorites.title'),
      categoryKey: "addingFavorites",
      href: "/help-center/adding-favorites/favorite-categories",
      estimatedTime: "3 min read",
      tags: ["categories", "organize", "types", "classification"],
      content: t('helpCenter.addingFavorites.favoriteCategories.content') || "Understanding favorite categories"
    },

    // Privacy & Security Category
    {
      id: "privacySettingsOverview",
      title: t('helpCenter.privacySecurity.privacySettings.title'),
      description: t('helpCenter.privacySecurity.privacySettings.description'),
      category: t('helpCenter.categories.privacySecurity.title'),
      categoryKey: "privacySecurity",
      href: "/help-center/privacy-security/privacy-settings",
      estimatedTime: "5 min read",
      tags: ["privacy", "settings", "visibility", "control"],
      content: t('helpCenter.privacySecurity.privacySettings.content') || "Privacy settings overview"
    },
    {
      id: "dataProtection",
      title: t('helpCenter.privacySecurity.dataProtection.title'),
      description: t('helpCenter.privacySecurity.dataProtection.description'),
      category: t('helpCenter.categories.privacySecurity.title'),
      categoryKey: "privacySecurity",
      href: "/help-center/privacy-security/data-protection",
      estimatedTime: "6 min read",
      tags: ["data", "protection", "gdpr", "privacy"],
      content: t('helpCenter.privacySecurity.dataProtection.content') || "Data protection and privacy"
    },
    {
      id: "securityTips",
      title: t('helpCenter.privacySecurity.securityTips.title'),
      description: t('helpCenter.privacySecurity.securityTips.description'),
      category: t('helpCenter.categories.privacySecurity.title'),
      categoryKey: "privacySecurity",
      href: "/help-center/privacy-security/security-tips",
      estimatedTime: "7 min read",
      tags: ["security", "tips", "safety", "protection"],
      content: t('helpCenter.privacySecurity.securityTips.content') || "Security best practices"
    },
    {
      id: "accountRecovery",
      title: t('helpCenter.privacySecurity.accountRecovery.title'),
      description: t('helpCenter.privacySecurity.accountRecovery.description'),
      category: t('helpCenter.categories.privacySecurity.title'),
      categoryKey: "privacySecurity",
      href: "/help-center/privacy-security/account-recovery",
      estimatedTime: "4 min read",
      tags: ["recovery", "account", "access", "password"],
      content: t('helpCenter.privacySecurity.accountRecovery.content') || "Account recovery process"
    },

    // Troubleshooting Category
    {
      id: "loginIssues",
      title: t('helpCenter.troubleshooting.loginIssues.title'),
      description: t('helpCenter.troubleshooting.loginIssues.description'),
      category: t('helpCenter.categories.troubleshooting.title'),
      categoryKey: "troubleshooting",
      href: "/help-center/troubleshooting/login-issues",
      estimatedTime: "4 min read",
      tags: ["login", "signin", "access", "problems"],
      content: t('helpCenter.troubleshooting.loginIssues.content') || "Troubleshooting login issues"
    },
    {
      id: "appNotLoading",
      title: t('helpCenter.troubleshooting.appNotLoading.title'),
      description: t('helpCenter.troubleshooting.appNotLoading.description'),
      category: t('helpCenter.categories.troubleshooting.title'),
      categoryKey: "troubleshooting",
      href: "/help-center/troubleshooting/app-not-loading",
      estimatedTime: "5 min read",
      tags: ["app", "loading", "crash", "performance"],
      content: t('helpCenter.troubleshooting.appNotLoading.content') || "App not loading issues"
    },
    {
      id: "uploadProblems",
      title: t('helpCenter.troubleshooting.uploadProblems.title'),
      description: t('helpCenter.troubleshooting.uploadProblems.description'),
      category: t('helpCenter.categories.troubleshooting.title'),
      categoryKey: "troubleshooting",
      href: "/help-center/troubleshooting/upload-problems",
      estimatedTime: "4 min read",
      tags: ["upload", "files", "images", "problems"],
      content: t('helpCenter.troubleshooting.uploadProblems.content') || "Upload problems and solutions"
    },
    {
      id: "searchNotWorking",
      title: t('helpCenter.troubleshooting.searchNotWorking.title'),
      description: t('helpCenter.troubleshooting.searchNotWorking.description'),
      category: t('helpCenter.categories.troubleshooting.title'),
      categoryKey: "troubleshooting",
      href: "/help-center/troubleshooting/search-not-working",
      estimatedTime: "3 min read",
      tags: ["search", "find", "functionality", "issues"],
      content: t('helpCenter.troubleshooting.searchNotWorking.content') || "Search functionality issues"
    },
    {
      id: "notificationIssues",
      title: t('helpCenter.troubleshooting.notificationIssues.title'),
      description: t('helpCenter.troubleshooting.notificationIssues.description'),
      category: t('helpCenter.categories.troubleshooting.title'),
      categoryKey: "troubleshooting",
      href: "/help-center/troubleshooting/notification-issues",
      estimatedTime: "4 min read",
      tags: ["notifications", "alerts", "messages", "settings"],
      content: t('helpCenter.troubleshooting.notificationIssues.content') || "Notification issues and fixes"
    },
    {
      id: "performanceProblems",
      title: t('helpCenter.troubleshooting.performanceProblems.title'),
      description: t('helpCenter.troubleshooting.performanceProblems.description'),
      category: t('helpCenter.categories.troubleshooting.title'),
      categoryKey: "troubleshooting",
      href: "/help-center/troubleshooting/performance-problems",
      estimatedTime: "5 min read",
      tags: ["performance", "slow", "speed", "optimization"],
      content: t('helpCenter.troubleshooting.performanceProblems.content') || "Performance problems and solutions"
    },
    {
      id: "browserCompatibility",
      title: t('helpCenter.troubleshooting.browserCompatibility.title'),
      description: t('helpCenter.troubleshooting.browserCompatibility.description'),
      category: t('helpCenter.categories.troubleshooting.title'),
      categoryKey: "troubleshooting",
      href: "/help-center/troubleshooting/browser-compatibility",
      estimatedTime: "4 min read",
      tags: ["browser", "compatibility", "chrome", "firefox", "safari"],
      content: t('helpCenter.troubleshooting.browserCompatibility.content') || "Browser compatibility issues"
    },
    {
      id: "mobileAppIssues",
      title: t('helpCenter.troubleshooting.mobileAppIssues.title'),
      description: t('helpCenter.troubleshooting.mobileAppIssues.description'),
      category: t('helpCenter.categories.troubleshooting.title'),
      categoryKey: "troubleshooting",
      href: "/help-center/troubleshooting/mobile-app-issues",
      estimatedTime: "6 min read",
      tags: ["mobile", "app", "ios", "android", "issues"],
      content: t('helpCenter.troubleshooting.mobileAppIssues.content') || "Mobile app troubleshooting"
    },

    // Contact Support Category
    {
      id: "contactSupport",
      title: t('helpCenter.contactSupport.title'),
      description: t('helpCenter.contactSupport.description'),
      category: t('helpCenter.categories.contactSupport.title'),
      categoryKey: "contactSupport",
      href: "/help-center/contact",
      estimatedTime: "2 min read",
      tags: ["contact", "support", "help", "assistance"],
      content: t('helpCenter.contactSupport.content') || "Contact support options"
    },
    {
      id: "featureRequests",
      title: t('helpCenter.contactSupport.featureRequests.title'),
      description: t('helpCenter.contactSupport.featureRequests.description'),
      category: t('helpCenter.categories.contactSupport.title'),
      categoryKey: "contactSupport",
      href: "/help-center/contact/feature-requests",
      estimatedTime: "3 min read",
      tags: ["feature", "request", "suggestion", "feedback"],
      content: t('helpCenter.contactSupport.featureRequests.content') || "Submit feature requests"
    }
  ];
};

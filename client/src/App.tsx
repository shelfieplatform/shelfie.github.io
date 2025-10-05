import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Home from "@/pages/Home";
import PrivacyPolicyPage from "@/pages/PrivacyPolicy";
import TermsOfServicePage from "@/pages/TermsOfService";
import HelpCenter from "@/pages/HelpCenter";
import GettingStarted from "@/pages/help-center/GettingStarted";
import AccountProfile from "@/pages/help-center/AccountProfile";
import AddingFavorites from "@/pages/help-center/AddingFavorites";
import PrivacySecurity from "@/pages/help-center/PrivacySecurity";
import Troubleshooting from "@/pages/help-center/Troubleshooting";
import ContactSupport from "@/pages/help-center/ContactSupport";
import Feedback from "@/pages/help-center/contact/Feedback";
import BugReports from "@/pages/help-center/contact/BugReports";

// Individual Articles - Getting Started
import WelcomeToShelfie from "@/pages/help-center/articles/WelcomeToShelfie";
import CreatingAccount from "@/pages/help-center/articles/CreatingAccount";
import SettingUpProfile from "@/pages/help-center/articles/SettingUpProfile";
import Dashboard from "@/pages/help-center/articles/Dashboard";
import PrivacySettings from "@/pages/help-center/articles/PrivacySettings";
import MobileApp from "@/pages/help-center/articles/MobileApp";
import DesktopMobile from "@/pages/help-center/articles/DesktopMobile";
import UnderstandingNotifications from "@/pages/help-center/articles/UnderstandingNotifications";
import BasicSecurityTips from "@/pages/help-center/articles/BasicSecurityTips";
import GettingFirstFollowers from "@/pages/help-center/articles/GettingFirstFollowers";
import FollowingOtherUsers from "@/pages/help-center/articles/FollowingOtherUsers";
import PlatformTour from "@/pages/help-center/articles/PlatformTour";

// Individual Articles - Account & Profile
import ChangeUsername from "@/pages/help-center/articles/ChangeUsername";
import UpdateProfile from "@/pages/help-center/articles/UpdateProfile";
import ProfilePictures from "@/pages/help-center/articles/ProfilePictures";
import AccountSettings from "@/pages/help-center/articles/AccountSettings";
import DeleteAccount from "@/pages/help-center/articles/DeleteAccount";
import TwoFactorAuth from "@/pages/help-center/articles/TwoFactorAuth";
import ConnectedApps from "@/pages/help-center/articles/ConnectedApps";
import EmailPreferences from "@/pages/help-center/articles/EmailPreferences";
import NotificationSettings from "@/pages/help-center/articles/NotificationSettings";
import DataExport from "@/pages/help-center/articles/DataExport";
import BlockingReporting from "@/pages/help-center/articles/BlockingReporting";
import AccountRecovery from "@/pages/help-center/articles/AccountRecovery";

// Individual Articles - Adding Favorites
import AddingBooks from "@/pages/help-center/articles/AddingBooks";
import AddingMovies from "@/pages/help-center/articles/AddingMovies";
import AddingMusic from "@/pages/help-center/articles/AddingMusic";
import AddingSeries from "@/pages/help-center/articles/AddingSeries";
import CreatingShelves from "@/pages/help-center/articles/CreatingShelves";
import OrganizingFavorites from "@/pages/help-center/articles/OrganizingFavorites";
import SearchingFavorites from "@/pages/help-center/articles/SearchingFavorites";
import RatingReviewing from "@/pages/help-center/articles/RatingReviewing";
import SharingFavorites from "@/pages/help-center/articles/SharingFavorites";
import ImportingExporting from "@/pages/help-center/articles/ImportingExporting";
import BulkActions from "@/pages/help-center/articles/BulkActions";
import AdvancedSearch from "@/pages/help-center/articles/AdvancedSearch";

// Individual Articles - Privacy & Security
import PrivacySettingsOverview from "@/pages/help-center/articles/PrivacySettingsOverview";
import ProfileVisibility from "@/pages/help-center/articles/ProfileVisibility";
import BlockingReportingUsers from "@/pages/help-center/articles/BlockingReportingUsers";
import DataProtectionGDPR from "@/pages/help-center/articles/DataProtectionGDPR";
import AccountSecurityBestPractices from "@/pages/help-center/articles/AccountSecurityBestPractices";
import TwoFactorAuthentication from "@/pages/help-center/articles/TwoFactorAuthentication";
import PrivacyPolicyOverview from "@/pages/help-center/articles/PrivacyPolicyOverview";
import DataSharingSettings from "@/pages/help-center/articles/DataSharingSettings";
import SecurityAudit from "@/pages/help-center/articles/SecurityAudit";
import SecurityThreats from "@/pages/help-center/articles/SecurityThreats";
import SecurityTips from "@/pages/help-center/articles/SecurityTips";

// Individual Articles - Troubleshooting
import LoginIssues from "@/pages/help-center/articles/LoginIssues";
import AppNotLoading from "@/pages/help-center/articles/AppNotLoading";
import UploadProblems from "@/pages/help-center/articles/UploadProblems";
import SearchNotWorking from "@/pages/help-center/articles/SearchNotWorking";
import NotificationIssues from "@/pages/help-center/articles/NotificationIssues";
import PerformanceProblems from "@/pages/help-center/articles/PerformanceProblems";
import BrowserCompatibility from "@/pages/help-center/articles/BrowserCompatibility";
import MobileAppIssues from "@/pages/help-center/articles/MobileAppIssues";
import AccountAccessProblems from "@/pages/help-center/articles/AccountAccessProblems";
import DataSyncIssues from "@/pages/help-center/articles/DataSyncIssues";
import ErrorMessages from "@/pages/help-center/articles/ErrorMessages";
import ContactTechnicalSupport from "@/pages/help-center/articles/ContactTechnicalSupport";
import NotFound from "@/pages/not-found";
import { useEffect } from "react";

function Router() {
  const [location, setLocation] = useLocation();

  // No complex redirect logic needed - using static HTML files for legal pages

  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/privacy-policy" component={PrivacyPolicyPage} />
      <Route path="/terms-of-service" component={TermsOfServicePage} />
      <Route path="/help-center" component={HelpCenter} />
      <Route path="/help-center/getting-started" component={GettingStarted} />
      <Route path="/help-center/account-profile" component={AccountProfile} />
      <Route path="/help-center/adding-favorites" component={AddingFavorites} />
      <Route path="/help-center/privacy-security" component={PrivacySecurity} />
      <Route path="/help-center/troubleshooting" component={Troubleshooting} />
      <Route path="/help-center/contact" component={ContactSupport} />
      <Route path="/help-center/contact/feedback" component={Feedback} />
      <Route path="/help-center/contact/bug-reports" component={BugReports} />
      
      {/* Individual Articles - Getting Started */}
      <Route path="/help-center/getting-started/welcome" component={WelcomeToShelfie} />
      <Route path="/help-center/getting-started/welcome-to-shelfie" component={WelcomeToShelfie} />
      <Route path="/help-center/getting-started/creating-account" component={CreatingAccount} />
      <Route path="/help-center/getting-started/setting-up-profile" component={SettingUpProfile} />
      <Route path="/help-center/getting-started/dashboard" component={Dashboard} />
      <Route path="/help-center/getting-started/privacy-settings" component={PrivacySettings} />
      <Route path="/help-center/getting-started/mobile-app" component={MobileApp} />
      <Route path="/help-center/getting-started/desktop-mobile" component={DesktopMobile} />
      <Route path="/help-center/getting-started/notifications" component={UnderstandingNotifications} />
      <Route path="/help-center/getting-started/understanding-notifications" component={UnderstandingNotifications} />
      <Route path="/help-center/getting-started/security-tips" component={BasicSecurityTips} />
      <Route path="/help-center/getting-started/basic-security-tips" component={BasicSecurityTips} />
      <Route path="/help-center/getting-started/first-followers" component={GettingFirstFollowers} />
      <Route path="/help-center/getting-started/getting-first-followers" component={GettingFirstFollowers} />
      <Route path="/help-center/getting-started/following-users" component={FollowingOtherUsers} />
      <Route path="/help-center/getting-started/following-other-users" component={FollowingOtherUsers} />
      <Route path="/help-center/getting-started/platform-tour" component={PlatformTour} />
      
      {/* Individual Articles - Account & Profile */}
      <Route path="/help-center/account-profile/change-username" component={ChangeUsername} />
      <Route path="/help-center/account-profile/update-profile" component={UpdateProfile} />
      <Route path="/help-center/account-profile/profile-pictures" component={ProfilePictures} />
      <Route path="/help-center/account-profile/account-settings" component={AccountSettings} />
      <Route path="/help-center/account-profile/delete-account" component={DeleteAccount} />
      <Route path="/help-center/account-profile/two-factor-auth" component={TwoFactorAuth} />
      <Route path="/help-center/account-profile/connected-apps" component={ConnectedApps} />
      <Route path="/help-center/account-profile/email-preferences" component={EmailPreferences} />
      <Route path="/help-center/account-profile/notification-settings" component={NotificationSettings} />
      <Route path="/help-center/account-profile/data-export" component={DataExport} />
      <Route path="/help-center/account-profile/blocking-reporting" component={BlockingReporting} />
      <Route path="/help-center/account-profile/account-recovery" component={AccountRecovery} />
      
      {/* Additional Account Profile Routes */}
      <Route path="/help-center/account-profile/setting-bio" component={UpdateProfile} />
      <Route path="/help-center/account-profile/security-settings" component={TwoFactorAuth} />
      <Route path="/help-center/account-profile/password-management" component={AccountSettings} />
      <Route path="/help-center/account-profile/account-deactivation" component={DeleteAccount} />
      <Route path="/help-center/account-profile/profile-visibility" component={UpdateProfile} />
      
      {/* Individual Articles - Adding Favorites */}
      <Route path="/help-center/adding-favorites/add-books" component={AddingBooks} />
      <Route path="/help-center/adding-favorites/adding-books" component={AddingBooks} />
      <Route path="/help-center/adding-favorites/add-movies-tv" component={AddingMovies} />
      <Route path="/help-center/adding-favorites/adding-movies" component={AddingMovies} />
      <Route path="/help-center/adding-favorites/add-music" component={AddingMusic} />
      <Route path="/help-center/adding-favorites/adding-music" component={AddingMusic} />
      <Route path="/help-center/adding-favorites/adding-series" component={AddingSeries} />
      <Route path="/help-center/adding-favorites/import-lists" component={ImportingExporting} />
      <Route path="/help-center/adding-favorites/importing-exporting" component={ImportingExporting} />
      <Route path="/help-center/adding-favorites/organize-favorites" component={OrganizingFavorites} />
      <Route path="/help-center/adding-favorites/organizing-favorites" component={OrganizingFavorites} />
      <Route path="/help-center/adding-favorites/custom-lists" component={CreatingShelves} />
      <Route path="/help-center/adding-favorites/creating-shelves" component={CreatingShelves} />
      <Route path="/help-center/adding-favorites/share-favorites" component={SharingFavorites} />
      <Route path="/help-center/adding-favorites/sharing-favorites" component={SharingFavorites} />
      <Route path="/help-center/adding-favorites/find-content" component={SearchingFavorites} />
      <Route path="/help-center/adding-favorites/searching-favorites" component={SearchingFavorites} />
      <Route path="/help-center/adding-favorites/rating-reviewing" component={RatingReviewing} />
      <Route path="/help-center/adding-favorites/manage-collections" component={OrganizingFavorites} />
      <Route path="/help-center/adding-favorites/bulk-import" component={BulkActions} />
      <Route path="/help-center/adding-favorites/bulk-actions" component={BulkActions} />
      <Route path="/help-center/adding-favorites/favorite-categories" component={AdvancedSearch} />
      <Route path="/help-center/adding-favorites/advanced-search" component={AdvancedSearch} />
      
      {/* Individual Articles - Privacy & Security */}
      <Route path="/help-center/privacy-security/privacy-settings" component={PrivacySettingsOverview} />
      <Route path="/help-center/privacy-security/privacy-settings-overview" component={PrivacySettingsOverview} />
      <Route path="/help-center/privacy-security/profile-visibility" component={ProfileVisibility} />
      <Route path="/help-center/privacy-security/blocking-reporting" component={BlockingReportingUsers} />
      <Route path="/help-center/privacy-security/blocking-reporting-users" component={BlockingReportingUsers} />
      <Route path="/help-center/privacy-security/data-protection" component={DataProtectionGDPR} />
      <Route path="/help-center/privacy-security/data-protection-gdpr" component={DataProtectionGDPR} />
      <Route path="/help-center/privacy-security/security-best-practices" component={AccountSecurityBestPractices} />
      <Route path="/help-center/privacy-security/account-security-best-practices" component={AccountSecurityBestPractices} />
      <Route path="/help-center/privacy-security/two-factor-auth" component={TwoFactorAuthentication} />
      <Route path="/help-center/privacy-security/two-factor-authentication" component={TwoFactorAuthentication} />
      <Route path="/help-center/privacy-security/privacy-policy" component={PrivacyPolicyOverview} />
      <Route path="/help-center/privacy-security/privacy-policy-overview" component={PrivacyPolicyOverview} />
      <Route path="/help-center/privacy-security/data-sharing" component={DataSharingSettings} />
      <Route path="/help-center/privacy-security/data-sharing-settings" component={DataSharingSettings} />
      <Route path="/help-center/privacy-security/third-party-integrations" component={DataSharingSettings} />
      <Route path="/help-center/privacy-security/security-notifications" component={SecurityTips} />
      <Route path="/help-center/privacy-security/account-recovery" component={AccountRecovery} />
      <Route path="/help-center/privacy-security/data-deletion" component={AccountRecovery} />
      <Route path="/help-center/privacy-security/security-audit" component={SecurityAudit} />
      <Route path="/help-center/privacy-security/security-threats" component={SecurityThreats} />
      <Route path="/help-center/privacy-security/security-tips" component={SecurityTips} />
      
      {/* Individual Articles - Troubleshooting */}
      <Route path="/help-center/troubleshooting/login-issues" component={LoginIssues} />
      <Route path="/help-center/troubleshooting/app-not-loading" component={AppNotLoading} />
      <Route path="/help-center/troubleshooting/upload-problems" component={UploadProblems} />
      <Route path="/help-center/troubleshooting/search-not-working" component={SearchNotWorking} />
      <Route path="/help-center/troubleshooting/notification-issues" component={NotificationIssues} />
      <Route path="/help-center/troubleshooting/performance-problems" component={PerformanceProblems} />
      <Route path="/help-center/troubleshooting/browser-compatibility" component={BrowserCompatibility} />
      <Route path="/help-center/troubleshooting/mobile-app-issues" component={MobileAppIssues} />
      <Route path="/help-center/troubleshooting/account-access" component={AccountAccessProblems} />
      <Route path="/help-center/troubleshooting/account-access-problems" component={AccountAccessProblems} />
      <Route path="/help-center/troubleshooting/data-sync" component={DataSyncIssues} />
      <Route path="/help-center/troubleshooting/data-sync-issues" component={DataSyncIssues} />
      <Route path="/help-center/troubleshooting/error-messages" component={ErrorMessages} />
      <Route path="/help-center/troubleshooting/contact-support" component={ContactTechnicalSupport} />
      <Route path="/help-center/troubleshooting/contact-technical-support" component={ContactTechnicalSupport} />
      
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
}

export default App;
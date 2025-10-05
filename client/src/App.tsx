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
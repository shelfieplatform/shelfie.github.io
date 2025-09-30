import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Home from "@/pages/Home";
import PrivacyPolicyPage from "@/pages/PrivacyPolicy";
import TermsOfServicePage from "@/pages/TermsOfService";
import NotFound from "@/pages/not-found";
import { useEffect } from "react";

function Router() {
  const [location, setLocation] = useLocation();

  useEffect(() => {
    // Handle redirect from GitHub Pages 404.html (custom domain support)
    const redirectPath = sessionStorage.getItem('redirectPath') || localStorage.getItem('redirectPath');
    if (redirectPath && redirectPath !== '/') {
      // Clear the stored path and navigate
      sessionStorage.removeItem('redirectPath');
      localStorage.removeItem('redirectPath');
      setLocation(redirectPath);
    }
  }, [setLocation]);

  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/privacy-policy" component={PrivacyPolicyPage} />
      <Route path="/terms-of-service" component={TermsOfServicePage} />
      <Route path="/#/privacy-policy" component={PrivacyPolicyPage} />
      <Route path="/#/terms-of-service" component={TermsOfServicePage} />
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
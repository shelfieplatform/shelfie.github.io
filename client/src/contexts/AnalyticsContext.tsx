import { createContext, useContext, ReactNode } from 'react';
import { trackEvent, trackCustomEvent, trackPageView } from '@/components/GoogleAnalytics';

interface AnalyticsContextType {
  trackEvent: (eventName: string, parameters?: Record<string, any>) => void;
  trackCustomEvent: (eventName: string, eventCategory: string, eventLabel?: string, value?: number) => void;
  trackPageView: (pageName: string, pagePath: string) => void;
  trackWaitlistSignup: (email: string, name: string) => void;
  trackHelpCenterSearch: (query: string, resultsCount: number) => void;
  trackContactForm: (formType: string) => void;
  trackFeatureRequest: (featureType: string, priority: string) => void;
  trackBugReport: (bugType: string, severity: string) => void;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

interface AnalyticsProviderProps {
  children: ReactNode;
}

export function AnalyticsProvider({ children }: AnalyticsProviderProps) {
  const trackWaitlistSignup = (email: string, name: string) => {
    trackCustomEvent('waitlist_signup', 'engagement', 'user_joined_waitlist');
    trackEvent('waitlist_signup', {
      user_email: email,
      user_name: name,
      timestamp: new Date().toISOString(),
    });
  };

  const trackHelpCenterSearch = (query: string, resultsCount: number) => {
    trackCustomEvent('help_center_search', 'search', query, resultsCount);
    trackEvent('search', {
      search_term: query,
      results_count: resultsCount,
      page: 'help_center',
    });
  };

  const trackContactForm = (formType: string) => {
    trackCustomEvent('contact_form_submit', 'engagement', formType);
    trackEvent('form_submit', {
      form_type: formType,
      page: window.location.pathname,
    });
  };

  const trackFeatureRequest = (featureType: string, priority: string) => {
    trackCustomEvent('feature_request', 'feedback', featureType);
    trackEvent('feature_request', {
      feature_type: featureType,
      priority: priority,
      timestamp: new Date().toISOString(),
    });
  };

  const trackBugReport = (bugType: string, severity: string) => {
    trackCustomEvent('bug_report', 'feedback', bugType);
    trackEvent('bug_report', {
      bug_type: bugType,
      severity: severity,
      timestamp: new Date().toISOString(),
    });
  };

  const value: AnalyticsContextType = {
    trackEvent,
    trackCustomEvent,
    trackPageView,
    trackWaitlistSignup,
    trackHelpCenterSearch,
    trackContactForm,
    trackFeatureRequest,
    trackBugReport,
  };

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  );
}

export function useAnalytics() {
  const context = useContext(AnalyticsContext);
  if (context === undefined) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
}

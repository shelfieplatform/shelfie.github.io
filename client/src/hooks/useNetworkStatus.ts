import { useState, useEffect } from 'react';

interface NetworkStatus {
  isOnline: boolean;
  isSlowConnection: boolean;
  connectionType: string;
}

export function useNetworkStatus(): NetworkStatus {
  const [networkStatus, setNetworkStatus] = useState<NetworkStatus>({
    isOnline: navigator.onLine,
    isSlowConnection: false,
    connectionType: 'unknown'
  });

  useEffect(() => {
    const updateNetworkStatus = () => {
      setNetworkStatus(prev => ({
        ...prev,
        isOnline: navigator.onLine
      }));
    };

    // Check for slow connection
    const checkConnectionSpeed = () => {
      if ('connection' in navigator) {
        const connection = (navigator as any).connection;
        const isSlow = connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g';
        
        setNetworkStatus(prev => ({
          ...prev,
          isSlowConnection: isSlow,
          connectionType: connection.effectiveType || 'unknown'
        }));
      }
    };

    // Initial check
    checkConnectionSpeed();

    // Listen for online/offline events
    window.addEventListener('online', updateNetworkStatus);
    window.addEventListener('offline', updateNetworkStatus);

    // Listen for connection changes
    if ('connection' in navigator) {
      const connection = (navigator as any).connection;
      connection.addEventListener('change', checkConnectionSpeed);
    }

    return () => {
      window.removeEventListener('online', updateNetworkStatus);
      window.removeEventListener('offline', updateNetworkStatus);
      
      if ('connection' in navigator) {
        const connection = (navigator as any).connection;
        connection.removeEventListener('change', checkConnectionSpeed);
      }
    };
  }, []);

  return networkStatus;
}

export function useOfflineIndicator() {
  const { isOnline } = useNetworkStatus();
  const [showIndicator, setShowIndicator] = useState(false);

  useEffect(() => {
    if (!isOnline) {
      setShowIndicator(true);
    } else {
      // Hide indicator after a delay when coming back online
      const timer = setTimeout(() => {
        setShowIndicator(false);
      }, 2000);
      
      return () => clearTimeout(timer);
    }
  }, [isOnline]);

  return { isOnline, showIndicator };
}

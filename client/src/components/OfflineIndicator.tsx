import { useEffect, useState } from 'react';
import { Wifi, WifiOff, CheckCircle } from 'lucide-react';
import { useOfflineIndicator } from '@/hooks/useNetworkStatus';

export default function OfflineIndicator() {
  const { isOnline, showIndicator } = useOfflineIndicator();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (showIndicator) {
      setIsVisible(true);
    } else {
      const timer = setTimeout(() => setIsVisible(false), 300);
      return () => clearTimeout(timer);
    }
  }, [showIndicator]);

  if (!isVisible) return null;

  return (
    <div className={`fixed top-4 right-4 z-50 transition-all duration-300 ${
      isOnline ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
    }`}>
      <div className={`flex items-center gap-3 px-4 py-3 rounded-lg shadow-lg backdrop-blur-sm border ${
        isOnline 
          ? 'bg-green-500/20 border-green-400/30 text-green-200' 
          : 'bg-red-500/20 border-red-400/30 text-red-200'
      }`}>
        {isOnline ? (
          <>
            <CheckCircle className="w-5 h-5" />
            <span className="text-sm font-medium">Back online</span>
          </>
        ) : (
          <>
            <WifiOff className="w-5 h-5" />
            <span className="text-sm font-medium">You're offline</span>
          </>
        )}
      </div>
    </div>
  );
}

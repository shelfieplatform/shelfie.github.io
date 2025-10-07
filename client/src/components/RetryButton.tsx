import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { RefreshCw, AlertCircle } from 'lucide-react';

interface RetryButtonProps {
  onRetry: () => Promise<void> | void;
  error?: string;
  className?: string;
  children?: React.ReactNode;
}

export default function RetryButton({ 
  onRetry, 
  error, 
  className = '',
  children 
}: RetryButtonProps) {
  const [isRetrying, setIsRetrying] = useState(false);

  const handleRetry = async () => {
    setIsRetrying(true);
    try {
      await onRetry();
    } catch (err) {
      console.error('Retry failed:', err);
    } finally {
      setIsRetrying(false);
    }
  };

  return (
    <div className={`text-center ${className}`}>
      {error && (
        <div className="mb-4 p-3 bg-red-900/20 border border-red-500/30 rounded-lg">
          <div className="flex items-center gap-2 text-red-200">
            <AlertCircle className="w-4 h-4" />
            <span className="text-sm">{error}</span>
          </div>
        </div>
      )}
      
      <Button
        onClick={handleRetry}
        disabled={isRetrying}
        className="bg-[#A690F2] hover:bg-[#9C7FE8] text-white"
      >
        <RefreshCw className={`w-4 h-4 mr-2 ${isRetrying ? 'animate-spin' : ''}`} />
        {isRetrying ? 'Retrying...' : (children || 'Try Again')}
      </Button>
    </div>
  );
}

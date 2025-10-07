import { useState, useRef, useEffect, ReactNode } from 'react';

interface LazyComponentProps {
  children: ReactNode;
  fallback?: ReactNode;
  rootMargin?: string;
  threshold?: number;
  className?: string;
}

export default function LazyComponent({ 
  children, 
  fallback = <div className="w-full h-32 bg-gray-200 animate-pulse rounded" />,
  rootMargin = '50px',
  threshold = 0.1,
  className = ''
}: LazyComponentProps) {
  const [isInView, setIsInView] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isLoaded) {
          setIsInView(true);
          setIsLoaded(true);
          observer.disconnect();
        }
      },
      {
        rootMargin,
        threshold
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [rootMargin, threshold, isLoaded]);

  return (
    <div ref={containerRef} className={className}>
      {isInView ? children : fallback}
    </div>
  );
}

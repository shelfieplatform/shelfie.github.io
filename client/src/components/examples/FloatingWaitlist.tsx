import { useState } from 'react';
import { Button } from '@/components/ui/button';
import FloatingWaitlist from '../FloatingWaitlist';

export default function FloatingWaitlistExample() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="p-8">
      <Button onClick={() => setIsOpen(true)}>
        Open Waitlist Modal
      </Button>
      <FloatingWaitlist 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)} 
      />
    </div>
  );
}

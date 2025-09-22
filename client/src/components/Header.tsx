import { Button } from "@/components/ui/button";

interface HeaderProps {
  onJoinWaitlist: () => void;
}

export default function Header({ onJoinWaitlist }: HeaderProps) {
  return (
    <header className="fixed top-0 w-full z-40 bg-black/20 backdrop-blur-md border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-18 py-3 sm:py-2">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
              Shelfie
            </h1>
          </div>

          {/* CTA Button */}
          <div>
            <Button
              onClick={onJoinWaitlist}
              className="bg-[#A690F2] hover:bg-[#9C7FE8] text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none px-4 sm:px-6 py-2 text-sm sm:text-base"
              data-testid="button-join-waitlist"
            >
              <span className="hidden sm:inline">Join Waitlist</span>
              <span className="sm:hidden">Join</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

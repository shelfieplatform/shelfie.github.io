import { Button } from "@/components/ui/button";
import { BookOpen, Music, Film, Tv } from "lucide-react";

interface HeroProps {
  onJoinWaitlist?: () => void;
}

export default function Hero({ onJoinWaitlist }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-purple-600 to-blue-900" />
      
      {/* Floating Media Icons */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 animate-bounce">
          <div className="p-3 bg-white/10 rounded-full backdrop-blur-sm">
            <BookOpen className="w-6 h-6 text-white" />
          </div>
        </div>
        <div className="absolute top-32 right-24 animate-bounce delay-300">
          <div className="p-3 bg-white/10 rounded-full backdrop-blur-sm">
            <Music className="w-6 h-6 text-white" />
          </div>
        </div>
        <div className="absolute bottom-32 left-32 animate-bounce delay-500">
          <div className="p-3 bg-white/10 rounded-full backdrop-blur-sm">
            <Film className="w-6 h-6 text-white" />
          </div>
        </div>
        <div className="absolute bottom-20 right-20 animate-bounce delay-700">
          <div className="p-3 bg-white/10 rounded-full backdrop-blur-sm">
            <Tv className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
          Welcome to{" "}
          <span className="bg-gradient-to-r from-pink-400 to-yellow-400 bg-clip-text text-transparent">
            Shelfie
          </span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
          Curate and Build Your Digital Shelf of Favorites
        </p>
        <p className="text-sm sm:text-base text-white/70 mb-12 max-w-xl mx-auto">
          Organize your books, music, movies, and TV shows. Share with friends and discover new favorites together.
        </p>
        <Button 
          size="lg" 
          className="bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-pink-600 hover:to-yellow-600 text-white font-semibold px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          onClick={onJoinWaitlist}
          data-testid="button-join-waitlist"
        >
          Join the Waitlist
        </Button>
      </div>
    </section>
  );
}

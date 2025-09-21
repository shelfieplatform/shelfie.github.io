import { BookOpen, Music, Film, Tv, Zap, Sparkle } from "lucide-react"

const features = [
  {
    icon: BookOpen,
    title: "Curate Your Reading List",
    description: "Keep track of books you've read, want to read, and your all-time favorites.",
  },
  {
    icon: Music,
    title: "Organize Your Music",
    description: "Create playlists, save albums, and discover new artists based on your taste.",
  },
  {
    icon: Film,
    title: "Track Your Movies",
    description: "Rate films you've watched and get recommendations for your next movie night.",
  },
  {
    icon: Tv,
    title: "Manage TV Shows",
    description: "Keep up with your favorite series and find new shows to binge-watch.",
  },
  {
    icon: Zap,
    title: "Personalized Recommendation",
    description: "Uncover new favorites with personalized recommendations.",
  },
  {
    icon: Sparkle,
    title: "Discover Your Friends' Favorites",
    description: "Discover your friends' most favorite movies, books, musics and tv shows.",
  },
]

export default function Features() {
  return (
    <section className="py-12 sm:py-16 md:py-24">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center text-gray-100">Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 px-4 sm:px-6">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start space-x-4 bg-white/5 p-4 sm:p-6 rounded-lg">
            <div className="p-2 rounded-full border-2 border-white bg-transparent shrink-0">
              <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-100">{feature.title}</h3>
              <p className="text-sm sm:text-base text-gray-300">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}


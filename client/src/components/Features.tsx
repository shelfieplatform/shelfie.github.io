import { BookOpen, Music, Film, Tv, Users, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: BookOpen,
    title: "Curate Your Reading List",
    description: "Keep track of books you've read, want to read, and your all-time favorites.",
    color: "text-green-400"
  },
  {
    icon: Music,
    title: "Organize Your Music",
    description: "Create playlists, save albums, and discover new artists based on your taste.",
    color: "text-blue-400"
  },
  {
    icon: Film,
    title: "Track Your Movies",
    description: "Rate films you've watched and get recommendations for your next movie night.",
    color: "text-yellow-400"
  },
  {
    icon: Tv,
    title: "Manage TV Shows",
    description: "Keep up with your favorite series and find new shows to binge-watch.",
    color: "text-purple-400"
  },
  {
    icon: Sparkles,
    title: "Personalized Recommendations",
    description: "Discover new favorites with AI-powered recommendations based on your taste.",
    color: "text-pink-400"
  },
  {
    icon: Users,
    title: "Social Discovery",
    description: "Connect with friends and discover their favorite books, movies, music, and shows.",
    color: "text-orange-400"
  },
];

export default function Features() {
  return (
    <section className="py-16 sm:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
            Everything You Love,{" "}
            <span className="bg-gradient-to-r from-[#A690F2] to-[#2C1761] bg-clip-text text-transparent">
              Organized
            </span>
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Build your digital shelf and share your passions with the world
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover-elevate transition-all duration-300 border-white/20 bg-white/10 backdrop-blur-sm" data-testid={`card-feature-${index}`}>
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br from-white/20 to-white/10 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3 text-white">
                      {feature.title}
                    </h3>
                    <p className="text-white/80 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

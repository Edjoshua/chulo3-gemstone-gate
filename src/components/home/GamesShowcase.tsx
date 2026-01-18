import { Link } from "react-router-dom";
import { ArrowRight, Swords, Cherry } from "lucide-react";
import { LuxuryButton } from "@/components/ui/LuxuryButton";
import blastyHeroImage from "@/assets/blasty-hero.jpg";
import fruitBlastImage from "@/assets/fruit-blast-hero.jpg";

const games = [
  {
    id: 1,
    title: "Blasty Fruit Juice Defender",
    description: "A warrior hero collects powerful fruits to gain abilities and fight enemies. Battle Queen Mafalora in epic combat!",
    path: "/blasty-fruit-juice-defender",
    image: blastyHeroImage,
    gradient: "from-purple-600 via-pink-500 to-orange-500",
    icon: Swords,
    accentColor: "text-pink-400",
    tag: "Action RPG",
  },
  {
    id: 2,
    title: "Fruit Juice Blast Defender",
    description: "Pluck fruits from magical trees, blend them into powerful juices, and unlock incredible power-ups and rewards!",
    path: "/fruit-juice-blast-defender",
    image: fruitBlastImage,
    gradient: "from-green-400 via-yellow-400 to-orange-400",
    icon: Cherry,
    accentColor: "text-green-400",
    tag: "Casual Puzzle",
  },
];

const GamesShowcase = () => {
  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
            Our <span className="text-gradient-gold">Games</span>
          </h2>
          <p className="font-heading text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our collection of premium gaming experiences, each crafted with passion and precision.
          </p>
        </div>

        {/* Games Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {games.map((game, index) => (
            <Link
              key={game.id}
              to={game.path}
              className={`group card-luxury p-0 overflow-hidden ${index === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right'}`}
            >
              {/* Game Image */}
              <div className="relative h-64 lg:h-80 overflow-hidden">
                <img
                  src={game.image}
                  alt={game.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                
                {/* Tag */}
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full bg-gradient-to-r ${game.gradient} text-white text-xs font-heading uppercase tracking-wider`}>
                  {game.tag}
                </div>

                {/* Icon */}
                <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center">
                  <game.icon className={`${game.accentColor}`} size={24} />
                </div>
              </div>

              {/* Game Info */}
              <div className="p-6 lg:p-8">
                <h3 className="font-display font-bold text-2xl lg:text-3xl text-foreground mb-3 group-hover:text-gold transition-colors duration-300">
                  {game.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {game.description}
                </p>
                <div className="flex items-center gap-2 text-gold font-heading uppercase tracking-wider text-sm group-hover:gap-4 transition-all duration-300">
                  <span>Explore Game</span>
                  <ArrowRight size={18} />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-16">
          <Link to="/games">
            <LuxuryButton variant="outline" size="lg">
              View All Games
            </LuxuryButton>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GamesShowcase;

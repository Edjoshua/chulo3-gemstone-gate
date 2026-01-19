import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Swords, Cherry, Star } from "lucide-react";
import { LuxuryButton } from "@/components/ui/LuxuryButton";
import blastyHeroImage from "@/assets/blasty-hero.jpg";
import fruitBlastImage from "@/assets/fruit-blast-hero.jpg";

const games = [
  {
    id: 1,
    title: "Blasty Fruit Juice Defender Saga",
    subtitle: "Action RPG Adventure",
    description: "Embark on an epic journey as a warrior hero who harnesses the power of magical fruits. Battle fierce enemies, unlock devastating abilities, and face the ultimate challenge: Queen Mafalora herself. Experience intense combat, strategic fruit-power combinations, and a rich narrative in this action-packed adventure.",
    features: ["Epic Boss Battles", "Fruit Power System", "Rich Storyline", "Intense Combat"],
    path: "/blasty-fruit-juice-defender",
    image: blastyHeroImage,
    gradient: "from-purple-600 via-pink-500 to-orange-500",
    icon: Swords,
    rating: "4.9",
  },
  {
    id: 2,
    title: "Fruit Juice Blast Defender",
    subtitle: "Casual Puzzle Game",
    description: "Dive into a vibrant world of magical fruit trees and delicious juice blending! Pluck ripe fruits, create powerful juice combinations, and unlock incredible power-ups. This addictive casual game offers endless fun with its satisfying gameplay loop and beautiful tropical settings.",
    features: ["Fruit Blending", "Power-Up System", "Colorful Worlds", "Addictive Gameplay"],
    path: "/fruit-juice-blast-defender",
    image: fruitBlastImage,
    gradient: "from-green-400 via-yellow-400 to-orange-400",
    icon: Cherry,
    rating: "4.8",
  },
];

const Games = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 hero-gradient overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-secondary/15 rounded-full blur-3xl animate-pulse-glow delay-200" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl text-foreground mb-6 animate-fade-in-up">
              Our <span className="text-gradient-gold">Games</span>
            </h1>
            <p className="font-heading text-xl text-muted-foreground animate-fade-in-up delay-100">
              Explore our collection of premium gaming experiences. Each title crafted with passion, precision, and a commitment to excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Games List */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-24">
            {games.map((game, index) => (
              <div
                key={game.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <Link to={game.path} className="block group">
                    <div className="relative rounded-2xl overflow-hidden card-luxury">
                      <img
                        src={game.image}
                        alt={game.title}
                        className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
                      
                      {/* Rating Badge */}
                      <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1.5 rounded-full bg-card/80 backdrop-blur-sm">
                        <Star className="text-gold fill-gold" size={16} />
                        <span className="font-heading font-semibold text-foreground">{game.rating}</span>
                      </div>

                      {/* Play Button Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className={`px-6 py-3 rounded-full bg-gradient-to-r ${game.gradient} text-white font-heading font-semibold uppercase tracking-wider`}>
                          Explore Game
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${game.gradient} text-white text-sm font-heading uppercase tracking-wider mb-4`}>
                    <game.icon size={18} />
                    {game.subtitle}
                  </div>
                  
                  <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
                    {game.title}
                  </h2>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {game.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {game.features.map((feature, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 rounded-lg bg-muted text-muted-foreground text-sm font-heading"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <Link to={game.path}>
                    <LuxuryButton variant="gold" size="lg">
                      <span className="flex items-center gap-2">
                        View Game <ArrowRight size={18} />
                      </span>
                    </LuxuryButton>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Games;

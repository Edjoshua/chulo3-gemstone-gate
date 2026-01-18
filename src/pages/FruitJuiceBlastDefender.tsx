import { Link } from "react-router-dom";
import { ArrowLeft, Cherry, Droplet, Sparkles, Zap, Heart, Star, TreeDeciduous } from "lucide-react";
import { LuxuryButton } from "@/components/ui/LuxuryButton";
import fruitBlastImage from "@/assets/fruit-blast-hero.jpg";

const fruitTypes = [
  { name: "Golden Apple", nutrients: "Strength Boost", icon: "🍎", color: "from-red-500 to-yellow-500" },
  { name: "Power Orange", nutrients: "Energy Surge", icon: "🍊", color: "from-orange-400 to-amber-500" },
  { name: "Magic Grape", nutrients: "Speed Bonus", icon: "🍇", color: "from-purple-500 to-violet-500" },
  { name: "Crystal Berry", nutrients: "Shield Power", icon: "🫐", color: "from-blue-500 to-indigo-500" },
];

const powerUps = [
  { name: "Double Juice", description: "2x blending power for 30 seconds", icon: Droplet },
  { name: "Fruit Magnet", description: "Attract nearby fruits automatically", icon: Sparkles },
  { name: "Speed Blend", description: "Instant juice creation", icon: Zap },
  { name: "Health Boost", description: "Restore full energy", icon: Heart },
];

const FruitJuiceBlastDefender = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="noise-overlay" />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={fruitBlastImage}
            alt="Fruit Juice Blast Defender"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        {/* Back Button */}
        <Link
          to="/games"
          className="absolute top-6 left-6 z-20 flex items-center gap-2 px-4 py-2 rounded-lg bg-card/80 backdrop-blur-sm border border-border text-foreground hover:border-primary transition-colors"
        >
          <ArrowLeft size={18} />
          <span className="font-heading">Back to Games</span>
        </Link>

        {/* Content */}
        <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-400 via-yellow-400 to-orange-400 text-obsidian text-sm font-heading uppercase tracking-wider mb-6 animate-fade-in-up">
              <Cherry size={18} />
              Casual Puzzle Game
            </div>

            <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl text-foreground mb-6 animate-fade-in-up delay-100">
              Fruit Juice<br />
              <span className="bg-gradient-to-r from-green-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Blast Defender
              </span>
            </h1>

            <p className="font-heading text-xl text-muted-foreground mb-8 animate-fade-in-up delay-200">
              Pluck magical fruits. Blend powerful juices. Unlock incredible rewards in this addictive adventure!
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-in-up delay-300">
              <LuxuryButton variant="gold" size="lg">
                Coming Soon
              </LuxuryButton>
              <LuxuryButton variant="outline" size="lg">
                View Trailer
              </LuxuryButton>
            </div>
          </div>
        </div>
      </section>

      {/* Gameplay Overview */}
      <section className="py-20 lg:py-32 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-6">
              <span className="text-gradient-gold">Gameplay</span> Overview
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Welcome to a vibrant world of magical fruit trees and delicious juice blending! In Fruit Juice Blast Defender, you'll explore beautiful tropical landscapes, plucking ripe fruits from enchanted trees and blending them into powerful juices that grant amazing abilities.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center">
                  <TreeDeciduous className="text-white" size={40} />
                </div>
                <h3 className="font-heading font-semibold text-xl text-foreground mb-2">Pluck</h3>
                <p className="text-muted-foreground">Harvest magical fruits from enchanted trees</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
                  <Droplet className="text-white" size={40} />
                </div>
                <h3 className="font-heading font-semibold text-xl text-foreground mb-2">Blend</h3>
                <p className="text-muted-foreground">Create powerful juice combinations</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center">
                  <Star className="text-white" size={40} />
                </div>
                <h3 className="font-heading font-semibold text-xl text-foreground mb-2">Power Up</h3>
                <p className="text-muted-foreground">Unlock incredible abilities and rewards</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fruit Types */}
      <section className="py-20 lg:py-32 bg-background relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-green-500/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-4">
              Magical <span className="bg-gradient-to-r from-green-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent">Fruits</span>
            </h2>
            <p className="font-heading text-lg text-muted-foreground max-w-2xl mx-auto">
              Each fruit provides unique nutrients and special abilities
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {fruitTypes.map((fruit, index) => (
              <div
                key={index}
                className="group p-6 rounded-xl bg-card border border-border hover:border-yellow-500/50 transition-all duration-500 hover:shadow-lg text-center"
              >
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {fruit.icon}
                </div>
                <h3 className="font-heading font-semibold text-xl text-foreground mb-2">
                  {fruit.name}
                </h3>
                <div className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${fruit.color} text-white text-sm font-heading`}>
                  {fruit.nutrients}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blending System */}
      <section className="py-20 lg:py-32 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-4">
                Blending <span className="text-gradient-emerald">System</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
                Combine different fruits to create unique juice recipes! Each combination unlocks special effects and powerful bonuses. Experiment with different mixes to discover rare and legendary recipes.
              </p>
            </div>

            <div className="relative p-8 rounded-2xl bg-gradient-to-br from-green-500/10 via-yellow-500/10 to-orange-500/10 border border-border">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl mb-3">🍎 + 🍊</div>
                  <p className="text-foreground font-heading font-semibold">Citrus Punch</p>
                  <p className="text-muted-foreground text-sm">Energy + Attack Boost</p>
                </div>
                <div>
                  <div className="text-4xl mb-3">🍇 + 🫐</div>
                  <p className="text-foreground font-heading font-semibold">Berry Blast</p>
                  <p className="text-muted-foreground text-sm">Speed + Defense</p>
                </div>
                <div>
                  <div className="text-4xl mb-3">🍎 + 🍇 + 🍊</div>
                  <p className="text-foreground font-heading font-semibold">Ultimate Mix</p>
                  <p className="text-muted-foreground text-sm">All Stats Boost</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Power-Ups */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-4">
              Power-Ups & <span className="text-gradient-gold">Rewards</span>
            </h2>
            <p className="font-heading text-lg text-muted-foreground max-w-2xl mx-auto">
              Unlock amazing power-ups as you progress through the game
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {powerUps.map((powerUp, index) => (
              <div
                key={index}
                className="group p-6 rounded-xl bg-card border border-border hover:border-gold/50 transition-all duration-500 hover:shadow-gold"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-gold flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <powerUp.icon className="text-obsidian" size={28} />
                </div>
                <h3 className="font-heading font-semibold text-xl text-foreground mb-2">
                  {powerUp.name}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {powerUp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-6">
              Ready to <span className="text-gradient-gold">Blast</span>?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Dive into the colorful world of Fruit Juice Blast Defender. Sign up for updates and be the first to experience the juicy fun!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact">
                <LuxuryButton variant="gold" size="lg">
                  Get Notified
                </LuxuryButton>
              </Link>
              <Link to="/games">
                <LuxuryButton variant="outline" size="lg">
                  View All Games
                </LuxuryButton>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-background border-t border-border">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <Link to="/" className="inline-flex items-center gap-2 text-foreground hover:text-gold transition-colors">
            <div className="w-8 h-8 rounded bg-gradient-gold flex items-center justify-center font-display font-bold text-obsidian text-sm">
              C3
            </div>
            <span className="font-display font-bold tracking-wider">CHULO3 Entertainment</span>
          </Link>
          <p className="text-muted-foreground text-sm mt-4">
            © {new Date().getFullYear()} CHULO3 Entertainment. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default FruitJuiceBlastDefender;

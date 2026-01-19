import { Link } from "react-router-dom";
import { ArrowLeft, Swords, Shield, Zap, Crown, Flame, Target, Sparkles } from "lucide-react";
import { LuxuryButton } from "@/components/ui/LuxuryButton";
import blastyHeroImage from "@/assets/blasty-hero.jpg";

const fruitPowers = [
  { name: "Orange Blaze", description: "Unleash devastating fire attacks", icon: Flame, color: "from-orange-500 to-red-500" },
  { name: "Berry Shield", description: "Create protective barriers", icon: Shield, color: "from-purple-500 to-pink-500" },
  { name: "Citrus Surge", description: "Lightning-fast speed boost", icon: Zap, color: "from-yellow-400 to-green-400" },
  { name: "Grape Crush", description: "Powerful ground-pound attacks", icon: Target, color: "from-purple-600 to-indigo-600" },
];

const BlastyFruitJuiceDefender = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="noise-overlay" />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={blastyHeroImage}
            alt="Blasty Fruit Juice Defender Saga"
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-white text-sm font-heading uppercase tracking-wider mb-6 animate-fade-in-up">
              <Swords size={18} />
              Action RPG Adventure
            </div>

            <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl text-foreground mb-6 animate-fade-in-up delay-100">
              Blasty Fruit Juice<br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                Defender Saga
              </span>
            </h1>

            <p className="font-heading text-xl text-muted-foreground mb-8 animate-fade-in-up delay-200">
              Harness the power of magical fruits. Defeat fierce enemies. Face the ultimate challenge against Queen Mafalora.
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

      {/* Story Section */}
      <section className="py-20 lg:py-32 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-6">
              The <span className="text-gradient-gold">Story</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              In a world where magical fruits grant extraordinary powers, you are the chosen warrior—the last hope against the tyrannical Queen Mafalora. She has corrupted the ancient Fruit Gardens, twisting their power for her dark purposes. Only by mastering the sacred fruit abilities can you defeat her minions, reclaim the gardens, and restore peace to the realm.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Collect rare fruits, combine their powers, and unleash devastating abilities as you journey through dangerous lands filled with epic boss battles and challenging combat encounters.
            </p>
          </div>
        </div>
      </section>

      {/* Warrior Hero Section */}
      <section className="py-20 lg:py-32 bg-background relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-4">
              The <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">Warrior Hero</span>
            </h2>
            <p className="font-heading text-lg text-muted-foreground max-w-2xl mx-auto">
              Master incredible abilities powered by magical fruits
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {fruitPowers.map((power, index) => (
              <div
                key={index}
                className="group p-6 rounded-xl bg-card border border-border hover:border-pink-500/50 transition-all duration-500 hover:shadow-lg"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${power.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <power.icon className="text-white" size={28} />
                </div>
                <h3 className="font-heading font-semibold text-xl text-foreground mb-2">
                  {power.name}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {power.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Queen Mafalora Section */}
      <section className="py-20 lg:py-32 bg-card relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-transparent to-transparent" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 text-sm font-heading uppercase tracking-wider mb-6">
                <Crown size={18} />
                Final Boss
              </div>
              <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-4">
                Queen <span className="text-purple-400">Mafalora</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
                The dark queen who corrupted the Fruit Gardens now commands an army of twisted minions. Her mastery over corrupted fruit energy makes her the most formidable foe you'll ever face. Are you ready for the ultimate battle?
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-6 rounded-xl bg-background/50 border border-purple-500/20">
                <Sparkles className="w-8 h-8 mx-auto mb-3 text-purple-400" />
                <h4 className="font-heading font-semibold text-foreground mb-2">Dark Fruit Magic</h4>
                <p className="text-muted-foreground text-sm">Corrupted abilities that twist reality</p>
              </div>
              <div className="p-6 rounded-xl bg-background/50 border border-purple-500/20">
                <Shield className="w-8 h-8 mx-auto mb-3 text-purple-400" />
                <h4 className="font-heading font-semibold text-foreground mb-2">Impenetrable Defense</h4>
                <p className="text-muted-foreground text-sm">Multiple phases of challenging combat</p>
              </div>
              <div className="p-6 rounded-xl bg-background/50 border border-purple-500/20">
                <Crown className="w-8 h-8 mx-auto mb-3 text-purple-400" />
                <h4 className="font-heading font-semibold text-foreground mb-2">Army of Minions</h4>
                <p className="text-muted-foreground text-sm">Endless hordes at her command</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-6">
              Ready to <span className="text-gradient-gold">Defend</span>?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Join the battle and become the ultimate Fruit Juice Defender Saga hero. Sign up for updates and be the first to play.
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
      <footer className="py-8 bg-card border-t border-border">
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

export default BlastyFruitJuiceDefender;

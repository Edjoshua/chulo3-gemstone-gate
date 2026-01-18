import { Link } from "react-router-dom";
import { LuxuryButton } from "@/components/ui/LuxuryButton";
import { ChevronDown, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/15 rounded-full blur-3xl animate-pulse-glow delay-200" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse-glow delay-400" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `linear-gradient(hsl(var(--primary) / 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary) / 0.1) 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border mb-8 animate-fade-in-up">
            <Sparkles size={16} className="text-gold" />
            <span className="font-heading text-sm uppercase tracking-widest text-muted-foreground">
              Premium Gaming Studio
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl leading-tight mb-6 animate-fade-in-up delay-100">
            <span className="text-foreground">CHULO</span>
            <span className="text-gradient-gold">3</span>
            <br />
            <span className="text-foreground">Entertainment</span>
          </h1>

          {/* Tagline */}
          <p className="font-heading text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up delay-200">
            Crafting immersive worlds and unforgettable gaming experiences. 
            Where innovation meets artistry.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-300">
            <Link to="/games">
              <LuxuryButton variant="gold" size="lg">
                Explore Our Games
              </LuxuryButton>
            </Link>
            <Link to="/about">
              <LuxuryButton variant="outline" size="lg">
                About Us
              </LuxuryButton>
            </Link>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
            <ChevronDown size={32} className="text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

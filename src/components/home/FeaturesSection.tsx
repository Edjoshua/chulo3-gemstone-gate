import { Sparkles, Palette, Gamepad2, Users } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Premium Quality",
    description: "Every game we create meets the highest standards of visual fidelity and gameplay polish.",
  },
  {
    icon: Palette,
    title: "Artistic Vision",
    description: "Our unique art direction creates memorable worlds that captivate and inspire players.",
  },
  {
    icon: Gamepad2,
    title: "Engaging Gameplay",
    description: "Intuitive controls and satisfying mechanics that keep players coming back for more.",
  },
  {
    icon: Users,
    title: "Player-First Design",
    description: "We listen to our community and design experiences that truly resonate with players.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-card relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-4">
            Why <span className="text-gradient-emerald">Choose Us</span>
          </h2>
          <p className="font-heading text-lg text-muted-foreground max-w-2xl mx-auto">
            We're committed to delivering gaming experiences that exceed expectations.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group text-center p-8 rounded-xl bg-background/50 border border-border hover:border-primary transition-all duration-500 hover:shadow-emerald"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-emerald flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="text-foreground" size={28} />
              </div>
              <h3 className="font-heading font-semibold text-xl text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

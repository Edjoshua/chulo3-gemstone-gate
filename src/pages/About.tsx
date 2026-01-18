import Layout from "@/components/layout/Layout";
import { Target, Lightbulb, Heart, Rocket } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "We pursue perfection in every pixel, every line of code, and every player interaction.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Pushing boundaries and exploring new frontiers in gaming technology and design.",
  },
  {
    icon: Heart,
    title: "Passion",
    description: "Our love for games drives us to create experiences that resonate deeply with players.",
  },
  {
    icon: Rocket,
    title: "Ambition",
    description: "We dream big and work tirelessly to turn those dreams into gaming reality.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 hero-gradient overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-secondary/15 rounded-full blur-3xl animate-pulse-glow delay-200" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl text-foreground mb-6 animate-fade-in-up">
              About <span className="text-gradient-gold">CHULO3</span>
            </h1>
            <p className="font-heading text-xl md:text-2xl text-muted-foreground max-w-2xl animate-fade-in-up delay-100">
              A world-class game studio dedicated to crafting premium gaming experiences that captivate, inspire, and endure.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 lg:py-32 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-6">
                Our <span className="text-gradient-emerald">Story</span>
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  CHULO3 Entertainment was born from a simple yet powerful vision: to create gaming experiences that transcend the ordinary. Our founders, passionate gamers and industry veterans, believed that games could be more than entertainment—they could be art.
                </p>
                <p>
                  Today, we stand as a premium gaming studio, known for our meticulous attention to detail, innovative gameplay mechanics, and stunning visual artistry. Every game we create is a labor of love, crafted to deliver unforgettable moments to players around the world.
                </p>
                <p>
                  Our team combines decades of industry experience with fresh, creative perspectives. We're not just making games—we're building worlds, telling stories, and creating memories that last a lifetime.
                </p>
              </div>
            </div>
            <div className="animate-slide-in-right">
              <div className="relative">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-6 rounded-2xl bg-gradient-gold flex items-center justify-center">
                      <span className="font-display font-bold text-5xl text-obsidian">C3</span>
                    </div>
                    <p className="font-heading text-xl text-foreground">CHULO3 Entertainment</p>
                    <p className="text-muted-foreground">Est. 2024</p>
                  </div>
                </div>
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/10 to-secondary/10 -z-10 blur-xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="card-luxury p-8 lg:p-12">
              <div className="w-16 h-16 rounded-xl bg-gradient-gold flex items-center justify-center mb-6">
                <Target className="text-obsidian" size={32} />
              </div>
              <h3 className="font-display font-bold text-2xl text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To create premium gaming experiences that push the boundaries of creativity and technology, delivering joy and wonder to players worldwide while setting new standards for quality and innovation in the gaming industry.
              </p>
            </div>
            <div className="card-luxury p-8 lg:p-12">
              <div className="w-16 h-16 rounded-xl bg-gradient-emerald flex items-center justify-center mb-6">
                <Lightbulb className="text-foreground" size={32} />
              </div>
              <h3 className="font-display font-bold text-2xl text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To become a globally recognized leader in premium game development, known for creating iconic titles that inspire creativity, foster community, and redefine what's possible in interactive entertainment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-32 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-4">
              Our <span className="text-gradient-cyan">Values</span>
            </h2>
            <p className="font-heading text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do at CHULO3 Entertainment.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-xl bg-background border border-border hover:border-accent transition-all duration-500 hover:shadow-cyan group"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-cyan flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="text-obsidian" size={28} />
                </div>
                <h3 className="font-heading font-semibold text-xl text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;

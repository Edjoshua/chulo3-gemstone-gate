import { Link } from "react-router-dom";
import { LuxuryButton } from "@/components/ui/LuxuryButton";
import { Mail, ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl animate-pulse-glow" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            Ready to <span className="text-gradient-gold">Play</span>?
          </h2>
          <p className="font-heading text-xl text-muted-foreground mb-10">
            Join thousands of players experiencing our premium games. 
            Get in touch with us to learn more about our latest releases.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/games">
              <LuxuryButton variant="gold" size="lg" className="w-full sm:w-auto">
                <span className="flex items-center gap-2">
                  Explore Games <ArrowRight size={18} />
                </span>
              </LuxuryButton>
            </Link>
            <Link to="/contact">
              <LuxuryButton variant="outline" size="lg" className="w-full sm:w-auto">
                <span className="flex items-center gap-2">
                  <Mail size={18} /> Contact Us
                </span>
              </LuxuryButton>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

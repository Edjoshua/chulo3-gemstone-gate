import { Link } from "react-router-dom";
import { Mail, Gamepad2 } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-gold flex items-center justify-center font-display font-bold text-obsidian text-lg">
                C3
              </div>
              <span className="font-display font-bold text-xl tracking-wider text-foreground">
                CHULO<span className="text-gradient-gold">3</span>
              </span>
            </Link>
            <p className="text-muted-foreground max-w-md leading-relaxed">
              CHULO3 Entertainment delivers premium gaming experiences that blend 
              innovation, artistry, and immersive storytelling. We create worlds 
              worth exploring.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg text-foreground mb-6 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Our Games", path: "/games" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-gold transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Games */}
          <div>
            <h4 className="font-heading font-semibold text-lg text-foreground mb-6 uppercase tracking-wider">
              Our Games
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/blasty-fruit-juice-defender"
                  className="text-muted-foreground hover:text-gold transition-colors duration-300 flex items-center gap-2"
                >
                  <Gamepad2 size={16} className="text-primary" />
                  Blasty Fruit Juice Defender Saga
                </Link>
              </li>
              <li>
                <Link
                  to="/fruit-juice-blast-defender"
                  className="text-muted-foreground hover:text-gold transition-colors duration-300 flex items-center gap-2"
                >
                  <Gamepad2 size={16} className="text-accent" />
                  Fruit Juice Blast Defender
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} CHULO3 Entertainment. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <Mail size={16} className="text-gold" />
            <a
            href="mailto:chulo3entertainment@gmail.com"
              className="hover:text-gold transition-colors"
            >
              chulo3entertainment@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface LuxuryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "gold" | "emerald" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

const LuxuryButton = forwardRef<HTMLButtonElement, LuxuryButtonProps>(
  ({ className, variant = "gold", size = "md", children, ...props }, ref) => {
    const baseStyles = "relative overflow-hidden font-heading font-semibold uppercase tracking-wider transition-all duration-400 ease-out rounded-lg disabled:opacity-50 disabled:pointer-events-none";
    
    const variants = {
      gold: "bg-gradient-gold text-obsidian hover:shadow-gold hover:-translate-y-0.5",
      emerald: "bg-gradient-emerald text-foreground hover:shadow-emerald hover:-translate-y-0.5",
      outline: "border-2 border-gold bg-transparent text-gold hover:bg-gold hover:text-obsidian hover:shadow-gold",
      ghost: "bg-transparent text-foreground hover:bg-muted border border-border hover:border-primary",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        <span className="relative z-10">{children}</span>
        <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-400 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </button>
    );
  }
);

LuxuryButton.displayName = "LuxuryButton";

export { LuxuryButton };

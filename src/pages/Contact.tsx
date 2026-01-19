import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { LuxuryButton } from "@/components/ui/LuxuryButton";
import { Mail, Send, MapPin, Phone, CheckCircle } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    toast.success("Message sent successfully! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 hero-gradient overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-secondary/15 rounded-full blur-3xl animate-pulse-glow delay-200" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl text-foreground mb-6 animate-fade-in-up">
              Get in <span className="text-gradient-gold">Touch</span>
            </h1>
            <p className="font-heading text-xl text-muted-foreground animate-fade-in-up delay-100">
              Have questions, feedback, or just want to say hello? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="font-display font-bold text-3xl text-foreground mb-4">
                  Contact <span className="text-gradient-emerald">Information</span>
                </h2>
                <p className="text-muted-foreground">
                  Reach out to us through any of the following channels. Our team is always ready to assist you.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border">
                  <div className="w-12 h-12 rounded-lg bg-gradient-gold flex items-center justify-center flex-shrink-0">
                    <Mail className="text-obsidian" size={24} />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-foreground mb-1">Email</h3>
                    <a
                      href="mailto:chulo3entertainment@gmail.com"
                      className="text-gold hover:underline"
                    >
                      chulo3entertainment@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border">
                  <div className="w-12 h-12 rounded-lg bg-gradient-emerald flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-foreground" size={24} />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-foreground mb-1">Location</h3>
                    <p className="text-muted-foreground">
                      Global Gaming Studio
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border">
                  <div className="w-12 h-12 rounded-lg bg-gradient-cyan flex items-center justify-center flex-shrink-0">
                    <Phone className="text-obsidian" size={24} />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-foreground mb-1">Response Time</h3>
                    <p className="text-muted-foreground">
                      Within 24-48 hours
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="card-luxury p-8 lg:p-12">
                <h3 className="font-display font-bold text-2xl text-foreground mb-6">
                  Send us a Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block font-heading text-sm text-foreground mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block font-heading text-sm text-foreground mb-2">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block font-heading text-sm text-foreground mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block font-heading text-sm text-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>

                  <LuxuryButton
                    type="submit"
                    variant="gold"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full md:w-auto"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <div className="w-5 h-5 border-2 border-obsidian/30 border-t-obsidian rounded-full animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send size={18} /> Send Message
                      </span>
                    )}
                  </LuxuryButton>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;

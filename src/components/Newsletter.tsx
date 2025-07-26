import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, CheckCircle } from "lucide-react";

export const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto tech-card bg-gradient-primary text-center">
          <Mail className="h-16 w-16 text-primary mx-auto mb-6" />
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stay Ahead of the <span className="text-gradient">Tech Curve</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get insights on emerging technologies, industry trends, and exclusive 
            updates on our latest innovations delivered to your inbox.
          </p>

          {isSubscribed ? (
            <div className="flex items-center justify-center space-x-2 text-primary">
              <CheckCircle className="h-6 w-6" />
              <span className="text-lg font-medium">Thank you for subscribing!</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1"
                required
              />
              <Button type="submit" variant="hero" size="lg">
                Subscribe
              </Button>
            </form>
          )}

          <p className="text-sm text-muted-foreground mt-4">
            No spam, unsubscribe anytime. Your privacy is our priority.
          </p>
        </div>
      </div>
    </section>
  );
};
"use client";

import { Container } from "@/components/layout/container";
import { AnimatedSection } from "@/components/shared/animated-section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "sonner";
import { Mail, ArrowRight, Check, Bell } from "lucide-react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    // Mock submission with 1.5s delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubscribed(true);
    toast.success("Successfully subscribed to our newsletter!");
    setEmail("");
  };

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-crimson-600 via-crimson-700 to-crimson-800" />

      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-crimson-900/50 rounded-full blur-[150px]" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <Container className="relative z-10">
        <AnimatedSection className="max-w-3xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 border border-white/20 mb-8">
            <Bell className="w-8 h-8 text-white" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-[family-name:var(--font-display)] text-white mb-6">
            Stay Updated on Our Launch
          </h2>

          <p className="text-xl text-crimson-100 mb-10 max-w-xl mx-auto">
            Be the first to know when Martial Apps launches in 2026. Get exclusive early adopter pricing and updates on our progress.
          </p>

          {!isSubscribed ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-obsidian-400" />
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isSubmitting}
                  className="h-14 pl-12 bg-obsidian-950 border-obsidian-800 text-obsidian-100 placeholder:text-obsidian-500 rounded-xl focus:border-crimson-400 focus:ring-crimson-400/20"
                  required
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="h-14 px-8 bg-obsidian-950 hover:bg-obsidian-900 text-white rounded-xl font-semibold shadow-lg transition-all duration-300"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Subscribing...
                  </>
                ) : (
                  <>
                    Subscribe
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </>
                )}
              </Button>
            </form>
          ) : (
            <div className="bg-obsidian-950/50 backdrop-blur-sm rounded-2xl p-8 max-w-xl mx-auto border border-obsidian-800">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-emerald-500/20 flex items-center justify-center">
                <Check className="w-8 h-8 text-emerald-400" />
              </div>
              <p className="text-white text-xl font-semibold mb-2">
                Thank you for subscribing!
              </p>
              <p className="text-obsidian-300">
                We'll keep you posted on our launch and send you exclusive early adopter offers.
              </p>
            </div>
          )}

          <p className="text-crimson-200/70 text-sm mt-8">
            Join our community. No spam, just important updates. Unsubscribe anytime.
          </p>
        </AnimatedSection>
      </Container>
    </section>
  );
}

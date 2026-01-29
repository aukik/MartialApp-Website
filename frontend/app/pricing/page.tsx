import { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/layout/container";
import { AnimatedSection } from "@/components/shared/animated-section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Simple, transparent pricing for Martial Apps. Contact us for custom pricing tailored to your dojo."
};

const features = [
  "Automated attendance tracking",
  "Payment processing & billing",
  "Belt progression management",
  "Performance analytics dashboard",
  "Customizable video library",
  "Gamification & achievements",
  "Member management",
  "Class scheduling",
  "Mobile app access (iOS & Android)",
  "Real-time data sync",
  "Email & SMS notifications",
  "Secure data hosting in Canada"
];

export default function PricingPage() {
  return (
    <>
      <Header />
      <main className="pt-20 md:pt-24">
        {/* Hero */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-crimson-500 to-crimson-700">
          <Container>
            <div className="max-w-3xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] mb-6">
                Simple, Transparent Pricing
              </h1>
              <p className="text-xl text-crimson-50">
                Pricing tailored to your dojo's size and needs. Contact us for a custom quote.
              </p>
            </div>
          </Container>
        </section>

        {/* Pricing Card */}
        <section className="py-16 md:py-24">
          <Container>
            <div className="max-w-3xl mx-auto">
              <AnimatedSection>
                <Card className="border-4 border-crimson-500">
                  <CardContent className="p-8 md:p-12">
                    <div className="text-center mb-10">
                      <h2 className="text-3xl font-[family-name:var(--font-display)] text-warm-950 mb-4">
                        All Features Included
                      </h2>
                      <p className="text-lg text-warm-700">
                        Get the complete Martial Apps platform with all features. No tiers, no hidden fees.
                      </p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4 mb-10">
                      {features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-crimson-500 flex-shrink-0 mt-0.5" />
                          <span className="text-warm-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="bg-crimson-50 rounded-lg p-6 mb-8">
                      <h3 className="font-semibold text-warm-900 mb-2">Custom Pricing</h3>
                      <p className="text-warm-700 mb-4">
                        Pricing is based on your dojo's size, number of active members, and specific requirements. Contact us for a personalized quote.
                      </p>
                      <p className="text-sm text-warm-600">
                        Early adopters who join before launch will receive exclusive pricing and lifetime discounts.
                      </p>
                    </div>

                    <div className="text-center">
                      <Button asChild size="lg" className="w-full sm:w-auto">
                        <Link href="/contact">Contact for Pricing</Link>
                      </Button>
                      <p className="text-sm text-warm-600 mt-4">
                        No credit card required. Free consultation.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </Container>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-24 bg-warm-100">
          <Container>
            <div className="max-w-3xl mx-auto space-y-6">
              <h2 className="text-3xl font-[family-name:var(--font-display)] text-warm-950 text-center mb-8">
                Pricing FAQs
              </h2>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-warm-900 mb-2">What determines my pricing?</h3>
                  <p className="text-warm-700">
                    Pricing is based on the number of active members in your dojo, required features, and level of support needed. We'll work with you to create a fair, transparent pricing plan.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-warm-900 mb-2">Is there a free trial?</h3>
                  <p className="text-warm-700">
                    Yes! We'll offer a free trial period for new dojos after launch. Sign up now to be notified when trials become available.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-warm-900 mb-2">What payment methods do you accept?</h3>
                  <p className="text-warm-700">
                    We accept major credit cards and offer monthly or annual billing options. Annual billing comes with a discount.
                  </p>
                </CardContent>
              </Card>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}

import { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/layout/container";
import { Card, CardContent } from "@/components/ui/card";
import { ContactForm } from "@/components/sections/contact/contact-form";
import { MapPin, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Martial Apps. We're here to answer your questions about our dojo management platform."
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="pt-20 md:pt-24">
        {/* Hero */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-crimson-500 to-crimson-700">
          <Container>
            <div className="max-w-3xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] mb-6">
                Get in Touch
              </h1>
              <p className="text-xl text-crimson-50">
                Have questions about Martial Apps? We're here to help. Send us a message and we'll respond as soon as possible.
              </p>
            </div>
          </Container>
        </section>

        {/* Contact Form */}
        <section className="py-16 md:py-24">
          <Container>
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Form */}
              <div className="lg:col-span-2">
                <Card>
                  <CardContent className="p-8">
                    <ContactForm />
                  </CardContent>
                </Card>
              </div>

              {/* Contact Info */}
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-start gap-4">
                      <MapPin className="w-6 h-6 text-crimson-500 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-warm-900 mb-1">Location</h3>
                        <p className="text-warm-700">Kanata, Ottawa, Canada</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <Shield className="w-6 h-6 text-crimson-500 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-warm-900 mb-1">Privacy First</h3>
                        <p className="text-warm-700 text-sm">
                          Your data is protected and encrypted. We never share your information with third parties.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-crimson-50 border-crimson-200">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-warm-900 mb-2">Backed by Invest Ottawa</h3>
                    <p className="text-sm text-warm-700">
                      Martial Apps is a young startup supported by Invest Ottawa, working with a development team of 4-6 people.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}

import { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/layout/container";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Martial Apps."
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="pt-20 md:pt-24">
        <Container>
          <div className="max-w-4xl mx-auto py-16 md:py-24">
            <h1 className="text-4xl md:text-5xl font-[family-name:var(--font-display)] text-warm-950 mb-8">
              Terms of Service
            </h1>

            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-warm-700 mb-8">
                Last updated: January 2025
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-warm-900 mb-4">1. Introduction</h2>
                <p className="text-warm-700 leading-relaxed">
                  Welcome to Martial Apps. These Terms of Service govern your use of our website and services. By accessing or using Martial Apps, you agree to be bound by these Terms.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-warm-900 mb-4">2. Service Description</h2>
                <p className="text-warm-700 leading-relaxed">
                  Martial Apps provides a comprehensive dojo management platform for martial arts clubs, including attendance tracking, payment processing, belt progression management, and related services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-warm-900 mb-4">3. User Accounts</h2>
                <p className="text-warm-700 leading-relaxed">
                  You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-warm-900 mb-4">4. Data and Privacy</h2>
                <p className="text-warm-700 leading-relaxed">
                  Your use of Martial Apps is also governed by our Privacy Policy. We are committed to protecting your data and maintaining the security of all information stored in our platform.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-warm-900 mb-4">5. Pre-Launch Status</h2>
                <p className="text-warm-700 leading-relaxed">
                  Martial Apps is currently in pre-launch development and is scheduled to launch in 2026. These terms are subject to change and will be finalized before the official launch.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-warm-900 mb-4">6. Contact</h2>
                <p className="text-warm-700 leading-relaxed">
                  For questions about these Terms of Service, please contact us through our contact page or at our office in Kanata, Ottawa, Canada.
                </p>
              </section>

              <div className="mt-12 p-6 bg-warm-100 rounded-lg">
                <p className="text-sm text-warm-600">
                  <strong>Note:</strong> This is a placeholder Terms of Service document. Comprehensive terms will be provided before platform launch in 2026.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}

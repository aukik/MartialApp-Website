import { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/layout/container";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Martial Apps."
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="pt-20 md:pt-24">
        <Container>
          <div className="max-w-4xl mx-auto py-16 md:py-24">
            <h1 className="text-4xl md:text-5xl font-[family-name:var(--font-display)] text-warm-950 mb-8">
              Privacy Policy
            </h1>

            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-warm-700 mb-8">
                Last updated: January 2025
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-warm-900 mb-4">1. Introduction</h2>
                <p className="text-warm-700 leading-relaxed">
                  At Martial Apps, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your personal information.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-warm-900 mb-4">2. Information We Collect</h2>
                <p className="text-warm-700 leading-relaxed mb-4">
                  We collect information that you provide directly to us, including:
                </p>
                <ul className="list-disc list-inside text-warm-700 space-y-2">
                  <li>Account information (name, email, phone number)</li>
                  <li>Dojo and member information</li>
                  <li>Payment information</li>
                  <li>Usage data and analytics</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-warm-900 mb-4">3. How We Use Your Information</h2>
                <p className="text-warm-700 leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside text-warm-700 space-y-2">
                  <li>Provide and maintain our services</li>
                  <li>Process payments and manage subscriptions</li>
                  <li>Send important updates and notifications</li>
                  <li>Improve our platform and develop new features</li>
                  <li>Ensure security and prevent fraud</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-warm-900 mb-4">4. Data Security</h2>
                <p className="text-warm-700 leading-relaxed">
                  We implement industry-standard security measures to protect your data. All data is encrypted in transit and at rest. We host our data in secure Canadian facilities.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-warm-900 mb-4">5. Data Sharing</h2>
                <p className="text-warm-700 leading-relaxed">
                  We do not sell your personal information to third parties. We only share data with service providers necessary to operate our platform, and all such providers are bound by strict confidentiality agreements.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-warm-900 mb-4">6. Your Rights</h2>
                <p className="text-warm-700 leading-relaxed mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside text-warm-700 space-y-2">
                  <li>Access your personal data</li>
                  <li>Correct inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Export your data</li>
                  <li>Opt out of marketing communications</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-warm-900 mb-4">7. Contact Us</h2>
                <p className="text-warm-700 leading-relaxed">
                  If you have questions about this Privacy Policy or how we handle your data, please contact us through our contact page.
                </p>
              </section>

              <div className="mt-12 p-6 bg-warm-100 rounded-lg">
                <p className="text-sm text-warm-600">
                  <strong>Note:</strong> This is a placeholder Privacy Policy. A comprehensive privacy policy will be provided before platform launch in 2026, with full compliance with Canadian privacy laws (PIPEDA) and international standards.
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

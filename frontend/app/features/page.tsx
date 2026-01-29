import { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/layout/container";
import { AnimatedSection } from "@/components/shared/animated-section";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Features",
  description: "Discover all the powerful features of Martial Apps designed to streamline your dojo management."
};

const features = [
  {
    title: "Automated Attendance Tracking",
    description: "Say goodbye to paper sign-in sheets. Track attendance digitally with real-time updates and automated reports.",
    image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=600&h=400&fit=crop&q=80",
    alt: "Digital attendance tracking interface"
  },
  {
    title: "Payment Processing",
    description: "Automate fee collection with integrated payment processing. Set up recurring billing and manage memberships effortlessly.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&q=80",
    alt: "Secure payment processing"
  },
  {
    title: "Belt Progression & Exams",
    description: "Track student advancement through belt ranks. Manage exam schedules, requirements, and results all in one place.",
    image: "https://images.unsplash.com/photo-1555597673-b21d5c935865?w=600&h=400&fit=crop&q=80",
    alt: "Martial arts belt progression"
  },
  {
    title: "Performance Analytics",
    description: "Comprehensive dashboard with live data about your club, members, and revenue. Make data-driven decisions for growth.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&q=80",
    alt: "Analytics dashboard"
  },
  {
    title: "Customizable Video Library",
    description: "Host and organize martial arts technique videos. Create custom content tailored to your club's curriculum.",
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&h=400&fit=crop&q=80",
    alt: "Video library interface"
  },
  {
    title: "Gamification & Achievements",
    description: "Boost student engagement with challenges, achievements, and progress tracking. Keep students motivated to train.",
    image: "https://images.unsplash.com/photo-1614680376739-414d95ff43df?w=600&h=400&fit=crop&q=80",
    alt: "Achievement and gamification system"
  },
  {
    title: "Member Management",
    description: "Centralize all member information, contact details, emergency contacts, and medical information securely.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&q=80",
    alt: "Member management dashboard"
  },
  {
    title: "Class Scheduling",
    description: "Manage class schedules, private lessons, and special events. Send automated reminders to students.",
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=600&h=400&fit=crop&q=80",
    alt: "Calendar and scheduling interface"
  },
  {
    title: "Notifications & Alerts",
    description: "Keep students and parents informed with automated notifications for classes, events, and important updates.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop&q=80",
    alt: "Notification system"
  },
  {
    title: "Data Privacy & Security",
    description: "Bank-level encryption and Canadian data hosting. Your club's data and student information stay secure.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop&q=80",
    alt: "Security and data protection"
  },
  {
    title: "Mobile App Access",
    description: "Students and instructors can access everything on the go with our mobile apps for iOS and Android.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop&q=80",
    alt: "Mobile app on smartphone"
  },
  {
    title: "Real-Time Sync",
    description: "All changes sync instantly across devices. Updates from the office are immediately visible on mobile.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop&q=80",
    alt: "Real-time data synchronization"
  }
];

export default function FeaturesPage() {
  return (
    <>
      <Header />
      <main className="pt-20 md:pt-24">
        {/* Hero */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-crimson-500 to-crimson-700 relative overflow-hidden">
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='m0 40 40-40H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`
          }} />
          <Container className="relative">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] mb-6">
                Built for Modern Dojos
              </h1>
              <p className="text-xl text-crimson-50">
                Everything you need to run a successful martial arts club, all in one comprehensive platform.
              </p>
            </div>
          </Container>
        </section>

        {/* Features Grid */}
        <section className="py-16 md:py-24">
          <Container>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <AnimatedSection key={index} delay={index * 0.05}>
                  <div className="group h-full bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-crimson-400 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                    {/* Image */}
                    <div className="relative h-44 overflow-hidden bg-slate-100">
                      <Image
                        src={feature.image}
                        alt={feature.alt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      {/* Placeholder overlay */}
                      <div className="absolute inset-0 bg-slate-900/60 flex items-center justify-center">
                        <span className="text-white/90 text-sm font-medium tracking-wide uppercase">Placeholder Image</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-3">
                      <h3 className="text-xl font-semibold text-warm-900 group-hover:text-crimson-600 transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-warm-700 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </Container>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-warm-100">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] text-warm-950 mb-6">
                Ready to Transform Your Dojo?
              </h2>
              <p className="text-lg text-warm-700 mb-8">
                Join our waitlist to get early access and exclusive launch pricing.
              </p>
              <Button asChild size="lg">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}

import { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/layout/container";
import { AnimatedSection } from "@/components/shared/animated-section";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Martial Apps, our mission, and the team behind the platform."
};

const values = [
  {
    number: "01",
    title: "Student-Focused",
    description: "Everything we build prioritizes the student experience, helping them stay engaged and motivated in their martial arts journey."
  },
  {
    number: "02",
    title: "Excellence",
    description: "We're committed to building the best dojo management platform, with attention to detail and quality in every feature."
  },
  {
    number: "03",
    title: "Community",
    description: "We believe in the power of martial arts communities and work to strengthen connections between instructors and students."
  },
  {
    number: "04",
    title: "Canadian Roots",
    description: "Proudly based in Ottawa, Canada, with Canadian data hosting and strong commitment to data privacy."
  }
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-20 md:pt-24">
        {/* Hero */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-crimson-500 to-crimson-700 relative overflow-hidden">
          {/* Subtle pattern */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='m0 40 40-40H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`
          }} />
          <Container className="relative">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] mb-6 text-pretty">
                Our Mission
              </h1>
              <p className="text-xl text-crimson-50">
                Transform how martial arts clubs operate and help spread the benefits of martial arts to people young and old.
              </p>
            </div>
          </Container>
        </section>

        {/* Story */}
        <section className="py-16 md:py-24">
          <Container>
            <div className="max-w-4xl mx-auto">
              <AnimatedSection className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-[family-name:var(--font-display)] text-warm-950 mb-6 text-pretty">
                  Our Story
                </h2>
                <p className="text-warm-700 leading-relaxed mb-6">
                  Martial Apps was born from firsthand experience of the challenges facing martial arts club owners. As a Shotokan karate brown belt, our founder Nick witnessed how much time instructors spent on administrative tasks rather than teaching.
                </p>
                <p className="text-warm-700 leading-relaxed mb-6">
                  Combining martial arts expertise with IT project management experience, Nick founded Martial Apps to create a comprehensive solution that automates the tedious aspects of dojo management, freeing instructors to focus on what they do best—training students.
                </p>
                <p className="text-warm-700 leading-relaxed">
                  We're building a platform that understands the unique needs of martial arts schools, from belt progression tracking to gamification features that keep students engaged between classes.
                </p>
              </AnimatedSection>
            </div>
          </Container>
        </section>

        {/* Values */}
        <section className="py-16 md:py-24 bg-warm-100">
          <Container>
            <h2 className="text-3xl font-[family-name:var(--font-display)] text-warm-950 text-center mb-12 text-pretty">
              Our Values
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {values.map((value, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        <span className="text-4xl font-[family-name:var(--font-display)] text-crimson-200 font-bold leading-none">
                          {value.number}
                        </span>
                        <div className="space-y-2">
                          <h3 className="text-xl font-semibold text-warm-900">{value.title}</h3>
                          <p className="text-warm-700 leading-relaxed">
                            {value.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </Container>
        </section>

        {/* Founder Section - Editorial Style */}
        <section className="py-16 md:py-24 bg-slate-900 relative overflow-hidden">
          {/* Background texture */}
          <div className="absolute inset-0 opacity-5">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="founder-grid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#founder-grid)" />
            </svg>
          </div>

          <Container className="relative">
            <div className="max-w-5xl mx-auto">
              <AnimatedSection>
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  {/* Photo Column */}
                  <div className="lg:col-span-5">
                    <div className="relative">
                      {/* Main photo */}
                      <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                        <Image
                          src="/images/Nick-photo.webp"
                          alt="Nick - Founder of Martial Apps, Brown Belt in Shotokan Karate"
                          fill
                          className="object-cover object-top"
                          sizes="(max-width: 768px) 100vw, 400px"
                          priority
                        />
                        {/* Subtle gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
                      </div>

                      {/* Decorative elements */}
                      <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-crimson-500 rounded-2xl -z-10" />
                      <div className="absolute -top-4 -left-4 w-20 h-20 border-2 border-crimson-400 rounded-xl -z-10" />

                      {/* Floating credential */}
                      <div className="absolute -bottom-6 left-4 right-4 sm:left-8 sm:right-auto">
                        <div className="bg-white rounded-xl p-4 shadow-xl border border-slate-100">
                          <p className="text-sm font-semibold text-crimson-600">Brown Belt</p>
                          <p className="text-xs text-slate-500">Shotokan Karate</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className="lg:col-span-7 text-white">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="h-px flex-1 max-w-12 bg-crimson-400" />
                      <span className="text-xs font-semibold tracking-[0.2em] uppercase text-crimson-400">
                        Founder & CEO
                      </span>
                    </div>

                    <h2 className="text-4xl sm:text-5xl font-[family-name:var(--font-display)] mb-6 text-pretty">
                      Meet Nick
                    </h2>

                    <div className="space-y-4 text-slate-300 leading-relaxed mb-8">
                      <p>
                        As a dedicated martial artist and IT professional, I understand the unique challenges dojo owners face every day. The endless paperwork, tracking attendance, managing payments—it takes time away from what truly matters: teaching students.
                      </p>
                      <p>
                        I founded Martial Apps to solve this problem. By combining my experience as a Shotokan karate practitioner with my background in IT project management, I'm building the platform I wish existed when I started my martial arts journey.
                      </p>
                    </div>

                    {/* Credentials */}
                    <div className="flex flex-wrap gap-3 mb-8">
                      <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm text-white/90 border border-white/10">
                        IT Project Manager
                      </span>
                      <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm text-white/90 border border-white/10">
                        Ottawa, Canada
                      </span>
                    </div>

                    {/* Quote */}
                    <div className="relative pl-6 border-l-2 border-crimson-500">
                      <p className="text-lg text-white italic">
                        "Our mission is spreading the many benefits of martial arts to people young and old by making dojo management effortless."
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Team note */}
              <AnimatedSection delay={0.2}>
                <div className="mt-16 pt-12 border-t border-slate-700 text-center">
                  <p className="text-slate-400">
                    Martial Apps is supported by{" "}
                    <span className="text-crimson-400 font-semibold">Invest Ottawa</span>{" "}
                    and developed by a team of 4–6 people based in Ottawa, Canada.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}

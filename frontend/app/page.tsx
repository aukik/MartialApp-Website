import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/home/hero";
import { AppGallery } from "@/components/sections/home/app-gallery";
import { VideoSection } from "@/components/sections/home/video-section";
import { SocialProof } from "@/components/sections/home/social-proof";
import { FounderSection } from "@/components/sections/home/founder-section";
import { FaqSection } from "@/components/sections/home/faq-section";
import { CtaSection } from "@/components/sections/home/cta-section";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <VideoSection />
        <AppGallery />
        <SocialProof />
        <FounderSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}

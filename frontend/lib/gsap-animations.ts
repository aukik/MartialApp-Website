import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Hero entrance timeline
export const createHeroTimeline = () => {
  const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

  tl.from(".hero-eyebrow", {
    opacity: 0,
    y: 20,
    duration: 0.6
  })
  .from(".hero-title", {
    opacity: 0,
    y: 30,
    duration: 0.8
  }, "-=0.3")
  .from(".hero-subtitle", {
    opacity: 0,
    y: 20,
    duration: 0.6
  }, "-=0.4")
  .from(".hero-cta", {
    opacity: 0,
    y: 20,
    duration: 0.5,
    stagger: 0.1
  }, "-=0.3")
  .from(".hero-visual", {
    opacity: 0,
    y: 60,
    duration: 1,
    ease: "back.out(1.4)"
  }, "-=0.8");

  return tl;
};

// Parallax scroll effect
export const createParallaxEffect = (element: string, speed: number = 0.5) => {
  if (typeof window === "undefined") return;

  gsap.to(element, {
    y: () => window.innerHeight * speed,
    ease: "none",
    scrollTrigger: {
      trigger: element,
      start: "top bottom",
      end: "bottom top",
      scrub: true
    }
  });
};

// Stagger reveal on scroll
export const createScrollReveal = (elements: string, options = {}) => {
  if (typeof window === "undefined") return;

  gsap.from(elements, {
    opacity: 0,
    y: 50,
    duration: 0.8,
    stagger: 0.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: elements,
      start: "top 80%",
      toggleActions: "play none none none",
      ...options
    }
  });
};

// Float animation (continuous)
export const createFloatAnimation = (element: string) => {
  if (typeof window === "undefined") return;

  gsap.to(element, {
    y: -20,
    duration: 2,
    ease: "power1.inOut",
    yoyo: true,
    repeat: -1
  });
};

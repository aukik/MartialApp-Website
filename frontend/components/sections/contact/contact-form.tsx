"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { useState } from "react";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Mock form submission with 1.5s delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast.success("Message sent successfully! We'll get back to you soon.");

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      (e.target as HTMLFormElement).reset();
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <div className="bg-crimson-50 rounded-lg p-8 text-center">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-crimson-100 flex items-center justify-center">
          <svg className="w-8 h-8 text-crimson-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-semibold text-warm-900 mb-2">Message Sent!</h3>
        <p className="text-warm-700">
          Thank you for reaching out. We'll get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-warm-900 mb-2">
            Name *
          </label>
          <Input
            id="name"
            name="name"
            type="text"
            required
            disabled={isSubmitting}
            placeholder="Your full name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-warm-900 mb-2">
            Email *
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            disabled={isSubmitting}
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-warm-900 mb-2">
            Phone (Optional)
          </label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            disabled={isSubmitting}
            placeholder="+1 (555) 000-0000"
          />
        </div>

        <div>
          <label htmlFor="club" className="block text-sm font-medium text-warm-900 mb-2">
            Club/Dojo Name (Optional)
          </label>
          <Input
            id="club"
            name="club"
            type="text"
            disabled={isSubmitting}
            placeholder="Your martial arts club"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-warm-900 mb-2">
          Message *
        </label>
        <Textarea
          id="message"
          name="message"
          required
          disabled={isSubmitting}
          placeholder="Tell us about your dojo and how we can help..."
          rows={6}
        />
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting}
        className="w-full"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>

      <p className="text-sm text-warm-600 text-center">
        We respect your privacy. Your information will never be shared with third parties.
      </p>
    </form>
  );
}

import React from "react";
import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import CustomerJourneyVisualSection from "@/components/sections/CustomerJourneyVisualSection";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { MessageCircle, ArrowRight } from "lucide-react";
import { CONTACT_INFO } from "@/data/navigation";

export const metadata: Metadata = {
  title: "How It Works | Step-by-Step Customer Journey",
  description: "Learn how Racks on Rent connects gym space providers with nutrition & wellness brands step by step.",
};

export default function HowItWorksPage() {
  return (
    <div className="py-12 sm:py-20 space-y-16 bg-white">
      {/* Header */}
      <section>
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <Badge>Transparent Workflow</Badge>
            <h1 className="text-3xl sm:text-5xl font-black text-[#133C55] tracking-tight">
              How Racks on Rent <span className="text-[#59A5D8]">Works.</span>
            </h1>
            <p className="text-base sm:text-lg text-[#607D8B] leading-relaxed">
              From member check-in to shared business success: discover our transparent 7-step customer journey and business subletting model.
            </p>
          </div>
        </Container>
      </section>

      <HowItWorksSection />
      <CustomerJourneyVisualSection />

      {/* Action Footer */}
      <section className="bg-white py-12">
        <Container>
          <div className="rounded-3xl p-8 sm:p-12 border border-[#D7EEFA] bg-white shadow-[0_12px_35px_rgba(89,165,216,0.08)] text-center space-y-6 max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#133C55]">
              Ready to Join the Gym Space Network?
            </h2>
            <p className="text-base text-[#607D8B] max-w-2xl mx-auto">
              Whether you have available gym space to offer or health products to showcase, our team will guide you through every step.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Button href={CONTACT_INFO.whatsappLink} variant="primary" size="lg" className="gap-2 rounded-full bg-[#59A5D8] hover:bg-[#386FA4] text-white">
                <MessageCircle className="w-5 h-5 fill-current" />
                Chat via WhatsApp
              </Button>
              <Button href="/contact" variant="secondary" size="lg" className="gap-2 rounded-full border-[#84D2F6] bg-white text-[#133C55] hover:bg-[#EAF7FF]">
                <span>Submit Enquiry Form</span>
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

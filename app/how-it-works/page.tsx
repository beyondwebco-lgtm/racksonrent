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
    <div className="py-12 sm:py-20 space-y-16">
      {/* Header */}
      <section>
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <Badge variant="orange">Transparent Workflow</Badge>
            <h1 className="text-3xl sm:text-5xl font-black text-[#031B3D] tracking-tight">
              How Racks on Rent <span className="text-[#FF6500]">Works.</span>
            </h1>
            <p className="text-base sm:text-lg text-[#5C6470] leading-relaxed">
              From member check-in to shared business success: discover our transparent 7-step customer journey and business subletting model.
            </p>
          </div>
        </Container>
      </section>

      <HowItWorksSection />
      <CustomerJourneyVisualSection />

      {/* Action Footer */}
      <section>
        <Container>
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E5E7EB] shadow-lg text-center space-y-6 max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#031B3D]">
              Ready to Join the Gym Space Network?
            </h2>
            <p className="text-base text-[#5C6470] max-w-2xl mx-auto">
              Whether you have available gym space to offer or health products to showcase, our team will guide you through every step.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Button href={CONTACT_INFO.whatsappLink} variant="whatsapp" size="lg" className="gap-2">
                <MessageCircle className="w-5 h-5 fill-current" />
                Chat via WhatsApp
              </Button>
              <Button href="/contact" variant="secondary" size="lg" className="gap-2">
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

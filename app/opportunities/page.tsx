import React from "react";
import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import OpportunitiesSection from "@/components/sections/OpportunitiesSection";
import SpaceTypesSection from "@/components/sections/SpaceTypesSection";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { MessageCircle } from "lucide-react";
import { CONTACT_INFO } from "@/data/navigation";

export const metadata: Metadata = {
  title: "Gym Space Opportunities | Sample Displays & Sublet Formats",
  description: "Explore example gym space display opportunities and subletting formats across top cities with Racks on Rent.",
};

export default function OpportunitiesPage() {
  return (
    <div className="py-12 sm:py-20 space-y-16 bg-white">
      {/* Header */}
      <section>
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <Badge>Sample Showcase</Badge>
            <h1 className="text-3xl sm:text-5xl font-black text-[#133C55] tracking-tight">
              Example Gym Space <span className="text-[#59A5D8]">Opportunities.</span>
            </h1>
            <p className="text-base sm:text-lg text-[#607D8B] leading-relaxed">
              Demonstrating the types of display racks, counters, kiosks, and sampling setups created through Racks on Rent.
            </p>
          </div>
        </Container>
      </section>

      <OpportunitiesSection />
      <SpaceTypesSection />

      {/* CTA Box */}
      <section className="bg-white py-12">
        <Container>
          <div className="rounded-3xl p-8 sm:p-12 border border-[#D7EEFA] bg-[#EAF7FF] text-center space-y-6 max-w-4xl mx-auto shadow-md">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#133C55]">
              Looking for Opportunities in Your Locality?
            </h2>
            <p className="text-base text-[#607D8B] max-w-2xl mx-auto">
              Our team matches gym owners and health brands based on city, target audience, and space requirements.
            </p>
            <Button href={CONTACT_INFO.whatsappLink} variant="primary" size="lg" className="gap-2 rounded-full bg-[#59A5D8] hover:bg-[#386FA4] text-white">
              <MessageCircle className="w-5 h-5 fill-current" />
              Inquire Live Opportunities on WhatsApp
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}

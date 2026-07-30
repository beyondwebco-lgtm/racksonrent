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
    <div className="py-12 sm:py-20 space-y-16">
      {/* Header */}
      <section>
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <Badge variant="yellow">Sample Showcase</Badge>
            <h1 className="text-3xl sm:text-5xl font-black text-[#031B3D] tracking-tight">
              Example Gym Space <span className="text-[#FF6500]">Opportunities.</span>
            </h1>
            <p className="text-base sm:text-lg text-[#5C6470] leading-relaxed">
              Demonstrating the types of display racks, counters, kiosks, and sampling setups created through Racks on Rent.
            </p>
          </div>
        </Container>
      </section>

      <OpportunitiesSection />
      <SpaceTypesSection />

      {/* CTA Box */}
      <section>
        <Container>
          <div className="bg-[#031B3D] text-white rounded-3xl p-8 sm:p-12 border border-slate-800 text-center space-y-6 max-w-4xl mx-auto shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Looking for Opportunities in Your Locality?
            </h2>
            <p className="text-base text-slate-300 max-w-2xl mx-auto">
              Our team matches gym owners and health brands based on city, target audience, and space requirements.
            </p>
            <Button href={CONTACT_INFO.whatsappLink} variant="whatsapp" size="lg" className="gap-2">
              <MessageCircle className="w-5 h-5 fill-current" />
              Inquire Live Opportunities on WhatsApp
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}

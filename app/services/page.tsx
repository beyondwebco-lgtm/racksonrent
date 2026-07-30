import React from "react";
import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import ServicesSection from "@/components/sections/ServicesSection";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { MessageCircle } from "lucide-react";
import { CONTACT_INFO } from "@/data/navigation";

export const metadata: Metadata = {
  title: "Services Supported | Products & Consultations in Gyms",
  description: "Discover all 14 health, protein, beverage, and consultation services supported through Racks on Rent.",
};

export default function ServicesPage() {
  return (
    <div className="py-12 sm:py-20 space-y-16 bg-white">
      {/* Header */}
      <section>
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <Badge>Supported Offerings</Badge>
            <h1 className="text-3xl sm:text-5xl font-black text-[#133C55] tracking-tight">
              Services Supported <span className="text-[#59A5D8]">Inside Gyms.</span>
            </h1>
            <p className="text-base sm:text-lg text-[#607D8B] leading-relaxed">
              Explore the full range of health supplements, fresh meal plans, energy drinks, and diet consultation services suitable for gym subletting.
            </p>
          </div>
        </Container>
      </section>

      <ServicesSection />

      {/* CTA */}
      <section className="bg-white py-12">
        <Container>
          <div className="rounded-3xl p-8 sm:p-12 border border-[#D7EEFA] bg-white shadow-[0_12px_35px_rgba(89,165,216,0.08)] text-center space-y-6 max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#133C55]">
              Have a Unique Wellness Product or Service?
            </h2>
            <p className="text-base text-[#607D8B] max-w-2xl mx-auto">
              We welcome innovative health startups, nutritionists, and supplement brands to discuss custom gym placement arrangements.
            </p>
            <Button href={CONTACT_INFO.whatsappLink} variant="primary" size="lg" className="gap-2 rounded-full bg-[#59A5D8] hover:bg-[#386FA4] text-white">
              <MessageCircle className="w-5 h-5 fill-current" />
              Discuss Product Placement via WhatsApp
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}

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
    <div className="py-12 sm:py-20 space-y-16">
      {/* Header */}
      <section>
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <Badge variant="green">Supported Offerings</Badge>
            <h1 className="text-3xl sm:text-5xl font-black text-[#031B3D] tracking-tight">
              Services Supported <span className="text-[#157A3D]">Inside Gyms.</span>
            </h1>
            <p className="text-base sm:text-lg text-[#5C6470] leading-relaxed">
              Explore the full range of health supplements, fresh meal plans, energy drinks, and diet consultation services suitable for gym subletting.
            </p>
          </div>
        </Container>
      </section>

      <ServicesSection />

      {/* CTA */}
      <section>
        <Container>
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E5E7EB] shadow-lg text-center space-y-6 max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#031B3D]">
              Have a Unique Wellness Product or Service?
            </h2>
            <p className="text-base text-[#5C6470] max-w-2xl mx-auto">
              We welcome innovative health startups, nutritionists, and supplement brands to discuss custom gym placement arrangements.
            </p>
            <Button href={CONTACT_INFO.whatsappLink} variant="whatsapp" size="lg" className="gap-2">
              <MessageCircle className="w-5 h-5 fill-current" />
              Discuss Product Placement via WhatsApp
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}

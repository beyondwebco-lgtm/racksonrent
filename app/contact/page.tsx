import React from "react";
import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import ContactSection from "@/components/sections/ContactSection";
import Badge from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Contact Us | Enquire for Gym Spaces & Wellness Brands",
  description: "Get in touch with Racks on Rent via WhatsApp, phone (7995424477), email (racksonrent@gmail.com), or enquiry forms.",
};

export default function ContactPage() {
  return (
    <div className="py-12 sm:py-20 space-y-16 bg-white">
      {/* Header */}
      <section>
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <Badge>Direct Contact</Badge>
            <h1 className="text-3xl sm:text-5xl font-black text-[#133C55] tracking-tight">
              Get in Touch with <span className="text-[#59A5D8]">Racks on Rent.</span>
            </h1>
            <p className="text-base sm:text-lg text-[#607D8B] leading-relaxed">
              Connect with our team to list your gym space, showcase your nutrition brand, or discuss partnerships.
            </p>
          </div>
        </Container>
      </section>

      <ContactSection />
    </div>
  );
}

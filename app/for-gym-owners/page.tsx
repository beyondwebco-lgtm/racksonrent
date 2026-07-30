import React from "react";
import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import SpaceTypesSection from "@/components/sections/SpaceTypesSection";
import ContactFormContainer from "@/components/forms/ContactFormContainer";
import { CheckCircle2, Dumbbell } from "lucide-react";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "For Gym Owners | Sublet Space & Monetize Gym Floors",
  description: "Monetize unused gym racks, counters, shelves, and nutrition kiosks with Racks on Rent. Earn additional monthly income effortlessly.",
};

export default function ForGymOwnersPage() {
  const checklistItems = [
    "Gym name & facility type",
    "City & complete locality address",
    "Photos / layout of available space",
    "Exact space dimensions (e.g. 6x2 ft)",
    "Expected monthly rental arrangement",
    "Gym member profile (daily footfall)",
    "Suitable product categories preferred",
    "Available facilities (power, reception desk, shelf)"
  ];

  return (
    <div className="py-12 sm:py-20 space-y-16">
      {/* Hero Section */}
      <section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <Badge variant="orange">For Gym Owners & Managers</Badge>
              <h1 className="text-3xl sm:text-5xl font-black text-[#031B3D] tracking-tight">
                Make Your Gym Space <span className="text-[#FF6500]">Work Harder.</span>
              </h1>
              <p className="text-base sm:text-lg text-[#5C6470] leading-relaxed">
                Turn unused reception counters, display shelves, corners, or wall spaces into a reliable monthly income source by connecting with verified wellness brands.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Button href="#submit-space" variant="primary" size="lg">
                  Submit Your Gym Space
                </Button>
                <Button href="/opportunities" variant="outline" size="lg">
                  View Sample Layouts
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white p-8 rounded-3xl border border-[#E5E7EB] shadow-xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-[#062A5E] text-[#FFC928]">
                  <Dumbbell className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-extrabold text-lg text-[#031B3D]">Monetization Checklist</h3>
                  <p className="text-xs text-[#5C6470]">Details to prepare for listing</p>
                </div>
              </div>

              <div className="space-y-2.5 pt-2">
                {checklistItems.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#121826] font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#157A3D] flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Available Space Formats */}
      <SpaceTypesSection />

      {/* Form Anchor */}
      <section id="submit-space" className="scroll-mt-24">
        <Container>
          <SectionHeading
            badge="Register Gym Space"
            badgeVariant="navy"
            title="Submit Your Gym Space Details"
            subtitle="Share your gym's available space details with our team to start receiving brand subletting enquiries."
          />
          
          <Suspense fallback={<div className="text-center py-8 text-slate-400">Loading form...</div>}>
            <ContactFormContainer initialTab="gym-owner" />
          </Suspense>
        </Container>
      </section>
    </div>
  );
}

import React from "react";
import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import CategoriesSection from "@/components/sections/CategoriesSection";
import ContactFormContainer from "@/components/forms/ContactFormContainer";
import { CheckCircle2, Store } from "lucide-react";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "For Wellness Businesses | Expand Brand Presence Inside Gyms",
  description: "Display, sample, and sell supplements, healthy foods, and nutrition products directly inside premium gyms with Racks on Rent.",
};

export default function ForWellnessBusinessesPage() {
  const brandChecklist = [
    "Brand or company name",
    "Product or service category",
    "Target city & preferred localities",
    "Approximate monthly budget",
    "Required rack size / floor area",
    "Business registration / documents",
    "Product catalogue & pricing",
    "Display & branding requirements"
  ];

  return (
    <div className="py-12 sm:py-20 space-y-16 bg-white">
      {/* Hero Section */}
      <section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <Badge>For Nutrition & Wellness Brands</Badge>
              <h1 className="text-3xl sm:text-5xl font-black text-[#133C55] tracking-tight">
                Grow Your Brand Where <span className="text-[#386FA4]">Fitness Customers Already Are.</span>
              </h1>
              <p className="text-base sm:text-lg text-[#607D8B] leading-relaxed">
                Bypass expensive retail leases. Display your protein powders, energy drinks, healthy snacks, or diet plans inside active gyms where health-conscious customers spend time daily.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Button href="#find-opportunity" variant="primary" size="lg" className="rounded-full bg-[#386FA4] hover:bg-[#133C55] text-white">
                  Find a Gym Opportunity
                </Button>
                <Button href="/opportunities" variant="secondary" size="lg" className="rounded-full border-[#84D2F6] bg-white text-[#133C55] hover:bg-[#EAF7FF]">
                  Explore Sample Cards
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5 rounded-3xl border border-[#D7EEFA] bg-[#EAF7FF] p-8 shadow-[0_12px_35px_rgba(89,165,216,0.08)] space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#386FA4]">
                  <Store className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-extrabold text-lg text-[#133C55]">Brand Preparation Checklist</h3>
                  <p className="text-xs text-[#607D8B]">Information needed for matching</p>
                </div>
              </div>

              <div className="space-y-2.5 pt-2">
                {brandChecklist.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#345466] font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#386FA4] flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Target Categories */}
      <CategoriesSection />

      {/* Form Section Anchor */}
      <section id="find-opportunity" className="scroll-mt-24 py-16 bg-[#EAF7FF] border-t border-[#D7EEFA]">
        <Container>
          <SectionHeading
            badge="Brand Enquiry"
            title="Enquire for Available Gym Spaces"
            subtitle="Submit your brand profile and target city to explore available gym display opportunities."
          />

          <Suspense fallback={<div className="text-center py-8 text-[#607D8B]">Loading form...</div>}>
            <ContactFormContainer initialTab="wellness" />
          </Suspense>
        </Container>
      </section>
    </div>
  );
}

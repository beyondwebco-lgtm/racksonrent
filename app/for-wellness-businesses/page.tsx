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
    <div className="py-12 sm:py-20 space-y-16">
      {/* Hero Section */}
      <section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <Badge variant="green">For Nutrition & Wellness Brands</Badge>
              <h1 className="text-3xl sm:text-5xl font-black text-[#031B3D] tracking-tight">
                Grow Your Brand Where <span className="text-[#157A3D]">Fitness Customers Already Are.</span>
              </h1>
              <p className="text-base sm:text-lg text-[#5C6470] leading-relaxed">
                Bypass expensive retail leases. Display your protein powders, energy drinks, healthy snacks, or diet plans inside active gyms where health-conscious customers spend time daily.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Button href="#find-opportunity" variant="primary" size="lg">
                  Find a Gym Opportunity
                </Button>
                <Button href="/opportunities" variant="outline" size="lg">
                  Explore Sample Cards
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#031B3D] text-white p-8 rounded-3xl border border-slate-800 shadow-2xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-[#FF6500] text-white">
                  <Store className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-extrabold text-lg text-white">Brand Preparation Checklist</h3>
                  <p className="text-xs text-slate-300">Information needed for matching</p>
                </div>
              </div>

              <div className="space-y-2.5 pt-2">
                {brandChecklist.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#25D366] flex-shrink-0" />
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
      <section id="find-opportunity" className="scroll-mt-24">
        <Container>
          <SectionHeading
            badge="Brand Enquiry"
            badgeVariant="orange"
            title="Enquire for Available Gym Spaces"
            subtitle="Submit your brand profile and target city to explore available gym display opportunities."
          />

          <Suspense fallback={<div className="text-center py-8 text-slate-400">Loading form...</div>}>
            <ContactFormContainer initialTab="wellness" />
          </Suspense>
        </Container>
      </section>
    </div>
  );
}

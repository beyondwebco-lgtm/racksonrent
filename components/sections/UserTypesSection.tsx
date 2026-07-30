import React from "react";
import { CheckCircle, Dumbbell, Store, ArrowRight } from "lucide-react";
import Container from "../layout/Container";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import { PLATFORM_CARDS } from "@/data/benefits";

export default function UserTypesSection() {
  const { gymOwners, wellnessBusinesses } = PLATFORM_CARDS;

  return (
    <section className="py-16 sm:py-24 bg-[#EAF7FF]">
      <Container>
        <SectionHeading
          badge="Two-Sided Synergy"
          title="Built for Both Sides of the Fitness Business"
          subtitle="Racks on Rent acts as a bridge connecting forward-thinking gym owners with ambitious health and wellness entrepreneurs."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          
          {/* Card One — Gym Owners */}
          <div className="rounded-3xl border border-[#D7EEFA] bg-white p-8 sm:p-10 shadow-[0_12px_35px_rgba(89,165,216,0.08)] hover:shadow-[0_20px_50px_rgba(89,165,216,0.16)] transition-all hover:-translate-y-1 flex flex-col justify-between group">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EAF7FF] text-[#59A5D8]">
                  <Dumbbell className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#59A5D8] uppercase tracking-wider block">
                    {gymOwners.badge}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-[#133C55]">
                    {gymOwners.title}
                  </h3>
                </div>
              </div>

              <p className="text-base text-[#607D8B] leading-relaxed mb-8">
                {gymOwners.description}
              </p>

              <div className="space-y-3.5 mb-8">
                <h4 className="text-sm font-bold text-[#133C55] uppercase tracking-wider">
                  Key Advantages for Gym Owners:
                </h4>
                {gymOwners.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#59A5D8] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-[#345466] font-medium leading-normal">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#D7EEFA]">
              <Button
                href={gymOwners.ctaLink}
                variant="primary"
                size="lg"
                className="w-full justify-center gap-2 rounded-full bg-[#59A5D8] hover:bg-[#386FA4] text-white"
              >
                <span>{gymOwners.ctaText}</span>
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Card Two — Wellness Businesses */}
          <div className="rounded-3xl border border-[#D7EEFA] bg-white p-8 sm:p-10 shadow-[0_12px_35px_rgba(89,165,216,0.08)] hover:shadow-[0_20px_50px_rgba(89,165,216,0.16)] transition-all hover:-translate-y-1 flex flex-col justify-between group">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EAF7FF] text-[#386FA4]">
                  <Store className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#386FA4] uppercase tracking-wider block">
                    {wellnessBusinesses.badge}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-[#133C55]">
                    {wellnessBusinesses.title}
                  </h3>
                </div>
              </div>

              <p className="text-base text-[#607D8B] leading-relaxed mb-8">
                {wellnessBusinesses.description}
              </p>

              <div className="space-y-3.5 mb-8">
                <h4 className="text-sm font-bold text-[#133C55] uppercase tracking-wider">
                  Key Advantages for Wellness Brands:
                </h4>
                {wellnessBusinesses.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#386FA4] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-[#345466] font-medium leading-normal">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#D7EEFA]">
              <Button
                href={wellnessBusinesses.ctaLink}
                variant="primary"
                size="lg"
                className="w-full justify-center gap-2 rounded-full bg-[#386FA4] hover:bg-[#133C55] text-white"
              >
                <span>{wellnessBusinesses.ctaText}</span>
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}

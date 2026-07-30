import React from "react";
import { CheckCircle2, Building2, Store } from "lucide-react";
import Container from "../layout/Container";
import SectionHeading from "../ui/SectionHeading";
import { PROFIT_COMPARISON } from "@/data/benefits";

export default function ProfitComparisonSection() {
  const { gymOwner, wellnessBrand } = PROFIT_COMPARISON;

  return (
    <section className="py-16 sm:py-24 bg-[#EAF7FF]">
      <Container>
        <SectionHeading
          badge="Shared Success"
          title="A Win-Win Opportunity for Both"
          subtitle="Compare how gym owners and wellness entrepreneurs both gain sustainable growth through Racks on Rent."
        />

        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Central VS Badge on desktop */}
          <div className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#59A5D8] text-white font-extrabold text-sm items-center justify-center shadow-lg border-4 border-[#EAF7FF]">
            VS
          </div>

          {/* Gym Owner Side */}
          <div className="rounded-3xl border border-[#D7EEFA] bg-white p-8 sm:p-10 shadow-[0_12px_35px_rgba(89,165,216,0.08)] flex flex-col justify-between relative overflow-hidden">
            <div className="border-b border-[#D7EEFA] pb-6 mb-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EAF7FF] text-[#59A5D8]">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-[#133C55]">
                    {gymOwner.title}
                  </h3>
                  <p className="text-xs font-bold text-[#386FA4] uppercase tracking-wider">
                    {gymOwner.subtitle}
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4 mb-8 flex-grow">
              {gymOwner.points.map((point, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#59A5D8] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-[#345466] font-medium leading-normal">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl bg-[#EAF7FF] px-5 py-4 text-center font-bold text-[#386FA4] border border-[#D7EEFA]">
              <span className="text-xs font-semibold text-[#607D8B] uppercase tracking-wider block mb-1">
                Net Gym Outcome
              </span>
              <p className="text-base font-extrabold text-[#133C55]">
                {gymOwner.resultBadge}
              </p>
            </div>
          </div>

          {/* Wellness Entrepreneur Side */}
          <div className="rounded-3xl border border-[#D7EEFA] bg-white p-8 sm:p-10 shadow-[0_12px_35px_rgba(89,165,216,0.08)] flex flex-col justify-between relative overflow-hidden">
            <div className="border-b border-[#D7EEFA] pb-6 mb-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EAF7FF] text-[#386FA4]">
                  <Store className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-[#133C55]">
                    {wellnessBrand.title}
                  </h3>
                  <p className="text-xs font-bold text-[#386FA4] uppercase tracking-wider">
                    {wellnessBrand.subtitle}
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4 mb-8 flex-grow">
              {wellnessBrand.points.map((point, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#386FA4] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-[#345466] font-medium leading-normal">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl bg-[#EAF7FF] px-5 py-4 text-center font-bold text-[#386FA4] border border-[#D7EEFA]">
              <span className="text-xs font-semibold text-[#607D8B] uppercase tracking-wider block mb-1">
                Net Brand Outcome
              </span>
              <p className="text-base font-extrabold text-[#133C55]">
                {wellnessBrand.resultBadge}
              </p>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}

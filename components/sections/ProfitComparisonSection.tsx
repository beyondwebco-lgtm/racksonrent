import React from "react";
import { CheckCircle2, Building2, Store } from "lucide-react";
import Container from "../layout/Container";
import SectionHeading from "../ui/SectionHeading";
import { PROFIT_COMPARISON } from "@/data/benefits";

export default function ProfitComparisonSection() {
  const { gymOwner, wellnessBrand } = PROFIT_COMPARISON;

  return (
    <section className="py-16 sm:py-24 bg-[#F7FAFC]">
      <Container>
        <SectionHeading
          badge="Shared Success"
          badgeVariant="brand"
          title="A Win-Win Opportunity for Both"
          subtitle="Compare how gym owners and wellness entrepreneurs both gain sustainable growth through Racks on Rent."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Gym Owner Side */}
          <div className="rounded-2xl border border-[#59A5D8]/25 bg-white p-8 sm:p-10 shadow-sm flex flex-col justify-between relative overflow-hidden">
            <div className="border-b border-[#EEF3F7] pb-6 mb-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-3 rounded-2xl bg-[#84D2F6]/20 text-[#133C55]">
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
                  <CheckCircle2 className="w-5 h-5 text-[#386FA4] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-[#102A3A] font-medium leading-normal">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            <div className="bg-[#84D2F6]/20 border border-[#59A5D8]/30 p-4 rounded-2xl text-center">
              <span className="text-xs font-semibold text-[#133C55] uppercase tracking-wider block mb-1">
                Net Gym Outcome
              </span>
              <p className="text-base font-extrabold text-[#133C55]">
                {gymOwner.resultBadge}
              </p>
            </div>
          </div>

          {/* Wellness Entrepreneur Side */}
          <div className="bg-[#133C55] text-white rounded-2xl p-8 sm:p-10 border border-[#59A5D8]/30 shadow-xl flex flex-col justify-between relative overflow-hidden">
            <div className="border-b border-[#386FA4]/40 pb-6 mb-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-3 rounded-2xl bg-[#386FA4] text-[#84D2F6]">
                  <Store className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-white">
                    {wellnessBrand.title}
                  </h3>
                  <p className="text-xs font-bold text-[#84D2F6] uppercase tracking-wider">
                    {wellnessBrand.subtitle}
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4 mb-8 flex-grow">
              {wellnessBrand.points.map((point, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#84D2F6] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-100 font-medium leading-normal">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            <div className="bg-[#386FA4]/50 border border-[#59A5D8]/40 p-4 rounded-2xl text-center">
              <span className="text-xs font-semibold text-[#84D2F6] uppercase tracking-wider block mb-1">
                Net Brand Outcome
              </span>
              <p className="text-base font-extrabold text-white">
                {wellnessBrand.resultBadge}
              </p>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}

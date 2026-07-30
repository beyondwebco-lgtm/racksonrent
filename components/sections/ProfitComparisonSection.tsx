import React from "react";
import { CheckCircle2, Building2, Store } from "lucide-react";
import Container from "../layout/Container";
import SectionHeading from "../ui/SectionHeading";
import { PROFIT_COMPARISON } from "@/data/benefits";

export default function ProfitComparisonSection() {
  const { gymOwner, wellnessBrand } = PROFIT_COMPARISON;

  return (
    <section className="py-16 sm:py-24 bg-[#F7F8FA]">
      <Container>
        <SectionHeading
          badge="Shared Success"
          badgeVariant="orange"
          title="A Win-Win Opportunity for Both"
          subtitle="Compare how gym owners and wellness entrepreneurs both gain sustainable growth through Racks on Rent."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Gym Owner Side */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E5E7EB] shadow-lg flex flex-col justify-between relative overflow-hidden">
            <div className="border-b border-slate-100 pb-6 mb-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-3 rounded-2xl bg-[#062A5E]/10 text-[#062A5E]">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-[#031B3D]">
                    {gymOwner.title}
                  </h3>
                  <p className="text-xs font-bold text-[#FF6500] uppercase tracking-wider">
                    {gymOwner.subtitle}
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4 mb-8 flex-grow">
              {gymOwner.points.map((point, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#157A3D] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-[#121826] font-medium leading-normal">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            <div className="bg-[#062A5E]/5 border border-[#062A5E]/20 p-4 rounded-2xl text-center">
              <span className="text-xs font-semibold text-[#062A5E] uppercase tracking-wider block mb-1">
                Net Gym Outcome
              </span>
              <p className="text-base font-extrabold text-[#031B3D]">
                {gymOwner.resultBadge}
              </p>
            </div>
          </div>

          {/* Wellness Entrepreneur Side */}
          <div className="bg-[#031B3D] text-white rounded-3xl p-8 sm:p-10 border border-slate-800 shadow-xl flex flex-col justify-between relative overflow-hidden">
            <div className="border-b border-slate-800 pb-6 mb-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-3 rounded-2xl bg-[#FF6500]/20 text-[#FF6500]">
                  <Store className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-white">
                    {wellnessBrand.title}
                  </h3>
                  <p className="text-xs font-bold text-[#FFC928] uppercase tracking-wider">
                    {wellnessBrand.subtitle}
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4 mb-8 flex-grow">
              {wellnessBrand.points.map((point, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#25D366] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-200 font-medium leading-normal">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            <div className="bg-[#FF6500]/10 border border-[#FF6500]/30 p-4 rounded-2xl text-center">
              <span className="text-xs font-semibold text-[#FFC928] uppercase tracking-wider block mb-1">
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

import React from "react";
import { CheckCircle2, Dumbbell, Store } from "lucide-react";
import { BENEFITS_COMPARISON } from "@/data/benefits";

export default function Benefits() {
  const { gymOwners, wellnessBusinesses } = BENEFITS_COMPARISON;

  return (
    <section className="py-16 sm:py-24 bg-[#EAF7FF]" id="benefits">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-[#386FA4] border border-[#D7EEFA]">
            Mutual Value
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#133C55] md:text-5xl">
            A Simple Win for Both Sides
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#607D8B] md:text-lg">
            Discover how space subletting delivers immediate advantages to both gym owners and health entrepreneurs.
          </p>
        </div>

        {/* 2-Column Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Gym Owners */}
          <div className="rounded-3xl border border-[#D7EEFA] bg-white p-8 shadow-[0_12px_35px_rgba(89,165,216,0.08)] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6 border-b border-[#D7EEFA] pb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EAF7FF] text-[#59A5D8]">
                  <Dumbbell className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-[#133C55]">
                  {gymOwners.title}
                </h3>
              </div>

              <div className="space-y-4">
                {gymOwners.points.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#59A5D8] flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base font-semibold text-[#345466]">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Wellness Businesses */}
          <div className="rounded-3xl border border-[#D7EEFA] bg-white p-8 shadow-[0_12px_35px_rgba(89,165,216,0.08)] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6 border-b border-[#D7EEFA] pb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EAF7FF] text-[#386FA4]">
                  <Store className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-[#133C55]">
                  {wellnessBusinesses.title}
                </h3>
              </div>

              <div className="space-y-4">
                {wellnessBusinesses.points.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#386FA4] flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base font-semibold text-[#345466]">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

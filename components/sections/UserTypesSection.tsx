import React from "react";
import { CheckCircle, Dumbbell, Store, ArrowRight } from "lucide-react";
import Container from "../layout/Container";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import { PLATFORM_CARDS } from "@/data/benefits";

export default function UserTypesSection() {
  const { gymOwners, wellnessBusinesses } = PLATFORM_CARDS;

  return (
    <section className="py-16 sm:py-24 bg-[#F7F8FA]">
      <Container>
        <SectionHeading
          badge="Two-Sided Synergy"
          badgeVariant="navy"
          title="Built for Both Sides of the Fitness Business"
          subtitle="Racks on Rent acts as a bridge connecting forward-thinking gym owners with ambitious health and wellness entrepreneurs."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          
          {/* Card One — Gym Owners */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E5E7EB] shadow-lg hover:shadow-xl transition-all flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#062A5E]/5 rounded-bl-full pointer-events-none" />

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#062A5E] text-white flex items-center justify-center shadow-md">
                  <Dumbbell className="w-6 h-6 text-[#FFC928]" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#FF6500] uppercase tracking-wider block">
                    {gymOwners.badge}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-[#031B3D]">
                    {gymOwners.title}
                  </h3>
                </div>
              </div>

              <p className="text-base text-[#5C6470] leading-relaxed mb-8">
                {gymOwners.description}
              </p>

              <div className="space-y-3.5 mb-8">
                <h4 className="text-sm font-bold text-[#031B3D] uppercase tracking-wider">
                  Key Advantages for Gym Owners:
                </h4>
                {gymOwners.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#157A3D] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-[#121826] font-medium leading-normal">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <Button
                href={gymOwners.ctaLink}
                variant="secondary"
                size="lg"
                className="w-full justify-center gap-2 group-hover:bg-[#FF6500] transition-colors"
              >
                <span>{gymOwners.ctaText}</span>
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Card Two — Wellness Businesses */}
          <div className="bg-[#031B3D] text-white rounded-3xl p-8 sm:p-10 border border-slate-800 shadow-xl hover:shadow-2xl transition-all flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF6500]/10 rounded-bl-full pointer-events-none" />

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#FF6500] text-white flex items-center justify-center shadow-md">
                  <Store className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#FFC928] uppercase tracking-wider block">
                    {wellnessBusinesses.badge}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-white">
                    {wellnessBusinesses.title}
                  </h3>
                </div>
              </div>

              <p className="text-base text-slate-300 leading-relaxed mb-8">
                {wellnessBusinesses.description}
              </p>

              <div className="space-y-3.5 mb-8">
                <h4 className="text-sm font-bold text-[#FFC928] uppercase tracking-wider">
                  Key Advantages for Wellness Brands:
                </h4>
                {wellnessBusinesses.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#25D366] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-200 font-medium leading-normal">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800">
              <Button
                href={wellnessBusinesses.ctaLink}
                variant="primary"
                size="lg"
                className="w-full justify-center gap-2"
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

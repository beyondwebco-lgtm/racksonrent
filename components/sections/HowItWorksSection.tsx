import React from "react";
import { UserCheck, Maximize2, Store, Eye, MessageCircle, ShoppingBag, TrendingUp } from "lucide-react";
import Container from "../layout/Container";
import SectionHeading from "../ui/SectionHeading";
import { JOURNEY_STEPS } from "@/data/journey";

export default function HowItWorksSection() {
  const iconMap: Record<string, React.ReactNode> = {
    UserCheck: <UserCheck className="w-6 h-6 text-[#FF6500]" />,
    Maximize2: <Maximize2 className="w-6 h-6 text-[#062A5E]" />,
    Store: <Store className="w-6 h-6 text-[#157A3D]" />,
    Eye: <Eye className="w-6 h-6 text-amber-500" />,
    MessageCircle: <MessageCircle className="w-6 h-6 text-[#25D366]" />,
    ShoppingBag: <ShoppingBag className="w-6 h-6 text-blue-600" />,
    TrendingUp: <TrendingUp className="w-6 h-6 text-[#FF6500]" />,
  };

  return (
    <section className="py-16 sm:py-24 bg-white border-y border-[#E5E7EB]" id="how-it-works">
      <Container>
        <SectionHeading
          badge="Seamless Process"
          badgeVariant="orange"
          title="Customer Journey — Step by Step"
          subtitle="Understanding how Racks on Rent creates a smooth, transparent flow from gym check-in to shared business success."
        />

        {/* Desktop Connected Grid Layout */}
        <div className="hidden lg:grid lg:grid-cols-7 gap-4 relative mt-12">
          {/* Connector Line behind steps */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#FF6500] via-[#062A5E] to-[#157A3D] -translate-y-1/2 z-0" />

          {JOURNEY_STEPS.map((step) => (
            <div
              key={step.stepNumber}
              className="relative z-10 bg-white rounded-2xl p-4 border border-[#E5E7EB] shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-2 text-center"
            >
              <div>
                <div className="w-12 h-12 rounded-full bg-[#031B3D] text-[#FFC928] font-black text-lg flex items-center justify-center mx-auto mb-3 border-2 border-white shadow-md group-hover:scale-110 group-hover:bg-[#FF6500] group-hover:text-white transition-all">
                  {step.stepNumber}
                </div>
                <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center mx-auto mb-3">
                  {iconMap[step.iconName]}
                </div>
                <h3 className="font-bold text-sm text-[#031B3D] group-hover:text-[#FF6500] transition-colors leading-snug mb-1.5">
                  {step.title}
                </h3>
                <p className="text-xs text-[#5C6470] leading-relaxed">
                  {step.shortDescription}
                </p>
              </div>

              <div className="mt-3 pt-2 border-t border-slate-100">
                <span className="text-[10px] font-bold text-[#157A3D] uppercase tracking-tight block">
                  {step.visualTag}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile & Tablet Vertical Timeline */}
        <div className="lg:hidden space-y-6 relative before:absolute before:inset-0 before:left-6 before:w-1 before:bg-gradient-to-b before:from-[#FF6500] before:via-[#062A5E] before:to-[#157A3D] mt-8 pl-4">
          {JOURNEY_STEPS.map((step) => (
            <div key={step.stepNumber} className="relative flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#031B3D] text-[#FFC928] font-black text-base flex items-center justify-center border-4 border-white shadow-md flex-shrink-0 z-10">
                {step.stepNumber}
              </div>
              <div className="bg-white rounded-2xl p-5 border border-[#E5E7EB] shadow-sm flex-1">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h3 className="font-bold text-base text-[#031B3D]">
                    {step.title}
                  </h3>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 text-[#157A3D]">
                    {step.visualTag}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#5C6470] leading-relaxed">
                  {step.shortDescription}
                </p>
              </div>
            </div>
          ))}
        </div>

      </Container>
    </section>
  );
}

import React from "react";
import { UserCheck, Maximize2, Store, Eye, MessageCircle, ShoppingBag, TrendingUp } from "lucide-react";
import Container from "../layout/Container";
import SectionHeading from "../ui/SectionHeading";
import { JOURNEY_STEPS } from "@/data/journey";

export default function HowItWorksSection() {
  const iconMap: Record<string, React.ReactNode> = {
    UserCheck: <UserCheck className="w-6 h-6 text-[#59A5D8]" />,
    Maximize2: <Maximize2 className="w-6 h-6 text-[#59A5D8]" />,
    Store: <Store className="w-6 h-6 text-[#59A5D8]" />,
    Eye: <Eye className="w-6 h-6 text-[#59A5D8]" />,
    MessageCircle: <MessageCircle className="w-6 h-6 text-[#59A5D8]" />,
    ShoppingBag: <ShoppingBag className="w-6 h-6 text-[#59A5D8]" />,
    TrendingUp: <TrendingUp className="w-6 h-6 text-[#59A5D8]" />,
  };

  return (
    <section className="py-16 sm:py-24 bg-white border-y border-[#D7EEFA]" id="how-it-works">
      <Container>
        <SectionHeading
          badge="Seamless Process"
          title="Customer Journey — Step by Step"
          subtitle="Understanding how Racks on Rent creates a smooth, transparent flow from gym check-in to shared business success."
        />

        {/* Desktop Connected Grid Layout */}
        <div className="hidden lg:grid lg:grid-cols-7 gap-4 relative mt-12">
          {/* Connector Line behind steps */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-[#D7EEFA] -translate-y-1/2 z-0" />

          {JOURNEY_STEPS.map((step) => (
            <div
              key={step.stepNumber}
              className="relative z-10 rounded-3xl border border-[#D7EEFA] bg-white p-4 shadow-[0_12px_35px_rgba(89,165,216,0.08)] hover:shadow-[0_20px_50px_rgba(89,165,216,0.16)] transition-all duration-300 flex flex-col justify-between group hover:-translate-y-2 text-center"
            >
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#59A5D8] font-bold text-white mx-auto mb-3 shadow-md group-hover:bg-[#386FA4] transition-all">
                  {step.stepNumber}
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#EAF7FF] mx-auto mb-3 text-[#59A5D8]">
                  {iconMap[step.iconName]}
                </div>
                <h3 className="font-bold text-sm text-[#133C55] group-hover:text-[#386FA4] transition-colors leading-snug mb-1.5">
                  {step.title}
                </h3>
                <p className="text-xs text-[#607D8B] leading-relaxed">
                  {step.shortDescription}
                </p>
              </div>

              <div className="mt-3 pt-2 border-t border-[#D7EEFA]/60">
                <span className="text-[10px] font-bold text-[#386FA4] uppercase tracking-tight block">
                  {step.visualTag}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile & Tablet Vertical Timeline */}
        <div className="lg:hidden space-y-6 relative before:absolute before:inset-0 before:left-6 before:w-1 before:bg-[#D7EEFA] mt-8 pl-4">
          {JOURNEY_STEPS.map((step) => (
            <div key={step.stepNumber} className="relative flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#59A5D8] font-bold text-white flex-shrink-0 z-10 shadow-md">
                {step.stepNumber}
              </div>
              <div className="rounded-3xl border border-[#D7EEFA] bg-white p-5 shadow-[0_12px_35px_rgba(89,165,216,0.08)] flex-1">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h3 className="font-bold text-base text-[#133C55]">
                    {step.title}
                  </h3>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#EAF7FF] text-[#386FA4]">
                    {step.visualTag}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#607D8B] leading-relaxed">
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

import React from "react";
import { PlusCircle, Search, Handshake, TrendingUp, ArrowRight } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "List Your Unused Space",
      description: "Add rack details and available space information.",
      icon: <PlusCircle className="w-6 h-6 text-[#6B0F1A]" />,
    },
    {
      number: 2,
      title: "Brands Discover You",
      description: "Relevant wellness brands find your available space.",
      icon: <Search className="w-6 h-6 text-[#6B0F1A]" />,
    },
    {
      number: 3,
      title: "Connect & Approve",
      description: "Review requests and approve suitable brands.",
      icon: <Handshake className="w-6 h-6 text-[#6B0F1A]" />,
    },
    {
      number: 4,
      title: "Earn Regular Income",
      description: "Build partnerships and generate additional monthly income.",
      icon: <TrendingUp className="w-6 h-6 text-[#6B0F1A]" />,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#FFF6A3]/30 border-y border-[#F0E2E4]" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex rounded-full bg-[#FFFDF5] px-4 py-1.5 text-sm font-bold text-[#6B0F1A] border border-[#F0E2E4]">
            4-Step Process
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#6B0F1A] md:text-5xl">
            How It Works
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#5F5F5F] md:text-lg font-medium">
            Four simple steps to connect gym owners with nutrition, health, and wellness providers.
          </p>
        </div>

        {/* 4 Step Cards with Desktop Arrows */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => (
            <div key={step.number} className="relative flex flex-col">
              <div className="rounded-3xl border border-[#F0E2E4] bg-[#FFFDF5] p-6 shadow-[0_12px_35px_rgba(107,15,26,0.06)] flex flex-col items-center text-center relative group hover:-translate-y-1 hover:border-[#6B0F1A]/40 transition-all h-full">
                
                {/* Step Number Circle */}
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#6B0F1A] font-black text-[#FFF6A3] mb-5 shadow-sm text-lg border-2 border-[#F4E409]">
                  {step.number}
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FFF6A3] mb-4 text-[#6B0F1A]">
                  {step.icon}
                </div>

                <h3 className="text-lg font-black text-[#6B0F1A] mb-2">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#5F5F5F] leading-relaxed font-medium">
                  {step.description}
                </p>
              </div>

              {/* Connecting Desktop Arrow (hidden on mobile and last step) */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 p-1.5 rounded-full bg-[#F4E409] text-[#3D0710] shadow-sm border border-[#6B0F1A]/20">
                  <ArrowRight className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

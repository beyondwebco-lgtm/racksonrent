import React from "react";
import { Dumbbell, Store, Handshake } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "Gym Owner Offers Space",
      description: "The gym owner shares details about an available rack, shelf, counter, or corner.",
      icon: <Dumbbell className="w-6 h-6 text-[#6B0F1A]" />,
    },
    {
      number: 2,
      title: "Wellness Business Shows Interest",
      description: "The nutrition or wellness provider shares its product category, city, and space requirement.",
      icon: <Store className="w-6 h-6 text-[#6B0F1A]" />,
    },
    {
      number: 3,
      title: "Both Businesses Connect",
      description: "The Racks on Rent team helps both parties discuss the opportunity and move forward.",
      icon: <Handshake className="w-6 h-6 text-[#6B0F1A]" />,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#FFF6A3]/30 border-y border-[#F0E2E4]" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex rounded-full bg-[#FFFDF5] px-4 py-1.5 text-sm font-bold text-[#6B0F1A] border border-[#F0E2E4]">
            Simple Process
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#6B0F1A] md:text-5xl">
            How It Works
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#5F5F5F] md:text-lg font-medium">
            Three simple steps to connect gym owners with nutrition and wellness providers.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-3xl border border-[#F0E2E4] bg-[#FFFDF5] p-8 shadow-[0_12px_35px_rgba(107,15,26,0.06)] flex flex-col items-center text-center relative group hover:-translate-y-1 hover:border-[#6B0F1A]/30 transition-all"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#6B0F1A] font-extrabold text-[#FFF6A3] mb-6 shadow-sm text-lg border border-[#F4E409]/40">
                {step.number}
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FFF6A3] mb-4 text-[#6B0F1A]">
                {step.icon}
              </div>

              <h3 className="text-xl font-black text-[#6B0F1A] mb-3">
                {step.title}
              </h3>

              <p className="text-sm text-[#5F5F5F] leading-relaxed font-medium">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

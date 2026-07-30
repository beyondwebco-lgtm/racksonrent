import React from "react";
import { Dumbbell, Store, Handshake } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "Gym Owner Offers Space",
      description: "The gym owner shares details about an available rack, shelf, counter, or corner.",
      icon: <Dumbbell className="w-6 h-6 text-[#59A5D8]" />,
    },
    {
      number: 2,
      title: "Wellness Business Shows Interest",
      description: "The nutrition or wellness provider shares its product category, city, and space requirement.",
      icon: <Store className="w-6 h-6 text-[#59A5D8]" />,
    },
    {
      number: 3,
      title: "Both Businesses Connect",
      description: "The Racks on Rent team helps both parties discuss the opportunity and move forward.",
      icon: <Handshake className="w-6 h-6 text-[#59A5D8]" />,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#EAF7FF] border-y border-[#D7EEFA]" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-[#386FA4] border border-[#D7EEFA]">
            Simple Process
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#133C55] md:text-5xl">
            How It Works
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#607D8B] md:text-lg">
            Three simple steps to connect gym owners with nutrition and wellness providers.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-3xl border border-[#D7EEFA] bg-white p-8 shadow-[0_12px_35px_rgba(89,165,216,0.08)] flex flex-col items-center text-center relative group hover:-translate-y-1 transition-all"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#59A5D8] font-bold text-white mb-6 shadow-sm text-lg">
                {step.number}
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EAF7FF] mb-4">
                {step.icon}
              </div>

              <h3 className="text-xl font-bold text-[#133C55] mb-3">
                {step.title}
              </h3>

              <p className="text-sm text-[#607D8B] leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

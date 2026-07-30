import React from "react";
import { ShieldCheck, Lock, Headphones, TrendingUp } from "lucide-react";
import { WHY_CHOOSE_US } from "@/data/benefits";

export default function WhyChooseUs() {
  const iconMap: Record<string, React.ReactNode> = {
    ShieldCheck: <ShieldCheck className="w-8 h-8 text-[#6B0F1A]" />,
    Lock: <Lock className="w-8 h-8 text-[#6B0F1A]" />,
    Headphones: <Headphones className="w-8 h-8 text-[#6B0F1A]" />,
    TrendingUp: <TrendingUp className="w-8 h-8 text-[#6B0F1A]" />,
  };

  return (
    <section className="py-16 sm:py-24 bg-[#FFFDF5] border-t border-[#F0E2E4]" id="why-choose-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex rounded-full bg-[#FFF6A3] px-4 py-1.5 text-sm font-bold text-[#6B0F1A] border border-[#F0E2E4]">
            Platform Advantages
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#6B0F1A] md:text-5xl">
            Why Choose Racks on Rent?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#5F5F5F] md:text-lg font-medium">
            We provide a transparent, dedicated platform designed to simplify fitness space subletting.
          </p>
        </div>

        {/* 4 Benefit Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl border-2 border-[#F0E2E4] bg-[#FFFDF5] p-6 shadow-[0_12px_35px_rgba(107,15,26,0.06)] hover:shadow-[0_20px_50px_rgba(107,15,26,0.14)] hover:border-[#6B0F1A]/40 transition-all hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FFF6A3] mb-5 shadow-xs">
                  {iconMap[item.iconName]}
                </div>
                <h3 className="text-xl font-black text-[#6B0F1A] mb-2.5">
                  {item.title}
                </h3>
                <p className="text-sm text-[#5F5F5F] leading-relaxed font-medium">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

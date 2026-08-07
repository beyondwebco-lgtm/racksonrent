import React from "react";
import type { Metadata } from "next";
import HowItWorks from "@/components/HowItWorks";
import WhyChooseUs from "@/components/WhyChooseUs";
import EnquiryForm from "@/components/EnquiryForm";
import ScrollReveal from "@/components/ScrollReveal";
import { Dumbbell, ArrowRight, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "How It Works & Platform Advantages | Racks on Rent",
  description:
    "Learn how Racks on Rent connects gym owners with wellness brands in 4 simple steps, and discover the advantages of subletting unused gym space.",
};

export default function HowItWorksPage() {
  return (
    <div className="bg-[#FFFDF5] min-h-screen">
      {/* Hero Header Section */}
      <section className="bg-gradient-to-b from-[#3D0710] to-[#6B0F1A] text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-[#6B0F1A]">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#FFF6A3]/20 px-4 py-1.5 text-xs sm:text-sm font-extrabold text-[#F7E200] border border-[#F7E200]/30 backdrop-blur-xs">
            <ShieldCheck className="w-4 h-4 text-[#F7E200]" />
            <span>Simple, Transparent & Secure</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
            How <span className="text-[#F7E200] italic font-serif">Racks on Rent</span> Works
          </h1>

          <p className="max-w-2xl mx-auto text-sm sm:text-base lg:text-lg text-[#FFF6A3] font-medium leading-relaxed">
            Everything you need to know about connecting gym owners with nutrition, fitness, and wellness brand partners.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#F7E200] px-6 py-3 text-sm font-extrabold text-[#3D0710] shadow-md hover:bg-[#FFF6A3] hover:scale-105 transition-all"
            >
              <Dumbbell className="w-4 h-4" />
              <span>Get Started Now</span>
            </a>

            <a
              href="#why-choose-us"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 text-sm font-bold text-white border border-white/20 hover:bg-white/20 transition-all"
            >
              <span>Platform Advantages</span>
              <ArrowRight className="w-4 h-4 text-[#F7E200]" />
            </a>
          </div>
        </div>
      </section>

      {/* Main Section 1: How It Works (4-Step Process) */}
      <ScrollReveal>
        <HowItWorks />
      </ScrollReveal>

      {/* Main Section 2: Why Choose Us (Platform Advantages) */}
      <ScrollReveal>
        <WhyChooseUs />
      </ScrollReveal>

      {/* Action / Contact Section */}
      <ScrollReveal>
        <EnquiryForm />
      </ScrollReveal>
    </div>
  );
}

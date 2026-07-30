import React from "react";
import { Quote } from "lucide-react";
import Container from "../layout/Container";
import SectionHeading from "../ui/SectionHeading";
import { SAMPLE_TESTIMONIALS } from "@/data/testimonials";

export default function TestimonialsSection() {
  return (
    <section className="py-16 sm:py-24 bg-[#EAF7FF] border-b border-[#D7EEFA]" id="testimonials">
      <Container>
        <SectionHeading
          badge="Sample Feedback"
          title="What Gym Owners & Brands Say"
          subtitle="Placeholder testimonials illustrating how gym owners and wellness businesses view space subletting opportunities."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SAMPLE_TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl border border-[#D7EEFA] bg-white p-8 shadow-[0_12px_35px_rgba(89,165,216,0.08)] hover:shadow-[0_20px_50px_rgba(89,165,216,0.16)] transition-all duration-300 hover:-translate-y-1 hover:border-[#84D2F6] flex flex-col justify-between relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#EAF7FF] text-[#59A5D8]">
                    <Quote className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-[#EAF7FF] text-[#386FA4]">
                    Sample Content
                  </span>
                </div>

                <p className="text-sm sm:text-base text-[#345466] leading-relaxed italic mb-6">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-[#D7EEFA]/60 flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-sm text-[#133C55]">
                    {item.authorTitle}
                  </h3>
                  <p className="text-xs text-[#607D8B]">{item.location}</p>
                </div>
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-[#EAF7FF] text-[#386FA4]">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

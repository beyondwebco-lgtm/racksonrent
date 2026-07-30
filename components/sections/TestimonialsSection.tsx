import React from "react";
import { Quote } from "lucide-react";
import Container from "../layout/Container";
import SectionHeading from "../ui/SectionHeading";
import Badge from "../ui/Badge";
import { SAMPLE_TESTIMONIALS } from "@/data/testimonials";

export default function TestimonialsSection() {
  return (
    <section className="py-16 sm:py-24 bg-[#F7F8FA] border-b border-[#E5E7EB]" id="testimonials">
      <Container>
        <SectionHeading
          badge="Sample Feedback"
          badgeVariant="navy"
          title="What Gym Owners & Brands Say"
          subtitle="Placeholder testimonials illustrating how gym owners and wellness businesses view space subletting opportunities."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SAMPLE_TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-8 border border-[#E5E7EB] shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-2xl bg-[#062A5E]/10 text-[#062A5E] flex items-center justify-center">
                    <Quote className="w-5 h-5" />
                  </div>
                  <Badge variant="slate" className="text-[11px] font-bold">
                    Sample Content
                  </Badge>
                </div>

                <p className="text-sm sm:text-base text-[#121826] leading-relaxed italic mb-6">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-sm text-[#031B3D]">
                    {item.authorTitle}
                  </h3>
                  <p className="text-xs text-slate-500">{item.location}</p>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 text-[#062A5E]">
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

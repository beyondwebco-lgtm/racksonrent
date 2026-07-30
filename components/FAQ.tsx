"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FIVE_FAQS } from "@/data/faqs";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-16 sm:py-24 bg-[#FFFDF5] border-y border-[#F0E2E4]" id="faq">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex rounded-full bg-[#FFF6A3] px-4 py-1.5 text-sm font-bold text-[#6B0F1A] border border-[#F0E2E4]">
            Got Questions?
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#6B0F1A] md:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#5F5F5F] md:text-lg font-medium">
            Everything you need to know about the Racks on Rent platform and space sharing process.
          </p>
        </div>

        {/* 5 Accessible FAQ Accordion */}
        <div className="space-y-4 max-w-3xl mx-auto">
          {FIVE_FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 shadow-xs overflow-hidden ${
                  isOpen
                    ? "border-[#6B0F1A] bg-[#FFF6A3]/30 shadow-sm"
                    : "border-[#F0E2E4] bg-[#FFFDF5] hover:border-[#6B0F1A]/50"
                }`}
              >
                <button
                  type="button"
                  id={`faq-btn-${faq.id}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-content-${faq.id}`}
                  onClick={() => toggleItem(faq.id)}
                  className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left font-black text-base sm:text-lg text-[#6B0F1A] hover:text-[#3D0710] focus:outline-none transition-colors cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <span
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-[#6B0F1A] text-[#FFF6A3]" : "bg-[#FFF6A3] text-[#6B0F1A]"
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </span>
                </button>

                {isOpen && (
                  <div
                    id={`faq-content-${faq.id}`}
                    role="region"
                    aria-labelledby={`faq-btn-${faq.id}`}
                    className="px-5 pb-6 sm:px-6 pt-1 text-[#5F5F5F] text-base leading-relaxed border-t border-[#F0E2E4] bg-[#FFFDF5] font-medium"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

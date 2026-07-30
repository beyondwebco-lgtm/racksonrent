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
    <section className="py-16 sm:py-24 bg-white border-y border-[#D7EEFA]" id="faq">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex rounded-full bg-[#EAF7FF] px-4 py-1.5 text-sm font-semibold text-[#386FA4] border border-[#D7EEFA]">
            Got Questions?
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#133C55] md:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#607D8B] md:text-lg">
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
                    ? "border-[#84D2F6] bg-[#F8FCFF] shadow-sm"
                    : "border-[#D7EEFA] bg-white hover:border-[#84D2F6]/60"
                }`}
              >
                <button
                  type="button"
                  id={`faq-btn-${faq.id}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-content-${faq.id}`}
                  onClick={() => toggleItem(faq.id)}
                  className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left font-bold text-base sm:text-lg text-[#133C55] hover:text-[#386FA4] focus:outline-none transition-colors cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <span
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-[#EAF7FF] text-[#59A5D8]" : "bg-[#EAF7FF] text-[#59A5D8]"
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
                    className="px-5 pb-6 sm:px-6 pt-1 text-[#607D8B] text-base leading-relaxed border-t border-[#D7EEFA]/60 bg-[#F8FCFF]"
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

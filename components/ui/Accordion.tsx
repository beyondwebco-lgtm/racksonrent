"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQItem } from "@/data/faqs";

interface AccordionProps {
  items: FAQItem[];
  defaultOpenId?: string;
}

export default function Accordion({ items, defaultOpenId }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(defaultOpenId || items[0]?.id || null);

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="space-y-4 max-w-4xl mx-auto">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div
            key={item.id}
            className={`rounded-2xl border transition-all duration-200 shadow-xs overflow-hidden ${
              isOpen
                ? "border-[#84D2F6] bg-[#F8FCFF] shadow-sm"
                : "border-[#D7EEFA] bg-white hover:border-[#84D2F6]/60"
            }`}
          >
            <button
              type="button"
              id={`faq-btn-${item.id}`}
              aria-expanded={isOpen}
              aria-controls={`faq-content-${item.id}`}
              onClick={() => toggleItem(item.id)}
              className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left font-bold text-base sm:text-lg text-[#133C55] hover:text-[#386FA4] focus:outline-none transition-colors cursor-pointer"
            >
              <span>{item.question}</span>
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
                id={`faq-content-${item.id}`}
                role="region"
                aria-labelledby={`faq-btn-${item.id}`}
                className="px-5 pb-6 sm:px-6 pt-1 text-[#607D8B] text-base leading-relaxed border-t border-[#D7EEFA]/60 bg-[#F8FCFF]"
              >
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

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
            className="border border-[#E5E7EB] bg-white rounded-2xl overflow-hidden transition-all duration-200 shadow-sm hover:shadow-md"
          >
            <button
              type="button"
              id={`faq-btn-${item.id}`}
              aria-expanded={isOpen}
              aria-controls={`faq-content-${item.id}`}
              onClick={() => toggleItem(item.id)}
              className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left font-bold text-base sm:text-lg text-[#031B3D] hover:text-[#FF6500] focus:outline-none focus:bg-slate-50 transition-colors"
            >
              <span>{item.question}</span>
              <span
                className={`flex-shrink-0 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center transition-transform duration-300 ${
                  isOpen ? "rotate-180 bg-[#FF6500]/10 text-[#FF6500]" : "text-slate-600"
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
                className="px-5 pb-6 sm:px-6 pt-1 text-[#5C6470] text-base leading-relaxed border-t border-slate-100 bg-slate-50/50"
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

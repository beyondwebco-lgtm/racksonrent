"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { CONTACT_INFO } from "@/data/navigation";

export default function WhatsAppButton() {
  return (
    <a
      href={CONTACT_INFO.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Enquire on WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 bg-[#386FA4] hover:bg-[#133C55] text-white px-4 py-3 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#59A5D8]/50 group border border-white/20"
    >
      <MessageCircle className="w-6 h-6 animate-pulse group-hover:animate-none fill-current text-[#84D2F6]" />
      <span className="font-bold text-sm hidden sm:inline-block pr-1">
        Enquire on WhatsApp
      </span>
      <span className="relative flex h-3 w-3 sm:hidden">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#84D2F6] opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-[#84D2F6]"></span>
      </span>
    </a>
  );
}

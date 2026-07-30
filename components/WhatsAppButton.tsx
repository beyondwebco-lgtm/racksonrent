"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { SITE_CONFIG } from "@/data/config";

export default function WhatsAppButton() {
  return (
    <a
      href={SITE_CONFIG.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Enquire on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex items-center gap-2 bg-[#59A5D8] hover:bg-[#386FA4] text-white px-4 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#84D2F6]/50 cursor-pointer"
    >
      <MessageCircle className="w-6 h-6 fill-current text-white" />
      <span className="font-bold text-sm hidden sm:inline-block pr-1">
        Enquire on WhatsApp
      </span>
    </a>
  );
}

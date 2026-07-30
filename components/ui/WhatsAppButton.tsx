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
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white px-4 py-3 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-400/50 group"
    >
      <MessageCircle className="w-6 h-6 animate-pulse group-hover:animate-none fill-current" />
      <span className="font-bold text-sm hidden sm:inline-block pr-1">
        Enquire on WhatsApp
      </span>
      <span className="relative flex h-3 w-3 sm:hidden">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
      </span>
    </a>
  );
}

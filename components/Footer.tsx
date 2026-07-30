import React from "react";
import { Phone, Mail, MessageCircle, Layers } from "lucide-react";
import { SITE_CONFIG, NAV_LINKS } from "@/data/config";

export default function Footer() {
  return (
    <footer className="border-t border-[#6B0F1A] bg-[#3D0710] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-[#6B0F1A]/60">
          
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#F4E409] flex items-center justify-center text-[#3D0710] shadow-xs">
              <Layers className="w-6 h-6 stroke-[2.5]" />
            </div>
            <div>
              <span className="text-xl font-extrabold text-white block">
                Racks<span className="text-[#F4E409]">on</span>Rent
              </span>
              <span className="text-xs font-bold text-[#FFF6A3] uppercase tracking-wider block">
                {SITE_CONFIG.tagline}
              </span>
            </div>
          </div>

          {/* Quick Nav */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm font-bold">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#FFF6A3] hover:text-[#F4E409] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Direct Contact Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm font-bold">
            <a
              href={SITE_CONFIG.telLink}
              className="inline-flex items-center gap-1.5 text-[#FFFDF5] hover:text-[#F4E409] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#F4E409]" />
              <span>{SITE_CONFIG.phoneDisplay}</span>
            </a>

            <span className="text-[#6B0F1A]">•</span>

            <a
              href={SITE_CONFIG.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[#FFFDF5] hover:text-[#F4E409] transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-[#F4E409] fill-current" />
              <span>WhatsApp</span>
            </a>

            <span className="text-[#6B0F1A]">•</span>

            <a
              href={SITE_CONFIG.mailtoLink}
              className="inline-flex items-center gap-1.5 text-[#FFFDF5] hover:text-[#F4E409] transition-colors"
            >
              <Mail className="w-4 h-4 text-[#F4E409]" />
              <span>{SITE_CONFIG.email}</span>
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 text-center text-xs text-[#FFF6A3]/80 font-medium">
          <p>© 2026 Racks on Rent. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}

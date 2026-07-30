import React from "react";
import { Phone, Mail, MessageCircle, Layers } from "lucide-react";
import { SITE_CONFIG, NAV_LINKS } from "@/data/config";

export default function Footer() {
  return (
    <footer className="border-t border-[#D7EEFA] bg-[#F8FCFF] text-[#133C55] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-[#D7EEFA]">
          
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#EAF7FF] flex items-center justify-center text-[#59A5D8] shadow-xs">
              <Layers className="w-6 h-6 stroke-[2.5]" />
            </div>
            <div>
              <span className="text-xl font-extrabold text-[#133C55] block">
                Racks<span className="text-[#59A5D8]">on</span>Rent
              </span>
              <span className="text-xs font-semibold text-[#59A5D8] uppercase tracking-wider block">
                {SITE_CONFIG.tagline}
              </span>
            </div>
          </div>

          {/* Quick Nav */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm font-semibold">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#133C55] hover:text-[#59A5D8] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Direct Contact Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm font-semibold">
            <a
              href={SITE_CONFIG.telLink}
              className="inline-flex items-center gap-1.5 text-[#133C55] hover:text-[#59A5D8] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#59A5D8]" />
              <span>{SITE_CONFIG.phoneDisplay}</span>
            </a>

            <span className="text-[#D7EEFA]">•</span>

            <a
              href={SITE_CONFIG.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[#133C55] hover:text-[#59A5D8] transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-[#59A5D8] fill-current" />
              <span>WhatsApp</span>
            </a>

            <span className="text-[#D7EEFA]">•</span>

            <a
              href={SITE_CONFIG.mailtoLink}
              className="inline-flex items-center gap-1.5 text-[#133C55] hover:text-[#59A5D8] transition-colors"
            >
              <Mail className="w-4 h-4 text-[#59A5D8]" />
              <span>{SITE_CONFIG.email}</span>
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 text-center text-xs text-[#607D8B] font-medium">
          <p>© 2026 Racks on Rent. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}

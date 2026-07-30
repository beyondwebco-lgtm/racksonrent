import React from "react";
import Link from "next/link";
import { Layers, Phone, Mail, Globe, MessageCircle } from "lucide-react";
import { CONTACT_INFO, FOOTER_QUICK_LINKS, FOOTER_OPPORTUNITY_LINKS } from "@/data/navigation";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="bg-[#F8FCFF] text-[#133C55] border-t border-[#D7EEFA] pt-16 pb-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#D7EEFA]">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-2xl bg-[#EAF7FF] flex items-center justify-center text-[#59A5D8] shadow-xs">
                <Layers className="w-6 h-6 stroke-[2.5]" />
              </div>
              <div>
                <span className="text-xl font-black text-[#133C55] block">Racks<span className="text-[#59A5D8]">on</span>Rent</span>
                <span className="text-[10px] font-semibold text-[#59A5D8] uppercase tracking-wider block -mt-1">Sublet Space. Share Success.</span>
              </div>
            </Link>
            <p className="text-sm text-[#607D8B] leading-relaxed">
              Racks on Rent connects gym owners who have unused display space with nutrition, fitness, and wellness businesses looking to reach active, health-conscious customers.
            </p>
            <div className="pt-2">
              <p className="text-xs font-semibold text-[#607D8B]">Main Brand Statement:</p>
              <p className="text-sm font-bold text-[#133C55]">One Space. Two Dreams. Endless Possibilities.</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-bold text-[#133C55] uppercase tracking-wider mb-4 border-b border-[#D7EEFA] pb-2">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              {FOOTER_QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#133C55] hover:text-[#59A5D8] transition-colors flex items-center gap-1.5 font-medium"
                  >
                    <span className="text-[#59A5D8] text-xs">›</span> {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Opportunities Column */}
          <div>
            <h3 className="text-base font-bold text-[#133C55] uppercase tracking-wider mb-4 border-b border-[#D7EEFA] pb-2">
              Space Opportunities
            </h3>
            <ul className="space-y-2.5 text-sm">
              {FOOTER_OPPORTUNITY_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#133C55] hover:text-[#59A5D8] transition-colors flex items-center gap-1.5 font-medium"
                  >
                    <span className="text-[#59A5D8] text-xs">›</span> {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact Column */}
          <div>
            <h3 className="text-base font-bold text-[#133C55] uppercase tracking-wider mb-4 border-b border-[#D7EEFA] pb-2">
              Direct Contact
            </h3>
            <ul className="space-y-3.5 text-sm">
              <li>
                <a
                  href={CONTACT_INFO.telLink}
                  className="flex items-center gap-3 text-[#133C55] hover:text-[#59A5D8] group font-medium"
                >
                  <div className="w-8 h-8 rounded-xl bg-[#EAF7FF] flex items-center justify-center text-[#59A5D8] group-hover:bg-[#59A5D8] group-hover:text-white transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span>{CONTACT_INFO.phoneFormatted}</span>
                </a>
              </li>
              <li>
                <a
                  href={CONTACT_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[#133C55] hover:text-[#59A5D8] group font-medium"
                >
                  <div className="w-8 h-8 rounded-xl bg-[#EAF7FF] flex items-center justify-center text-[#59A5D8] group-hover:bg-[#59A5D8] group-hover:text-white transition-colors">
                    <MessageCircle className="w-4 h-4 fill-current" />
                  </div>
                  <span>WhatsApp: {CONTACT_INFO.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={CONTACT_INFO.mailtoLink}
                  className="flex items-center gap-3 text-[#133C55] hover:text-[#59A5D8] group font-medium"
                >
                  <div className="w-8 h-8 rounded-xl bg-[#EAF7FF] flex items-center justify-center text-[#59A5D8] group-hover:bg-[#59A5D8] group-hover:text-white transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span>{CONTACT_INFO.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={CONTACT_INFO.websiteUrl}
                  className="flex items-center gap-3 text-[#133C55] hover:text-[#59A5D8] group font-medium"
                >
                  <div className="w-8 h-8 rounded-xl bg-[#EAF7FF] flex items-center justify-center text-[#59A5D8] group-hover:bg-[#59A5D8] group-hover:text-white transition-colors">
                    <Globe className="w-4 h-4" />
                  </div>
                  <span>{CONTACT_INFO.websiteDisplay}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#607D8B]">
          <p>© 2026 Racks on Rent. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-[#59A5D8] transition-colors">
              Privacy Policy
            </Link>
            <span className="text-[#D7EEFA]">•</span>
            <span className="text-[#607D8B]">Terms & Conditions</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}

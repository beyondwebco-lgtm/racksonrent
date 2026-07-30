"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, MessageCircle, Layers } from "lucide-react";
import { SITE_CONFIG, NAV_LINKS } from "@/data/config";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      setMobileMenuOpen(false);
      const targetId = href.substring(1);
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 border-b border-[#D7EEFA] bg-white/95 backdrop-blur-md ${
        scrolled ? "py-3 shadow-xs" : "py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group focus:outline-none">
          <div className="w-9 h-9 rounded-xl bg-[#EAF7FF] flex items-center justify-center text-[#59A5D8] shadow-xs">
            <Layers className="w-5 h-5 stroke-[2.5]" />
          </div>
          <div>
            <span className="text-xl font-extrabold tracking-tight text-[#133C55] block leading-none">
              Racks<span className="text-[#59A5D8]">on</span>Rent
            </span>
            <span className="text-[10px] font-semibold text-[#59A5D8] tracking-wider uppercase block mt-0.5">
              Sublet Space. Share Success.
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="px-3.5 py-2 rounded-xl text-sm font-semibold text-[#133C55] hover:text-[#59A5D8] hover:bg-[#F8FCFF] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={SITE_CONFIG.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#59A5D8] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#386FA4] shadow-xs"
          >
            <MessageCircle className="w-4 h-4 fill-current text-white" />
            <span>Enquire on WhatsApp</span>
          </a>
        </div>

        {/* Mobile Right Controls */}
        <div className="flex items-center gap-2 md:hidden">
          <a
            href={SITE_CONFIG.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp Enquiry"
            className="p-2.5 rounded-full bg-[#59A5D8] text-white shadow-xs hover:bg-[#386FA4] transition-colors"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle menu"
            className="p-2.5 rounded-xl text-[#133C55] hover:text-[#59A5D8] hover:bg-[#EAF7FF] border border-[#D7EEFA] transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Solid White Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-0 top-[65px] bottom-0 z-50 bg-white border-t border-[#D7EEFA] flex flex-col justify-between p-6 md:hidden overflow-y-auto">
          <nav className="space-y-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block px-4 py-3 rounded-xl font-bold text-lg text-[#133C55] hover:text-[#59A5D8] hover:bg-[#EAF7FF] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-6 border-t border-[#D7EEFA] space-y-3">
            <a
              href={SITE_CONFIG.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#59A5D8] py-3.5 text-base font-semibold text-white shadow-xs hover:bg-[#386FA4]"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Enquire on WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

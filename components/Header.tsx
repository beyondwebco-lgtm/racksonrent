"use client";

import React, { useState, useEffect, useCallback } from "react";
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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [mobileMenuOpen]);

  // Handle ESC key to close menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  const closeMenu = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      closeMenu();
      const targetId = href.substring(1);
      
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 50);
    }
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-200 border-b border-[#F0E2E4] bg-[#FFFDF5]/95 backdrop-blur-md ${
          scrolled ? "py-3 shadow-xs" : "py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group focus:outline-none">
            <div className="w-9 h-9 rounded-xl bg-[#6B0F1A] flex items-center justify-center text-[#F4E409] shadow-xs">
              <Layers className="w-5 h-5 stroke-[2.5]" />
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-tight text-[#6B0F1A] block leading-none">
                Racks<span className="text-[#6B0F1A]">on</span>Rent
              </span>
              <span className="text-[10px] font-bold text-[#6B0F1A] tracking-wider uppercase block mt-0.5">
                Sublet Space. Share Success.
              </span>
            </div>
          </Link>

          {/* Desktop Navigation (>= 768px) */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3.5 py-2 rounded-xl text-sm font-bold text-[#6B0F1A] hover:text-[#3D0710] hover:bg-[#FFF6A3]/40 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA (>= 768px) */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={SITE_CONFIG.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#F4E409] px-5 py-2.5 text-sm font-extrabold text-[#3D0710] transition hover:bg-[#3D0710] hover:text-[#F4E409] shadow-xs border border-[#6B0F1A]/20"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Enquire on WhatsApp</span>
            </a>
          </div>

          {/* Mobile Right Controls (< 768px) */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href={SITE_CONFIG.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Enquiry"
              className="p-2.5 rounded-full bg-[#F4E409] text-[#3D0710] shadow-xs hover:bg-[#3D0710] hover:text-[#F4E409] transition-colors"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              aria-expanded={mobileMenuOpen}
              aria-label="Open navigation menu"
              className="p-2.5 rounded-xl text-[#6B0F1A] hover:text-[#3D0710] hover:bg-[#FFF6A3]/40 border border-[#F0E2E4] transition-colors cursor-pointer"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

        </div>
      </header>

      {/* Solid Warm White Full-Screen Mobile Drawer (< 768px) */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-[#FFFDF5] md:hidden flex flex-col justify-between overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation Menu"
        >
          {/* Top Bar inside Drawer */}
          <div className="py-4 px-4 sm:px-6 flex items-center justify-between border-b border-[#F0E2E4] bg-[#FFFDF5] sticky top-0 z-10">
            <Link
              href="/"
              onClick={closeMenu}
              className="flex items-center gap-2.5 focus:outline-none"
            >
              <div className="w-9 h-9 rounded-xl bg-[#6B0F1A] flex items-center justify-center text-[#F4E409] shadow-xs">
                <Layers className="w-5 h-5 stroke-[2.5]" />
              </div>
              <div>
                <span className="text-xl font-extrabold tracking-tight text-[#6B0F1A] block leading-none">
                  Racks<span className="text-[#6B0F1A]">on</span>Rent
                </span>
                <span className="text-[10px] font-bold text-[#6B0F1A] tracking-wider uppercase block mt-0.5">
                  Sublet Space. Share Success.
                </span>
              </div>
            </Link>

            <div className="flex items-center gap-2">
              <a
                href={SITE_CONFIG.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Enquiry"
                className="p-2.5 rounded-full bg-[#F4E409] text-[#3D0710] shadow-xs hover:bg-[#3D0710] hover:text-[#F4E409] transition-colors"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
              </a>

              <button
                type="button"
                onClick={closeMenu}
                aria-label="Close navigation menu"
                className="p-2.5 rounded-xl text-[#6B0F1A] hover:bg-[#FFF6A3]/40 border border-[#F0E2E4] transition-colors cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="p-6 space-y-3 flex-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block px-5 py-3.5 rounded-2xl font-bold text-xl text-[#6B0F1A] hover:bg-[#FFF6A3]/40 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Bottom WhatsApp CTA inside Drawer */}
          <div className="p-6 border-t border-[#F0E2E4] bg-[#FFF6A3]/30">
            <a
              href={SITE_CONFIG.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#F4E409] py-4 text-base font-extrabold text-[#3D0710] shadow-xs hover:bg-[#3D0710] hover:text-[#F4E409] transition-colors"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Enquire on WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}

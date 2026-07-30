"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, MessageCircle, Layers } from "lucide-react";
import { MAIN_NAV_LINKS, CONTACT_INFO } from "@/data/navigation";
import Container from "./Container";
import Button from "../ui/Button";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[#031B3D]/95 backdrop-blur-md shadow-lg border-b border-slate-800 text-white py-3"
            : "bg-[#031B3D] text-white py-4 border-b border-slate-800/80"
        }`}
      >
        <Container className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group focus:outline-none">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FF6500] to-[#FFC928] flex items-center justify-center text-white shadow-lg transition-transform group-hover:scale-105">
              <Layers className="w-6 h-6 stroke-[2.5]" />
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-black tracking-tight text-white block leading-none">
                Racks<span className="text-[#FF6500]">on</span>Rent
              </span>
              <span className="text-[10px] sm:text-[11px] font-semibold text-[#FFC928] tracking-wider uppercase block mt-0.5">
                Sublet Space. Share Success.
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {MAIN_NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? "bg-[#062A5E] text-[#FFC928]"
                      : "text-slate-200 hover:text-white hover:bg-slate-800/60"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              href={CONTACT_INFO.telLink}
              variant="ghost"
              size="sm"
              className="text-slate-200 hover:text-white hover:bg-slate-800 gap-1.5"
            >
              <Phone className="w-4 h-4 text-[#FF6500]" />
              <span className="text-xs xl:text-sm font-semibold">Call Now</span>
            </Button>

            <Button
              href={CONTACT_INFO.whatsappLink}
              variant="whatsapp"
              size="sm"
              className="gap-2 text-xs xl:text-sm"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              Enquire on WhatsApp
            </Button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={CONTACT_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Enquiry"
              className="p-2 rounded-xl bg-[#25D366] text-white shadow-md hover:bg-[#20bd5a] transition-colors"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
              className="p-2 rounded-xl text-slate-200 hover:text-white hover:bg-slate-800 border border-slate-700 transition-colors focus:outline-none"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}

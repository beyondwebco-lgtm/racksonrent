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
        className={`sticky top-0 z-50 transition-all duration-300 border-b border-[#D7EEFA] bg-white/95 backdrop-blur-md ${
          scrolled ? "py-3 shadow-xs" : "py-4"
        }`}
      >
        <Container className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group focus:outline-none">
            <div className="w-10 h-10 rounded-2xl bg-[#EAF7FF] flex items-center justify-center text-[#59A5D8] shadow-xs transition-transform group-hover:scale-105">
              <Layers className="w-6 h-6 stroke-[2.5]" />
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-black tracking-tight text-[#133C55] block leading-none">
                Racks<span className="text-[#59A5D8]">on</span>Rent
              </span>
              <span className="text-[10px] sm:text-[11px] font-semibold text-[#59A5D8] tracking-wider uppercase block mt-0.5">
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
                  className={`px-3 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? "bg-[#EAF7FF] text-[#386FA4]"
                      : "text-[#133C55] hover:text-[#59A5D8] hover:bg-[#F8FCFF]"
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
              className="text-[#133C55] hover:text-[#59A5D8] hover:bg-[#EAF7FF] gap-1.5"
            >
              <Phone className="w-4 h-4 text-[#59A5D8]" />
              <span className="text-xs xl:text-sm font-semibold">Call Now</span>
            </Button>

            <Button
              href={CONTACT_INFO.whatsappLink}
              variant="primary"
              size="sm"
              className="gap-2 text-xs xl:text-sm rounded-full bg-[#59A5D8] text-white hover:bg-[#386FA4]"
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
              className="p-2.5 rounded-full bg-[#59A5D8] text-white shadow-xs hover:bg-[#386FA4] transition-colors"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
              className="p-2.5 rounded-xl text-[#133C55] hover:text-[#59A5D8] hover:bg-[#EAF7FF] border border-[#D7EEFA] transition-colors focus:outline-none cursor-pointer"
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

"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  X,
  Dumbbell,
  ShieldCheck,
  Users,
  Phone,
  Mail,
} from "lucide-react";
import { SITE_CONFIG, NAV_LINKS } from "@/data/config";

interface HeaderProps {
  onSelectRole?: (role: "gym-owner" | "wellness") => void;
}

export default function Header({ onSelectRole }: HeaderProps) {
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

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
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

  const handleListYourRack = () => {
    closeMenu();
    if (onSelectRole) {
      onSelectRole("gym-owner");
    }
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Utility Bar (Slim Burgundy Strip) */}
      <div className="bg-[#6B0F1A] text-[#FFF6A3] py-1.5 px-4 sm:px-6 lg:px-8 border-b border-[#3D0710] text-[11px] sm:text-xs font-semibold">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          {/* Left: Audience Segment */}
          <div className="flex items-center gap-1.5 truncate">
            <Users className="w-3.5 h-3.5 text-[#F4E409] flex-shrink-0" />
            <span className="truncate">{SITE_CONFIG.topBarTextLeft}</span>
          </div>

          {/* Center: Trust Statement (Hidden on small mobile screens) */}
          <div className="hidden md:flex items-center gap-1.5 text-center text-[#FFFDF5]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#F4E409] flex-shrink-0" />
            <span>{SITE_CONFIG.topBarTextCenter}</span>
          </div>

          {/* Right: Direct Contact Info */}
          <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
            <a
              href={SITE_CONFIG.telLink}
              className="inline-flex items-center gap-1 hover:text-[#F4E409] transition-colors"
            >
              <Phone className="w-3 h-3 text-[#F4E409]" />
              <span>{SITE_CONFIG.phoneFormatted}</span>
            </a>

            <span className="text-[#F4E409]/40 hidden sm:inline">•</span>

            <a
              href={SITE_CONFIG.mailtoLink}
              className="hidden sm:inline-flex items-center gap-1 hover:text-[#F4E409] transition-colors"
            >
              <Mail className="w-3 h-3 text-[#F4E409]" />
              <span>{SITE_CONFIG.email}</span>
            </a>
          </div>

        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`bg-[#FFFDF5] border-b border-[#F0E2E4] backdrop-blur-md transition-all duration-200 ${
          scrolled
            ? "py-2 shadow-md bg-[#FFFDF5]/98"
            : "py-3 sm:py-4 shadow-xs"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          
          {/* Far Left: Single Full Horizontal Brand Logo Asset */}
          <Link
            href="/"
            className="relative block flex-shrink-0 w-[200px] sm:w-[250px] md:w-[280px] lg:w-[310px] h-[48px] sm:h-[58px] lg:h-[65px] transition-transform hover:scale-[1.01] focus:outline-none"
            aria-label="Racks on Rent Home"
          >
            <Image
              src="/images/logo.png"
              alt="Racks on Rent - Sublet Space. Share Success."
              fill
              sizes="(max-width: 640px) 200px, (max-width: 1024px) 280px, 310px"
              priority
              className="object-contain object-left"
            />
          </Link>

          {/* Desktop Navigation Items (>= 1024px) - Clean single horizontal row */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-2.5 xl:px-3 py-2 rounded-xl text-xs xl:text-sm font-extrabold text-[#6B0F1A] hover:text-[#3D0710] hover:bg-[#FFF6A3]/50 transition-all whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA Button (>= 1024px) */}
          <div className="hidden lg:flex items-center flex-shrink-0">
            <button
              type="button"
              onClick={handleListYourRack}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#F4E409] px-5 py-2.5 text-xs xl:text-sm font-extrabold text-[#3D0710] transition-all hover:bg-[#3D0710] hover:text-[#F4E409] shadow-sm hover:shadow-md border border-[#6B0F1A]/20 cursor-pointer active:scale-95 whitespace-nowrap"
            >
              <Dumbbell className="w-4 h-4" />
              <span>List Your Rack</span>
            </button>
          </div>

          {/* Mobile Right Controls (< 1024px) */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={handleListYourRack}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#F4E409] text-[#3D0710] text-xs font-extrabold shadow-xs hover:bg-[#3D0710] hover:text-[#F4E409] transition-colors cursor-pointer whitespace-nowrap"
            >
              <Dumbbell className="w-3.5 h-3.5" />
              <span>List Rack</span>
            </button>

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
      </nav>

      {/* Full-Screen Mobile Drawer (< 1024px) */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-[#FFFDF5] lg:hidden flex flex-col justify-between overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation Menu"
        >
          {/* Top Bar inside Drawer */}
          <div className="py-3 px-4 sm:px-6 flex items-center justify-between border-b border-[#F0E2E4] bg-[#FFFDF5] sticky top-0 z-10">
            <Link
              href="/"
              onClick={closeMenu}
              className="relative block w-[190px] sm:w-[230px] h-[48px] focus:outline-none"
            >
              <Image
                src="/images/logo.png"
                alt="Racks on Rent Logo"
                fill
                sizes="230px"
                className="object-contain object-left"
              />
            </Link>

            <button
              type="button"
              onClick={closeMenu}
              aria-label="Close navigation menu"
              className="p-2.5 rounded-xl text-[#6B0F1A] hover:bg-[#FFF6A3]/40 border border-[#F0E2E4] transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Links inside Mobile Drawer */}
          <nav className="p-6 space-y-2 flex-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block px-4 py-3 rounded-xl font-bold text-lg text-[#6B0F1A] hover:bg-[#FFF6A3]/40 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Bottom Action CTA button inside Drawer */}
          <div className="p-6 border-t border-[#F0E2E4] bg-[#FFF6A3]/30">
            <button
              type="button"
              onClick={handleListYourRack}
              className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#F4E409] py-3.5 text-base font-extrabold text-[#3D0710] shadow-xs hover:bg-[#3D0710] hover:text-[#F4E409] transition-colors cursor-pointer"
            >
              <Dumbbell className="w-5 h-5" />
              <span>List Your Rack</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

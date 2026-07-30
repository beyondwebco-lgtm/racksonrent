"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Dumbbell } from "lucide-react";
import { NAV_LINKS } from "@/data/config";

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
    <header
      className={`sticky top-0 z-40 transition-all duration-200 border-b border-[#F0E2E4] bg-[#FFFDF5]/95 backdrop-blur-md ${
        scrolled ? "py-2.5 shadow-xs" : "py-3.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group focus:outline-none flex-shrink-0">
          <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-[#F0E2E4] shadow-xs flex-shrink-0">
            <Image
              src="/images/logo.jpeg"
              alt="Racks on Rent Logo"
              fill
              sizes="40px"
              className="object-cover"
            />
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

        {/* Desktop Navigation (>= 1024px) */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="px-3.5 py-2 rounded-xl text-xs xl:text-sm font-bold text-[#6B0F1A] hover:text-[#3D0710] hover:bg-[#FFF6A3]/50 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Action Button (>= 1024px) */}
        <div className="hidden lg:flex items-center gap-2">
          <button
            type="button"
            onClick={handleListYourRack}
            className="inline-flex items-center justify-center gap-1.5 rounded-full bg-[#F4E409] px-5 py-2.5 text-xs xl:text-sm font-extrabold text-[#3D0710] transition hover:bg-[#3D0710] hover:text-[#F4E409] shadow-xs border border-[#6B0F1A]/20 cursor-pointer"
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
            className="inline-flex items-center gap-1 px-3 py-2 rounded-full bg-[#F4E409] text-[#3D0710] text-xs font-extrabold shadow-xs hover:bg-[#3D0710] hover:text-[#F4E409] transition-colors cursor-pointer"
          >
            <Dumbbell className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">List Rack</span>
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

      {/* Solid Warm White Full-Screen Mobile Drawer (< 1024px) */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-[#FFFDF5] lg:hidden flex flex-col justify-between overflow-y-auto"
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
              <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-[#F0E2E4] shadow-xs flex-shrink-0">
                <Image
                  src="/images/logo.jpeg"
                  alt="Racks on Rent Logo"
                  fill
                  sizes="40px"
                  className="object-cover"
                />
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
              className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#F4E409] py-3.5 text-base font-extrabold text-[#3D0710] shadow-xs hover:bg-[#3D0710] hover:text-[#F4E409] transition-colors"
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

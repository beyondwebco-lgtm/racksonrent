"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { X, Phone, MessageCircle } from "lucide-react";
import { MAIN_NAV_LINKS, CONTACT_INFO } from "@/data/navigation";
import Button from "../ui/Button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden flex flex-col">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#102A3A]/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div className="relative w-full max-w-sm ml-auto bg-[#133C55] text-white h-full shadow-2xl flex flex-col z-50 overflow-y-auto">
        {/* Top bar inside drawer */}
        <div className="p-5 flex items-center justify-between border-b border-[#386FA4]/30">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-[#386FA4] flex items-center justify-center font-black text-white text-lg shadow-md">
              R
            </div>
            <div>
              <span className="font-extrabold text-white text-lg tracking-tight block">Racks on Rent</span>
              <span className="text-[10px] text-[#84D2F6] uppercase tracking-wider block -mt-1 font-semibold">Sublet Space. Share Success.</span>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-[#386FA4]/50 transition-colors focus:outline-none"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Links */}
        <nav className="p-6 space-y-2 flex-1">
          {MAIN_NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="block px-4 py-3 rounded-xl font-medium text-slate-200 hover:text-white hover:bg-[#386FA4] transition-all text-base"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Footer CTAs in Drawer */}
        <div className="p-6 border-t border-[#386FA4]/30 bg-[#0d2a3d] space-y-3">
          <Button
            href={CONTACT_INFO.whatsappLink}
            variant="primary"
            size="md"
            className="w-full justify-center gap-2"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            Enquire on WhatsApp
          </Button>

          <Button
            href={CONTACT_INFO.telLink}
            variant="outline"
            size="md"
            className="w-full justify-center gap-2 border-white/20 text-white hover:bg-white/10"
          >
            <Phone className="w-4 h-4" />
            Call {CONTACT_INFO.phoneDisplay}
          </Button>
        </div>
      </div>
    </div>
  );
}

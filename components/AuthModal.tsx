"use client";

import React, { useEffect } from "react";
import { X, Dumbbell, Store, ShieldCheck } from "lucide-react";

interface AuthModalProps {
  isOpen: boolean;
  type: "login" | "signup";
  onClose: () => void;
  onSelectRole: (role: "gym-owner" | "wellness") => void;
}

export default function AuthModal({ isOpen, type, onClose, onSelectRole }: AuthModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChooseRole = (role: "gym-owner" | "wellness") => {
    onSelectRole(role);
    onClose();
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-md bg-[#FFFDF5] rounded-3xl p-6 sm:p-8 border-2 border-[#F0E2E4] shadow-2xl space-y-6">
        
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#6B0F1A] hover:bg-[#FFF6A3] rounded-full transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex p-3 rounded-2xl bg-[#FFF6A3] text-[#6B0F1A] mb-2">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-black text-[#6B0F1A]">
            {type === "login" ? "Account Access & Enquiry" : "Start Your Partnership"}
          </h3>
          <p className="text-sm text-[#5F5F5F] font-medium leading-relaxed">
            Racks on Rent operates as an enquiry and space-matching platform. No passwords, signup fees, or complex accounts required.
          </p>
        </div>

        {/* Role Options */}
        <div className="space-y-3 pt-2">
          <button
            type="button"
            onClick={() => handleChooseRole("gym-owner")}
            className="w-full flex items-center justify-between p-4 rounded-2xl border-2 border-[#6B0F1A]/20 bg-[#F4E409] text-[#3D0710] font-extrabold hover:bg-[#3D0710] hover:text-[#F4E409] transition-all cursor-pointer shadow-xs"
          >
            <div className="flex items-center gap-3">
              <Dumbbell className="w-5 h-5" />
              <span>Continue as Gym Owner</span>
            </div>
            <span className="text-xs bg-black/10 px-2.5 py-1 rounded-full">List Space</span>
          </button>

          <button
            type="button"
            onClick={() => handleChooseRole("wellness")}
            className="w-full flex items-center justify-between p-4 rounded-2xl border-2 border-[#6B0F1A] bg-[#6B0F1A] text-[#FFF6A3] font-extrabold hover:bg-[#3D0710] hover:text-[#F4E409] transition-all cursor-pointer shadow-xs"
          >
            <div className="flex items-center gap-3">
              <Store className="w-5 h-5" />
              <span>Continue as Wellness Brand</span>
            </div>
            <span className="text-xs bg-white/20 px-2.5 py-1 rounded-full">Find Space</span>
          </button>
        </div>

        <p className="text-xs text-center text-[#5F5F5F] font-semibold pt-2">
          Direct WhatsApp connection • 100% Free for Gyms
        </p>

      </div>
    </div>
  );
}

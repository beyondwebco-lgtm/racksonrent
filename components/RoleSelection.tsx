"use client";

import React from "react";
import { CheckCircle2, Dumbbell, Store } from "lucide-react";
import { ROLE_CARDS } from "@/data/benefits";

interface RoleSelectionProps {
  onSelectRole?: (role: "gym-owner" | "wellness") => void;
}

export default function RoleSelection({ onSelectRole }: RoleSelectionProps) {
  const handleRoleClick = (role: "gym-owner" | "wellness") => {
    if (onSelectRole) {
      onSelectRole(role);
    }
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-white" id="choose-role">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex rounded-full bg-[#EAF7FF] px-4 py-1.5 text-sm font-semibold text-[#386FA4] border border-[#D7EEFA]">
            Role Selection
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#133C55] md:text-5xl">
            Choose What Best Describes You
          </h2>
        </div>

        {/* Two Large Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {ROLE_CARDS.map((card) => {
            const isGymOwner = card.role === "gym-owner";
            return (
              <div
                key={card.id}
                className="rounded-3xl border border-[#D7EEFA] bg-white p-8 shadow-[0_12px_35px_rgba(89,165,216,0.08)] hover:shadow-[0_20px_50px_rgba(89,165,216,0.16)] transition-all hover:-translate-y-1 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EAF7FF] text-[#59A5D8] mb-6">
                    {isGymOwner ? <Dumbbell className="w-6 h-6" /> : <Store className="w-6 h-6 text-[#386FA4]" />}
                  </div>

                  <h3 className="text-2xl font-bold text-[#133C55] mb-3">
                    {card.heading}
                  </h3>

                  <p className="text-base text-[#607D8B] leading-relaxed mb-6">
                    {card.text}
                  </p>

                  <div className="space-y-3 mb-8">
                    {card.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#59A5D8] flex-shrink-0" />
                        <span className="text-sm font-semibold text-[#345466]">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleRoleClick(card.role)}
                  className={`w-full py-3.5 px-6 rounded-full font-semibold text-white transition-all shadow-xs cursor-pointer text-center ${
                    isGymOwner
                      ? "bg-[#59A5D8] hover:bg-[#386FA4]"
                      : "bg-[#386FA4] hover:bg-[#133C55]"
                  }`}
                >
                  {card.ctaLabel}
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

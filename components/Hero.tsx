"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2, Dumbbell, Store } from "lucide-react";

interface HeroProps {
  onSelectRole?: (role: "gym-owner" | "wellness") => void;
}

export default function Hero({ onSelectRole }: HeroProps) {
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
    <section className="relative pt-8 pb-16 lg:pt-16 lg:pb-24 bg-[radial-gradient(circle_at_80%_20%,rgba(132,210,246,0.25),transparent_40%),linear-gradient(180deg,#ffffff_0%,#f8fcff_100%)] border-b border-[#D7EEFA]" id="hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="inline-flex items-center rounded-full bg-[#EAF7FF] px-4 py-1.5 text-xs sm:text-sm font-semibold text-[#386FA4] border border-[#D7EEFA]">
                For Gym Owners and Wellness Brands
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-[#133C55] leading-[1.15]">
              Turn Unused Gym Space <span className="text-[#59A5D8]">Into Income</span>
              <span className="block text-2xl sm:text-3xl lg:text-4xl text-[#386FA4] font-bold mt-2">
                Place Wellness Products Where the Right Customers Already Are
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#607D8B] leading-relaxed max-w-2xl">
              &ldquo;Racks on Rent connects gym owners with nutrition, fitness, and wellness businesses through simple rack and display-space opportunities.&rdquo;
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                type="button"
                onClick={() => handleRoleClick("gym-owner")}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#59A5D8] px-6 py-3.5 font-semibold text-white shadow-xs transition-all hover:-translate-y-0.5 hover:bg-[#386FA4] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#84D2F6] cursor-pointer text-base"
              >
                <Dumbbell className="w-5 h-5" />
                <span>I Own a Gym</span>
              </button>

              <button
                type="button"
                onClick={() => handleRoleClick("wellness")}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#84D2F6] bg-white px-6 py-3.5 font-semibold text-[#133C55] transition-all hover:bg-[#EAF7FF] hover:border-[#59A5D8] cursor-pointer text-base"
              >
                <Store className="w-5 h-5 text-[#386FA4]" />
                <span>I Own a Wellness Brand</span>
              </button>
            </div>

            {/* Trust Points */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-[#D7EEFA]">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-[#345466] font-semibold">
                <CheckCircle2 className="w-4 h-4 text-[#59A5D8] flex-shrink-0" />
                <span>Simple enquiry process</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-[#345466] font-semibold">
                <CheckCircle2 className="w-4 h-4 text-[#59A5D8] flex-shrink-0" />
                <span>No online account required</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-[#345466] font-semibold">
                <CheckCircle2 className="w-4 h-4 text-[#59A5D8] flex-shrink-0" />
                <span>Direct business connection</span>
              </div>
            </div>
          </div>

          {/* Right Column Single Image */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="rounded-[2rem] border border-[#D7EEFA] bg-white p-3 shadow-[0_24px_70px_rgba(89,165,216,0.18)] relative overflow-hidden">
                <div className="relative aspect-4/3 w-full rounded-2xl overflow-hidden bg-[#F8FCFF]">
                  <Image
                    src="/images/hero-gym.png"
                    alt="Modern gym with clean nutrition product display rack"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                
                {/* Single Small Label Overlay */}
                <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full border border-[#D7EEFA] shadow-md flex items-center gap-2 text-xs font-extrabold text-[#133C55]">
                  <span className="w-2 h-2 rounded-full bg-[#59A5D8] animate-ping" />
                  <span>Extra Space. Extra Opportunity.</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

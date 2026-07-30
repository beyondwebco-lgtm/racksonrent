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
    <section className="relative pt-8 pb-16 lg:pt-16 lg:pb-24 bg-[radial-gradient(circle_at_80%_20%,rgba(107,15,26,0.08),transparent_40%),linear-gradient(180deg,#fffdf5_0%,#fff6a3_25%,#fffdf5_100%)] border-b border-[#F0E2E4]" id="hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="inline-flex items-center rounded-full bg-[#FFF6A3] px-4 py-1.5 text-xs sm:text-sm font-bold text-[#6B0F1A] border border-[#F0E2E4]">
                For Gym Owners and Wellness Brands
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-[#6B0F1A] leading-[1.15]">
              Turn Unused Gym Space{" "}
              <span className="bg-[#F4E409] text-[#3D0710] px-2 py-0.5 rounded-xl inline-block mt-1">
                Into Income
              </span>
              <span className="block text-2xl sm:text-3xl lg:text-4xl text-[#6B0F1A] font-bold mt-3">
                Place Wellness Products Where the Right Customers Already Are
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#5F5F5F] leading-relaxed max-w-2xl font-medium">
              &ldquo;Racks on Rent connects gym owners with nutrition, fitness, and wellness businesses through simple rack and display-space opportunities.&rdquo;
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                type="button"
                onClick={() => handleRoleClick("gym-owner")}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#F4E409] border border-[#6B0F1A]/20 px-6 py-3.5 font-extrabold text-[#3D0710] shadow-xs transition-all hover:-translate-y-0.5 hover:bg-[#3D0710] hover:text-[#F4E409] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#F4E409] cursor-pointer text-base"
              >
                <Dumbbell className="w-5 h-5" />
                <span>I Own a Gym</span>
              </button>

              <button
                type="button"
                onClick={() => handleRoleClick("wellness")}
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#6B0F1A] bg-[#FFFDF5] px-6 py-3.5 font-bold text-[#6B0F1A] transition-all hover:bg-[#FFF6A3] cursor-pointer text-base"
              >
                <Store className="w-5 h-5 text-[#6B0F1A]" />
                <span>I Own a Wellness Brand</span>
              </button>
            </div>

            {/* Trust Points */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-[#F0E2E4]">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-[#1F1F1F] font-bold">
                <CheckCircle2 className="w-4 h-4 text-[#6B0F1A] flex-shrink-0" />
                <span>Simple enquiry process</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-[#1F1F1F] font-bold">
                <CheckCircle2 className="w-4 h-4 text-[#6B0F1A] flex-shrink-0" />
                <span>No online account required</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-[#1F1F1F] font-bold">
                <CheckCircle2 className="w-4 h-4 text-[#6B0F1A] flex-shrink-0" />
                <span>Direct business connection</span>
              </div>
            </div>
          </div>

          {/* Right Column Single Image */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="rounded-[2rem] border-2 border-[#F0E2E4] bg-[#FFFDF5] p-3 shadow-[0_24px_70px_rgba(107,15,26,0.10)] relative overflow-hidden">
                <div className="relative aspect-4/3 w-full rounded-2xl overflow-hidden bg-[#FFF6A3]/20">
                  <Image
                    src="/images/hero-gym.png"
                    alt="Modern gym with clean nutrition product display rack"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                
                {/* Overlay Badge */}
                <div className="absolute bottom-6 right-6 bg-[#3D0710] text-[#FFF6A3] px-4 py-2 rounded-full border border-[#F4E409]/40 shadow-md flex items-center gap-2 text-xs font-extrabold">
                  <span className="w-2 h-2 rounded-full bg-[#F4E409] animate-ping" />
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

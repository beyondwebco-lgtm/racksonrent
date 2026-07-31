"use client";

import React, { useState, useEffect, useRef } from "react";
import { Dumbbell, Store, TrendingUp, ShieldCheck, Lock, CheckCircle2 } from "lucide-react";

interface HeroProps {
  onSelectRole?: (role: "gym-owner" | "wellness") => void;
}

export default function Hero({ onSelectRole }: HeroProps) {
  const [btn1Pos, setBtn1Pos] = useState({ x: 0, y: 0 });
  const [btn2Pos, setBtn2Pos] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleRoleClick = (role: "gym-owner" | "wellness") => {
    if (onSelectRole) {
      onSelectRole(role);
    }
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleMouseMoveBtn1 = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (typeof window !== "undefined" && window.innerWidth < 1024) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    const shiftX = Math.max(-3, Math.min(3, relX * 0.04));
    const shiftY = Math.max(-3, Math.min(3, relY * 0.04));
    setBtn1Pos({ x: shiftX, y: shiftY });
  };

  const handleMouseLeaveBtn1 = () => {
    setBtn1Pos({ x: 0, y: 0 });
  };

  const handleMouseMoveBtn2 = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (typeof window !== "undefined" && window.innerWidth < 1024) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    const shiftX = Math.max(-3, Math.min(3, relX * 0.04));
    const shiftY = Math.max(-3, Math.min(3, relY * 0.04));
    setBtn2Pos({ x: shiftX, y: shiftY });
  };

  const handleMouseLeaveBtn2 = () => {
    setBtn2Pos({ x: 0, y: 0 });
  };

  // IntersectionObserver to manage video playback efficiently
  useEffect(() => {
    const videoEl = videoRef.current;
    if (!videoEl) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoEl.play().catch(() => {});
          } else {
            videoEl.pause();
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(videoEl);
    return () => observer.disconnect();
  }, []);

  // Parallax scroll listener for video content
  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined" && window.innerWidth >= 768 && window.scrollY < 800) {
        setScrollY(window.scrollY);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const benefitItems = [
    { text: "Extra Space. Extra Income.", icon: <TrendingUp className="w-4 h-4 text-[#6B0F1A]" /> },
    { text: "Connect with Verified Brands.", icon: <ShieldCheck className="w-4 h-4 text-[#6B0F1A]" /> },
    { text: "Safe, Secure & Trusted Platform.", icon: <Lock className="w-4 h-4 text-[#6B0F1A]" /> },
    { text: "Hassle-Free & Transparent.", icon: <CheckCircle2 className="w-4 h-4 text-[#6B0F1A]" /> },
  ];

  return (
    <section className="relative pt-8 pb-12 lg:pt-16 lg:pb-20 bg-[radial-gradient(circle_at_80%_20%,rgba(107,15,26,0.08),transparent_40%),linear-gradient(180deg,#fffdf5_0%,#fff6a3_25%,#fffdf5_100%)] border-b border-[#F0E2E4]" id="hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column (Text first on mobile) */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="inline-flex items-center rounded-full bg-[#FFF6A3] px-4 py-1.5 text-xs sm:text-sm font-bold text-[#6B0F1A] border border-[#F0E2E4]">
                For Gym Owners & Wellness Brands
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-[#6B0F1A] leading-[1.15]">
              Turn Unused Gym Space{" "}
              <span className="bg-[#F4E409] text-[#3D0710] px-3 py-1 rounded-xl inline-block mt-1 border border-[#6B0F1A]/20">
                Into Income
              </span>
              <span className="block text-xl sm:text-2xl lg:text-3xl text-[#6B0F1A] font-bold mt-3">
                Place Wellness Products Where the Right Customers Already Are
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#5F5F5F] leading-relaxed max-w-2xl font-medium">
              Racks on Rent connects gym owners with nutrition, fitness, and wellness businesses through simple rack and display-space opportunities.
            </p>

            {/* 4 Small Benefit Items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {benefitItems.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 bg-[#FFFDF5] p-2.5 rounded-xl border border-[#F0E2E4] shadow-2xs">
                  <div className="p-1.5 rounded-lg bg-[#FFF6A3] flex-shrink-0">
                    {item.icon}
                  </div>
                  <span className="text-xs sm:text-sm font-extrabold text-[#1F1F1F]">{item.text}</span>
                </div>
              ))}
            </div>

            {/* Animated 2 Primary CTAs with supporting labels */}
            <div className="relative pt-4">
              {/* Thin Accent Line */}
              <div className="w-16 h-0.5 bg-[#6B0F1A]/30 rounded-full animate-accent-line mb-3" />

              {/* Background Accent Glow */}
              <div className="absolute inset-0 -top-1 bg-[radial-gradient(ellipse_at_center,rgba(244,228,9,0.30),transparent_70%)] pointer-events-none rounded-3xl blur-md animate-cta-pulse-group" />

              <div className="relative flex flex-col sm:flex-row items-stretch sm:items-center gap-4 z-10">
                
                {/* Button 1: I Own a Gym */}
                <button
                  type="button"
                  onClick={() => handleRoleClick("gym-owner")}
                  onMouseMove={handleMouseMoveBtn1}
                  onMouseLeave={handleMouseLeaveBtn1}
                  className="animate-cta-btn-1 flex-1 relative overflow-hidden inline-flex flex-col items-center justify-center gap-0.5 rounded-2xl bg-[#F4E409] border-2 border-[#6B0F1A]/20 px-6 py-3.5 text-[#3D0710] shadow-md transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:scale-[1.018] hover:shadow-[0_14px_30px_rgba(107,15,26,0.22)] active:scale-[0.97] focus:outline-none cursor-pointer group"
                >
                  {/* One-Time Light Sweep Overlay */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none" />

                  {/* Inner Content Container with Proximity Shift */}
                  <div
                    style={{
                      transform: `translate(${btn1Pos.x}px, ${btn1Pos.y}px)`,
                    }}
                    className="transition-transform duration-200 ease-out flex flex-col items-center justify-center w-full"
                  >
                    <div className="flex items-center gap-2 text-base font-black">
                      <Dumbbell className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300" />
                      <span>I Own a Gym</span>
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider opacity-80 mt-0.5">
                      List Your Space
                    </span>
                  </div>
                </button>

                {/* Button 2: I Own a Wellness Brand */}
                <button
                  type="button"
                  onClick={() => handleRoleClick("wellness")}
                  onMouseMove={handleMouseMoveBtn2}
                  onMouseLeave={handleMouseLeaveBtn2}
                  className="animate-cta-btn-2 flex-1 relative overflow-hidden inline-flex flex-col items-center justify-center gap-0.5 rounded-2xl border-2 border-[#6B0F1A] bg-[#6B0F1A] px-6 py-3.5 text-[#FFF6A3] shadow-md transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:scale-[1.018] hover:shadow-[0_14px_30px_rgba(107,15,26,0.35)] active:scale-[0.97] focus:outline-none cursor-pointer group"
                >
                  {/* One-Time Light Sweep Overlay */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-[#F4E409]/30 to-transparent pointer-events-none" />

                  {/* Inner Content Container with Proximity Shift */}
                  <div
                    style={{
                      transform: `translate(${btn2Pos.x}px, ${btn2Pos.y}px)`,
                    }}
                    className="transition-transform duration-200 ease-out flex flex-col items-center justify-center w-full"
                  >
                    <div className="flex items-center gap-2 text-base font-black">
                      <Store className="w-5 h-5 text-[#FFF6A3] group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300" />
                      <span>I Own a Wellness Brand</span>
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#F4E409] mt-0.5">
                      Find Space to Display
                    </span>
                  </div>
                </button>

              </div>
            </div>
          </div>

          {/* Right Column (Video in animated hover frame) */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer animated glow ring — expands on hover */}
              <div className="animate-hero-video-entrance rounded-[2rem] p-[3px] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] bg-[#F0E2E4] hover:bg-gradient-to-br hover:from-[#F4E409] hover:via-[#6B0F1A] hover:to-[#F4E409] hover:p-[4px] shadow-[0_24px_70px_rgba(107,15,26,0.10)] hover:shadow-[0_32px_90px_rgba(107,15,26,0.30)] group cursor-pointer">
                {/* Inner white padding frame */}
                <div className="relative rounded-[1.6rem] bg-[#FFFDF5] p-2.5 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:p-3">
                  {/* Video container — clips the zoom */}
                  <div className="relative aspect-4/3 w-full rounded-2xl overflow-hidden bg-[#FFF6A3]/20">
                    <video
                      ref={videoRef}
                      autoPlay
                      muted
                      loop
                      playsInline
                      aria-label="Video showing a wellness product display rack inside a modern gym"
                      poster="/images/hero-gym.png"
                      preload="metadata"
                      className="w-full h-full object-cover transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
                      style={{
                        transform: `translateY(${scrollY * 0.05}px) scale(${1 + Math.min(scrollY * 0.00006, 0.025)})`,
                      }}
                    >
                      <source src="/videos/hero-gym.mp4" type="video/mp4" />
                    </video>

                    {/* Subtle Dark Bottom Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none transition-opacity duration-500 group-hover:from-black/40" />

                    {/* Overlay Badge */}
                    <div className="absolute bottom-6 right-6 bg-[#3D0710] text-white px-5 py-2.5 rounded-full border-2 border-[#F4E409] shadow-xl flex items-center gap-2 text-xs sm:text-sm font-bold tracking-wide z-10 transition-all duration-500 group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(244,228,9,0.5)]">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#F4E409] animate-ping" />
                      <span>Extra Space. Extra Opportunity.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

import React from "react";
import { Phone, Mail, Globe, CheckCircle2, TrendingUp, Users, DollarSign, Sparkles, Layers } from "lucide-react";
import Container from "../layout/Container";
import Button from "../ui/Button";
import Badge from "../ui/Badge";
import { CONTACT_INFO } from "@/data/navigation";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#133c55_0%,#386fa4_55%,#59a5d8_100%)] text-white pt-12 pb-20 lg:pt-20 lg:pb-28">
      {/* Subtle Background Decorative Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#84D2F6]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-[#59A5D8]/20 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column Content */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {/* Badge */}
            <div>
              <Badge variant="brand" className="bg-[#84D2F6]/20 text-white border-[#84D2F6]/40 backdrop-blur-md">
                <Sparkles className="w-4 h-4 text-[#84D2F6]" />
                A Win-Win Platform for Gym Owners & Startups
              </Badge>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              Turn Gym Space Into Income.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#84D2F6] via-[#EEF3F7] to-white">
                Turn Your Brand Into a Gym Experience.
              </span>
            </h1>

            {/* Supporting Hero Text */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-100 leading-relaxed max-w-2xl font-normal">
              Racks on Rent connects gym owners with nutrition, wellness, fitness, and healthy-product businesses looking for affordable display space inside active gyms.
            </p>

            {/* Call To Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Button
                href="/contact?type=gym-owner"
                variant="primary"
                size="lg"
                className="bg-[#386FA4] hover:bg-[#133C55] shadow-xl text-white"
              >
                List Your Gym Space
              </Button>

              <Button
                href="/contact?type=wellness"
                variant="secondary"
                size="lg"
                className="bg-white/10 border-white/40 text-white hover:bg-white/20"
              >
                Find a Gym Opportunity
              </Button>
            </div>

            {/* Quick Trust Points */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-white/20">
              {[
                "Simple Onboarding",
                "Affordable Opportunities",
                "Direct Customer Exposure",
                "Business Support"
              ].map((point, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-100 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#84D2F6] flex-shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            {/* Direct Contact Details Strip */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2 text-xs sm:text-sm text-white bg-[#133C55]/60 p-4 rounded-2xl border border-white/20 backdrop-blur-md">
              <a
                href={CONTACT_INFO.telLink}
                className="flex items-center gap-2 hover:text-[#84D2F6] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#84D2F6]" />
                <span className="font-medium">{CONTACT_INFO.phoneDisplay}</span>
              </a>
              <span className="text-white/40 hidden sm:inline">•</span>
              <a
                href={CONTACT_INFO.mailtoLink}
                className="flex items-center gap-2 hover:text-[#84D2F6] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#84D2F6]" />
                <span className="font-medium">{CONTACT_INFO.email}</span>
              </a>
              <span className="text-white/40 hidden sm:inline">•</span>
              <a
                href={CONTACT_INFO.websiteUrl}
                className="flex items-center gap-2 hover:text-[#84D2F6] transition-colors"
              >
                <Globe className="w-4 h-4 text-[#84D2F6]" />
                <span className="font-medium">{CONTACT_INFO.websiteDisplay}</span>
              </a>
            </div>
          </div>

          {/* Right Column Visual Graphic Card */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative glow */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-[#59A5D8] to-[#84D2F6] opacity-30 blur-lg" />
              
              {/* Main Graphic Container */}
              <div className="relative rounded-3xl bg-[#133C55] border border-[#59A5D8]/40 p-6 sm:p-8 shadow-2xl overflow-hidden">
                
                {/* Visual Header */}
                <div className="flex items-center justify-between border-b border-[#386FA4]/40 pb-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#386FA4] flex items-center justify-center text-[#84D2F6]">
                      <Layers className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-base">Gym Space Ecosystem</h3>
                      <p className="text-xs text-slate-300">Racks on Rent Synergy</p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-[#84D2F6]/20 text-[#84D2F6] border border-[#84D2F6]/30">
                    Live Concept
                  </span>
                </div>

                {/* Simulated Gym & Rack Visual Layout */}
                <div className="space-y-4">
                  {/* Gym Owner Side */}
                  <div className="bg-[#102A3A] rounded-2xl p-4 border border-[#386FA4]/40 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#386FA4]/30 text-[#84D2F6] flex items-center justify-center font-bold text-xl flex-shrink-0">
                      🏋️‍♂️
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-[#84D2F6] uppercase tracking-wider">Gym Owner</span>
                        <span className="text-xs font-bold text-white">+ Passive Revenue</span>
                      </div>
                      <p className="text-sm font-bold text-white mt-0.5">Unused Display Rack & Counter Space</p>
                    </div>
                  </div>

                  {/* Connecting Bridge */}
                  <div className="flex items-center justify-center gap-2 py-1 text-slate-300">
                    <div className="h-px bg-[#386FA4]/50 flex-1" />
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#59A5D8]/20 text-[#84D2F6] border border-[#59A5D8]/40 uppercase tracking-wider">
                      Sublet Bridge
                    </span>
                    <div className="h-px bg-[#386FA4]/50 flex-1" />
                  </div>

                  {/* Wellness Brand Side */}
                  <div className="bg-[#102A3A] rounded-2xl p-4 border border-[#386FA4]/40 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#59A5D8]/30 text-[#84D2F6] flex items-center justify-center font-bold text-xl flex-shrink-0">
                      🥤
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-[#84D2F6] uppercase tracking-wider">Wellness Brand</span>
                        <span className="text-xs font-bold text-white">High Brand Reach</span>
                      </div>
                      <p className="text-sm font-bold text-white mt-0.5">Proteins, Energy Drinks & Health Snacks</p>
                    </div>
                  </div>
                </div>

                {/* Floating Information Cards overlay */}
                <div className="grid grid-cols-2 gap-3 mt-6 pt-4 border-t border-[#386FA4]/40">
                  <div className="bg-[#102A3A]/80 rounded-xl p-3 border border-[#386FA4]/30 flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-[#386FA4]/30 text-[#84D2F6]">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-300 font-medium">Extra Space</p>
                      <p className="text-xs font-bold text-white">Extra Earnings</p>
                    </div>
                  </div>

                  <div className="bg-[#102A3A]/80 rounded-xl p-3 border border-[#386FA4]/30 flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-[#386FA4]/30 text-[#84D2F6]">
                      <Users className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-300 font-medium">Direct Audience</p>
                      <p className="text-xs font-bold text-white">Reach Fitness Buyers</p>
                    </div>
                  </div>

                  <div className="bg-[#102A3A]/80 rounded-xl p-3 border border-[#386FA4]/30 flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-[#386FA4]/30 text-[#84D2F6]">
                      <DollarSign className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-300 font-medium">Low Overhead</p>
                      <p className="text-xs font-bold text-white">Low Investment</p>
                    </div>
                  </div>

                  <div className="bg-[#102A3A]/80 rounded-xl p-3 border border-[#386FA4]/30 flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-[#386FA4]/30 text-[#84D2F6]">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-300 font-medium">Local Trust</p>
                      <p className="text-xs font-bold text-white">Build Your Brand</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}

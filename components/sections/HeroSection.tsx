import React from "react";
import { Phone, Mail, Globe, CheckCircle2, TrendingUp, Users, DollarSign, Sparkles, Layers } from "lucide-react";
import Container from "../layout/Container";
import Button from "../ui/Button";
import Badge from "../ui/Badge";
import { CONTACT_INFO } from "@/data/navigation";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 border-b border-[#D7EEFA]/60 bg-[radial-gradient(circle_at_80%_20%,rgba(132,210,246,0.28),transparent_38%),linear-gradient(180deg,#ffffff_0%,#f8fcff_100%)]">
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column Content */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {/* Badge */}
            <div>
              <Badge>
                <Sparkles className="w-4 h-4 text-[#386FA4]" />
                A Win-Win Platform for Gym Owners & Startups
              </Badge>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-[#133C55] leading-[1.15]">
              Turn Gym Space <span className="text-[#59A5D8]">Into Income.</span>{" "}
              Turn Your Brand Into a <span className="text-[#59A5D8]">Gym Experience.</span>
            </h1>

            {/* Supporting Hero Text */}
            <p className="text-base sm:text-lg lg:text-xl text-[#607D8B] leading-relaxed max-w-2xl font-normal">
              Racks on Rent connects gym owners with nutrition, wellness, fitness, and healthy-product businesses looking for affordable display space inside active gyms.
            </p>

            {/* Call To Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Button
                href="/contact?type=gym-owner"
                variant="primary"
                size="lg"
                className="rounded-full bg-[#59A5D8] px-6 py-3 font-semibold text-white shadow-xs hover:-translate-y-0.5 hover:bg-[#386FA4] hover:shadow-lg"
              >
                List Your Gym Space
              </Button>

              <Button
                href="/contact?type=wellness"
                variant="secondary"
                size="lg"
                className="rounded-full border border-[#84D2F6] bg-white px-6 py-3 font-semibold text-[#133C55] hover:bg-[#EAF7FF] hover:border-[#59A5D8]"
              >
                Find a Gym Opportunity
              </Button>
            </div>

            {/* Quick Trust Points */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-[#D7EEFA]">
              {[
                "Simple Onboarding",
                "Affordable Opportunities",
                "Direct Customer Exposure",
                "Business Support"
              ].map((point, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-[#345466] font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#59A5D8] flex-shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            {/* Direct Contact Details Strip */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2 text-xs sm:text-sm text-[#133C55] bg-[#EAF7FF]/60 p-4 rounded-2xl border border-[#D7EEFA]">
              <a
                href={CONTACT_INFO.telLink}
                className="flex items-center gap-2 hover:text-[#59A5D8] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#59A5D8]" />
                <span className="font-semibold">{CONTACT_INFO.phoneDisplay}</span>
              </a>
              <span className="text-[#59A5D8]/40 hidden sm:inline">•</span>
              <a
                href={CONTACT_INFO.mailtoLink}
                className="flex items-center gap-2 hover:text-[#59A5D8] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#59A5D8]" />
                <span className="font-semibold">{CONTACT_INFO.email}</span>
              </a>
              <span className="text-[#59A5D8]/40 hidden sm:inline">•</span>
              <a
                href={CONTACT_INFO.websiteUrl}
                className="flex items-center gap-2 hover:text-[#59A5D8] transition-colors"
              >
                <Globe className="w-4 h-4 text-[#59A5D8]" />
                <span className="font-semibold">{CONTACT_INFO.websiteDisplay}</span>
              </a>
            </div>
          </div>

          {/* Right Column Visual Graphic Card */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Graphic Container */}
              <div className="rounded-[2rem] border border-[#D7EEFA] bg-white p-6 sm:p-8 shadow-[0_24px_70px_rgba(89,165,216,0.18)]">
                
                {/* Visual Header */}
                <div className="flex items-center justify-between border-b border-[#D7EEFA] pb-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#EAF7FF] text-[#59A5D8]">
                      <Layers className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#133C55] text-base">Gym Space Ecosystem</h3>
                      <p className="text-xs text-[#607D8B]">Racks on Rent Synergy</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-[#EAF7FF] text-[#386FA4] border border-[#D7EEFA]">
                    Live Concept
                  </span>
                </div>

                {/* Simulated Gym & Rack Visual Layout */}
                <div className="space-y-4">
                  {/* Gym Owner Side */}
                  <div className="bg-[#F8FCFF] rounded-2xl p-4 border border-[#D7EEFA] flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#EAF7FF] text-[#59A5D8] flex items-center justify-center font-bold text-xl flex-shrink-0">
                      🏋️‍♂️
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-[#386FA4] uppercase tracking-wider">Gym Owner</span>
                        <span className="text-xs font-bold text-[#133C55]">+ Passive Revenue</span>
                      </div>
                      <p className="text-sm font-bold text-[#133C55] mt-0.5">Unused Display Rack & Counter Space</p>
                    </div>
                  </div>

                  {/* Connecting Bridge */}
                  <div className="flex items-center justify-center gap-2 py-1 text-[#607D8B]">
                    <div className="h-px bg-[#D7EEFA] flex-1" />
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#EAF7FF] text-[#386FA4] border border-[#D7EEFA] uppercase tracking-wider">
                      Sublet Bridge
                    </span>
                    <div className="h-px bg-[#D7EEFA] flex-1" />
                  </div>

                  {/* Wellness Brand Side */}
                  <div className="bg-[#F8FCFF] rounded-2xl p-4 border border-[#D7EEFA] flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#EAF7FF] text-[#59A5D8] flex items-center justify-center font-bold text-xl flex-shrink-0">
                      🥤
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-[#386FA4] uppercase tracking-wider">Wellness Brand</span>
                        <span className="text-xs font-bold text-[#133C55]">High Brand Reach</span>
                      </div>
                      <p className="text-sm font-bold text-[#133C55] mt-0.5">Proteins, Energy Drinks & Health Snacks</p>
                    </div>
                  </div>
                </div>

                {/* Floating Information Cards overlay */}
                <div className="grid grid-cols-2 gap-3 mt-6 pt-4 border-t border-[#D7EEFA]">
                  <div className="bg-[#EAF7FF]/60 rounded-xl p-3 border border-[#D7EEFA] flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-white text-[#59A5D8]">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] text-[#607D8B] font-medium">Extra Space</p>
                      <p className="text-xs font-bold text-[#133C55]">Extra Earnings</p>
                    </div>
                  </div>

                  <div className="bg-[#EAF7FF]/60 rounded-xl p-3 border border-[#D7EEFA] flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-white text-[#59A5D8]">
                      <Users className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] text-[#607D8B] font-medium">Direct Audience</p>
                      <p className="text-xs font-bold text-[#133C55]">Reach Fitness Buyers</p>
                    </div>
                  </div>

                  <div className="bg-[#EAF7FF]/60 rounded-xl p-3 border border-[#D7EEFA] flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-white text-[#59A5D8]">
                      <DollarSign className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] text-[#607D8B] font-medium">Low Overhead</p>
                      <p className="text-xs font-bold text-[#133C55]">Low Investment</p>
                    </div>
                  </div>

                  <div className="bg-[#EAF7FF]/60 rounded-xl p-3 border border-[#D7EEFA] flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-white text-[#59A5D8]">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] text-[#607D8B] font-medium">Local Trust</p>
                      <p className="text-xs font-bold text-[#133C55]">Build Your Brand</p>
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

import React from "react";
import { Phone, Mail, Globe, CheckCircle2, TrendingUp, Users, DollarSign, Sparkles, Layers } from "lucide-react";
import Container from "../layout/Container";
import Button from "../ui/Button";
import Badge from "../ui/Badge";
import { CONTACT_INFO } from "@/data/navigation";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#031B3D] via-[#062A5E] to-[#031B3D] text-white pt-12 pb-20 lg:pt-20 lg:pb-28">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FF6500]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-[#FFC928]/10 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column Content */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {/* Badge */}
            <div>
              <Badge variant="orange" className="bg-[#FF6500]/20 text-[#FFC928] border-[#FF6500]/40">
                <Sparkles className="w-4 h-4 text-[#FFC928]" />
                A Win-Win Platform for Gym Owners & Startups
              </Badge>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              Turn Gym Space Into Income.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6500] via-[#FFC928] to-amber-300">
                Turn Your Brand Into a Gym Experience.
              </span>
            </h1>

            {/* Supporting Hero Text */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed max-w-2xl font-normal">
              Racks on Rent connects gym owners with nutrition, wellness, fitness, and healthy-product businesses looking for affordable display space inside active gyms.
            </p>

            {/* Call To Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Button
                href="/contact?type=gym-owner"
                variant="primary"
                size="lg"
                className="shadow-xl shadow-[#FF6500]/20"
              >
                List Your Gym Space
              </Button>

              <Button
                href="/contact?type=wellness"
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 hover:border-white"
              >
                Find a Gym Opportunity
              </Button>
            </div>

            {/* Quick Trust Points */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-700/60">
              {[
                "Simple Onboarding",
                "Affordable Opportunities",
                "Direct Customer Exposure",
                "Business Support"
              ].map((point, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#157A3D] flex-shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            {/* Direct Contact Details Strip */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2 text-xs sm:text-sm text-slate-300 bg-white/5 p-4 rounded-2xl border border-white/10 backdrop-blur-sm">
              <a
                href={CONTACT_INFO.telLink}
                className="flex items-center gap-2 hover:text-[#FFC928] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#FF6500]" />
                <span className="font-medium">{CONTACT_INFO.phoneDisplay}</span>
              </a>
              <span className="text-slate-600 hidden sm:inline">•</span>
              <a
                href={CONTACT_INFO.mailtoLink}
                className="flex items-center gap-2 hover:text-[#FFC928] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#FFC928]" />
                <span className="font-medium">{CONTACT_INFO.email}</span>
              </a>
              <span className="text-slate-600 hidden sm:inline">•</span>
              <a
                href={CONTACT_INFO.websiteUrl}
                className="flex items-center gap-2 hover:text-[#FFC928] transition-colors"
              >
                <Globe className="w-4 h-4 text-blue-400" />
                <span className="font-medium">{CONTACT_INFO.websiteDisplay}</span>
              </a>
            </div>
          </div>

          {/* Right Column Visual Graphic Card */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative glow */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-[#FF6500] to-[#FFC928] opacity-30 blur-lg" />
              
              {/* Main Graphic Container */}
              <div className="relative rounded-3xl bg-slate-900 border border-slate-700/80 p-6 sm:p-8 shadow-2xl overflow-hidden">
                
                {/* Visual Header */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#062A5E] flex items-center justify-center text-[#FFC928]">
                      <Layers className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-base">Gym Space Ecosystem</h3>
                      <p className="text-xs text-slate-400">Racks on Rent Synergy</p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-[#157A3D]/30 text-green-400 border border-green-500/30">
                    Live Concept
                  </span>
                </div>

                {/* Simulated Gym & Rack Visual Layout */}
                <div className="space-y-4">
                  {/* Gym Owner Side */}
                  <div className="bg-[#031B3D] rounded-2xl p-4 border border-blue-900/60 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center font-bold text-xl flex-shrink-0">
                      🏋️‍♂️
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-blue-300 uppercase tracking-wider">Gym Owner</span>
                        <span className="text-xs font-bold text-[#FFC928]">+ Passive Revenue</span>
                      </div>
                      <p className="text-sm font-bold text-white mt-0.5">Unused Display Rack & Counter Space</p>
                    </div>
                  </div>

                  {/* Connecting Bridge */}
                  <div className="flex items-center justify-center gap-2 py-1 text-slate-400">
                    <div className="h-px bg-slate-700 flex-1" />
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#FF6500]/20 text-[#FFC928] border border-[#FF6500]/30 uppercase tracking-wider">
                      Sublet Bridge
                    </span>
                    <div className="h-px bg-slate-700 flex-1" />
                  </div>

                  {/* Wellness Brand Side */}
                  <div className="bg-[#062A5E] rounded-2xl p-4 border border-indigo-900/60 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-600/20 text-emerald-400 flex items-center justify-center font-bold text-xl flex-shrink-0">
                      🥤
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-emerald-300 uppercase tracking-wider">Wellness Brand</span>
                        <span className="text-xs font-bold text-emerald-400">High Brand Reach</span>
                      </div>
                      <p className="text-sm font-bold text-white mt-0.5">Proteins, Energy Drinks & Health Snacks</p>
                    </div>
                  </div>
                </div>

                {/* Floating Information Cards overlay */}
                <div className="grid grid-cols-2 gap-3 mt-6 pt-4 border-t border-slate-800">
                  <div className="bg-slate-800/80 rounded-xl p-3 border border-slate-700 flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-[#FF6500]/20 text-[#FF6500]">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-400 font-medium">Extra Space</p>
                      <p className="text-xs font-bold text-white">Extra Earnings</p>
                    </div>
                  </div>

                  <div className="bg-slate-800/80 rounded-xl p-3 border border-slate-700 flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-[#157A3D]/20 text-[#157A3D]">
                      <Users className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-400 font-medium">Direct Audience</p>
                      <p className="text-xs font-bold text-white">Reach Fitness Buyers</p>
                    </div>
                  </div>

                  <div className="bg-slate-800/80 rounded-xl p-3 border border-slate-700 flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-amber-500/20 text-[#FFC928]">
                      <DollarSign className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-400 font-medium">Low Overhead</p>
                      <p className="text-xs font-bold text-white">Low Investment</p>
                    </div>
                  </div>

                  <div className="bg-slate-800/80 rounded-xl p-3 border border-slate-700 flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-blue-500/20 text-blue-400">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-400 font-medium">Local Trust</p>
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

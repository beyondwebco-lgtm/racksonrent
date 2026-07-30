import React from "react";
import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { Target, Compass, AlertTriangle, ShieldCheck, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Racks on Rent",
  description: "Learn about Racks on Rent, our mission, vision, and how we bridge gym owners with nutrition & wellness brands.",
};

export default function AboutPage() {
  return (
    <div className="py-12 sm:py-20 space-y-16">
      {/* Hero Section */}
      <section>
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <Badge variant="orange">About Racks on Rent</Badge>
            <h1 className="text-3xl sm:text-5xl font-black text-[#031B3D] tracking-tight">
              One Space. Two Dreams. <span className="text-[#FF6500]">Endless Possibilities.</span>
            </h1>
            <p className="text-base sm:text-lg text-[#5C6470] leading-relaxed">
              Racks on Rent is a business-connection platform designed to create additional value from unused gym spaces while giving wellness brands direct physical reach.
            </p>
          </div>
        </Container>
      </section>

      {/* Mission & Vision Cards */}
      <section>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-[#E5E7EB] shadow-md flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#062A5E]/10 text-[#062A5E] flex items-center justify-center mb-6">
                  <Target className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-[#031B3D] mb-3">Our Mission</h2>
                <p className="text-base text-[#5C6470] leading-relaxed">
                  To connect gym owners and wellness businesses through simple, practical, and mutually beneficial space-sharing opportunities.
                </p>
              </div>
            </div>

            <div className="bg-[#031B3D] text-white p-8 rounded-3xl border border-slate-800 shadow-xl flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#FF6500]/20 text-[#FFC928] flex items-center justify-center mb-6">
                  <Compass className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-3">Our Vision</h2>
                <p className="text-base text-slate-300 leading-relaxed">
                  To build a trusted network where gyms become powerful growth locations for nutrition, fitness, and wellness brands across India.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Problem vs Solution */}
      <section className="bg-white py-16 border-y border-[#E5E7EB]">
        <Container>
          <SectionHeading
            badge="Industry Gap"
            badgeVariant="navy"
            title="The Problem & Our Solution"
            subtitle="Why traditional retail leases don't work for wellness startups, and how gym spaces unlock the answer."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* The Problem */}
            <div className="bg-red-50/50 p-8 rounded-3xl border border-red-100 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-red-100 text-red-600">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-red-950">The Problem We Identified</h3>
              </div>
              <ul className="space-y-3 text-sm sm:text-base text-slate-700">
                <li className="flex items-start gap-2.5">
                  <span className="text-red-500 font-bold">•</span>
                  <span>Gym owners often have unused display racks, shelves, or counter spaces that generate zero revenue.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-red-500 font-bold">•</span>
                  <span>New wellness brands face exorbitant retail rent and setup costs to reach target buyers.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-red-500 font-bold">•</span>
                  <span>Fitness customers struggle to discover reliable, verified health products locally.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-red-500 font-bold">•</span>
                  <span>Small health businesses lack targeted physical exposure in high-intent fitness hubs.</span>
                </li>
              </ul>
            </div>

            {/* The Solution */}
            <div className="bg-emerald-50/50 p-8 rounded-3xl border border-emerald-100 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-emerald-100 text-[#157A3D]">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-emerald-950">The Racks on Rent Solution</h3>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Racks on Rent brings gym space opportunities together through a simple enquiry, verification, and business-support model.
              </p>
              <ul className="space-y-3 text-sm sm:text-base text-slate-700">
                <li className="flex items-start gap-2.5">
                  <span className="text-[#157A3D] font-bold">✓</span>
                  <span>Gym owners unlock effortless monthly passive income from unused corners.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#157A3D] font-bold">✓</span>
                  <span>Health brands access active fitness enthusiasts at a fraction of standard retail costs.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#157A3D] font-bold">✓</span>
                  <span>Gym members gain convenient access to trusted supplements, healthy meals, and diet advice.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button href="/contact" variant="primary" size="lg" className="gap-2">
              <span>Connect With Our Team</span>
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}

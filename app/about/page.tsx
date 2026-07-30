import React from "react";
import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { Target, Compass, AlertCircle, ShieldCheck, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Racks on Rent",
  description: "Learn about Racks on Rent, our mission, vision, and how we bridge gym owners with nutrition & wellness brands.",
};

export default function AboutPage() {
  return (
    <div className="py-12 sm:py-20 space-y-16 bg-white">
      {/* Hero Section */}
      <section>
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <Badge>About Racks on Rent</Badge>
            <h1 className="text-3xl sm:text-5xl font-black text-[#133C55] tracking-tight">
              One Space. Two Dreams. <span className="text-[#59A5D8]">Endless Possibilities.</span>
            </h1>
            <p className="text-base sm:text-lg text-[#607D8B] leading-relaxed">
              Racks on Rent is a business-connection platform designed to create additional value from unused gym spaces while giving wellness brands direct physical reach.
            </p>
          </div>
        </Container>
      </section>

      {/* Mission & Vision Cards */}
      <section className="bg-[#EAF7FF] py-16 border-y border-[#D7EEFA]">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-3xl border border-[#D7EEFA] bg-white p-8 shadow-[0_12px_35px_rgba(89,165,216,0.08)] flex flex-col justify-between">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EAF7FF] text-[#59A5D8] mb-6">
                  <Target className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-[#133C55] mb-3">Our Mission</h2>
                <p className="text-base text-[#607D8B] leading-relaxed">
                  To connect gym owners and wellness businesses through simple, practical, and mutually beneficial space-sharing opportunities.
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-[#D7EEFA] bg-white p-8 shadow-[0_12px_35px_rgba(89,165,216,0.08)] flex flex-col justify-between">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EAF7FF] text-[#386FA4] mb-6">
                  <Compass className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-[#133C55] mb-3">Our Vision</h2>
                <p className="text-base text-[#607D8B] leading-relaxed">
                  To build a trusted network where gyms become powerful growth locations for nutrition, fitness, and wellness brands across India.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Problem vs Solution */}
      <section className="bg-white py-16 border-b border-[#D7EEFA]">
        <Container>
          <SectionHeading
            badge="Industry Gap"
            title="The Problem & Our Solution"
            subtitle="Why traditional retail leases don't work for wellness startups, and how gym spaces unlock the answer."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* The Problem */}
            <div className="rounded-3xl border border-[#D7EEFA] bg-[#F8FCFF] p-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#EAF7FF] text-[#386FA4]">
                  <AlertCircle className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-[#133C55]">The Problem We Identified</h3>
              </div>
              <ul className="space-y-3 text-sm sm:text-base text-[#345466]">
                <li className="flex items-start gap-2.5">
                  <span className="text-[#59A5D8] font-bold">•</span>
                  <span>Gym owners often have unused display racks, shelves, or counter spaces that generate zero revenue.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#59A5D8] font-bold">•</span>
                  <span>New wellness brands face exorbitant retail rent and setup costs to reach target buyers.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#59A5D8] font-bold">•</span>
                  <span>Fitness customers struggle to discover reliable, verified health products locally.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#59A5D8] font-bold">•</span>
                  <span>Small health businesses lack targeted physical exposure in high-intent fitness hubs.</span>
                </li>
              </ul>
            </div>

            {/* The Solution */}
            <div className="rounded-3xl border border-[#D7EEFA] bg-[#EAF7FF] p-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-[#59A5D8]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-[#133C55]">The Racks on Rent Solution</h3>
              </div>
              <p className="text-sm sm:text-base text-[#345466] leading-relaxed">
                Racks on Rent brings gym space opportunities together through a simple enquiry, verification, and business-support model.
              </p>
              <ul className="space-y-3 text-sm sm:text-base text-[#345466]">
                <li className="flex items-start gap-2.5">
                  <span className="text-[#59A5D8] font-bold">✓</span>
                  <span>Gym owners unlock effortless monthly passive income from unused corners.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#59A5D8] font-bold">✓</span>
                  <span>Health brands access active fitness enthusiasts at a fraction of standard retail costs.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#59A5D8] font-bold">✓</span>
                  <span>Gym members gain convenient access to trusted supplements, healthy meals, and diet advice.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button href="/contact" variant="primary" size="lg" className="gap-2 rounded-full bg-[#59A5D8] hover:bg-[#386FA4] text-white">
              <span>Connect With Our Team</span>
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}

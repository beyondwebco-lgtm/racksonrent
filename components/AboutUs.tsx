"use client";

import React from "react";
import {
  Sparkles,
  Target,
  Eye,
  ShieldCheck,
  Zap,
  TrendingUp,
  Users,
  Award,
  CheckCircle2,
  Building2,
  Store,
  Compass,
} from "lucide-react";

export default function AboutUs() {
  const coreValues = [
    {
      name: "Innovation",
      desc: "Driving the future of commercial space utilization through technology and creative thinking.",
      icon: Zap,
    },
    {
      name: "Trust",
      desc: "Building long-lasting relationships through integrity, transparency, and reliability.",
      icon: ShieldCheck,
    },
    {
      name: "Growth",
      desc: "Creating opportunities that enable businesses and entrepreneurs to achieve sustainable success.",
      icon: TrendingUp,
    },
    {
      name: "Collaboration",
      desc: "Connecting commercial establishments and businesses through a mutually beneficial ecosystem.",
      icon: Users,
    },
    {
      name: "Excellence",
      desc: "Delivering exceptional service, seamless experiences, and professional support at every stage.",
      icon: Award,
    },
  ];

  const whyChooseItems = [
    "India's First Commercial Display Space Marketplace",
    "Innovative Space-Sharing Business Model",
    "Affordable Retail Expansion",
    "Premium High-Footfall Commercial Locations",
    "Flexible Rental Solutions",
    "Verified Commercial Spaces",
    "Secure Digital Agreements",
    "Transparent Payment Process",
    "Dedicated Customer Support",
    "Scalable Across Multiple Industries",
  ];

  const venueTypes = [
    "Gyms",
    "Supermarkets",
    "Cafés",
    "Salons",
    "Hospitals",
    "Bakeries",
    "Sweet Shops",
    "Gift Shops",
    "Shopping Malls",
    "Corporate Offices",
    "Retail Stores",
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#FFFDF5] border-b border-[#F0E2E4]" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FFF6A3] px-4 py-1.5 text-xs sm:text-sm font-bold text-[#6B0F1A] border border-[#F0E2E4]">
            <Sparkles className="w-3.5 h-3.5 text-[#6B0F1A]" />
            <span>India&apos;s First Commercial Display Space Marketplace</span>
          </span>
          
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#6B0F1A] md:text-5xl leading-tight">
            About <span className="bg-[#F4E409] text-[#3D0710] px-3 py-0.5 rounded-xl inline-block border border-[#6B0F1A]/20">Racks on Rent</span>
          </h2>
          
          <p className="mt-4 text-lg font-bold text-[#3D0710] sm:text-xl">
            Transforming Unused Commercial Space into Business Opportunities
          </p>
        </div>

        {/* Intro Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-stretch">
          
          {/* Main Intro Text */}
          <div className="lg:col-span-7 bg-[#FFFDF5] rounded-3xl border-2 border-[#6B0F1A] p-6 sm:p-8 shadow-[0_16px_40px_rgba(107,15,26,0.08)] flex flex-col justify-between">
            <div>
              <span className="text-xs font-extrabold text-[#6B0F1A] uppercase tracking-wider block mb-2">
                Who We Are
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-[#6B0F1A] mb-4">
                Redefining the Future of Commercial Space Utilization
              </h3>
              <p className="text-sm sm:text-base text-[#5F5F5F] leading-relaxed font-medium mb-4">
                At <strong className="text-[#6B0F1A]">RACKS ON RENT</strong>, we are redefining the future of commercial space utilization by transforming underutilized racks, shelves, kiosks, display counters, and business corners into revenue-generating business opportunities.
              </p>
              <p className="text-sm sm:text-base text-[#5F5F5F] leading-relaxed font-medium">
                Our technology-driven marketplace connects commercial space owners with brands, startups, entrepreneurs, and retailers seeking affordable, high-visibility locations to showcase their products and services. By unlocking the value of existing infrastructure, we create a sustainable ecosystem where businesses expand faster while commercial establishments generate recurring income from previously unused spaces.
              </p>
            </div>

            {/* Venue Types Badge List */}
            <div className="mt-6 pt-6 border-t border-[#F0E2E4]">
              <span className="text-xs font-extrabold text-[#6B0F1A] uppercase tracking-wider block mb-3 flex items-center gap-1.5">
                <Building2 className="w-4 h-4 text-[#6B0F1A]" />
                <span>Empowering Every Commercial Establishment</span>
              </span>
              <div className="flex flex-wrap gap-1.5">
                {venueTypes.map((venue, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-full bg-[#FFF6A3] text-[#3D0710] text-xs font-extrabold border border-[#6B0F1A]/20"
                  >
                    {venue}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Purpose & Why We Exist Right Card */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Our Purpose Card */}
            <div className="bg-[#6B0F1A] text-[#FFF6A3] rounded-3xl p-6 sm:p-8 shadow-md border-2 border-[#6B0F1A] flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-2 rounded-xl bg-[#F4E409] text-[#3D0710]">
                    <Compass className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-extrabold uppercase tracking-wider text-[#F4E409]">
                    Our Purpose
                  </span>
                </div>
                <h4 className="text-lg sm:text-xl font-extrabold text-[#FFF6A3] mb-3">
                  Creating Shared Success Through Smart Space Utilization
                </h4>
                <p className="text-xs sm:text-sm text-[#FFFDF5]/90 leading-relaxed font-medium">
                  Every commercial space has untapped potential. While businesses face rising costs to establish a retail presence, thousands of commercial spaces remain underutilized. RACKS ON RENT bridges this gap by creating a trusted digital marketplace where space owners monetize unused display areas and entrepreneurs gain affordable access to premium customer locations.
                </p>
              </div>
            </div>

            {/* Why We Exist Card */}
            <div className="bg-[#FFF6A3] text-[#3D0710] rounded-3xl p-6 sm:p-8 shadow-md border-2 border-[#6B0F1A]/30">
              <div className="flex items-center gap-2 mb-3">
                <div className="p-2 rounded-xl bg-[#6B0F1A] text-[#FFF6A3]">
                  <Store className="w-5 h-5" />
                </div>
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#6B0F1A]">
                  Why We Exist
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#1F1F1F] leading-relaxed font-bold">
                &quot;Every unused commercial space represents an untapped opportunity. Our goal is to transform vacant display areas into thriving business destinations where commercial establishments earn more, entrepreneurs grow faster, and customers discover new products in the places they already visit every day.&quot;
              </p>
            </div>

          </div>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          {/* Vision */}
          <div className="bg-[#FFFDF5] rounded-3xl border-2 border-[#6B0F1A] p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-2xl bg-[#FFF6A3] text-[#6B0F1A] border border-[#6B0F1A]/20">
                <Eye className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-extrabold text-[#6B0F1A] uppercase tracking-wider block">
                  Future Roadmap
                </span>
                <h3 className="text-xl font-extrabold text-[#6B0F1A]">Our Vision</h3>
              </div>
            </div>
            <p className="text-sm sm:text-base text-[#5F5F5F] leading-relaxed font-medium">
              To build India&apos;s largest and most trusted commercial display space marketplace, transform underutilized commercial spaces into thriving business opportunities while empowering entrepreneurs, retailers, and commercial establishments to grow together.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-[#FFFDF5] rounded-3xl border-2 border-[#6B0F1A] p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-2xl bg-[#FFF6A3] text-[#6B0F1A] border border-[#6B0F1A]/20">
                <Target className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-extrabold text-[#6B0F1A] uppercase tracking-wider block">
                  Our Commitment
                </span>
                <h3 className="text-xl font-extrabold text-[#6B0F1A]">Our Mission</h3>
              </div>
            </div>
            <p className="text-sm sm:text-base text-[#5F5F5F] leading-relaxed font-medium">
              To revolutionize commercial space utilization through an innovative technology platform that connects businesses with unused display spaces, creates sustainable income opportunities, and accelerates business growth through trust, transparency, and collaboration.
            </p>
          </div>

        </div>

        {/* Our Core Values */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-extrabold text-[#6B0F1A] uppercase tracking-wider block">
              What Drives Us
            </span>
            <h3 className="mt-1 text-2xl sm:text-3xl font-extrabold text-[#6B0F1A]">
              Our Core Values
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {coreValues.map((val, idx) => {
              const IconComponent = val.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#FFFDF5] rounded-2xl border border-[#F0E2E4] p-5 shadow-xs hover:shadow-md hover:border-[#6B0F1A]/40 transition-all hover:-translate-y-1 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#FFF6A3] flex items-center justify-center text-[#6B0F1A] mb-3">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h4 className="font-extrabold text-base text-[#6B0F1A] mb-2">
                      {val.name}
                    </h4>
                    <p className="text-xs text-[#5F5F5F] leading-relaxed font-medium">
                      {val.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Why Choose Racks on Rent */}
        <div className="bg-[#FFFDF5] rounded-3xl border-2 border-[#6B0F1A] p-6 sm:p-10 shadow-[0_16px_40px_rgba(107,15,26,0.10)]">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <span className="inline-flex rounded-full bg-[#FFF6A3] px-3.5 py-1 text-xs font-extrabold text-[#6B0F1A] border border-[#6B0F1A]/20 mb-2">
              Competitive Advantage
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#6B0F1A]">
              Why Choose RACKS ON RENT?
            </h3>
            <p className="mt-2 text-sm sm:text-base text-[#5F5F5F] font-medium">
              A Smarter Way to Expand Your Business — Unlike traditional retail expansion that demands high investment and long-term commitments, RACKS ON RENT offers a flexible and cost-effective alternative.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3.5 max-w-4xl mx-auto">
            {whyChooseItems.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 bg-[#FFFDF5] p-3.5 rounded-xl border border-[#F0E2E4] shadow-2xs hover:border-[#6B0F1A]/30 transition-colors"
              >
                <div className="p-1.5 rounded-lg bg-[#FFF6A3] text-[#6B0F1A] flex-shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-extrabold text-[#1F1F1F]">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

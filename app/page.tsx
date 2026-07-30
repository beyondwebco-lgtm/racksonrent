"use client";

import React, { useState } from "react";
import Hero from "@/components/Hero";
import HeroStats from "@/components/HeroStats";
import SpaceSearch from "@/components/SpaceSearch";
import PopularCategories from "@/components/PopularCategories";
import HowItWorks from "@/components/HowItWorks";
import WhyChooseUs from "@/components/WhyChooseUs";
import EnquiryForm from "@/components/EnquiryForm";
import FAQ from "@/components/FAQ";
import TrustStrip from "@/components/TrustStrip";

export default function HomePage() {
  const [selectedRole, setSelectedRole] = useState<"gym-owner" | "wellness" | "general">("gym-owner");
  const [searchValues, setSearchValues] = useState<{
    location?: string;
    spaceType?: string;
    rackSize?: string;
    category?: string;
  }>({});

  const handleRoleSelect = (role: "gym-owner" | "wellness") => {
    setSelectedRole(role);
  };

  const handleSearchSelect = (params: {
    location: string;
    spaceType: string;
    rackSize: string;
    category: string;
  }) => {
    setSearchValues(params);
    setSelectedRole("wellness");
  };

  return (
    <>
      <Hero onSelectRole={handleRoleSelect} />
      <HeroStats />
      <SpaceSearch onSearch={handleSearchSelect} />
      <PopularCategories />
      <HowItWorks />
      <WhyChooseUs />
      <EnquiryForm
        selectedRole={selectedRole}
        initialSearchValues={searchValues}
        onRoleChange={(r) => setSelectedRole(r)}
      />
      <FAQ />
      <TrustStrip />
    </>
  );
}

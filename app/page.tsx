"use client";

import React, { useState } from "react";
import Hero from "@/components/Hero";
import HeroStats from "@/components/HeroStats";
import SpaceSearch from "@/components/SpaceSearch";
import PopularCategories from "@/components/PopularCategories";
import RoleSelection from "@/components/RoleSelection";
import HowItWorks from "@/components/HowItWorks";
import SpaceTypes from "@/components/SpaceTypes";
import WhyChooseUs from "@/components/WhyChooseUs";
import Benefits from "@/components/Benefits";
import Pricing from "@/components/Pricing";
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
      <RoleSelection onSelectRole={handleRoleSelect} />
      <HowItWorks />
      <SpaceTypes />
      <WhyChooseUs />
      <Benefits />
      <Pricing onSelectRole={handleRoleSelect} />
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

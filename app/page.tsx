"use client";

import React, { useState } from "react";
import Hero from "@/components/Hero";
import RoleSelection from "@/components/RoleSelection";
import HowItWorks from "@/components/HowItWorks";
import Benefits from "@/components/Benefits";
import SpaceTypes from "@/components/SpaceTypes";
import EnquiryForm from "@/components/EnquiryForm";
import FAQ from "@/components/FAQ";

export default function HomePage() {
  const [selectedRole, setSelectedRole] = useState<"gym-owner" | "wellness" | "general">("gym-owner");

  const handleRoleSelect = (role: "gym-owner" | "wellness") => {
    setSelectedRole(role);
  };

  return (
    <>
      <Hero onSelectRole={handleRoleSelect} />
      <RoleSelection onSelectRole={handleRoleSelect} />
      <HowItWorks />
      <Benefits />
      <SpaceTypes />
      <EnquiryForm
        selectedRole={selectedRole}
        onRoleChange={(r) => setSelectedRole(r)}
      />
      <FAQ />
    </>
  );
}

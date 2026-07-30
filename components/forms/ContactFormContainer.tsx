"use client";

import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Dumbbell, Store, HelpCircle } from "lucide-react";
import GymOwnerForm from "./GymOwnerForm";
import WellnessBusinessForm from "./WellnessBusinessForm";
import GeneralEnquiryForm from "./GeneralEnquiryForm";

type FormTab = "gym-owner" | "wellness" | "general";

interface ContactFormContainerProps {
  initialTab?: FormTab;
}

export default function ContactFormContainer({ initialTab = "gym-owner" }: ContactFormContainerProps) {
  const searchParams = useSearchParams();
  const typeParam = searchParams.get("type");

  const computedTab: FormTab = 
    typeParam === "gym-owner" || typeParam === "wellness" || typeParam === "general"
      ? (typeParam as FormTab)
      : initialTab;

  const [activeTab, setActiveTab] = useState<FormTab | null>(null);

  const currentTab = activeTab ?? computedTab;

  return (
    <div className="max-w-4xl mx-auto">
      {/* User Type Tab Selector */}
      <div className="flex flex-wrap items-center justify-center p-1.5 bg-[#EEF3F7] rounded-2xl mb-8 gap-1.5 border border-[#D8E3EC] shadow-inner">
        <button
          type="button"
          onClick={() => setActiveTab("gym-owner")}
          className={`flex-1 min-w-[140px] flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-extrabold transition-all duration-200 cursor-pointer ${
            currentTab === "gym-owner"
              ? "bg-[#133C55] text-white shadow-md"
              : "text-[#102A3A] hover:bg-white/60"
          }`}
        >
          <Dumbbell className="w-4 h-4 text-[#84D2F6]" />
          <span>I am a Gym Owner</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("wellness")}
          className={`flex-1 min-w-[140px] flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-extrabold transition-all duration-200 cursor-pointer ${
            currentTab === "wellness"
              ? "bg-[#386FA4] text-white shadow-md"
              : "text-[#102A3A] hover:bg-white/60"
          }`}
        >
          <Store className="w-4 h-4 text-[#84D2F6]" />
          <span>I Run a Wellness Business</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("general")}
          className={`flex-1 min-w-[140px] flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-extrabold transition-all duration-200 cursor-pointer ${
            currentTab === "general"
              ? "bg-[#59A5D8] text-white shadow-md"
              : "text-[#102A3A] hover:bg-white/60"
          }`}
        >
          <HelpCircle className="w-4 h-4 text-white" />
          <span>General Enquiry</span>
        </button>
      </div>

      {/* Render Active Tab Form */}
      <div>
        {currentTab === "gym-owner" && <GymOwnerForm />}
        {currentTab === "wellness" && <WellnessBusinessForm />}
        {currentTab === "general" && <GeneralEnquiryForm />}
      </div>
    </div>
  );
}

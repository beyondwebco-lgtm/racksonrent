import React from "react";
import HeroSection from "@/components/sections/HeroSection";
import BenefitsStrip from "@/components/sections/BenefitsStrip";
import UserTypesSection from "@/components/sections/UserTypesSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import CategoriesSection from "@/components/sections/CategoriesSection";
import SpaceTypesSection from "@/components/sections/SpaceTypesSection";
import OpportunitiesSection from "@/components/sections/OpportunitiesSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProfitComparisonSection from "@/components/sections/ProfitComparisonSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import CustomerJourneyVisualSection from "@/components/sections/CustomerJourneyVisualSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import ContactSection from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <div className="space-y-0">
      <HeroSection />
      <BenefitsStrip />
      <UserTypesSection />
      <HowItWorksSection />
      <CategoriesSection />
      <SpaceTypesSection />
      <OpportunitiesSection />
      <ServicesSection />
      <ProfitComparisonSection />
      <WhyChooseUsSection />
      <CustomerJourneyVisualSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
    </div>
  );
}

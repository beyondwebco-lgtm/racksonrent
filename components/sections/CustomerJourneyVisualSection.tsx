import React from "react";
import Container from "../layout/Container";
import SectionHeading from "../ui/SectionHeading";
import Badge from "../ui/Badge";

export default function CustomerJourneyVisualSection() {
  const visualStoryBlocks = [
    {
      step: "01",
      emoji: "🏃‍♂️",
      title: "1. Customer Enters the Gym",
      desc: "Gym members walk in daily for workouts, receptive to health and wellness solutions.",
    },
    {
      step: "02",
      emoji: "📍",
      title: "2. Gym Owner Shows Available Space",
      desc: "Unused reception counters, empty walls, or floor corners are designated for display.",
    },
    {
      step: "03",
      emoji: "🗄️",
      title: "3. Nutrition Rack Setup Inside Gym",
      desc: "Verified health brand installs sleek, branded racks stocked with high-quality products.",
    },
    {
      step: "04",
      emoji: "🗣️",
      title: "4. Brand Provides Expert Guidance",
      desc: "Nutritionists or brand materials educate members on diet, recovery, and fitness gains.",
    },
    {
      step: "05",
      emoji: "🥤",
      title: "5. Member Enjoys Healthy Product",
      desc: "Gym goers sample or purchase protein shakes, cold energy drinks, and healthy snacks on-site.",
    },
    {
      step: "06",
      emoji: "💳",
      title: "6. Customer Purchase / Subscription",
      desc: "Members complete purchases or subscribe to monthly diet meal plans directly.",
    },
    {
      step: "07",
      emoji: "🤝",
      title: "7. Win-Win Business Growth",
      desc: "The gym owner earns passive space income while the wellness brand expands its reach.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#EAF7FF] text-[#133C55]">
      <Container>
        <SectionHeading
          badge="Visual Storytelling"
          title="The Racks on Rent Experience"
          subtitle="A visual walkthrough of how space sharing transforms gym corners into vibrant health hubs."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {visualStoryBlocks.map((block) => (
            <div
              key={block.step}
              className="rounded-3xl border border-[#D7EEFA] bg-white p-6 shadow-[0_12px_35px_rgba(89,165,216,0.08)] flex flex-col justify-between hover:-translate-y-1 transition-all duration-300 hover:border-[#84D2F6]"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{block.emoji}</span>
                  <Badge className="text-xs">
                    Phase {block.step}
                  </Badge>
                </div>

                <h3 className="font-bold text-lg text-[#133C55] mb-2 leading-snug">
                  {block.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#607D8B] leading-relaxed">
                  {block.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#D7EEFA]/60 flex items-center justify-between text-[11px] text-[#607D8B]">
                <span>Racks on Rent Story</span>
                <span className="text-[#386FA4] font-bold">Step {block.step} of 07</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

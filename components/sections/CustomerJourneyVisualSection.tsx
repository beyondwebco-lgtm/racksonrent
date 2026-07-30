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
      accent: "border-blue-500/40 bg-blue-950/40",
    },
    {
      step: "02",
      emoji: "📍",
      title: "2. Gym Owner Shows Available Space",
      desc: "Unused reception counters, empty walls, or floor corners are designated for display.",
      accent: "border-amber-500/40 bg-amber-950/40",
    },
    {
      step: "03",
      emoji: "🗄️",
      title: "3. Nutrition Rack Setup Inside Gym",
      desc: "Verified health brand installs sleek, branded racks stocked with high-quality products.",
      accent: "border-orange-500/40 bg-orange-950/40",
    },
    {
      step: "04",
      emoji: "🗣️",
      title: "4. Brand Provides Expert Guidance",
      desc: "Nutritionists or brand materials educate members on diet, recovery, and fitness gains.",
      accent: "border-emerald-500/40 bg-emerald-950/40",
    },
    {
      step: "05",
      emoji: "🥤",
      title: "5. Member Enjoys Healthy Product",
      desc: "Gym goers sample or purchase protein shakes, cold energy drinks, and healthy snacks on-site.",
      accent: "border-teal-500/40 bg-teal-950/40",
    },
    {
      step: "06",
      emoji: "💳",
      title: "6. Customer Purchase / Subscription",
      desc: "Members complete purchases or subscribe to monthly diet meal plans directly.",
      accent: "border-indigo-500/40 bg-indigo-950/40",
    },
    {
      step: "07",
      emoji: "🤝",
      title: "7. Win-Win Business Growth",
      desc: "The gym owner earns passive space income while the wellness brand expands its reach.",
      accent: "border-purple-500/40 bg-purple-950/40",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#031B3D] text-white">
      <Container>
        <SectionHeading
          badge="Visual Storytelling"
          badgeVariant="yellow"
          title="The Racks on Rent Experience"
          subtitle="A visual walkthrough of how space sharing transforms gym corners into vibrant health hubs."
          darkBackground
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {visualStoryBlocks.map((block) => (
            <div
              key={block.step}
              className={`rounded-3xl p-6 border ${block.accent} backdrop-blur-md shadow-xl flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{block.emoji}</span>
                  <Badge variant="yellow" className="text-xs">
                    Phase {block.step}
                  </Badge>
                </div>

                <h3 className="font-bold text-lg text-white mb-2 leading-snug">
                  {block.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {block.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
                <span>Racks on Rent Story</span>
                <span className="text-[#FFC928] font-bold">Step {block.step} of 07</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

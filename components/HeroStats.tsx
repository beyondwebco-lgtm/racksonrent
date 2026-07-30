import React from "react";
import { Layers, Store, TrendingUp } from "lucide-react";
import { HERO_STATS } from "@/data/stats";

export default function HeroStats() {
  const iconMap: Record<string, React.ReactNode> = {
    Layers: <Layers className="w-6 h-6 text-[#F4E409]" />,
    Store: <Store className="w-6 h-6 text-[#F4E409]" />,
    TrendingUp: <TrendingUp className="w-6 h-6 text-[#F4E409]" />,
  };

  return (
    <div className="bg-[#6B0F1A] text-white py-6 border-y border-[#3D0710] shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center divide-y sm:divide-y-0 sm:divide-x divide-[#3D0710]/60">
          {HERO_STATS.map((stat) => (
            <div key={stat.id} className="pt-4 sm:pt-0 flex flex-col items-center justify-center space-y-1">
              <div className="p-2 rounded-2xl bg-[#3D0710]/50 mb-1">
                {iconMap[stat.iconName]}
              </div>
              <span className="text-3xl sm:text-4xl font-black text-[#F4E409] tracking-tight">
                {stat.number}
              </span>
              <span className="text-xs sm:text-sm font-bold text-white/90 uppercase tracking-wider">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { Dumbbell, Store, MapPin, ShieldCheck } from "lucide-react";
import { TRUST_STRIP_ITEMS } from "@/data/stats";

export default function TrustStrip() {
  const iconMap: Record<string, React.ReactNode> = {
    Dumbbell: <Dumbbell className="w-5 h-5 text-[#F4E409]" />,
    Store: <Store className="w-5 h-5 text-[#F4E409]" />,
    MapPin: <MapPin className="w-5 h-5 text-[#F4E409]" />,
    ShieldCheck: <ShieldCheck className="w-5 h-5 text-[#F4E409]" />,
  };

  return (
    <div className="bg-[#6B0F1A] text-white py-6 border-y border-[#3D0710] shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
          {TRUST_STRIP_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center gap-2.5 p-3 rounded-2xl bg-[#3D0710]/40 border border-[#F4E409]/20"
            >
              {iconMap[item.iconName]}
              <span className="text-xs sm:text-sm font-extrabold text-white">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

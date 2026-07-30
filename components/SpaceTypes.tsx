import React from "react";
import { Layers, Grid, Store, Coffee, Gift, Box } from "lucide-react";
import { COMPACT_SPACE_TYPES } from "@/data/spaceTypes";

export default function SpaceTypes() {
  const iconMap: Record<string, React.ReactNode> = {
    Layers: <Layers className="w-6 h-6 text-[#59A5D8]" />,
    Grid: <Grid className="w-6 h-6 text-[#59A5D8]" />,
    Store: <Store className="w-6 h-6 text-[#59A5D8]" />,
    Coffee: <Coffee className="w-6 h-6 text-[#59A5D8]" />,
    Gift: <Gift className="w-6 h-6 text-[#59A5D8]" />,
    Box: <Box className="w-6 h-6 text-[#59A5D8]" />,
  };

  return (
    <section className="py-16 sm:py-24 bg-white border-y border-[#D7EEFA]" id="space-types">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex rounded-full bg-[#EAF7FF] px-4 py-1.5 text-sm font-semibold text-[#386FA4] border border-[#D7EEFA]">
            Available Formats
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#133C55] md:text-5xl">
            What Kind of Space Can Be Offered?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#607D8B] md:text-lg">
            Explore popular gym space options that suit display racks, shelves, counters, and kiosks.
          </p>
        </div>

        {/* Compact Grid with 6 items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {COMPACT_SPACE_TYPES.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl border border-[#D7EEFA] bg-white p-6 shadow-[0_12px_35px_rgba(89,165,216,0.08)] hover:shadow-[0_20px_50px_rgba(89,165,216,0.16)] transition-all hover:-translate-y-1 hover:border-[#84D2F6] flex flex-col justify-between group"
            >
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EAF7FF] text-[#59A5D8] group-hover:bg-[#386FA4] group-hover:text-white transition-colors mb-4">
                  {iconMap[item.iconName]}
                </div>
                <h3 className="font-bold text-lg text-[#133C55] group-hover:text-[#386FA4] transition-colors mb-2">
                  {item.name}
                </h3>
                <p className="text-sm text-[#607D8B] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

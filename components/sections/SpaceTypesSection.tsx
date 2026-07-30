import React from "react";
import Link from "next/link";
import { 
  Layers, Grid, Store, Coffee, Snowflake, Gift, Maximize2, FileText, Box, Megaphone, ArrowUpRight
} from "lucide-react";
import Container from "../layout/Container";
import SectionHeading from "../ui/SectionHeading";
import { SPACE_TYPES } from "@/data/spaceTypes";

export default function SpaceTypesSection() {
  const iconMap: Record<string, React.ReactNode> = {
    Layers: <Layers className="w-6 h-6 text-[#59A5D8]" />,
    Grid: <Grid className="w-6 h-6 text-[#59A5D8]" />,
    Store: <Store className="w-6 h-6 text-[#59A5D8]" />,
    Coffee: <Coffee className="w-6 h-6 text-[#59A5D8]" />,
    Snowflake: <Snowflake className="w-6 h-6 text-[#59A5D8]" />,
    Gift: <Gift className="w-6 h-6 text-[#59A5D8]" />,
    Maximize2: <Maximize2 className="w-6 h-6 text-[#59A5D8]" />,
    FileText: <FileText className="w-6 h-6 text-[#59A5D8]" />,
    Box: <Box className="w-6 h-6 text-[#59A5D8]" />,
    Megaphone: <Megaphone className="w-6 h-6 text-[#59A5D8]" />,
  };

  return (
    <section className="py-16 sm:py-24 bg-white border-y border-[#D7EEFA]" id="spaces">
      <Container>
        <SectionHeading
          badge="Flexible Space Formats"
          title="Turn Every Useful Corner Into an Opportunity"
          subtitle="Gym owners can monetize varied spaces, while wellness brands can select the exact format that matches their product."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {SPACE_TYPES.map((space) => (
            <Link
              key={space.id}
              href="/contact?type=gym-owner"
              className="rounded-3xl border border-[#D7EEFA] bg-white p-5 shadow-[0_12px_35px_rgba(89,165,216,0.08)] hover:shadow-[0_20px_50px_rgba(89,165,216,0.16)] transition-all duration-300 hover:-translate-y-1 hover:border-[#84D2F6] flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EAF7FF] text-[#59A5D8] group-hover:bg-[#386FA4] group-hover:text-white transition-colors">
                    {iconMap[space.iconName]}
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#607D8B] group-hover:text-[#386FA4] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>

                <h3 className="font-bold text-base text-[#133C55] group-hover:text-[#386FA4] transition-colors mb-2">
                  {space.title}
                </h3>
                <p className="text-xs text-[#607D8B] leading-relaxed mb-3">
                  {space.description}
                </p>
              </div>

              <div className="pt-2 border-t border-[#D7EEFA]/60">
                <p className="text-[10px] font-semibold text-[#607D8B] uppercase tracking-tight">Ideal For:</p>
                <p className="text-xs font-semibold text-[#386FA4] line-clamp-1">{space.idealFor}</p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

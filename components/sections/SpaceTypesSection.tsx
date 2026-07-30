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
    Layers: <Layers className="w-6 h-6 text-[#386FA4]" />,
    Grid: <Grid className="w-6 h-6 text-[#133C55]" />,
    Store: <Store className="w-6 h-6 text-[#59A5D8]" />,
    Coffee: <Coffee className="w-6 h-6 text-[#386FA4]" />,
    Snowflake: <Snowflake className="w-6 h-6 text-[#59A5D8]" />,
    Gift: <Gift className="w-6 h-6 text-[#133C55]" />,
    Maximize2: <Maximize2 className="w-6 h-6 text-[#386FA4]" />,
    FileText: <FileText className="w-6 h-6 text-[#133C55]" />,
    Box: <Box className="w-6 h-6 text-[#59A5D8]" />,
    Megaphone: <Megaphone className="w-6 h-6 text-[#386FA4]" />,
  };

  return (
    <section className="py-16 sm:py-24 bg-white border-y border-[#D8E3EC]" id="spaces">
      <Container>
        <SectionHeading
          badge="Flexible Space Formats"
          badgeVariant="brand"
          title="Turn Every Useful Corner Into an Opportunity"
          subtitle="Gym owners can monetize varied spaces, while wellness brands can select the exact format that matches their product."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {SPACE_TYPES.map((space) => (
            <Link
              key={space.id}
              href="/contact?type=gym-owner"
              className="rounded-2xl border border-[#59A5D8]/25 bg-white p-5 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#386FA4]/40 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#84D2F6]/20 border border-[#84D2F6]/40 flex items-center justify-center group-hover:bg-[#84D2F6]/40 transition-colors">
                    {iconMap[space.iconName]}
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-[#386FA4] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>

                <h3 className="font-bold text-base text-[#102A3A] group-hover:text-[#386FA4] transition-colors mb-2">
                  {space.title}
                </h3>
                <p className="text-xs text-[#5F7483] leading-relaxed mb-3">
                  {space.description}
                </p>
              </div>

              <div className="pt-2 border-t border-[#EEF3F7]">
                <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-tight">Ideal For:</p>
                <p className="text-xs font-semibold text-[#133C55] line-clamp-1">{space.idealFor}</p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

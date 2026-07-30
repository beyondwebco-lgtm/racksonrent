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
    Layers: <Layers className="w-6 h-6 text-[#FF6500]" />,
    Grid: <Grid className="w-6 h-6 text-[#062A5E]" />,
    Store: <Store className="w-6 h-6 text-[#157A3D]" />,
    Coffee: <Coffee className="w-6 h-6 text-amber-600" />,
    Snowflake: <Snowflake className="w-6 h-6 text-cyan-600" />,
    Gift: <Gift className="w-6 h-6 text-purple-600" />,
    Maximize2: <Maximize2 className="w-6 h-6 text-indigo-600" />,
    FileText: <FileText className="w-6 h-6 text-[#062A5E]" />,
    Box: <Box className="w-6 h-6 text-orange-500" />,
    Megaphone: <Megaphone className="w-6 h-6 text-[#FF6500]" />,
  };

  return (
    <section className="py-16 sm:py-24 bg-white border-y border-[#E5E7EB]" id="spaces">
      <Container>
        <SectionHeading
          badge="Flexible Space Formats"
          badgeVariant="orange"
          title="Turn Every Useful Corner Into an Opportunity"
          subtitle="Gym owners can monetize varied spaces, while wellness brands can select the exact format that matches their product."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {SPACE_TYPES.map((space) => (
            <Link
              key={space.id}
              href="/contact?type=gym-owner"
              className="bg-[#F7F8FA] rounded-2xl p-5 border border-[#E5E7EB] hover:border-[#FF6500] hover:bg-white shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center group-hover:bg-[#FF6500]/10 transition-colors">
                    {iconMap[space.iconName]}
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-[#FF6500] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>

                <h3 className="font-bold text-base text-[#031B3D] group-hover:text-[#FF6500] transition-colors mb-2">
                  {space.title}
                </h3>
                <p className="text-xs text-[#5C6470] leading-relaxed mb-3">
                  {space.description}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-200/60">
                <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-tight">Ideal For:</p>
                <p className="text-xs font-semibold text-[#157A3D] line-clamp-1">{space.idealFor}</p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

import React from "react";
import Link from "next/link";
import { 
  Stethoscope, Dumbbell, Zap, Cookie, Apple, Leaf, Utensils, 
  Trophy, ShoppingBag, Sprout, Sparkles, HeartPulse, UserCheck, Droplets, ArrowRight
} from "lucide-react";
import Container from "../layout/Container";
import SectionHeading from "../ui/SectionHeading";
import { BUSINESS_CATEGORIES } from "@/data/categories";

export default function CategoriesSection() {
  const iconMap: Record<string, React.ReactNode> = {
    Stethoscope: <Stethoscope className="w-6 h-6 text-[#59A5D8]" />,
    Dumbbell: <Dumbbell className="w-6 h-6 text-[#59A5D8]" />,
    Zap: <Zap className="w-6 h-6 text-[#59A5D8]" />,
    Cookie: <Cookie className="w-6 h-6 text-[#59A5D8]" />,
    Apple: <Apple className="w-6 h-6 text-[#59A5D8]" />,
    Leaf: <Leaf className="w-6 h-6 text-[#59A5D8]" />,
    Utensils: <Utensils className="w-6 h-6 text-[#59A5D8]" />,
    Trophy: <Trophy className="w-6 h-6 text-[#59A5D8]" />,
    ShoppingBag: <ShoppingBag className="w-6 h-6 text-[#59A5D8]" />,
    Sprout: <Sprout className="w-6 h-6 text-[#59A5D8]" />,
    Sparkles: <Sparkles className="w-6 h-6 text-[#59A5D8]" />,
    HeartPulse: <HeartPulse className="w-6 h-6 text-[#59A5D8]" />,
    UserCheck: <UserCheck className="w-6 h-6 text-[#59A5D8]" />,
    Droplets: <Droplets className="w-6 h-6 text-[#59A5D8]" />,
  };

  return (
    <section className="py-16 sm:py-24 bg-[#EAF7FF]" id="categories">
      <Container>
        <SectionHeading
          badge="Endless Possibilities"
          title="Who Can Use Racks on Rent?"
          subtitle="Explore the diverse range of health, fitness, nutrition, and wellness businesses that can sublet gym space."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {BUSINESS_CATEGORIES.map((category) => (
            <Link
              key={category.id}
              href="/contact?type=wellness"
              className="rounded-3xl border border-[#D7EEFA] bg-white p-6 shadow-[0_12px_35px_rgba(89,165,216,0.08)] hover:shadow-[0_20px_50px_rgba(89,165,216,0.16)] transition-all duration-300 hover:-translate-y-1 hover:border-[#84D2F6] flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EAF7FF] text-[#59A5D8] group-hover:bg-[#386FA4] group-hover:text-white transition-colors">
                    {iconMap[category.iconName] || <Sparkles className="w-6 h-6" />}
                  </div>
                  {category.badge && (
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-[#EAF7FF] text-[#386FA4] border border-[#D7EEFA]">
                      {category.badge}
                    </span>
                  )}
                </div>

                <h3 className="font-bold text-lg text-[#133C55] group-hover:text-[#386FA4] transition-colors mb-2">
                  {category.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#607D8B] leading-relaxed">
                  {category.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#D7EEFA]/60 flex items-center gap-1 text-xs font-semibold text-[#386FA4] group-hover:text-[#133C55] transition-colors">
                <span>Enquire as Brand</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

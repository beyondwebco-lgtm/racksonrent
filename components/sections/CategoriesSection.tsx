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
    Stethoscope: <Stethoscope className="w-6 h-6 text-[#062A5E]" />,
    Dumbbell: <Dumbbell className="w-6 h-6 text-[#FF6500]" />,
    Zap: <Zap className="w-6 h-6 text-amber-500" />,
    Cookie: <Cookie className="w-6 h-6 text-amber-700" />,
    Apple: <Apple className="w-6 h-6 text-[#157A3D]" />,
    Leaf: <Leaf className="w-6 h-6 text-emerald-600" />,
    Utensils: <Utensils className="w-6 h-6 text-orange-600" />,
    Trophy: <Trophy className="w-6 h-6 text-[#FFC928]" />,
    ShoppingBag: <ShoppingBag className="w-6 h-6 text-purple-600" />,
    Sprout: <Sprout className="w-6 h-6 text-green-600" />,
    Sparkles: <Sparkles className="w-6 h-6 text-[#FF6500]" />,
    HeartPulse: <HeartPulse className="w-6 h-6 text-red-500" />,
    UserCheck: <UserCheck className="w-6 h-6 text-indigo-600" />,
    Droplets: <Droplets className="w-6 h-6 text-blue-500" />,
  };

  return (
    <section className="py-16 sm:py-24 bg-[#F7F8FA]" id="categories">
      <Container>
        <SectionHeading
          badge="Endless Possibilities"
          badgeVariant="navy"
          title="Who Can Use Racks on Rent?"
          subtitle="Explore the diverse range of health, fitness, nutrition, and wellness businesses that can sublet gym space."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {BUSINESS_CATEGORIES.map((category) => (
            <Link
              key={category.id}
              href="/contact?type=wellness"
              className="bg-white rounded-2xl p-6 border border-[#E5E7EB] shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {iconMap[category.iconName] || <Sparkles className="w-6 h-6 text-[#FF6500]" />}
                  </div>
                  {category.badge && (
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-[#FF6500]/10 text-[#FF6500] border border-[#FF6500]/20">
                      {category.badge}
                    </span>
                  )}
                </div>

                <h3 className="font-bold text-lg text-[#031B3D] group-hover:text-[#FF6500] transition-colors mb-2">
                  {category.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#5C6470] leading-relaxed">
                  {category.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1 text-xs font-semibold text-[#062A5E] group-hover:text-[#FF6500] transition-colors">
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

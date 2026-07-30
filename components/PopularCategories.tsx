import React from "react";
import {
  Stethoscope,
  Zap,
  Cookie,
  ShoppingBag,
  Dumbbell,
  Trophy,
  Apple,
  Utensils,
  Sparkles,
  Layers,
  ArrowRight,
} from "lucide-react";
import { POPULAR_CATEGORIES, CategoryItem } from "@/data/categories";

export default function PopularCategories() {
  const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    Stethoscope,
    Zap,
    Cookie,
    ShoppingBag,
    Dumbbell,
    Trophy,
    Apple,
    Utensils,
    Sparkles,
    Layers,
  };

  const handleCategoryClick = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-[#FFFDF5]" id="categories">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex rounded-full bg-[#FFF6A3] px-4 py-1.5 text-sm font-bold text-[#6B0F1A] border border-[#F0E2E4]">
            Product Placement Categories
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#6B0F1A] md:text-5xl">
            Popular Categories
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#5F5F5F] md:text-lg font-medium">
            Explore high-demand product and service categories featured inside gyms across India.
          </p>
        </div>

        {/* 10 Category Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
          {POPULAR_CATEGORIES.map((cat: CategoryItem) => {
            const IconComponent = iconMap[cat.iconName] || Layers;
            return (
              <button
                type="button"
                key={cat.id}
                onClick={handleCategoryClick}
                className="text-left rounded-3xl border border-[#F0E2E4] bg-[#FFFDF5] p-5 shadow-[0_8px_25px_rgba(107,15,26,0.05)] hover:shadow-[0_16px_40px_rgba(107,15,26,0.12)] hover:border-[#6B0F1A]/40 transition-all hover:-translate-y-1 flex flex-col justify-between group cursor-pointer relative overflow-hidden"
              >
                {cat.badge && (
                  <span className="absolute top-3 right-3 text-[10px] font-extrabold bg-[#F4E409] text-[#3D0710] px-2 py-0.5 rounded-full border border-[#6B0F1A]/20">
                    {cat.badge}
                  </span>
                )}

                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FFF6A3] mb-4 group-hover:bg-[#6B0F1A] transition-colors">
                    <IconComponent className="w-6 h-6 text-[#6B0F1A] group-hover:text-[#FFF6A3] transition-colors" />
                  </div>

                  <h3 className="font-extrabold text-base text-[#6B0F1A] group-hover:text-[#3D0710] transition-colors mb-1.5 leading-snug">
                    {cat.name}
                  </h3>

                  <p className="text-xs text-[#5F5F5F] leading-relaxed font-medium line-clamp-2">
                    {cat.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#F0E2E4] flex items-center justify-between text-xs font-extrabold text-[#6B0F1A] group-hover:text-[#3D0710]">
                  <span>Explore Spaces</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
}

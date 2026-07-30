import React from "react";
import { 
  Milk, Zap, Apple, Leaf, BookOpen, Utensils, HeartPulse, 
  Cookie, Trophy, Gift, UserCheck, ShoppingBag, Layers, Megaphone 
} from "lucide-react";
import Container from "../layout/Container";
import SectionHeading from "../ui/SectionHeading";
import { SERVICES_SUPPORTED } from "@/data/services";

export default function ServicesSection() {
  const iconMap: Record<string, React.ReactNode> = {
    Milk: <Milk className="w-5 h-5 text-blue-500" />,
    Zap: <Zap className="w-5 h-5 text-amber-500" />,
    Apple: <Apple className="w-5 h-5 text-red-500" />,
    Leaf: <Leaf className="w-5 h-5 text-emerald-600" />,
    BookOpen: <BookOpen className="w-5 h-5 text-indigo-600" />,
    Utensils: <Utensils className="w-5 h-5 text-orange-500" />,
    HeartPulse: <HeartPulse className="w-5 h-5 text-[#FF6500]" />,
    Cookie: <Cookie className="w-5 h-5 text-amber-700" />,
    Trophy: <Trophy className="w-5 h-5 text-[#FFC928]" />,
    Gift: <Gift className="w-5 h-5 text-purple-600" />,
    UserCheck: <UserCheck className="w-5 h-5 text-[#157A3D]" />,
    ShoppingBag: <ShoppingBag className="w-5 h-5 text-[#062A5E]" />,
    Layers: <Layers className="w-5 h-5 text-teal-600" />,
    Megaphone: <Megaphone className="w-5 h-5 text-[#FF6500]" />,
  };

  return (
    <section className="py-16 sm:py-24 bg-white border-y border-[#E5E7EB]" id="services">
      <Container>
        <SectionHeading
          badge="Product & Service Support"
          badgeVariant="green"
          title="Services Supported Through Racks on Rent"
          subtitle="From ready-to-drink protein shakes to diet consultations, discover what products and services fit naturally inside gyms."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {SERVICES_SUPPORTED.map((service) => (
            <div
              key={service.id}
              className="bg-[#F7F8FA] rounded-2xl p-6 border border-[#E5E7EB] hover:border-[#062A5E] hover:bg-white transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between group"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-xs">
                  {iconMap[service.iconName]}
                </div>

                <h3 className="font-bold text-base text-[#031B3D] group-hover:text-[#062A5E] transition-colors mb-2">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#5C6470] leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

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
    Milk: <Milk className="w-5 h-5 text-[#59A5D8]" />,
    Zap: <Zap className="w-5 h-5 text-[#59A5D8]" />,
    Apple: <Apple className="w-5 h-5 text-[#59A5D8]" />,
    Leaf: <Leaf className="w-5 h-5 text-[#59A5D8]" />,
    BookOpen: <BookOpen className="w-5 h-5 text-[#59A5D8]" />,
    Utensils: <Utensils className="w-5 h-5 text-[#59A5D8]" />,
    HeartPulse: <HeartPulse className="w-5 h-5 text-[#59A5D8]" />,
    Cookie: <Cookie className="w-5 h-5 text-[#59A5D8]" />,
    Trophy: <Trophy className="w-5 h-5 text-[#59A5D8]" />,
    Gift: <Gift className="w-5 h-5 text-[#59A5D8]" />,
    UserCheck: <UserCheck className="w-5 h-5 text-[#59A5D8]" />,
    ShoppingBag: <ShoppingBag className="w-5 h-5 text-[#59A5D8]" />,
    Layers: <Layers className="w-5 h-5 text-[#59A5D8]" />,
    Megaphone: <Megaphone className="w-5 h-5 text-[#59A5D8]" />,
  };

  return (
    <section className="py-16 sm:py-24 bg-[#EAF7FF] border-y border-[#D7EEFA]" id="services">
      <Container>
        <SectionHeading
          badge="Product & Service Support"
          title="Services Supported Through Racks on Rent"
          subtitle="From ready-to-drink protein shakes to diet consultations, discover what products and services fit naturally inside gyms."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {SERVICES_SUPPORTED.map((service) => (
            <div
              key={service.id}
              className="rounded-3xl border border-[#D7EEFA] bg-white p-6 shadow-[0_12px_35px_rgba(89,165,216,0.08)] hover:shadow-[0_20px_50px_rgba(89,165,216,0.16)] transition-all duration-300 hover:-translate-y-1 hover:border-[#84D2F6] flex flex-col justify-between group"
            >
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EAF7FF] text-[#59A5D8] group-hover:bg-[#386FA4] group-hover:text-white transition-colors mb-4">
                  {iconMap[service.iconName]}
                </div>

                <h3 className="font-bold text-base text-[#133C55] group-hover:text-[#386FA4] transition-colors mb-2">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#607D8B] leading-relaxed">
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

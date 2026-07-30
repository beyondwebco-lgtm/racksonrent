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
    Milk: <Milk className="w-5 h-5 text-[#386FA4]" />,
    Zap: <Zap className="w-5 h-5 text-[#59A5D8]" />,
    Apple: <Apple className="w-5 h-5 text-[#386FA4]" />,
    Leaf: <Leaf className="w-5 h-5 text-[#133C55]" />,
    BookOpen: <BookOpen className="w-5 h-5 text-[#386FA4]" />,
    Utensils: <Utensils className="w-5 h-5 text-[#59A5D8]" />,
    HeartPulse: <HeartPulse className="w-5 h-5 text-[#133C55]" />,
    Cookie: <Cookie className="w-5 h-5 text-[#386FA4]" />,
    Trophy: <Trophy className="w-5 h-5 text-[#59A5D8]" />,
    Gift: <Gift className="w-5 h-5 text-[#133C55]" />,
    UserCheck: <UserCheck className="w-5 h-5 text-[#386FA4]" />,
    ShoppingBag: <ShoppingBag className="w-5 h-5 text-[#59A5D8]" />,
    Layers: <Layers className="w-5 h-5 text-[#133C55]" />,
    Megaphone: <Megaphone className="w-5 h-5 text-[#386FA4]" />,
  };

  return (
    <section className="py-16 sm:py-24 bg-white border-y border-[#D8E3EC]" id="services">
      <Container>
        <SectionHeading
          badge="Product & Service Support"
          badgeVariant="brand"
          title="Services Supported Through Racks on Rent"
          subtitle="From ready-to-drink protein shakes to diet consultations, discover what products and services fit naturally inside gyms."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {SERVICES_SUPPORTED.map((service) => (
            <div
              key={service.id}
              className="rounded-2xl border border-[#59A5D8]/25 bg-[#F7FAFC] p-6 hover:border-[#386FA4]/40 hover:bg-white transition-all duration-300 shadow-xs hover:shadow-md flex flex-col justify-between group"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#84D2F6]/20 border border-[#84D2F6]/40 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {iconMap[service.iconName]}
                </div>

                <h3 className="font-bold text-base text-[#102A3A] group-hover:text-[#386FA4] transition-colors mb-2">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#5F7483] leading-relaxed">
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

import React from "react";
import { TrendingUp, Eye, DollarSign, Handshake } from "lucide-react";
import Container from "../layout/Container";
import { VALUE_STRIP_BENEFITS } from "@/data/benefits";

export default function BenefitsStrip() {
  const iconMap: Record<string, React.ReactNode> = {
    TrendingUp: <TrendingUp className="w-6 h-6 text-[#386FA4]" />,
    Eye: <Eye className="w-6 h-6 text-[#133C55]" />,
    DollarSign: <DollarSign className="w-6 h-6 text-[#59A5D8]" />,
    Handshake: <Handshake className="w-6 h-6 text-[#386FA4]" />,
  };

  return (
    <section className="relative -mt-10 z-20 pb-12">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {VALUE_STRIP_BENEFITS.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl border border-[#59A5D8]/25 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-[#386FA4]/40 hover:shadow-lg flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#84D2F6]/20 border border-[#84D2F6]/40 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {iconMap[item.iconName] || <TrendingUp className="w-6 h-6 text-[#386FA4]" />}
                </div>
                <h3 className="font-bold text-lg text-[#133C55] group-hover:text-[#386FA4] transition-colors mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#5F7483] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

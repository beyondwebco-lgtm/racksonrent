import React from "react";
import { TrendingUp, Eye, DollarSign, Handshake } from "lucide-react";
import Container from "../layout/Container";
import { VALUE_STRIP_BENEFITS } from "@/data/benefits";

export default function BenefitsStrip() {
  const iconMap: Record<string, React.ReactNode> = {
    TrendingUp: <TrendingUp className="w-6 h-6 text-[#59A5D8]" />,
    Eye: <Eye className="w-6 h-6 text-[#59A5D8]" />,
    DollarSign: <DollarSign className="w-6 h-6 text-[#59A5D8]" />,
    Handshake: <Handshake className="w-6 h-6 text-[#59A5D8]" />,
  };

  return (
    <section className="relative -mt-10 z-20 pb-12 bg-white">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {VALUE_STRIP_BENEFITS.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl border border-[#D7EEFA] bg-white p-6 shadow-[0_12px_35px_rgba(89,165,216,0.08)] transition-all hover:-translate-y-1 hover:border-[#84D2F6] hover:shadow-[0_20px_50px_rgba(89,165,216,0.16)] flex flex-col justify-between group"
            >
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EAF7FF] text-[#59A5D8] mb-4 group-hover:bg-[#386FA4] group-hover:text-white transition-colors">
                  {iconMap[item.iconName] || <TrendingUp className="w-6 h-6" />}
                </div>
                <h3 className="font-bold text-lg text-[#133C55] group-hover:text-[#386FA4] transition-colors mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#607D8B] leading-relaxed">
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

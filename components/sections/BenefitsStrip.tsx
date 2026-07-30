import React from "react";
import { TrendingUp, Eye, DollarSign, Handshake } from "lucide-react";
import Container from "../layout/Container";
import { VALUE_STRIP_BENEFITS } from "@/data/benefits";

export default function BenefitsStrip() {
  const iconMap: Record<string, React.ReactNode> = {
    TrendingUp: <TrendingUp className="w-6 h-6 text-[#FF6500]" />,
    Eye: <Eye className="w-6 h-6 text-[#062A5E]" />,
    DollarSign: <DollarSign className="w-6 h-6 text-[#157A3D]" />,
    Handshake: <Handshake className="w-6 h-6 text-[#FFC928]" />,
  };

  return (
    <section className="relative -mt-10 z-20 pb-12">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {VALUE_STRIP_BENEFITS.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 shadow-xl border border-[#E5E7EB] hover:border-[#FF6500]/50 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {iconMap[item.iconName] || <TrendingUp className="w-6 h-6 text-[#FF6500]" />}
                </div>
                <h3 className="font-bold text-lg text-[#031B3D] group-hover:text-[#FF6500] transition-colors mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#5C6470] leading-relaxed">
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

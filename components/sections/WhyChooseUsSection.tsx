import React from "react";
import { 
  Target, ShieldCheck, BadgePercent, Users, HeartHandshake, 
  MessageSquare, Maximize, MapPin, PieChart, Rocket, Sparkles, MessageCircle 
} from "lucide-react";
import Container from "../layout/Container";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import { WHY_CHOOSE_US_REASONS, TRUST_BANNER } from "@/data/whyChooseUs";
import { CONTACT_INFO } from "@/data/navigation";

export default function WhyChooseUsSection() {
  const iconMap: Record<string, React.ReactNode> = {
    Target: <Target className="w-5 h-5 text-[#FF6500]" />,
    ShieldCheck: <ShieldCheck className="w-5 h-5 text-[#062A5E]" />,
    BadgePercent: <BadgePercent className="w-5 h-5 text-[#157A3D]" />,
    Users: <Users className="w-5 h-5 text-amber-500" />,
    HeartHandshake: <HeartHandshake className="w-5 h-5 text-[#25D366]" />,
    MessageSquare: <MessageSquare className="w-5 h-5 text-[#FF6500]" />,
    Maximize: <Maximize className="w-5 h-5 text-[#062A5E]" />,
    MapPin: <MapPin className="w-5 h-5 text-red-500" />,
    PieChart: <PieChart className="w-5 h-5 text-indigo-600" />,
    Rocket: <Rocket className="w-5 h-5 text-[#FF6500]" />,
  };

  return (
    <section className="py-16 sm:py-24 bg-white border-y border-[#E5E7EB]" id="why-choose-us">
      <Container>
        <SectionHeading
          badge="Platform Advantages"
          badgeVariant="navy"
          title="Why Choose Racks on Rent?"
          subtitle="Designed specifically for fitness environments to empower gym owners and accelerate health product startups."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 mb-16">
          {WHY_CHOOSE_US_REASONS.map((reason) => (
            <div
              key={reason.id}
              className="bg-[#F7F8FA] rounded-2xl p-5 border border-[#E5E7EB] hover:border-[#062A5E] hover:bg-white transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between group"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  {iconMap[reason.iconName]}
                </div>
                <h3 className="font-bold text-sm text-[#031B3D] group-hover:text-[#FF6500] transition-colors mb-1.5">
                  {reason.title}
                </h3>
                <p className="text-xs text-[#5C6470] leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Banner */}
        <div className="relative rounded-3xl bg-gradient-to-r from-[#031B3D] via-[#062A5E] to-[#031B3D] text-white p-8 sm:p-12 shadow-2xl border border-slate-800 text-center overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF6500]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF6500]/20 text-[#FFC928] border border-[#FF6500]/30 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-[#FFC928]" />
              Trust Guarantee
            </div>

            <h3 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
              {TRUST_BANNER.headline}
            </h3>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              {TRUST_BANNER.subtext}
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                href={CONTACT_INFO.whatsappLink}
                variant="whatsapp"
                size="lg"
                className="gap-2 shadow-xl shadow-green-900/30"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                {TRUST_BANNER.ctaText}
              </Button>

              <Button
                href="/contact"
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10"
              >
                Submit Enquiry Form
              </Button>
            </div>
          </div>
        </div>

      </Container>
    </section>
  );
}

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
    Target: <Target className="w-5 h-5 text-[#386FA4]" />,
    ShieldCheck: <ShieldCheck className="w-5 h-5 text-[#133C55]" />,
    BadgePercent: <BadgePercent className="w-5 h-5 text-[#59A5D8]" />,
    Users: <Users className="w-5 h-5 text-[#386FA4]" />,
    HeartHandshake: <HeartHandshake className="w-5 h-5 text-[#133C55]" />,
    MessageSquare: <MessageSquare className="w-5 h-5 text-[#59A5D8]" />,
    Maximize: <Maximize className="w-5 h-5 text-[#386FA4]" />,
    MapPin: <MapPin className="w-5 h-5 text-[#133C55]" />,
    PieChart: <PieChart className="w-5 h-5 text-[#59A5D8]" />,
    Rocket: <Rocket className="w-5 h-5 text-[#386FA4]" />,
  };

  return (
    <section className="py-16 sm:py-24 bg-white border-y border-[#D8E3EC]" id="why-choose-us">
      <Container>
        <SectionHeading
          badge="Platform Advantages"
          badgeVariant="brand"
          title="Why Choose Racks on Rent?"
          subtitle="Designed specifically for fitness environments to empower gym owners and accelerate health product startups."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 mb-16">
          {WHY_CHOOSE_US_REASONS.map((reason) => (
            <div
              key={reason.id}
              className="rounded-2xl border border-[#59A5D8]/25 bg-[#F7FAFC] p-5 hover:border-[#386FA4]/40 hover:bg-white transition-all duration-300 shadow-xs hover:shadow-md flex flex-col justify-between group"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#84D2F6]/20 border border-[#84D2F6]/40 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  {iconMap[reason.iconName]}
                </div>
                <h3 className="font-bold text-sm text-[#102A3A] group-hover:text-[#386FA4] transition-colors mb-1.5">
                  {reason.title}
                </h3>
                <p className="text-xs text-[#5F7483] leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Banner */}
        <div className="relative rounded-3xl bg-[#133C55] text-white p-8 sm:p-12 shadow-2xl border border-[#59A5D8]/30 text-center overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#84D2F6]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#84D2F6]/20 text-[#84D2F6] border border-[#84D2F6]/30 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-[#84D2F6]" />
              Trust Guarantee
            </div>

            <h3 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
              {TRUST_BANNER.headline}
            </h3>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
              {TRUST_BANNER.subtext}
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                href={CONTACT_INFO.whatsappLink}
                variant="primary"
                size="lg"
                className="gap-2 bg-[#386FA4] hover:bg-[#59A5D8] text-white"
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

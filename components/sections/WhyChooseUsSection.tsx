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
    Target: <Target className="w-5 h-5 text-[#59A5D8]" />,
    ShieldCheck: <ShieldCheck className="w-5 h-5 text-[#59A5D8]" />,
    BadgePercent: <BadgePercent className="w-5 h-5 text-[#59A5D8]" />,
    Users: <Users className="w-5 h-5 text-[#59A5D8]" />,
    HeartHandshake: <HeartHandshake className="w-5 h-5 text-[#59A5D8]" />,
    MessageSquare: <MessageSquare className="w-5 h-5 text-[#59A5D8]" />,
    Maximize: <Maximize className="w-5 h-5 text-[#59A5D8]" />,
    MapPin: <MapPin className="w-5 h-5 text-[#59A5D8]" />,
    PieChart: <PieChart className="w-5 h-5 text-[#59A5D8]" />,
    Rocket: <Rocket className="w-5 h-5 text-[#59A5D8]" />,
  };

  return (
    <section className="py-16 sm:py-24 bg-white border-y border-[#D7EEFA]" id="why-choose-us">
      <Container>
        <SectionHeading
          badge="Platform Advantages"
          title="Why Choose Racks on Rent?"
          subtitle="Designed specifically for fitness environments to empower gym owners and accelerate health product startups."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 mb-16">
          {WHY_CHOOSE_US_REASONS.map((reason) => (
            <div
              key={reason.id}
              className="rounded-3xl border border-[#D7EEFA] bg-white p-5 shadow-[0_12px_35px_rgba(89,165,216,0.08)] hover:shadow-[0_20px_50px_rgba(89,165,216,0.16)] hover:border-[#84D2F6] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EAF7FF] text-[#59A5D8] mb-3 group-hover:bg-[#386FA4] group-hover:text-white transition-colors">
                  {iconMap[reason.iconName]}
                </div>
                <h3 className="font-bold text-sm text-[#133C55] group-hover:text-[#386FA4] transition-colors mb-1.5">
                  {reason.title}
                </h3>
                <p className="text-xs text-[#607D8B] leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Banner */}
        <div className="relative rounded-3xl bg-[#EAF7FF] text-[#133C55] p-8 sm:p-12 shadow-md border border-[#D7EEFA] text-center overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white text-[#386FA4] border border-[#D7EEFA] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-[#59A5D8]" />
              Trust Guarantee
            </div>

            <h3 className="text-3xl sm:text-4xl font-black tracking-tight text-[#133C55]">
              {TRUST_BANNER.headline}
            </h3>

            <p className="text-base sm:text-lg text-[#607D8B] leading-relaxed font-normal">
              {TRUST_BANNER.subtext}
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                href={CONTACT_INFO.whatsappLink}
                variant="primary"
                size="lg"
                className="gap-2 rounded-full bg-[#59A5D8] hover:bg-[#386FA4] text-white"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                {TRUST_BANNER.ctaText}
              </Button>

              <Button
                href="/contact"
                variant="secondary"
                size="lg"
                className="rounded-full border-[#84D2F6] bg-white text-[#133C55] hover:bg-[#F8FCFF]"
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

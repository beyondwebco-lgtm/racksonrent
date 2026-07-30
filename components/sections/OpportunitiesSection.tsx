import React from "react";
import { MapPin, Maximize2, Tag, Layers, MessageCircle, AlertCircle } from "lucide-react";
import Container from "../layout/Container";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import Badge from "../ui/Badge";
import { SAMPLE_OPPORTUNITIES } from "@/data/opportunities";
import { CONTACT_INFO } from "@/data/navigation";

export default function OpportunitiesSection() {
  return (
    <section className="py-16 sm:py-24 bg-[#031B3D] text-white" id="opportunities">
      <Container>
        <SectionHeading
          badge="Sample Showcase"
          badgeVariant="yellow"
          title="Example Gym Space Opportunities"
          subtitle="Explore mock examples of gym spaces that can be configured through the Racks on Rent model."
          darkBackground
        />

        {/* Static Content Disclaimer Notice */}
        <div className="max-w-3xl mx-auto mb-10 bg-blue-950/60 border border-blue-800/80 p-4 sm:p-5 rounded-2xl flex items-start gap-3.5 text-slate-300 text-sm leading-relaxed shadow-inner">
          <AlertCircle className="w-5 h-5 text-[#FFC928] flex-shrink-0 mt-0.5" />
          <p>
            <strong className="text-white">Demonstration Notice:</strong> These examples demonstrate the kinds of gym-space opportunities that can be created through Racks on Rent. Contact our team to discuss current live opportunities in your city.
          </p>
        </div>

        {/* Opportunity Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SAMPLE_OPPORTUNITIES.map((item) => {
            const whatsappText = `Hello Racks on Rent, I would like to ask about the opportunity: "${item.title}" in ${item.location}.`;
            const waLink = `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(whatsappText)}`;

            return (
              <div
                key={item.id}
                className="bg-[#062A5E] rounded-3xl p-6 border border-slate-700/80 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <Badge variant="yellow" className="text-xs">
                      {item.badgeText}
                    </Badge>
                    <span className="text-xs font-semibold text-slate-400 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#FF6500]" />
                      {item.location.split("(")[0]}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-[#FFC928] transition-colors mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {item.description}
                  </p>

                  <div className="space-y-2.5 text-xs text-slate-300 bg-slate-900/60 p-4 rounded-xl border border-slate-800 mb-6">
                    <div className="flex items-start gap-2">
                      <Layers className="w-4 h-4 text-[#FF6500] flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-white">Space Type: </span>
                        <span>{item.spaceType}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <Maximize2 className="w-4 h-4 text-[#FFC928] flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-white">Approx Size: </span>
                        <span>{item.approxSize}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <Tag className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-white">Suitable For: </span>
                        <span>{item.suitableFor}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <Button
                  href={waLink}
                  variant="whatsapp"
                  size="md"
                  className="w-full justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  Ask About This Opportunity
                </Button>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

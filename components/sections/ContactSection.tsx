"use client";

import React, { Suspense } from "react";
import { Phone, Mail, Globe, MessageCircle } from "lucide-react";
import Container from "../layout/Container";
import SectionHeading from "../ui/SectionHeading";
import ContactFormContainer from "../forms/ContactFormContainer";
import { CONTACT_INFO } from "@/data/navigation";

export default function ContactSection() {
  return (
    <section className="py-16 sm:py-24 bg-[#F7F8FA] border-t border-[#E5E7EB]" id="contact">
      <Container>
        <SectionHeading
          badge="Direct Connection"
          badgeVariant="orange"
          title="Let’s Build a Win-Win Business Opportunity"
          subtitle="Whether you own a gym or run a nutrition, fitness, or wellness business, share your details with our team and we will contact you."
        />

        {/* Direct Contact Action Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
          <a
            href={CONTACT_INFO.telLink}
            className="bg-white p-5 rounded-2xl border border-[#E5E7EB] shadow-sm hover:shadow-md hover:border-[#FF6500] transition-all flex items-center gap-4 group"
          >
            <div className="w-10 h-10 rounded-xl bg-[#FF6500]/10 text-[#FF6500] flex items-center justify-center group-hover:bg-[#FF6500] group-hover:text-white transition-colors">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Call Directly</span>
              <span className="text-sm font-bold text-[#031B3D]">{CONTACT_INFO.phoneDisplay}</span>
            </div>
          </a>

          <a
            href={CONTACT_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-5 rounded-2xl border border-[#E5E7EB] shadow-sm hover:shadow-md hover:border-[#25D366] transition-all flex items-center gap-4 group"
          >
            <div className="w-10 h-10 rounded-xl bg-green-100 text-[#25D366] flex items-center justify-center group-hover:bg-[#25D366] group-hover:text-white transition-colors">
              <MessageCircle className="w-5 h-5 fill-current" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Chat on WhatsApp</span>
              <span className="text-sm font-bold text-[#031B3D]">{CONTACT_INFO.phoneDisplay}</span>
            </div>
          </a>

          <a
            href={CONTACT_INFO.mailtoLink}
            className="bg-white p-5 rounded-2xl border border-[#E5E7EB] shadow-sm hover:shadow-md hover:border-[#062A5E] transition-all flex items-center gap-4 group"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#062A5E] flex items-center justify-center group-hover:bg-[#062A5E] group-hover:text-white transition-colors">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Email Us</span>
              <span className="text-xs sm:text-sm font-bold text-[#031B3D] truncate">{CONTACT_INFO.email}</span>
            </div>
          </a>

          <a
            href={CONTACT_INFO.websiteUrl}
            className="bg-white p-5 rounded-2xl border border-[#E5E7EB] shadow-sm hover:shadow-md hover:border-[#157A3D] transition-all flex items-center gap-4 group"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#157A3D] flex items-center justify-center group-hover:bg-[#157A3D] group-hover:text-white transition-colors">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Official Website</span>
              <span className="text-xs sm:text-sm font-bold text-[#031B3D]">{CONTACT_INFO.websiteDisplay}</span>
            </div>
          </a>
        </div>

        {/* Tabbed Form Container wrapped in Suspense for useSearchParams */}
        <Suspense fallback={<div className="text-center py-8 text-slate-400">Loading form...</div>}>
          <ContactFormContainer />
        </Suspense>
      </Container>
    </section>
  );
}

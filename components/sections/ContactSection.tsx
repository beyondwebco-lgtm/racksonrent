"use client";

import React, { Suspense } from "react";
import { Phone, Mail, Globe, MessageCircle } from "lucide-react";
import Container from "../layout/Container";
import SectionHeading from "../ui/SectionHeading";
import ContactFormContainer from "../forms/ContactFormContainer";
import { CONTACT_INFO } from "@/data/navigation";

export default function ContactSection() {
  return (
    <section className="py-16 sm:py-24 bg-[#F7FAFC] border-t border-[#D8E3EC]" id="contact">
      <Container>
        <SectionHeading
          badge="Direct Connection"
          badgeVariant="brand"
          title="Let’s Build a Win-Win Business Opportunity"
          subtitle="Whether you own a gym or run a nutrition, fitness, or wellness business, share your details with our team and we will contact you."
        />

        {/* Direct Contact Action Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
          <a
            href={CONTACT_INFO.telLink}
            className="rounded-2xl border border-[#59A5D8]/25 bg-white p-5 shadow-xs hover:shadow-md hover:border-[#386FA4] transition-all flex items-center gap-4 group"
          >
            <div className="w-10 h-10 rounded-xl bg-[#84D2F6]/20 text-[#386FA4] flex items-center justify-center group-hover:bg-[#386FA4] group-hover:text-white transition-colors">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-[#5F7483] uppercase tracking-wider block">Call Directly</span>
              <span className="text-sm font-bold text-[#102A3A]">{CONTACT_INFO.phoneDisplay}</span>
            </div>
          </a>

          <a
            href={CONTACT_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border border-[#59A5D8]/25 bg-white p-5 shadow-xs hover:shadow-md hover:border-[#386FA4] transition-all flex items-center gap-4 group"
          >
            <div className="w-10 h-10 rounded-xl bg-[#84D2F6]/20 text-[#386FA4] flex items-center justify-center group-hover:bg-[#386FA4] group-hover:text-white transition-colors">
              <MessageCircle className="w-5 h-5 fill-current text-[#386FA4] group-hover:text-white" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-[#5F7483] uppercase tracking-wider block">Chat on WhatsApp</span>
              <span className="text-sm font-bold text-[#102A3A]">{CONTACT_INFO.phoneDisplay}</span>
            </div>
          </a>

          <a
            href={CONTACT_INFO.mailtoLink}
            className="rounded-2xl border border-[#59A5D8]/25 bg-white p-5 shadow-xs hover:shadow-md hover:border-[#386FA4] transition-all flex items-center gap-4 group"
          >
            <div className="w-10 h-10 rounded-xl bg-[#84D2F6]/20 text-[#133C55] flex items-center justify-center group-hover:bg-[#133C55] group-hover:text-white transition-colors">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-[#5F7483] uppercase tracking-wider block">Email Us</span>
              <span className="text-xs sm:text-sm font-bold text-[#102A3A] truncate">{CONTACT_INFO.email}</span>
            </div>
          </a>

          <a
            href={CONTACT_INFO.websiteUrl}
            className="rounded-2xl border border-[#59A5D8]/25 bg-white p-5 shadow-xs hover:shadow-md hover:border-[#386FA4] transition-all flex items-center gap-4 group"
          >
            <div className="w-10 h-10 rounded-xl bg-[#84D2F6]/20 text-[#386FA4] flex items-center justify-center group-hover:bg-[#386FA4] group-hover:text-white transition-colors">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-[#5F7483] uppercase tracking-wider block">Official Website</span>
              <span className="text-xs sm:text-sm font-bold text-[#102A3A]">{CONTACT_INFO.websiteDisplay}</span>
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

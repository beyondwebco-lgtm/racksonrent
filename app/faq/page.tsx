import React from "react";
import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import FAQSection from "@/components/sections/FAQSection";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { MessageCircle } from "lucide-react";
import { CONTACT_INFO } from "@/data/navigation";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Racks on Rent",
  description: "Find clear answers about gym space subletting, brand requirements, enquiry processes, and Racks on Rent policies.",
};

export default function FAQPage() {
  return (
    <div className="py-12 sm:py-20 space-y-16 bg-white">
      {/* Header */}
      <section>
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <Badge>Knowledge Base</Badge>
            <h1 className="text-3xl sm:text-5xl font-black text-[#133C55] tracking-tight">
              Frequently Asked <span className="text-[#59A5D8]">Questions.</span>
            </h1>
            <p className="text-base sm:text-lg text-[#607D8B] leading-relaxed">
              Clear answers to your questions about listing gym space, displaying health products, enquiry processes, and business terms.
            </p>
          </div>
        </Container>
      </section>

      <FAQSection showTitle={false} />

      {/* Still have questions banner */}
      <section className="bg-white py-12">
        <Container>
          <div className="rounded-3xl p-8 sm:p-12 border border-[#D7EEFA] bg-[#EAF7FF] text-center space-y-6 max-w-4xl mx-auto shadow-md">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#133C55]">
              Still Have Questions?
            </h2>
            <p className="text-base text-[#607D8B] max-w-xl mx-auto">
              Our business support team is available on WhatsApp and phone to answer all your custom queries.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Button href={CONTACT_INFO.whatsappLink} variant="primary" size="lg" className="gap-2 rounded-full bg-[#59A5D8] hover:bg-[#386FA4] text-white">
                <MessageCircle className="w-5 h-5 fill-current" />
                Ask on WhatsApp
              </Button>
              <Button href="/contact" variant="secondary" size="lg" className="rounded-full border-[#84D2F6] bg-white text-[#133C55] hover:bg-[#F8FCFF]">
                Submit Contact Form
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

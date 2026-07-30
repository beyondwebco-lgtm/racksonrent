import React from "react";
import Container from "../layout/Container";
import SectionHeading from "../ui/SectionHeading";
import Accordion from "../ui/Accordion";
import { FAQ_ITEMS } from "@/data/faqs";

interface FAQSectionProps {
  limit?: number;
  showTitle?: boolean;
}

export default function FAQSection({ limit, showTitle = true }: FAQSectionProps) {
  const displayItems = limit ? FAQ_ITEMS.slice(0, limit) : FAQ_ITEMS;

  return (
    <section className="py-16 sm:py-24 bg-white border-y border-[#D8E3EC]" id="faq">
      <Container>
        {showTitle && (
          <SectionHeading
            badge="Got Questions?"
            badgeVariant="brand"
            title="Frequently Asked Questions"
            subtitle="Find answers to common questions about listing gym spaces, displaying wellness products, and inquiring with Racks on Rent."
          />
        )}

        <Accordion items={displayItems} />
      </Container>
    </section>
  );
}

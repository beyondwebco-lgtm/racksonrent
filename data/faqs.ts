export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "general" | "gym-owners" | "wellness-businesses";
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "faq-1",
    question: "What is Racks on Rent?",
    answer: "Racks on Rent connects gym owners who have unused display space with nutrition, fitness, and wellness providers who want to display, sample, or sell their products directly inside gyms.",
    category: "general"
  },
  {
    id: "faq-2",
    question: "Who can list gym space?",
    answer: "Gym owners, gym managers, fitness studio operators, CrossFit centers, sports complexes, and similar fitness facilities with available space can contact our team to get listed.",
    category: "gym-owners"
  },
  {
    id: "faq-3",
    question: "What kinds of spaces can be offered?",
    answer: "Product display racks, wall shelves, reception counter spaces, nutrition kiosks, refrigerator zones, sampling counters, consultation desks, display tables, and small promotional floor areas.",
    category: "gym-owners"
  },
  {
    id: "faq-4",
    question: "Who can use the available space?",
    answer: "Nutritionists, supplement brands, healthy-food providers, energy-drink companies, fitness-accessory sellers, organic food brands, diet meal-plan providers, and wellness startups.",
    category: "wellness-businesses"
  },
  {
    id: "faq-5",
    question: "Is this an online booking platform?",
    answer: "No. This website is an informational and lead-generation platform. All space opportunities and terms are discussed directly with the Racks on Rent team to ensure quality and compatibility.",
    category: "general"
  },
  {
    id: "faq-6",
    question: "Does the website collect online payments?",
    answer: "No. The static website does not process payments or store payment information. All arrangements are handled directly offline with transparent terms.",
    category: "general"
  },
  {
    id: "faq-7",
    question: "How can I enquire?",
    answer: "You can easily submit an enquiry form on our website, click to chat directly with us on WhatsApp at 7995424477, send an email to racksonrent@gmail.com, or call us directly.",
    category: "general"
  },
  {
    id: "faq-8",
    question: "Are businesses automatically approved?",
    answer: "No. Interested wellness brands and gym spaces are reviewed by the Racks on Rent team to ensure brand quality, member safety, and genuine alignment between both parties.",
    category: "wellness-businesses"
  },
  {
    id: "faq-9",
    question: "Can a nutritionist offer consultations inside the gym?",
    answer: "Yes! Subject to the gym owner's agreement, certified nutritionists can set up consultation desks to offer diet charts, body composition guidance, and wellness plans.",
    category: "wellness-businesses"
  },
  {
    id: "faq-10",
    question: "Can I list more than one gym location?",
    answer: "Yes. Gym owners or fitness chain managers managing multiple locations can submit details for all their branches through our enquiry form or direct WhatsApp communication.",
    category: "gym-owners"
  }
];

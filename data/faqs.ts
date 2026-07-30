export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const FIVE_FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question: "What is Racks on Rent?",
    answer: "Racks on Rent connects gym owners with nutrition, fitness, and wellness businesses that need display space inside gyms."
  },
  {
    id: "faq-2",
    question: "Who can offer space?",
    answer: "Gym owners, fitness studios, and training centres with available racks, shelves, counters, or small display areas."
  },
  {
    id: "faq-3",
    question: "Who can use the space?",
    answer: "Nutritionists, supplement brands, healthy-food providers, wellness businesses, and fitness-product sellers."
  },
  {
    id: "faq-4",
    question: "Is this an online marketplace?",
    answer: "No. The website is currently an informational and enquiry platform."
  },
  {
    id: "faq-5",
    question: "How do I get started?",
    answer: "Select your role, complete the short enquiry form, and continue the conversation on WhatsApp."
  }
];

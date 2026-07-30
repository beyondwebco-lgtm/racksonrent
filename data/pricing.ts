export interface PricingTier {
  id: string;
  title: string;
  targetRole: string;
  priceDisplay: string;
  period: string;
  description: string;
  features: string[];
  ctaLabel: string;
  roleType: "gym-owner" | "wellness";
  highlighted?: boolean;
}

export const PRICING_TIERS: PricingTier[] = [
  {
    id: "gym-listing",
    title: "Gym Space Listing",
    targetRole: "For Gym Owners",
    priceDisplay: "Free",
    period: "Forever",
    description: "List your unused gym rack, counter, or shelf space and start earning monthly income.",
    features: [
      "Zero listing fees",
      "Direct enquiry matching",
      "Set your own rent terms",
      "100% control over displayed brands"
    ],
    ctaLabel: "List Your Rack",
    roleType: "gym-owner",
    highlighted: true
  },
  {
    id: "brand-placement",
    title: "Brand Placement",
    targetRole: "For Wellness Brands",
    priceDisplay: "Enquiry-Based",
    period: "Flexible Terms",
    description: "Display your products inside top gyms without high retail storefront overheads.",
    features: [
      "Targeted fitness audience",
      "Flexible rack sizes & space types",
      "Direct connection with gym owners",
      "Pan-India city matching"
    ],
    ctaLabel: "Find Gym Space",
    roleType: "wellness",
    highlighted: false
  }
];

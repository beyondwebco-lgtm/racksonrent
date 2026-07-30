export const WHY_CHOOSE_US = [
  {
    id: "verified-spaces",
    title: "Verified Spaces",
    description: "All spaces are reviewed for quality and suitability before matching.",
    iconName: "ShieldCheck"
  },
  {
    id: "secure-process",
    title: "Secure Process",
    description: "A simple and transparent enquiry and connection process.",
    iconName: "Lock"
  },
  {
    id: "dedicated-support",
    title: "Dedicated Support",
    description: "Our team helps both businesses discuss the opportunity.",
    iconName: "Headphones"
  },
  {
    id: "grow-your-business",
    title: "Grow Your Business",
    description: "Gym owners earn from space while wellness brands reach new customers.",
    iconName: "TrendingUp"
  }
];

export const ROLE_CARDS = [
  {
    id: "gym-owner",
    role: "gym-owner" as const,
    heading: "I Own a Gym",
    text: "You have unused space inside your gym such as product racks, wall shelves, reception counters, or nutrition corners.",
    benefits: [
      "Offer an unused rack, shelf, counter, or corner.",
      "Use existing space efficiently.",
      "Add value for members.",
      "Earn additional monthly income."
    ],
    ctaLabel: "List My Space",
  },
  {
    id: "wellness",
    role: "wellness" as const,
    heading: "I Own a Wellness Business",
    text: "You sell health products, nutrition, supplements, healthy snacks, or fitness accessories and want to reach active customers directly inside gyms.",
    benefits: [
      "Place products or services inside gyms.",
      "Reach the right target audience.",
      "Reduce retail-space costs.",
      "Build strong local visibility."
    ],
    ctaLabel: "Find Gym Space",
  },
];

export const BENEFITS_COMPARISON = {
  gymOwners: {
    title: "Gym Owners",
    points: [
      "Earn from unused space",
      "Improve the gym experience",
      "Offer useful products to members",
      "Build local business partnerships",
    ],
  },
  wellnessBusinesses: {
    title: "Wellness Businesses",
    points: [
      "Access fitness-focused customers",
      "Start with lower investment",
      "Promote products directly",
      "Expand into new locations",
    ],
  },
};

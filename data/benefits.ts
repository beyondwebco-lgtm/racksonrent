export interface RoleCardData {
  id: string;
  role: "gym-owner" | "wellness";
  heading: string;
  text: string;
  benefits: string[];
  ctaLabel: string;
}

export const ROLE_CARDS: RoleCardData[] = [
  {
    id: "gym-owner",
    role: "gym-owner",
    heading: "I Own a Gym",
    text: "Offer an unused rack, shelf, counter, or corner and create an additional source of income.",
    benefits: [
      "Use existing space",
      "Add value for members",
      "Earn additional income"
    ],
    ctaLabel: "List My Space"
  },
  {
    id: "wellness",
    role: "wellness",
    heading: "I Own a Wellness Business",
    text: "Place your products or services inside gyms and reach health-conscious customers directly.",
    benefits: [
      "Reach the right audience",
      "Reduce retail-space costs",
      "Build local visibility"
    ],
    ctaLabel: "Find Gym Space"
  }
];

export const BENEFITS_COMPARISON = {
  gymOwners: {
    title: "Gym Owners",
    points: [
      "Earn from unused space",
      "Improve the gym experience",
      "Offer useful products to members",
      "Build local business partnerships"
    ]
  },
  wellnessBusinesses: {
    title: "Wellness Businesses",
    points: [
      "Access fitness-focused customers",
      "Start with lower investment",
      "Promote products directly",
      "Expand into new locations"
    ]
  }
};

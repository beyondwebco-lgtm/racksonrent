export interface BenefitItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export const VALUE_STRIP_BENEFITS: BenefitItem[] = [
  {
    id: "extra-space-extra-earnings",
    title: "Extra Space, Extra Earnings",
    description: "Turn unused gym space into a reliable additional monthly income source without extra operational hassle.",
    iconName: "TrendingUp"
  },
  {
    id: "showcase-your-brand",
    title: "Showcase Your Brand",
    description: "Display wellness products directly in front of fitness-focused, health-conscious customers every day.",
    iconName: "Eye"
  },
  {
    id: "low-investment-high-potential",
    title: "Low Investment, High Potential",
    description: "Start inside established gyms without the heavy capital expenditure of opening a separate retail store.",
    iconName: "DollarSign"
  },
  {
    id: "trusted-business-connection",
    title: "Trusted Business Connection",
    description: "Build long-term, mutually beneficial partnerships between gym owners and quality health brands.",
    iconName: "Handshake"
  }
];

export const PLATFORM_CARDS = {
  gymOwners: {
    badge: "For Gym Owners",
    title: "Earn More From the Space You Already Have",
    description: "Offer an unused rack, shelf, counter, corner, or nutrition zone to a suitable wellness business and create a new monthly revenue stream.",
    benefits: [
      "Earn additional rental income from unutilized floor or wall space",
      "No major additional capital investment required",
      "Improve overall service offerings for your gym members",
      "Increase member satisfaction with access to premium health products",
      "Introduce useful health, protein, and nutrition choices on-site",
      "Create long-term business partnerships with reputable brands",
      "Enhance the gym's modern visual brand experience"
    ],
    ctaText: "I Own a Gym",
    ctaLink: "/contact?type=gym-owner"
  },
  wellnessBusinesses: {
    badge: "For Wellness Businesses",
    title: "Take Your Products Directly to the Right Audience",
    description: "Display and promote your nutrition, fitness, or wellness products inside gyms where your ideal customers already spend time daily.",
    benefits: [
      "Low-cost business expansion into high-converting physical spaces",
      "Direct access to a ready, fitness-focused active customer base",
      "High local brand visibility without traditional billboard expenses",
      "Valuable opportunity for direct product sampling and tasting",
      "More high-intent customer enquiries and repeat subscription sales",
      "Significantly reduced retail space rental and setup expenses",
      "Faster entry into multiple gym locations across target cities"
    ],
    ctaText: "I Run a Wellness Business",
    ctaLink: "/contact?type=wellness"
  }
};

export const PROFIT_COMPARISON = {
  gymOwner: {
    title: "Gym Owner — Space Provider",
    subtitle: "Turn Unused Corners Into Monthly Earnings",
    points: [
      "Earn consistent rental income from empty display areas",
      "No separate retail business setup or staff management",
      "Delivers greater value and convenience to gym members",
      "Elevates the overall workout and gym floor experience",
      "Strengthens gym member retention rates",
      "Projects a sleek, professional, modern fitness center image",
      "Opens doors for long-term corporate brand partnerships"
    ],
    resultBadge: "More Member Value. More Business. Additional Income."
  },
  wellnessBrand: {
    title: "Wellness Entrepreneur — Startup or Brand",
    subtitle: "Direct Access to Health-Conscious Buyers",
    points: [
      "Significantly lower upfront capital investment and financial risk",
      "Affordable display space targeted at active fitness enthusiasts",
      "Ready customer audience actively seeking nutrition solutions",
      "Guaranteed daily product exposure inside premier gyms",
      "Easier, organic brand building through direct trust",
      "Higher rate of repeat orders and ongoing meal-plan subscriptions",
      "Faster local expansion across multiple neighborhood gyms"
    ],
    resultBadge: "More Visibility. More Sales. More Growth."
  }
};

export interface ShowcaseCategory {
  id: string;
  eyebrow: string;
  title: string;
  shortName: string;
  description: string;
  suitableFor: string[];
  benefits: string[];
  primaryCta: string;
  secondaryCta: string;
  image: string;
  iconName: string;
  rolePrimary: "gym-owner" | "wellness";
  spaceTypePrimary: string;
  roleSecondary: "gym-owner" | "wellness";
  categorySecondary: string;
}

export const SHOWCASE_CATEGORIES: ShowcaseCategory[] = [
  {
    id: "nutrition",
    eyebrow: "Category 01",
    title: "Nutrition & Supplement Centre",
    shortName: "Nutrition",
    description:
      "Create a dedicated nutrition corner inside a gym for protein powders, supplements, vitamins, energy products, health drinks, and recovery products.",
    suitableFor: [
      "Protein powders",
      "BCAAs",
      "Creatine",
      "Vitamins",
      "Energy drinks",
      "Protein snacks",
      "Wellness products",
    ],
    benefits: [
      "Premium gym location",
      "Targeted health-conscious audience",
      "High product visibility",
      "Additional income opportunity",
      "Direct access to fitness customers",
    ],
    primaryCta: "List Nutrition Space",
    secondaryCta: "Find Space for Nutrition Products",
    image: "/spaces/nutrition-centre.png",
    iconName: "Stethoscope",
    rolePrimary: "gym-owner",
    spaceTypePrimary: "Nutrition Centre",
    roleSecondary: "wellness",
    categorySecondary: "Nutrition & Supplements",
  },
  {
    id: "apparel",
    eyebrow: "Category 02",
    title: "Gym Apparel & Accessories Rack",
    shortName: "Apparel",
    description:
      "Showcase gym clothing, fitness accessories, workout essentials, and branded merchandise inside high-footfall gyms.",
    suitableFor: [
      "Gym T-shirts",
      "Activewear",
      "Knee caps",
      "Weightlifting belts",
      "Wrist bands",
      "Gym bags",
      "Yoga mats",
      "Towels",
      "Water bottles",
      "Fitness accessories",
    ],
    benefits: [
      "Daily visibility among gym members",
      "Direct access to active customers",
      "Lower retail-space cost",
      "Strong local brand discovery",
      "Flexible display formats",
    ],
    primaryCta: "List Apparel Space",
    secondaryCta: "Find Space for Fitness Products",
    image: "/spaces/gym-apparel-accessories.png",
    iconName: "ShoppingBag",
    rolePrimary: "gym-owner",
    spaceTypePrimary: "Apparel & Accessories Rack",
    roleSecondary: "wellness",
    categorySecondary: "Gym Apparel & Accessories",
  },
  {
    id: "physiotherapy",
    eyebrow: "Category 03",
    title: "Physiotherapy & Recovery Centre",
    shortName: "Physiotherapy",
    description:
      "Create a compact physiotherapy, mobility, rehabilitation, or sports-recovery space inside a gym.",
    suitableFor: [
      "Physiotherapy consultations",
      "Sports injury rehabilitation",
      "Post-workout recovery",
      "Manual therapy",
      "Mobility sessions",
      "Pain-relief services",
      "Posture correction",
      "Strength & recovery support",
    ],
    benefits: [
      "Reach active fitness customers",
      "Offer services where customers already train",
      "Build trust through gym partnerships",
      "Generate recurring consultations",
      "Increase visibility for recovery professionals",
    ],
    primaryCta: "List Recovery Space",
    secondaryCta: "Find Gym Space for Physiotherapy",
    image: "/spaces/physiotherapy-recovery.png",
    iconName: "Sparkles",
    rolePrimary: "gym-owner",
    spaceTypePrimary: "Physiotherapy Corner",
    roleSecondary: "wellness",
    categorySecondary: "Physiotherapy & Recovery",
  },
  {
    id: "food",
    eyebrow: "Category 04",
    title: "Healthy Food & Beverage Corner",
    shortName: "Healthy Food",
    description:
      "Offer fresh food, protein shakes, fruit bowls, salads, sprouts, juices, and healthy snacks inside gyms.",
    suitableFor: [
      "Fruit bowls",
      "Sprouts bowls",
      "Healthy salads",
      "Protein shakes",
      "Fresh juices",
      "Smoothies",
      "Energy drinks",
      "Healthy meals",
      "Post-workout snacks",
    ],
    benefits: [
      "Access health-conscious customers",
      "Sell at the point of fitness activity",
      "Encourage repeat purchases",
      "Offer convenient post-workout nutrition",
      "Build a local healthy-food brand",
    ],
    primaryCta: "List Food Corner Space",
    secondaryCta: "Find Space for Healthy Food",
    image: "/spaces/healthy-food-corner.png",
    iconName: "Apple",
    rolePrimary: "gym-owner",
    spaceTypePrimary: "Juice / Shake Counter",
    roleSecondary: "wellness",
    categorySecondary: "Healthy Food & Beverages",
  },
  {
    id: "wellness",
    eyebrow: "Category 05",
    title: "Personal Care & Wellness Display",
    shortName: "Wellness",
    description:
      "Place wellness, grooming, recovery, and personal-care products in a compact display area inside gyms.",
    suitableFor: [
      "Muscle recovery products",
      "Pain-relief sprays",
      "Massage products",
      "Organic soaps",
      "Skincare",
      "Grooming products",
      "Wellness kits",
      "Hygiene products",
    ],
    benefits: [
      "Targeted wellness buyers",
      "High impulse purchases",
      "Compact display footprint",
      "Direct member engagement",
      "Enhanced brand credibility",
    ],
    primaryCta: "List Wellness Display Space",
    secondaryCta: "Find Space for Wellness Products",
    image: "/spaces/personal-care.png",
    iconName: "HeartHandshake",
    rolePrimary: "gym-owner",
    spaceTypePrimary: "Wellness Display Shelf",
    roleSecondary: "wellness",
    categorySecondary: "Personal Care & Wellness",
  },
  {
    id: "technology",
    eyebrow: "Category 06",
    title: "Fitness Technology & Accessories",
    shortName: "Fitness Technology",
    description:
      "Showcase smart fitness devices, wearables, training accessories, and connected health products inside gyms.",
    suitableFor: [
      "Fitness bands",
      "Smartwatches",
      "Heart-rate monitors",
      "Smart scales",
      "Earbuds",
      "Fitness trackers",
      "Resistance bands",
      "Training accessories",
    ],
    benefits: [
      "Demo tech to active athletes",
      "Premium member demographic",
      "Direct sales & pre-orders",
      "Interactive showcase format",
      "Low storefront overhead",
    ],
    primaryCta: "List Technology Display Space",
    secondaryCta: "Find Space for Fitness Technology",
    image: "/spaces/fitness-tech.png",
    iconName: "Zap",
    rolePrimary: "gym-owner",
    spaceTypePrimary: "Kiosk / Counter Space",
    roleSecondary: "wellness",
    categorySecondary: "Fitness Technology & Wearables",
  },
];

export const SHOWCASE_TRUST_ITEMS = [
  { label: "Verified Gym Spaces", desc: "Curated & safety checked", iconName: "ShieldCheck" },
  { label: "Targeted Fitness Audience", desc: "Active health enthusiasts", iconName: "Users" },
  { label: "Flexible Setup Options", desc: "Racks, counters & kiosks", iconName: "Layers" },
  { label: "Dedicated Support", desc: "Pan-India assistance team", iconName: "Headphones" },
  { label: "Pan India Opportunities", desc: "Expanding gym networks", iconName: "MapPin" },
];

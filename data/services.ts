export interface ServiceSupported {
  id: string;
  title: string;
  description: string;
  iconName: string;
  category: "nutrition" | "beverage" | "consultation" | "display";
}

export const SERVICES_SUPPORTED: ServiceSupported[] = [
  {
    id: "protein-shakes",
    title: "Protein Shakes",
    description: "Post-workout whey, plant protein, and recovery smoothies served fresh or ready-to-drink.",
    iconName: "Milk",
    category: "beverage"
  },
  {
    id: "energy-drinks",
    title: "Energy Drinks",
    description: "Pre-workout boosters, electrolyte solutions, and sugar-free hydration formulations.",
    iconName: "Zap",
    category: "beverage"
  },
  {
    id: "fruit-bowls",
    title: "Fruit Bowls",
    description: "Chilled fresh seasonal fruit arrangements packaged cleanly for immediate post-workout nourishment.",
    iconName: "Apple",
    category: "nutrition"
  },
  {
    id: "sprouts-salads",
    title: "Sprouts & Salads",
    description: "Organic sprouted lentils, high-protein quinoa bowls, and macro-balanced fresh greens.",
    iconName: "Leaf",
    category: "nutrition"
  },
  {
    id: "diet-guidance",
    title: "Diet Guidance",
    description: "Expert macronutrient mapping, fat-loss plans, and muscle-building nutrition advice.",
    iconName: "BookOpen",
    category: "consultation"
  },
  {
    id: "meal-plans",
    title: "Diet Meal Plans",
    description: "Subscription-based daily meal delivery programs tailored specifically for active gym members.",
    iconName: "Utensils",
    category: "nutrition"
  },
  {
    id: "health-supplements",
    title: "Health Supplements",
    description: "Multivitamins, omega-3 fish oils, joint health formulas, and immunity wellness products.",
    iconName: "HeartPulse",
    category: "display"
  },
  {
    id: "healthy-snacks",
    title: "Healthy Snacks",
    description: "High-protein bars, roasted seed mixes, muesli, and low-calorie gourmet fitness treats.",
    iconName: "Cookie",
    category: "nutrition"
  },
  {
    id: "sports-nutrition",
    title: "Sports Nutrition",
    description: "Endurance gels, intra-workout BCAAs, creatine monohydrate, and specialized performance aids.",
    iconName: "Trophy",
    category: "display"
  },
  {
    id: "product-sampling",
    title: "Product Sampling",
    description: "Live tasting counters allowing gym members to sample flavors before committing to purchases.",
    iconName: "Gift",
    category: "display"
  },
  {
    id: "nutrition-consultations",
    title: "Nutrition Consultations",
    description: "One-on-one body composition assessments and personalized wellness coaching sessions.",
    iconName: "UserCheck",
    category: "consultation"
  },
  {
    id: "fitness-accessories",
    title: "Fitness Accessories",
    description: "Branded shaker bottles, lifting straps, resistance loops, gym towels, and wrist supports.",
    iconName: "ShoppingBag",
    category: "display"
  },
  {
    id: "wellness-product-displays",
    title: "Wellness-Product Displays",
    description: "Sleek, eye-level rack and shelf setups showcasing premium health-tech and personal care items.",
    iconName: "Layers",
    category: "display"
  },
  {
    id: "brand-promotions",
    title: "Brand Promotions",
    description: "Targeted banners, standees, digital screen features, and weekend promotional booths inside gyms.",
    iconName: "Megaphone",
    category: "display"
  }
];

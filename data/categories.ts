export interface BusinessCategory {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge?: string;
}

export const BUSINESS_CATEGORIES: BusinessCategory[] = [
  {
    id: "nutritionists",
    title: "Nutritionists",
    description: "Certified dietary experts offering diet charts and personalized consultations inside fitness hubs.",
    iconName: "Stethoscope",
    badge: "Consultation"
  },
  {
    id: "protein-supplements",
    title: "Protein Supplement Brands",
    description: "Whey, plant protein, BCAA, and recovery powders displayed right near workout zones.",
    iconName: "Dumbbell",
    badge: "Popular"
  },
  {
    id: "energy-drinks",
    title: "Energy & Pre-Workout Brands",
    description: "Electrolyte drinks, pre-workout formulas, and natural energy boosters for athletes.",
    iconName: "Zap",
  },
  {
    id: "healthy-snacks",
    title: "Healthy Snack Businesses",
    description: "Protein bars, muesli, seed mixes, dry fruits, and guilt-free high-protein snacks.",
    iconName: "Cookie",
  },
  {
    id: "fruit-bowls",
    title: "Fruit Bowl Providers",
    description: "Freshly cut seasonal fruit bowls and superfood mixes prepared for post-workout nutrition.",
    iconName: "Apple",
  },
  {
    id: "sprouts-salads",
    title: "Sprouts & Salad Sellers",
    description: "Organic sprouts, high-protein fresh salads, and clean eating boxes.",
    iconName: "Leaf",
  },
  {
    id: "diet-meal-plans",
    title: "Diet Meal-Plan Services",
    description: "Weekly & monthly curated keto, high-protein, or lean meal plan subscriptions.",
    iconName: "Utensils",
    badge: "Subscription"
  },
  {
    id: "sports-nutrition",
    title: "Sports Nutrition Companies",
    description: "Endurance gels, intra-workout formulas, and specialized sports performance supplements.",
    iconName: "Trophy",
  },
  {
    id: "fitness-accessories",
    title: "Fitness Accessory Brands",
    description: "Lifting belts, wrist wraps, resistance bands, gym towels, and shaker bottles.",
    iconName: "ShoppingBag",
  },
  {
    id: "organic-food",
    title: "Organic Food Brands",
    description: "Chemical-free cold-pressed oils, organic honey, oats, and superfood powders.",
    iconName: "Sprout",
  },
  {
    id: "wellness-startups",
    title: "Wellness Startups",
    description: "Innovative health-tech apps, recovery gadgets, and modern wellness products.",
    iconName: "Sparkles",
    badge: "Innovative"
  },
  {
    id: "health-product-sellers",
    title: "Health Product Sellers",
    description: "Daily vitamins, omega-3 capsules, immunity boosters, and Ayurvedic supplements.",
    iconName: "HeartPulse",
  },
  {
    id: "nutrition-consultation",
    title: "Nutrition Consultation Providers",
    description: "Body composition analysis, fat loss counselling, and custom fitness diet coaching.",
    iconName: "UserCheck",
  },
  {
    id: "hydration-products",
    title: "Hydration Product Brands",
    description: "Isotonic water, zero-sugar hydration mixes, and mineral-infused wellness drinks.",
    iconName: "Droplets",
  },
];

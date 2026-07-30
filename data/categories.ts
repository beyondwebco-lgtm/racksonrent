export interface CategoryItem {
  id: string;
  name: string;
  description: string;
  iconName: string;
  badge?: string;
}

export const POPULAR_CATEGORIES: CategoryItem[] = [
  {
    id: "nutrition-supplements",
    name: "Nutrition & Supplements",
    description: "Whey protein, BCAAs, multivitamins, and creatine powders.",
    iconName: "Stethoscope",
    badge: "Popular"
  },
  {
    id: "health-beverages",
    name: "Health Drinks & Beverages",
    description: "Cold-pressed juices, electrolyte drinks, and kombucha.",
    iconName: "Zap",
    badge: "Trending"
  },
  {
    id: "healthy-snacks",
    name: "Healthy Snacks & Foods",
    description: "Protein bars, muesli, dry fruits, and healthy cookies.",
    iconName: "Cookie"
  },
  {
    id: "gym-apparel",
    name: "Gym Apparel",
    description: "Performance tees, gym hoodies, shorts, and activewear.",
    iconName: "ShoppingBag"
  },
  {
    id: "fitness-bands",
    name: "Fitness Bands & Accessories",
    description: "Resistance bands, lifting straps, and wrist wraps.",
    iconName: "Dumbbell"
  },
  {
    id: "fitness-accessories",
    name: "Fitness Accessories",
    description: "Shaker bottles, gym bags, towels, and water jugs.",
    iconName: "Trophy"
  },
  {
    id: "fruit-salads",
    name: "Fruit Bowls & Healthy Salads",
    description: "Fresh fruit bowls, sprout salads, and post-workout bowls.",
    iconName: "Apple"
  },
  {
    id: "protein-corners",
    name: "Protein Shake Corners",
    description: "Freshly blended protein shake and smoothie setups.",
    iconName: "Utensils",
    badge: "High Demand"
  },
  {
    id: "personal-care",
    name: "Personal Care & Wellness",
    description: "Pain relief sprays, muscle rubs, and organic soaps.",
    iconName: "Sparkles"
  },
  {
    id: "more-categories",
    name: "More Categories",
    description: "Explore all health, wellness, and fitness product types.",
    iconName: "Layers"
  }
];

export interface CategoryItem {
  id: string;
  name: string;
  description: string;
  iconName: string;
  image: string;
  alt: string;
  badge?: string;
}

export const POPULAR_CATEGORIES: CategoryItem[] = [
  {
    id: "fruit-salads",
    name: "Fruit Bowls & Healthy Salads",
    description: "Fresh fruit bowls, sprout salads, and post-workout bowls.",
    iconName: "Apple",
    image: "/spaces/01_Fruit_Bowls_Healthy_Salads.png",
    alt: "Fruit Bowls & Healthy Salads display",
  },
  {
    id: "gym-apparel",
    name: "Gym Apparel",
    description: "Performance tees, gym hoodies, shorts, and activewear.",
    iconName: "ShoppingBag",
    image: "/spaces/02_Gym_Apparel.png",
    alt: "Gym Apparel display",
    badge: "Trending",
  },
  {
    id: "fitness-accessories",
    name: "Fitness Accessories",
    description: "Shaker bottles, gym bags, towels, and workout gear.",
    iconName: "Trophy",
    image: "/spaces/03_Gym_Accessories_Supplements.png",
    alt: "Fitness Accessories display",
    badge: "Top Seller",
  },
  {
    id: "health-beverages",
    name: "Health Drinks & Beverages",
    description: "Cold-pressed juices, electrolyte drinks, and kombucha.",
    iconName: "Zap",
    image: "/spaces/04_Healthy_Drinks.png",
    alt: "Health Drinks & Beverages display",
    badge: "Fresh",
  },
  {
    id: "protein-corners",
    name: "Protein Shake Corners",
    description: "Freshly blended protein shake and smoothie setups.",
    iconName: "Utensils",
    image: "/spaces/05_Protein_Shake_Corner.png",
    alt: "Protein Shake Corners display",
    badge: "High Demand",
  },
  {
    id: "personal-care",
    name: "Personal Care & Wellness",
    description: "Pain relief sprays, muscle rubs, and organic soaps.",
    iconName: "Sparkles",
    image: "/spaces/06_Personal_Care_Wellness.png",
    alt: "Personal Care & Wellness display",
  },
  {
    id: "fitness-tech",
    name: "Fitness Technology & Wearables",
    description: "Smartwatches, heart-rate monitors, and fitness trackers.",
    iconName: "Dumbbell",
    image: "/spaces/07_Fitness_Technology_Wearables.png",
    alt: "Fitness Technology & Wearables display",
  },
  {
    id: "healthy-snacks",
    name: "Healthy Snacks & Foods",
    description: "Protein bars, muesli, dry fruits, and healthy cookies.",
    iconName: "Cookie",
    image: "/spaces/08_Healthy_Snacks_Foods.png",
    alt: "Healthy Snacks & Foods display",
    badge: "Popular",
  },
];

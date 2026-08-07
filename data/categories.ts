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
    id: "healthy-snacks",
    name: "Healthy Snacks & Foods",
    description: "Protein bars, muesli, dry fruits, and healthy cookies.",
    iconName: "Cookie",
    image: "/spaces/healthy-snacks.png",
    alt: "Healthy Snacks & Foods display",
    badge: "Popular",
  },
  {
    id: "gym-apparel",
    name: "Gym Apparel",
    description: "Performance tees, gym hoodies, shorts, and activewear.",
    iconName: "ShoppingBag",
    image: "/spaces/gym-apparel.png",
    alt: "Gym Apparel display",
    badge: "Trending",
  },
  {
    id: "fitness-accessories",
    name: "Fitness Accessories",
    description: "Shaker bottles, gym bags, towels, and workout gear.",
    iconName: "Trophy",
    image: "/spaces/fitness-accessories.png",
    alt: "Fitness Accessories display",
    badge: "Top Seller",
  },

  {
    id: "health-beverages",
    name: "Health Drinks & Beverages",
    description: "Cold-pressed juices, electrolyte drinks, and kombucha.",
    iconName: "Zap",
    image: "/spaces/health-beverages.png",
    alt: "Health Drinks & Beverages display",
    badge: "Fresh",
  },
  {
    id: "fitness-tech",
    name: "Fitness Technology & Wearables",
    description: "Smartwatches, heart-rate monitors, and fitness trackers.",
    iconName: "Dumbbell",
    image: "/spaces/fitness-tech.png",
    alt: "Fitness Technology & Wearables display",
  },
  {
    id: "fruit-salads",
    name: "Fruit Bowls & Healthy Salads",
    description: "Fresh fruit bowls, sprout salads, and post-workout bowls.",
    iconName: "Apple",
    image: "/spaces/fruit-salads.png",
    alt: "Fruit Bowls & Healthy Salads display",
  },
  {
    id: "protein-corners",
    name: "Protein Shake Corners",
    description: "Freshly blended protein shake and smoothie setups.",
    iconName: "Utensils",
    image: "/spaces/protein-corners.png",
    alt: "Protein Shake Corners display",
    badge: "High Demand",
  },
  {
    id: "personal-care",
    name: "Personal Care & Wellness",
    description: "Pain relief sprays, muscle rubs, and organic soaps.",
    iconName: "Sparkles",
    image: "/spaces/personal-care.png",
    alt: "Personal Care & Wellness display",
  },
  {
    id: "physiotherapy",
    name: "Physiotherapy & Recovery",
    description: "Rehabilitation, injury recovery, and mobility spaces.",
    iconName: "Layers",
    image: "/spaces/physiotherapy-recovery.png",
    alt: "Physiotherapy & Recovery display",
  },
];

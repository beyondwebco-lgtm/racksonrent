export interface CategoryItem {
  id: string;
  name: string;
  description: string;
  iconName: string;
  image: string;
  alt: string;
}

export const POPULAR_CATEGORIES: CategoryItem[] = [
  {
    id: "healthy-snacks",
    name: "Healthy Snacks",
    description: "Protein bars, organic muesli, dry fruits, and healthy snacks.",
    iconName: "Cookie",
    image: "/categories/healthy-snacks.svg",
    alt: "Healthy fruit bowl for healthy snacks"
  },
  {
    id: "gym-apparel",
    name: "Gym Apparel",
    description: "Performance tees, gym hoodies, shorts, and activewear.",
    iconName: "ShoppingBag",
    image: "/categories/gym-apparel.svg",
    alt: "Folded gym apparel set"
  },
  {
    id: "fitness-accessories",
    name: "Fitness Accessories",
    description: "Dumbbells, resistance bands, lifting straps, and accessories.",
    iconName: "Trophy",
    image: "/categories/fitness-accessories.svg",
    alt: "Dumbbells and resistance band fitness accessories"
  },
  {
    id: "supplements",
    name: "Supplements",
    description: "Multivitamins, BCAAs, creatine, and daily wellness supplements.",
    iconName: "Stethoscope",
    image: "/categories/supplements.svg",
    alt: "Unbranded supplement container"
  },
  {
    id: "protein-products",
    name: "Protein Products",
    description: "Whey protein powders, shaker bottles, and protein shakes.",
    iconName: "Utensils",
    image: "/categories/protein-products.svg",
    alt: "Protein jar and shaker bottle"
  },
  {
    id: "sportswear",
    name: "Sportswear",
    description: "Athletic jerseys, track suits, and high-performance sportswear.",
    iconName: "Dumbbell",
    image: "/categories/sportswear.svg",
    alt: "Folded sportswear outfit"
  },
  {
    id: "yoga-essentials",
    name: "Yoga Essentials",
    description: "Textured yoga mats, foam blocks, and yoga accessories.",
    iconName: "Layers",
    image: "/categories/yoga-essentials.svg",
    alt: "Yoga mat and yoga block"
  },
  {
    id: "wellness-products",
    name: "Wellness Products",
    description: "Water bottles, massage tools, and personal care recovery kits.",
    iconName: "Sparkles",
    image: "/categories/wellness-products.svg",
    alt: "Wellness accessory kit"
  }
];

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
    image: "/categories/healthy-snacks.jpg",
    alt: "Healthy fruit bowl for healthy snacks"
  },
  {
    id: "gym-apparel",
    name: "Gym Apparel",
    description: "Performance tees, gym hoodies, shorts, and activewear.",
    iconName: "ShoppingBag",
    image: "/categories/gym-apparel.jpg",
    alt: "Folded gym apparel set"
  },
  {
    id: "fitness-accessories",
    name: "Fitness Accessories",
    description: "Dumbbells, resistance bands, lifting straps, and accessories.",
    iconName: "Trophy",
    image: "/categories/fitness-accessories.jpg",
    alt: "Dumbbells and resistance band fitness accessories"
  },
  {
    id: "supplements",
    name: "Supplements",
    description: "Multivitamins, BCAAs, creatine, and daily wellness supplements.",
    iconName: "Stethoscope",
    image: "/categories/supplements.jpg",
    alt: "Unbranded supplement container"
  },
  {
    id: "protein-products",
    name: "Protein Products",
    description: "Whey protein powders, shaker bottles, and protein shakes.",
    iconName: "Utensils",
    image: "/categories/protein-products.jpg",
    alt: "Protein jar and shaker bottle"
  },
  {
    id: "sportswear",
    name: "Sportswear",
    description: "Athletic jerseys, track suits, and high-performance sportswear.",
    iconName: "Dumbbell",
    image: "/categories/sportswear.jpg",
    alt: "Folded sportswear outfit"
  },
  {
    id: "yoga-essentials",
    name: "Yoga Essentials",
    description: "Textured yoga mats, foam blocks, and yoga accessories.",
    iconName: "Layers",
    image: "/categories/yoga-essentials.jpg",
    alt: "Yoga mat and yoga block"
  },
  {
    id: "wellness-products",
    name: "Wellness Products",
    description: "Water bottles, massage tools, and personal care recovery kits.",
    iconName: "Sparkles",
    image: "/categories/wellness-products.jpg",
    alt: "Wellness accessory kit"
  }
];

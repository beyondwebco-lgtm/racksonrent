export interface SpaceType {
  id: string;
  title: string;
  description: string;
  iconName: string;
  idealFor: string;
}

export const SPACE_TYPES: SpaceType[] = [
  {
    id: "product-racks",
    title: "Product Racks",
    description: "Dedicated vertical display racks positioned near entry points, cardio zones, or main gym floors.",
    iconName: "Layers",
    idealFor: "Supplements, protein powders & shaker bottles"
  },
  {
    id: "wall-shelves",
    title: "Wall Shelves",
    description: "Eye-level wall-mounted shelves utilizing unused vertical space along high-footfall corridors.",
    iconName: "Grid",
    idealFor: "Energy bars, vitamins & packaged healthy snacks"
  },
  {
    id: "reception-counters",
    title: "Reception Counters",
    description: "Compact impulse-purchase counter displays positioned directly at gym check-in desks.",
    iconName: "Store",
    idealFor: "Single-serve protein bars, sachets & fitness accessories"
  },
  {
    id: "nutrition-kiosks",
    title: "Nutrition Kiosks",
    description: "Small staffed or semi-staffed mini kiosks for instant preparation and sales.",
    iconName: "Coffee",
    idealFor: "Fresh fruit bowls, protein shakes & salad boxes"
  },
  {
    id: "refrigerator-space",
    title: "Refrigerator Space",
    description: "Chilled display refrigeration units placed near workout zones for instant cold hydration.",
    iconName: "Snowflake",
    idealFor: "Cold energy drinks, pre-workouts & chilled juices"
  },
  {
    id: "sampling-counters",
    title: "Sampling Counters",
    description: "Interactive tasting stations where gym members can sample products before buying.",
    iconName: "Gift",
    idealFor: "New supplement launches & drink tastings"
  },
  {
    id: "display-tables",
    title: "Display Tables",
    description: "Freestanding promotional tables placed near waiting areas or lounge sections.",
    iconName: "Maximize2",
    idealFor: "Brand merchandise, brochures & featured product setups"
  },
  {
    id: "consultation-desks",
    title: "Consultation Desks",
    description: "Quiet, professional desk setups for face-to-face member assessments.",
    iconName: "FileText",
    idealFor: "Nutritionists, diet planners & fitness coaches"
  },
  {
    id: "small-floor-areas",
    title: "Small Floor Areas",
    description: "Flexible 4x4 ft to 6x6 ft floor space suitable for custom standees or pop-up racks.",
    iconName: "Box",
    idealFor: "Brand pop-ups & modular display units"
  },
  {
    id: "promotional-booths",
    title: "Event & Promotional Booths",
    description: "Temporary high-impact event setups for weekend brand activation campaigns.",
    iconName: "Megaphone",
    idealFor: "Weekend brand challenges & product samplings"
  },
];

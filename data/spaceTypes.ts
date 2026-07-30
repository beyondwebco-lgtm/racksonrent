export interface SpaceTypeItem {
  id: string;
  name: string;
  description: string;
  iconName: string;
}

export const COMPACT_SPACE_TYPES: SpaceTypeItem[] = [
  {
    id: "product-rack",
    name: "Product Rack",
    description: "Dedicated floor rack for protein powders, supplements, and merchandise.",
    iconName: "Layers",
  },
  {
    id: "wall-shelf",
    name: "Wall Shelf",
    description: "Wall-mounted shelves for displays, shaker bottles, and accessories.",
    iconName: "Grid",
  },
  {
    id: "reception-counter",
    name: "Reception Counter",
    description: "Countertop placement at check-in for high member visibility.",
    iconName: "Store",
  },
  {
    id: "nutrition-corner",
    name: "Nutrition Corner",
    description: "Dedicated corner space for fresh juices, cold shakes, and healthy snacks.",
    iconName: "Coffee",
  },
  {
    id: "sampling-table",
    name: "Sampling Table",
    description: "Promotional table space for direct product sampling and brand trials.",
    iconName: "Gift",
  },
  {
    id: "small-kiosk",
    name: "Small Kiosk",
    description: "Compact branded kiosk setup for consultations and product sales.",
    iconName: "Box",
  },
];

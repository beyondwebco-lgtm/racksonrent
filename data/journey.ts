export interface JourneyStep {
  stepNumber: number;
  title: string;
  shortDescription: string;
  detailedDescription: string;
  iconName: string;
  visualTag: string;
}

export const JOURNEY_STEPS: JourneyStep[] = [
  {
    stepNumber: 1,
    title: "Customer Enters the Gym",
    shortDescription: "The customer visits the gym for their regular workout.",
    detailedDescription: "Active gym members walk into the fitness center daily, motivated to achieve their health, strength, and fitness goals.",
    iconName: "UserCheck",
    visualTag: "Daily Active Footfall"
  },
  {
    stepNumber: 2,
    title: "Gym Owner Provides Space",
    shortDescription: "The gym owner offers available rack, shelf, counter, or nutrition-zone space.",
    detailedDescription: "Unused corners, reception counters, or wall spaces are designated for sleek product displays and branding.",
    iconName: "Maximize2",
    visualTag: "Smart Space Sublet"
  },
  {
    stepNumber: 3,
    title: "Wellness Brand Sets Up",
    shortDescription: "A verified nutrition or wellness provider displays products and brand material.",
    detailedDescription: "High-quality supplements, healthy snacks, protein shakes, or diet brochures are neatly showcased.",
    iconName: "Store",
    visualTag: "Verified Brand Setup"
  },
  {
    stepNumber: 4,
    title: "Customer Discovers Products",
    shortDescription: "Gym members notice relevant nutrition, health, and fitness products inside the gym.",
    detailedDescription: "Members browse products in a contextually relevant environment right before or after their workouts.",
    iconName: "Eye",
    visualTag: "Targeted Exposure"
  },
  {
    stepNumber: 5,
    title: "Personalised Guidance",
    shortDescription: "The wellness provider can explain products, offer samples, or suggest suitable plans.",
    detailedDescription: "Direct customer interaction occurs through sampling, diet consultations, or clear product information.",
    iconName: "MessageCircle",
    visualTag: "Direct Engagement"
  },
  {
    stepNumber: 6,
    title: "Customer Purchases or Subscribes",
    shortDescription: "The customer purchases products, joins a plan, or continues with a monthly service.",
    detailedDescription: "Satisfied gym members buy protein bars, subscribe to healthy meal plans, or order monthly supplements.",
    iconName: "ShoppingBag",
    visualTag: "Instant & Repeat Sales"
  },
  {
    stepNumber: 7,
    title: "Both Businesses Grow",
    shortDescription: "The gym owner earns from space while the wellness business gains customers and sales.",
    detailedDescription: "A sustainable win-win ecosystem: gym owners unlock passive space revenue, and wellness brands scale rapidly.",
    iconName: "TrendingUp",
    visualTag: "Shared Success"
  }
];
